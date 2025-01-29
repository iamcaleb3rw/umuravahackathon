import SidebarComponent from "@/components/SidebarComponent";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <SidebarComponent />
      {children}
    </div>
  );
};

export default DashboardLayout;
