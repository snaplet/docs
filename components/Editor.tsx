import MonacoEditor, { type Monaco } from "@monaco-editor/react";
import { themeData as githubDark } from "./github-dark";
import { themeData as githubLight } from "./github-light";
import type { editor } from "monaco-editor";
import { useTheme } from "nextra-theme-docs";
import { useCallback, useEffect, useRef } from "react";

export function Editor() {
  const { resolvedTheme } = useTheme();

  const monacoRef = useRef<Monaco>(null);

  const handleEditorDidMount = useCallback(
    (_: editor.IStandaloneCodeEditor, monaco: Monaco) => {
      monacoRef.current = monaco;
      monacoRef.current.editor.defineTheme("github-dark", githubDark);
      monacoRef.current.editor.defineTheme("github-light", githubLight);
      if (resolvedTheme === "dark") {
        monacoRef.current.editor.setTheme("github-dark");
      } else {
        monacoRef.current.editor.setTheme("github-light");
      }
    },
    [resolvedTheme]
  );

  useEffect(() => {
    if (!monacoRef.current) return;
    if (resolvedTheme === "dark") {
      monacoRef.current.editor.setTheme("github-dark");
    } else {
      monacoRef.current.editor.setTheme("github-light");
    }
  }, [resolvedTheme]);

  return (
    <div className="monaco-editor-block">
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
        height="57px"
        defaultLanguage="typescript"
        defaultValue="type Foo = 'bar'"
        onMount={handleEditorDidMount}
      />
    </div>
  );
}
