import { Geist, Geist_Mono, Instrument_Serif, Xanh_Mono } from "next/font/google";
import Link from "next/link";
import { FC } from "react";

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


const CodeBlock: FC<{ children: React.ReactNode }> = ({ children }) => (
  <pre
    className={`${xahnMono.className} bg-neutral-800 text-white p-4 rounded-md overflow-x-auto my-4`}
  >
    <code className={`${xahnMono.className}`}>{children}</code>
  </pre>
);

const InstallationGuide = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 lg:p-20 gap-8 w-full">
      <span
        className={`${instrumentSerif.className} text-3xl sm:text-5xl text-white`}
      >
        Installation Guide
      </span>
      <div className="flex flex-col w-full max-w-3xl mt-8 sm:mt-12 gap-10 text-gray-300 text-lg sm:text-xl">
        {/* Step 1: Get the Executable */}
        <div>
          <h3
            className={`${instrumentSerif.className} text-2xl sm:text-3xl font-semibold text-white mb-4`}
          >
            Step 1: Get the Executable
          </h3>
          <p className={`${geist.className}`}>
            You have two options: download the pre-compiled file or compile it
            from source.
          </p>

          <h4
            className={`${instrumentSerif.className} text-xl sm:text-2xl text-white mt-6 mb-2`}
          >
            Option A: Download Pre-compiled
          </h4>
          <ol className={`${geist.className} list-decimal list-inside space-y-2`}>
            <li>
              Download the latest{" "}
              <code className={`${xahnMono.className}`}>legit.exe</code> from{" "}
              <Link
                href="https://github.com/tathya1001/legit/releases/download/v1.0.0/legit.exe"
                className="text-blue-400 hover:underline"
              >
                this link
              </Link>
              .
            </li>
            <li>
              <b>Antivirus Warning:</b> Your browser might flag the file. This
              is a common false positive for unsigned executables. If you're
              concerned, please proceed with Option B.
            </li>
          </ol>

          <h4
            className={`${instrumentSerif.className} text-xl sm:text-2xl text-white mt-6 mb-2`}
          >
            Option B: Compile from Source
          </h4>
          <ol className={`${geist.className} list-decimal list-inside space-y-2`}>
            <li>
              Ensure you have{" "}
              <a
                href="https://git-scm.com/downloads"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Git
              </a>{" "}
              and a C++ compiler like{" "}
              <span
                
              >
                MinGW-w64
              </span>{" "}
              installed.
            </li>
            <li>Clone the repository and compile the code:</li>
          </ol>
          <CodeBlock>
            {`git clone https://github.com/tathya1001/legit.git
cd legit
g++ *.cpp -static -o legit.exe`}
          </CodeBlock>
        </div>

        {/* Step 2: Place in Folder */}
        <div>
          <h3
            className={`${instrumentSerif.className} text-2xl sm:text-3xl font-semibold text-white mb-4`}
          >
            Step 2: Place in a Permanent Folder
          </h3>
          <p className={`${geist.className}`}>
            Create a simple, permanent folder (e.g.,{" "}
            <code className={`${xahnMono.className}`}>C:\\legit</code>) and
            move the `legit.exe` file into it.
          </p>
        </div>

        {/* Step 3: Add to PATH */}
        <div>
          <h3
            className={`${instrumentSerif.className} text-2xl sm:text-3xl font-semibold text-white mb-4`}
          >
            Step 3: Add the Folder to Windows PATH
          </h3>
          <p className={`${geist.className}`}>
            To run `legit` from any terminal, you must add its folder to the
            Windows PATH.
          </p>
          <ol className={`${geist.className} list-decimal list-inside space-y-2 mt-4`}>
            <li>
              Press the Windows Key, search for "
              <b>Edit the system environment variables</b>", and open it.
            </li>
            <li>Click on the `Environment Variables...` button.</li>
            <li>
              Under `System variables`, select the `Path` variable and click `Edit...`.
            </li>
            <li>
              Click `New` and paste the path to your folder (e.g.,{" "}
              <code className={`${xahnMono.className}`}>C:\\legit</code>).
            </li>
            <li>Click `OK` on all windows to save.</li>
          </ol>
        </div>
        
        {/* Step 4: Verify */}
        <div>
          <h3
            className={`${instrumentSerif.className} text-2xl sm:text-3xl font-semibold text-white mb-4`}
          >
            Step 4: Verify the Installation
          </h3>
          <ol className={`${geist.className} list-decimal list-inside space-y-2`}>
            <li><b>Open a new terminal window</b> to ensure the changes are applied.</li>
            <li>Navigate to any project folder and test the command:</li>
          </ol>
          <CodeBlock>
            {`legit init`}
          </CodeBlock>
          <p className={`${geist.className}`}>If the command is not found, try restarting your computer.</p>
        </div>

        
      </div>
    </div>
  );
};

export default InstallationGuide;