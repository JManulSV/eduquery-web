import { ReactNode } from "react";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import Navbar from "../../components/layout/navbar/Navbar";
import { ClassroomCreateModalProvider } from "@/context/ClassroomCreateModalProvider";
import MultistepsForm from "@/components/classroom/create/MultistepsForm";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ClassroomCreateModalProvider>
      <main className="flex h-screen">
        <Sidebar />
        <MultistepsForm />
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="bg-gray-100 flex-1 p-2">{children}</div>
        </div>
      </main>
    </ClassroomCreateModalProvider>
  );
};

export default Layout;
