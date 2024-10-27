import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
