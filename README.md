# JS Only Runner

Une extension VS Code légère pour exécuter le fichier JavaScript actif avec Node.js depuis un bouton ▶ dans la barre de titre de l’éditeur.

## Prérequis

- VS Code 1.100.0 ou une version ultérieure.
- Node.js installé et la commande `node` accessible dans le PATH de l’environnement où VS Code exécute les tâches.
- Un fichier JavaScript enregistré sur disque.

## Utilisation

1. Ouvrez un dossier de travail dans VS Code, puis un fichier JavaScript.
2. Cliquez sur le bouton ▶ en haut à droite de l’éditeur, ou lancez **Run JavaScript File** depuis la palette de commandes.
3. Consultez le résultat dans le terminal de tâche de VS Code.

Le fichier est sauvegardé avant son exécution s’il a été modifié. Si la sauvegarde échoue, l’exécution est annulée. Le runner lance `node` avec le chemin du fichier et utilise le dossier du fichier comme répertoire de travail.

Le bouton apparaît uniquement pour les fichiers JavaScript enregistrés sur disque. L’extension ne compile pas TypeScript ou JSX et ne fournit pas d’environnement navigateur. Elle exécute le code avec les permissions de votre utilisateur : lancez uniquement du code de confiance.

## Tester l’extension depuis les sources

```sh
git clone https://github.com/bakadja/js-only-runner.git
cd js-only-runner
code .
```

Appuyez sur **F5** et sélectionnez **Run JS Only Runner** si nécessaire. Dans la fenêtre de développement d’extension qui s’ouvre, ouvrez un dossier contenant un fichier JavaScript et utilisez le bouton ▶.

Aucune dépendance npm n’est nécessaire pour exécuter le code de cette extension dans VS Code.

## Créer et installer un paquet local

Depuis le dossier du projet, avec Node.js et npm installés :

```sh
npx @vscode/vsce package
code --install-extension js-only-runner-0.0.1.vsix
```

Vous pouvez aussi utiliser **Extensions: Install from VSIX...** dans la palette de commandes de VS Code et sélectionner le paquet généré. Adaptez le nom du fichier si la version change.

Les fichiers `.vsix` sont des artefacts générés et ne sont pas versionnés. La publication du code sur GitHub n’installe pas automatiquement l’extension et ne la publie pas sur le VS Code Marketplace.

## Structure

- `extension.js` : commande, sauvegarde et exécution du fichier avec une tâche VS Code.
- `package.json` : métadonnées de l’extension et bouton de l’éditeur.
- `.vscode/launch.json` : configuration de débogage avec F5.

## Vérification rapide

```sh
node --check extension.js
```

Cette commande vérifie la syntaxe JavaScript. Pour vérifier le fonctionnement dans VS Code, utilisez la fenêtre de développement lancée avec F5.
