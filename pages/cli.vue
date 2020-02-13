<template>
  <div class="cli">
    <div class="container" style="padding-top: 48px;">
      <h1>Getting Started</h1>
      <p>
        The <a href="https://github.com/vocality-org/cli">Vocality CLI</a> can
        be used to generate new bots which are build on top of our plugin based
        solution.
      </p>
      <h4>Hosted on:</h4>
      <ul>
        <li>
          <a href="https://www.npmjs.com/package/@vocality-org/cli">npm</a>
        </li>
        <li>
          <a href="https://github.com/vocality-org/cli/packages/102675">gpr</a>
        </li>
      </ul>
      <p style="margin-top: 32px">
        Install the cli via npm: <kbd>npm install -g @vocality-org/cli</kbd>
      </p>
      <p style="margin-top: 32px">
        Generate a new project with: <kbd>vocality-cli bootstrap</kbd>
      </p>
      <h4>Project structure</h4>
      <p>Selecting the plugin template will generate following files</p>
      <textarea readonly class="tree">
        .
        ├── dev.env                       (Environment Variables)
        ├── index.js                      (Start point of the app)
        ├── my-plugin     
        │   ├── commands                  (Your Commands)
        │   │   ├── index.js
        │   │   ├── MyCommand.js
        │   │   └── MyOtherCommand.js     
        │   └── MyPlugin.js               (Your Plugin)
        ├── package.json
        ├── package-lock.json
        └── README.md
      </textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cli {
  background: #252525;
  min-height: 100vh;
}
.tree {
  font-family: monospace;
  width: 100%;
  height: 290px;
  overflow: hidden;
}
</style>
