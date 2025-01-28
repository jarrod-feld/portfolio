
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 w-full">
  

      <div className="max-w-7xl w-screen bg-black">
        <FloatingNav 
        navItems={navItems} />
        <Hero />
        <Skills />
        <RecentProjects />
        {/* <Client /> */}
        
        <Footer />
      

      </div>
    </main>
  );
}