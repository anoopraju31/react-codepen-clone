import { useState } from "react";

const Layout = ({ styles }) => (
  <svg viewBox="0 0 20 20" className={styles} width="20" height="20">
    <path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z"></path>
  </svg>
);

const layoutType = [
  "fill-white",
  "rotate-180 fill-white",
  "rotate-90 fill-white",
];

const PopUpButton = ({ layout, children }) => {
  const [show, setShow] = useState(false);

  console.log(layout);

  return (
    <div className="hidden md:flex bg-[#545b61] hover:bg-[#444] text-gray-800 font-bold py-2.5 px-2 rounded justify-center items-center gap-1 relative">
      <div onClick={() => setShow((prev) => !prev)}>
        <Layout styles={layoutType[layout]} />
      </div>
      {show && children}
    </div>
  );
};

export default PopUpButton;
