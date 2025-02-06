import { ReactNode, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(true);
  const theme = useTheme(); // Access the theme

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <div className="w-full">
        {/* Top Navbar (Floating) */}
        <Header open={open} setOpen={setOpen} />
        <div
          className="flex-1 p-6 transition-all relative"
          style={{
            marginTop: "80px", // To avoid hiding under navbar
            transition: "margin 0.3s",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
