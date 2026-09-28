const vscode = require("vscode");
const path = require("node:path");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const runCurrentFile = vscode.commands.registerCommand(
    "jsOnlyRunner.runCurrentFile",
    async () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        return;
      }

      const document = editor.document;

      if (
        document.languageId !== "javascript" ||
        document.uri.scheme !== "file"
      ) {
        return;
      }

      if (document.isDirty) {
        const saved = await document.save();

        if (!saved) {
          vscode.window.showErrorMessage(
            "JS Only Runner: impossible de sauvegarder le fichier."
          );
          return;
        }
      }

      const filePath = document.uri.fsPath;

      const execution = new vscode.ProcessExecution(
        "node",
        [filePath],
        {
          cwd: path.dirname(filePath)
        }
      );

      const task = new vscode.Task(
        { type: "js-only-runner" },
        vscode.TaskScope.Workspace,
        `Run ${path.basename(filePath)}`,
        "JS Only Runner",
        execution
      );

      task.presentationOptions = {
        reveal: vscode.TaskRevealKind.Always,
        panel: vscode.TaskPanelKind.Dedicated,
        focus: false
      };

      await vscode.tasks.executeTask(task);
    }
  );

  context.subscriptions.push(runCurrentFile);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};