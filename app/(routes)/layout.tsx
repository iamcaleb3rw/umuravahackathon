import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col min-h-screen `}>
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer className="min-h-[60vh]" />
    </div>
  );
}
