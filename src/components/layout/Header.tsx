import React from "react";

const Header: React.FC = () => {
  return (
    <header className="relative max-w-[2000px] w-full flex items-center justify-center px-5">
      <img
        src="/logo.png"
        alt="Logo"
        className="absolute left-12 -translate-y-1/2 top-1/2 h-9"
      />
      <img
        src="/lucycare-logo.svg"
        alt="LucyCare Logo"
        className="h-11 w-auto"
      />
    </header>
  );
};

export default Header;
