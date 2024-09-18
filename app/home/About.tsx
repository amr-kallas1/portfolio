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
        className=" float-right mx-4 my-1 aspect-square  w-[40%] max-w-xs cursor-pointer rounded-lg"
        alt="Islam's Profile Picture"
        width={500}
        priority
        height={500}
      />
      <p>
        My journey in the world of web development began at the beginning of
        2022 when I learned from {" "}
        <Link target="_blank" href="https://www.youtube.com/@ElzeroWebSchool">
           Elzero Web School
        </Link>
        . During this comprehensive program, I delved into front-end areas,
        laying the foundation for my professional career in web development.
        Then, I learned React from the{" "}
        <Link target="_blank" href="https://react.dev/">
          official website.
        </Link>{" "}
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
