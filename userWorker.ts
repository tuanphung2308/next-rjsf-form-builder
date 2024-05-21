/** @format */

import * as monaco from "monaco-editor"
// @ts-ignore
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
// @ts-ignore
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
// import yamlWorker from "./yaml.worker.js?worker"

self.MonacoEnvironment = {
    getWorker(_: any, label: string) {
        if (label === "json") {
            return new jsonWorker()
        }
        // if (label === "yaml") {
        //   return new yamlWorker()
        // }
        return new editorWorker()
    },
}

monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true)