import { useEffect, useState } from "react";
import Split from "react-split";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

import useLocalStorage from "./hooks/useLocalStorage.js";

import { Editor, Navbar } from "./components/import.js";

function App() {
  const [htmlCode, setHtmlCode] = useLocalStorage("html", "");
  const [javascriptCode, setJavascriptCode] = useLocalStorage("js", "");
  const [cssCode, setCssCode] = useLocalStorage("css", "");
  const [layout, setLayout] = useLocalStorage("layout", "0");
  const [srcDoc, setSrcDoc] = useState("");
  const [fileName, setFileName] = useLocalStorage("filename", "Untitled");
  const [autoSave, setAutoSave] = useState(false);
  const [save, setSave] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (autoSave === true || save === true) {
        setSrcDoc(`
        <html>
        <body>
          ${htmlCode}
          <style> ${cssCode} </style>
          <script> ${javascriptCode} </script>
        </body>
        </html>
      `);
        setSave(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [htmlCode, cssCode, javascriptCode, autoSave, save]);

  return (
    <div className="h-screen bg-[#333] p-2.5 pt-0">
      <Navbar
        setLayout={setLayout}
        layout={layout}
        srcDoc={srcDoc}
        fileName={fileName}
        setFileName={setFileName}
        autoSave={autoSave}
        setAutoSave={setAutoSave}
        setSave={setSave}
      />

      <div className="hidden md:block">
        {layout === "0" && (
          <Split
            direction="vertical"
            sizes={[40, 60]}
            style={{ height: "calc(100vh - 70px)" }}
          >
            <Split className="flex">
              <Editor
                code={htmlCode}
                setCode={setHtmlCode}
                displayName="HTML"
                type={html}
              />

              <Editor
                code={cssCode}
                setCode={setCssCode}
                displayName="CSS"
                type={css}
              />

              <Editor
                code={javascriptCode}
                setCode={setJavascriptCode}
                displayName="Javascript"
                type={() => javascript({ jsx: true })}
              />
            </Split>
            <iframe
              className="bg-white h-full"
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </Split>
        )}

        {layout === "1" && (
          <Split
            direction="vertical"
            sizes={[60, 40]}
            style={{ height: "calc(100vh - 70px)" }}
          >
            <iframe
              className="bg-white h-full"
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />

            <Split className="flex">
              <Editor
                code={htmlCode}
                setCode={setHtmlCode}
                displayName="HTML"
                type={html}
              />

              <Editor
                code={cssCode}
                setCode={setCssCode}
                displayName="CSS"
                type={css}
              />

              <Editor
                code={javascriptCode}
                setCode={setJavascriptCode}
                displayName="Javascript"
                type={() => javascript({ jsx: true })}
              />
            </Split>
          </Split>
        )}

        {layout === "2" && (
          <Split
            className="flex"
            sizes={[70, 30]}
            style={{ height: "calc(100vh - 75px)" }}
          >
            {" "}
            <iframe
              className="bg-white h-full"
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
            <Split
              direction="vertical"
              sizes={[33, 33, 33]}
              style={{ height: "calc(100vh - 70px)" }}
            >
              <Editor
                code={htmlCode}
                setCode={setHtmlCode}
                displayName="HTML"
                type={html}
              />

              <Editor
                code={cssCode}
                setCode={setCssCode}
                displayName="CSS"
                type={css}
              />

              <Editor
                code={javascriptCode}
                setCode={setJavascriptCode}
                displayName="Javascript"
                type={() => javascript({ jsx: true })}
              />
            </Split>
          </Split>
        )}
      </div>

      <div className="block md:hidden">
        <Split
          direction="vertical"
          sizes={[16, 16, 16, 50]}
          style={{ height: "calc(100vh - 70px)" }}
        >
          <Editor
            code={htmlCode}
            setCode={setHtmlCode}
            displayName="HTML"
            type={html}
          />

          <Editor
            code={cssCode}
            setCode={setCssCode}
            displayName="CSS"
            type={css}
          />

          <Editor
            code={javascriptCode}
            setCode={setJavascriptCode}
            displayName="Javascript"
            type={() => javascript({ jsx: true })}
          />

          <iframe
            className="bg-white h-full"
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </Split>
      </div>
    </div>
  );
}
export default App;
