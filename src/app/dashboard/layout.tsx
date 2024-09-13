import { ReactNode } from "react";
import Sidebar from "./components/sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="bg-gray-200 w-full p-8">
        {children}
      </div>
    </main>
  );
};

export default Layout;
