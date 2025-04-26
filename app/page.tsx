"use client";

import Head from "next/head"; // Head bileşenini import ediyoruz
import Link from "next/link";
import React, { useState } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="py-3.5 px-0.5 z-10 text-5xl sm:text-6xl md:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
          erenonal
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-4 text-center animate-fade-in">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-zinc-500 hover:text-zinc-400 duration-500"
          >
            {showMore ? "See Less" : "See More About Me"}
          </button>
          <div
            className={`transition-all duration-1000 ${
              showMore
                ? "max-h-screen opacity-100 "
                : "max-h-0 opacity-0 duration-500"
            } overflow-hidden`}
          >
            <h2 className="text-sm text-zinc-500 mx-4 sm:mx-8 md:mx-40 duration-500">
              Experienced software developer with four years in start-up
              environments, specializing in crafting visually appealing and
              user-friendly interfaces. Skilled in fast-paced development,
              creativity, and delivering seamless user experiences. Passionate
              about continuous learning, staying updated with the latest
              technologies, and contributing to project success.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
