# JS Only Runner

## Overview

JS Only Runner is a lightweight local VS Code extension for running the active JavaScript file with Node.js. It adds a ▶ button to the editor title bar for local JavaScript files and displays the output in VS Code's integrated terminal.

## Features

- Shows a ▶ button for local JavaScript files.
- Saves the active file before running it when it has unsaved changes.
- Runs the file with Node.js from the file's directory.
- Displays output in a dedicated VS Code task terminal.
- Provides the **Run JavaScript File** command.

## Requirements

- Visual Studio Code 1.100.0 or later.
- Node.js available through the `node` command.
- A JavaScript file saved on the local filesystem.

## Installation

Package the extension as a VSIX from the project directory:

```sh
npx @vscode/vsce package
```

Install the generated package:

```sh
code --install-extension js-only-runner-0.0.1.vsix
```

You can also run **Extensions: Install from VSIX...** from the VS Code Command Palette and select the generated file.

## Usage

1. Open a local JavaScript file in VS Code.
2. Click the ▶ button in the editor title bar, or run **Run JavaScript File** from the Command Palette.
3. View the output in the integrated terminal.

If the file has unsaved changes, the extension saves it before execution. If saving fails, execution is cancelled.

## Development

Clone the repository and open it in VS Code:

```sh
git clone https://github.com/bakadja/js-only-runner.git
cd js-only-runner
code .
```

Press **F5** and select **Run JS Only Runner** if prompted. In the Extension Development Host window, open a folder containing a JavaScript file and use the ▶ button.

Check the extension's JavaScript syntax with:

```sh
node --check extension.js
```

## Project Structure

- `extension.js` — command registration, file saving, and Node.js execution.
- `package.json` — extension metadata, command, and editor button configuration.
- `.vscode/launch.json` — Extension Development Host launch configuration.

## Current Status

The extension is available for local installation through a generated VSIX package. It is not published on the VS Code Marketplace.
