import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2500);

    const autoClose = setTimeout(() => {
      setShowPopup(false);
    }, 2500 + 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoClose);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white select-none">

      {/* 🌈 Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-blue-500 via-pink-400 to-purple-600 blur-sm" />

      {/* ☁️ Cloud Layer */}
      <div className="absolute top-16 left-0 w-full h-full z-0 opacity-10 animate-cloudMove pointer-events-none">
        <img
          src="/clouds/cloudcotton.png"
          className="w-[120%] max-w-none h-auto object-cover"
          alt="cloud"
        />
      </div>

      {/* 🟩 Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

      {/* ✨ Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-4 pt-20 md:pt-0">

        {/* ⬇️ Logo */}
        <div className="w-[300px] md:w-[440px] animate-softFadeIn">
          <img
            src="/logo/softcottonlogo.png"
            alt="SoftCotton Logo"
            className="w-full h-auto select-none pointer-events-none animate-pulse-glow glow-text"
          />
        </div>

        {/* Subtitle */}
        <p className="mt-2 text-xl md:text-2xl max-w-2xl text-white/90 animate-fade-in-up delay-100">
          Rain.gg <br />
          Leaderboards, Exclusive Bonuses & More!
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6">
          <Link href="/leaderboard">
            <button className="w-44 px-6 py-3 rounded-xl text-white font-semibold uppercase bg-gradient-to-r from-pink-500/30 to-blue-500/30 border-[2px] border-white/50 backdrop-blur-lg shadow-inner transition-all duration-300 hover:from-pink-500/40 hover:to-blue-500/40 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
              LEADERBOARD
            </button>
          </Link>
          <button className="w-44 px-6 py-3 rounded-xl text-white font-semibold uppercase bg-white/10 border-[2px] border-white/50 backdrop-blur-lg shadow-inner transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]">
            BONUSES
          </button>
        </div>

        {/* ⬇️ Arrow */}
        <div className="mt-12 animate-bounce text-white/60">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* 🎥 Videos */}
        <div className="mt-16 w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6">
            {[
              {
                title: "I DID MY BIGGEST CASE BATTLES ON RAIN.GG",
                id: "oEEnnTd4dWI",
              },
              {
                title: "I 1V1'D MY GIRLFRIEND ON RAIN.GG",
                id: "0S6D7aqp7IU",
              },
              {
                title: "INSANE PRINTING ON RAIN.GG!",
                id: "lLFkwEgpDLw",
              },
            ].map((video) => (
              <div
                key={video.id}
                className="relative w-full md:w-1/3 aspect-video overflow-hidden rounded-2xl border-4 border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-transform hover:scale-105"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&vq=hd1080`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          {/* 🌐 Socials */}
          <div className="mt-12 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
              {[
                {
                  label: "YOUTUBE",
                  url: "https://www.youtube.com/@gamblesoftcotton",
                  icon: "/icons/youtube.webp",
                  gradient: "from-red-500 to-pink-500",
                  glow: "hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]",
                },
                {
                  label: "TWITTER",
                  url: "https://x.com/gambaSoftCotton",
                  icon: "/icons/twitter.png",
                  gradient: "from-black/70 to-neutral-800/70",
                  glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]",
                },
                {
                  label: "DISCORD",
                  url: "https://discord.gg/2QBapYDXJH",
                  icon: "/icons/discord.webp",
                  gradient: "from-indigo-500 to-blue-600",
                  glow: "hover:shadow-[0_0_30px_rgba(100,150,255,0.4)]",
                },
              ].map(({ label, url, icon, gradient, glow }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold uppercase text-sm
                    bg-gradient-to-r ${gradient}
                    border border-white/30 backdrop-blur-md shadow-md
                    transition-all duration-200 ease-out
                    hover:scale-105 active:scale-95 active:shadow-[0_0_20px_rgba(255,255,255,0.6)]
                    ${glow}`}
                >
                  <img src={icon} alt={label} className="w-5 h-5" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🎁 Discord Popup */}
      <div className={`fixed bottom-6 right-6 z-50 max-w-xs w-[260px] bg-gradient-to-br from-indigo-600 to-blue-700 text-white px-5 py-4 rounded-2xl border border-white/20 shadow-xl backdrop-blur-md transform transition-all duration-700 ${
        showPopup ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex justify-between items-start gap-3">
          <div>
            <p className="text-base font-bold">GIVEAWAYS IN THE DISCORD!</p>
            <p className="text-sm text-white/90 mt-1">Join for free money 🎁</p>
          </div>
          <button
            onClick={() => setShowPopup(false)}
            className="w-6 h-6 flex items-center justify-center bg-white text-indigo-700 font-bold rounded-full text-xs hover:scale-110 transition"
          >
            ×
          </button>
        </div>
        <div className="mt-3 h-[4px] w-full bg-white/10 overflow-hidden rounded-full">
          <div className="h-full bg-white/60 animate-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
