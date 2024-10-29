import Image from "next/image";
import Hero from "@/components/Hero"
import RecentProjects from "@/components/RecentProjects"
import Grid from "@/components/Grid"
import {FloatingNav} from "@/components/ui/FloatingNav"
import {navItems} from "@/data";
import { FaHome } from "react-icons/fa";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center
    items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects/>
        <Experience/>
        <Footer></Footer>
      </div>
    </main>
  );
}
