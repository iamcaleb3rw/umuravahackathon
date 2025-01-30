import MobileSidebar from "@/components/MobileSidebar";
import NavBar from "@/components/NavBar";
import SidebarComponent from "@/components/SidebarComponent";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  return (
    <div className="flex">
      <SidebarComponent />

      <div className="lg:w-[calc(100vw-240px)] h-[100vh] w-full overflow-y-auto inline-block">
        <NavBar />
        <div className="lg:mt-12 mt-16">
          <MobileSidebar />
        </div>

        <div className="h-[120vh] overflow-auto px-6 py-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
