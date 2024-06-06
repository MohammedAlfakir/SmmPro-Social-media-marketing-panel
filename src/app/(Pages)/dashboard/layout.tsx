import React from "react";
import HeaderAndSideBar from "@/Components/dashboard/HeaderAndSidebar";
import { ThemeProvider } from "next-themes";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`panel`}>
      <ThemeProvider>
        <HeaderAndSideBar />

        { children }
      </ThemeProvider>
    </main>
  );
}

export default layout;
