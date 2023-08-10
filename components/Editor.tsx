import MonacoEditor, { type Monaco } from "@monaco-editor/react";
import { useCallback, type ComponentProps } from "react";
import {
  fakerDefs,
  snapletClientTypes,
  snapletConfig,
  snapletTypes,
} from "./generate-tutorial";
import type { editor } from "monaco-editor";
import { AutoTypings, LocalStorageCache } from "monaco-editor-auto-typings";

export function Editor(props: ComponentProps<typeof MonacoEditor>) {
  return (
    <MonacoEditor
      options={{
        fontSize: 14,
        lineNumbers: "off",
        renderLineHighlight: "none",
        minimap: { enabled: false },
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: true,
        scrollBeyondLastLine: false,
        padding: { top: 18 },
        lineDecorationsWidth: 0,
      }}
      theme="vs-dark"
      defaultLanguage="typescript"
      {...props}
    />
  );
}

export function GenerateTutorialEditor() {
  const handleBeforeMount = useCallback((monaco: Monaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.Latest,
      module: monaco.languages.typescript.ModuleKind.ESNext,
      allowNonTsExtensions: true,
      strict: true,
      alwaysStrict: true,
      noImplicitAny: true,
      allowJs: false,
    });

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSuggestionDiagnostics: true,
    });

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      fakerDefs,
      "inmemory://faker.d.ts"
    );
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      snapletClientTypes,
      "inmemory://.snaplet/snaplet-client.d.ts"
    );
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      snapletTypes,
      "inmemory://.snaplet/snaplet.d.ts"
    );
    monaco.editor.createModel(
      snapletConfig,
      "typescript",
      monaco.Uri.parse("inmemory://snaplet.config.ts")
    );
  }, []);

  const handleMount = useCallback(
    (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => {
      AutoTypings.create(editor, {
        sourceCache: new LocalStorageCache(),
        monaco,
      });
    },
    []
  );

  return (
    <Editor
      height="500px"
      beforeMount={handleBeforeMount}
      onMount={handleMount}
      defaultValue={snapletConfig}
    />
  );
}
