"use client";
import { Link } from "@/components/ui/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
const MotionImage = motion(Image);
export type AboutProps = {};
export const About: FC<AboutProps> = ({}) => {
  return (
    <section className="mx-2 flex-1 py-3 sm:mx-10 sm:text-2xl [&_p]:mb-4">
      <MotionImage
        transition={{ type: "tween" }}
        src="/amr.jpg"
        initial={{ scale: 1, x: 0, y: 0 }}
        whileFocus={{ scale: 1.5, x: -100, y: 50 }}
        whileTap={{ scale: 1.5, x: -100, y: 50 }}
        className=" float-right mx-4 my-1 aspect-square  w-[40%] max-w-xs cursor-pointer rounded-full object-cover object-top"
        alt="Islam's Profile Picture"
        width={500}
        priority
        height={500}
      />
      <p>
        I began my career in frontend development in 2022. Since then, I've
        gained valuable experience working on various projects, honing my skills
        in creating engaging user interfaces and improving overall user
        experiences. My Journey During my time as a frontend developer, I've had
        the opportunity to work on several exciting projects.
      </p>
      <p>
        I'm currently in my fourth year studying Computer Science at Aleppo
        University, where I've learned in depth about how computers work and how
        to build robust software.
      </p>
      <p>
        When I'm not coding, you'll often find me exploring new technologies or
        deepening my knowledge by consuming blog posts.
      </p>
      <p>
        Sometimes, I share new things that I've learned or problems that I've
        faced on{" "}
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/amr-kallas-225a4724a/"
        >
          LinkedIn
        </Link>{" "}
        <em className="not-italic">
          I mainly talk about <strong>React</strong>, and{" "}
          <strong>JavaScript</strong>
        </em>
        , if you're interested, please do connect with me on LinkedIn{" "}
      </p>
    </section>
  );
};
