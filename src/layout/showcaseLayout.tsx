import { ShowcaseSidebar } from "@/components/showcaseSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <ShowcaseSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <div className="w-full md:p-8 p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
