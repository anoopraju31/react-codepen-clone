import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { BiDownload, BiSave } from "react-icons/bi";
import PopUpButton from "./PopUpButton";
import { Layout } from "../util/layoutSvg";
import Toggle from "./Toggle";

const Button = ({ children, handleClick }) => (
  <button
    class="bg-[#545b61] hover:bg-[#444] text-white font-bold py-2 px-4 rounded inline-flex items-center "
    onClick={handleClick}
  >
    {children}
  </button>
);

const Navbar = ({
  srcDoc,
  setLayout,
  layout,
  fileName,
  setFileName,
  autoSave,
  setAutoSave,
  setSave,
}) => {
  const [edit, setEdit] = useState(false);

  const downloadHtmlFile = async () => {
    const blob = new Blob([srcDoc], { type: "html" });
    const fileURL = window.URL.createObjectURL(blob);

    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = `${fileName}.html`;
    alink.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit((prev) => !prev);
  };

  return (
    <div className="h-[60px] px-8 flex justify-between items-center">
      <div className="flex justify-center items-center gap-1 text-white hover:text-sky-700 transition-all">
        {!edit && <h4> {fileName} </h4>}

        {edit && (
          <form onSubmit={handleSubmit}>
            <input
              className="bg-transparent border-b-2 outline-none hover:border-sky-700 transition-all"
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <button type="submit" className="hidden"></button>
          </form>
        )}

        <FiEdit onClick={() => setEdit((prev) => !prev)} />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Toggle
          title="Automatic Save"
          value={autoSave}
          changeValue={setAutoSave}
        />

        <Button handleClick={() => setSave(true)}>
          <BiSave size={20} />
          <span className="ml-1">Save</span>
        </Button>

        <Button handleClick={downloadHtmlFile}>
          <BiDownload size={20} />
          <span className="ml-1">Download</span>
        </Button>

        <PopUpButton layout={layout}>
          <div className="flex  absolute top-[50px] right-0 bg-[#545b61] p-5 z-10 rounded">
            <Layout
              outerStyle={`py-2 cursor-pointer px-5 border-2 border-r-0 border-[#333] ${
                layout === "0" ? "bg-[#333]" : ""
              }`}
              styles="fill-white"
              count="0"
              setLayout={setLayout}
            />
            <Layout
              outerStyle={`py-2 px-5 cursor-pointer border-2 border-r-0 border-[#333] ${
                layout === "1" ? "bg-[#333]" : ""
              }`}
              styles="rotate-180 fill-white"
              count="1"
              setLayout={setLayout}
            />
            <Layout
              outerStyle={`py-2 px-5 cursor-pointer border-2 border-[#333] ${
                layout === "2" ? "bg-[#333]" : ""
              }`}
              styles="rotate-90 fill-white"
              count="2"
              setLayout={setLayout}
            />
          </div>
        </PopUpButton>
        {/* <Button> Theme </Button> */}
      </div>
    </div>
  );
};

export default Navbar;
