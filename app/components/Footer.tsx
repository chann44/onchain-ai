import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Confetti from "react-confetti";
import { SiteLogo } from "./logo/transparent";

export default function Footer() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }, 3000); // 3 seconds delay
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  return (
    <footer className="flex flex-col lg:flex-row items-center justify-center w-full">
      {showConfetti && <Confetti />}
      <div className="text-center w-full">
        <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-600">
          <span>Star this project on</span>
          <a
            href="https://github.com/chann44/onchain-ai"
            className="inline-flex items-center gap-1 hover:text-gray-400 transition-colors underline"
          >
            <IoLogoGithub className="text-lg" />
            <span>Github!</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-600">
          <span>Made with</span>
          <FaHeart
            className="hover:animate-spin hover:text-red-600"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <span>by</span>
          <div className="inline-flex flex-wrap items-center gap-x-2">
            <a
              href="https://github.com/chann44"
              className="hover:text-gray-400 transition-colors underline"
            >
              Chan
            </a>
            <span>&</span>
            <a
              href="https://github.com/Nishu0"
              className="hover:text-gray-400 transition-colors underline"
            >
              Nishu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
