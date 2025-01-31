import type React from "react";

import NavBar from "@/components/NavBar";
import { DashboardSidebar } from "@/components/Sidebar";
import { Suspense } from "react";
import Loading from "./hackathons/loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-50 border-r hidden md:block">
        <DashboardSidebar />
      </aside>
      <div className="flex flex-col flex-1 overflow-hidden">
        <NavBar />
        <Suspense fallback={<Loading />}>
          <main className="flex-1 overflow-y-auto p-1 md:p-4">{children}</main>
        </Suspense>
      </div>
    </div>
  );
}
