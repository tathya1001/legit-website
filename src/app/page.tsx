"use client";

import { useRef } from "react";
import { Geist, Geist_Mono, Instrument_Serif, Xanh_Mono } from "next/font/google";
import Link from "next/link";
import InstallationGuide from "../components/InstallationGuide"; // Adjust path if needed


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const xahnMono = Xanh_Mono({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const commands = [
  {
    name: "legit init",
    description: "Initialize a new legit repository.",
  },
  {
    name: "legit stage <path>",
    description: "Stage a specific file or directory.",
  },
  {
    name: "legit stage .",
    description: "Stage all files recursively.",
  },
  {
    name: "legit unstage <path>",
    description: "Unstage a specific file or directory.",
  },
  {
    name: 'legit checkpoint -m "<message>"',
    description: "Commit staged changes with a message.",
  },
  {
    name: 'legit checkpoint -m "<message>" -t <tag>',
    description: "Commit staged changes and tag the commit. Tag must be unique and single word",
  },
  {
    name: "legit log",
    description: "View commit history.",
  },
  {
    name: "legit status",
    description: "Show the working tree status.",
  },
  {
    name: "legit ignore <path>",
    description: "Add a file or directory to the ignore list.",
  },
  {
    name: "legit branch",
    description: "List all branches, marking the current one.",
  },
  {
    name: "legit branch <name>",
    description: "Create a new branch from the current commit.",
  },
  {
    name: "legit branch -d <name>",
    description: "Delete a branch by name.",
  },
  {
    name: "legit merge <branch>",
    description: "Merge the specified branch into the current branch.",
  },
  {
    name: "legit load <branch>",
    description: "Switch to an existing branch.",
  },
  {
    name: "legit load <commit-hash>",
    description: "Checkout a commit in detached HEAD state.",
  },
  {
    name: "legit load <tag>",
    description: "Checkout a tag in detached HEAD state.",
  },
  {
    name: "legit load -b <branch>",
    description: "Create and switch to a new branch.",
  },
];




export default function Home() {
  const commandsRef = useRef<HTMLDivElement | null>(null);
  const installationRef = useRef<HTMLDivElement | null>(null); // Ref for installation guide

  const scrollToCommands = () => {
    commandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToInstallation = () => {
    installationRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 lg:p-8 gap-2">
      
      <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6">
        <span
          className={`${instrumentSerif.className} text-7xl sm:text-7xl lg:text-9xl text-white`}
        >
          LeGit
        </span>

        <span
          className={`${instrumentSerif.className} text-xl sm:text-2xl lg:text-4xl opacity-70`}
        >
          A Toy Git in C++
        </span>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
          <Link href={"https://github.com/tathya1001/legit/releases/download/v1.0.0/legit.exe"}>
            <button
              className={`${instrumentSerif.className} text-lg sm:text-2xl bg-white text-black px-6 py-3 rounded-md cursor-pointer hover:scale-105 transition-transform w-full sm:w-auto`}
              >
              Download for Windows
            </button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <button
            onClick={scrollToInstallation} // Added this button
            className={`${instrumentSerif.className} text-lg sm:text-2xl text-white hover:italic rounded-md cursor-pointer hover:scale-110 transition-transform`}
          >
            Installation
          </button>

          <span className="hidden sm:block text-2xl">•</span>
          
          <button
            onClick={scrollToCommands}
            className={`${instrumentSerif.className} text-lg sm:text-2xl text-white hover:italic rounded-md cursor-pointer hover:scale-110 transition-transform`}
          >
            Commands
          </button>

          <span className="hidden sm:block text-2xl">•</span>

          <Link href="https://github.com/tathya1001/legit" target="_blank">
            <button
              className={`${instrumentSerif.className} text-lg sm:text-2xl text-white hover:italic rounded-md cursor-pointer hover:scale-110 transition-transform`}
            >
              GitHub
            </button>
          </Link>
        </div>
      </div>

      {/* Installation Guide Section */}
      <div ref={installationRef}>
        <InstallationGuide />
      </div>

      <div
        ref={commandsRef}
        className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 lg:p-20 gap-8 w-full"
      >
        <span
          className={`${instrumentSerif.className} text-3xl sm:text-5xl text-white`}
        >
          Commands
        </span>

        <div className="flex flex-col w-full max-w-3xl mt-8 sm:mt-12 gap-6">
          {commands.map((cmd, idx) => (
            <div key={idx}>
              <div className="p-3 sm:p-4 shadow-lg hover:shadow-2xl transition flex items-start gap-3 rounded-lg">
                <span
                  className={`${instrumentSerif.className} text-lg sm:text-2xl text-gray-500`}
                >
                  {idx + 1}.
                </span>

                <div>
                  <h3
                    className={`${xahnMono.className} text-lg sm:text-2xl font-semibold text-white mb-1 break-words`}
                  >
                    {cmd.name}
                  </h3>

                  <p
                    className={`${instrumentSerif.className} text-base sm:text-xl text-gray-300`}
                  >
                    {cmd.description}
                  </p>
                </div>
              </div>

              {idx < commands.length - 1 && (
                <hr className="border-gray-700 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
