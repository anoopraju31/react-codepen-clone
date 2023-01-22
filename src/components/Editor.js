import CodeMirror from "@uiw/react-codemirror";
import { materialDark } from "@uiw/codemirror-themes-all";

const Editor = (props) => {
  const { code, setCode, displayName, type } = props;

  const handleChange = (value) => {
    setCode(value);
  };

  return (
    <div className="flex flex-col bg-[#333]">
      <div className="flex justify-between bg-[#201f23] text-white p-2 pl-4 rounded-t-lg">
        <h2> {displayName} </h2>
      </div>

      <CodeMirror
        className="rounded-b-lg md:h-full overflow-auto"
        value={code}
        height="200px"
        extensions={[type()]}
        basicSetup={{
          lineNumbers: true,
          tabSize: 4,
          highlightSpecialChars: true,
          autocompletion: true,
          highlightActiveLineGutter: true,
          lintKeymap: true,
        }}
        onChange={handleChange}
        theme={materialDark}
      />
    </div>
  );
};

export default Editor;
