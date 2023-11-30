import { MouseTracer } from "@/components/MouseTracer";
import { Metadata } from "next";
import { About } from "./home/About";
import { Experiences } from "./home/Experiences";
import { Header } from "./home/Header";
import { Projects } from "./home/Projects";
import { Skills } from "./home/Skills";

export const metadata: Metadata = {
  title: "Islam Naasani",
  description: "Front-end Developer",
  icons: ["/favicon.ico"],
};

export default function Page() {
  return (
    <>
      <div className="px-2 md:px-10 flex flex-col gap-52">
        <Header />
        <About />
        <Experiences />
        <Projects />
        <Skills />
      </div>
      <MouseTracer />
    </>
  );
}
