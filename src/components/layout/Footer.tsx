import React from "react";

const Footer: React.FC = () => {
  const handleExit = () => {
    window.close();
  };

  return (
    <footer className="relative mt-68 w-full h-20 flex items-center justify-center px-5">
      <button
        onClick={handleExit}
        className="px-6 py-2 w-[542px] h-[104px] text-[50px] font-bold bg-black text-white rounded-[30px] hover:bg-gray-700 transition-colors"
      >
        종료
      </button>
    </footer>
  );
};

export default Footer;
