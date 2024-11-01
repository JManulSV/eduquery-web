import { ReactNode } from "react";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import Navbar from "../../components/layout/navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="bg-gray-100 flex-1 p-2">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
