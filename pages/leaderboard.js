import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import SparkleCanvas from '../components/SparkleCanvas';

const CountdownTimer = dynamic(() => import('../components/CountdownTimer'), { ssr: false });

const CoinIcon = ({ amount, className = '' }) => (
  <span className={`inline-flex items-center gap-1 ${className}`}>
    <Image
      src="/iconcoin/image-Photoroom (17).png"
      alt="Coin"
      width={16}
      height={16}
      className="inline-block"
      draggable={false}
    />
    <span>{amount}</span>
  </span>
);

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://www.betzynko.com/api/leaderboard/raingg');
        const data = await res.json();
        setPlayers(data.players || []);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
      }
    }
    fetchData();
  }, []);

  const topThree = players.slice(0, 3).sort((a, b) => a.rank - b.rank);
  const others = players.slice(3).sort((a, b) => a.rank - b.rank);

  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans select-none">
      {/* Sparkles */}
      <div className="absolute inset-0 z-10">
        <SparkleCanvas />
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-blue-500 via-pink-400 to-purple-600 blur-sm" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* Back Button */}
      <Link href="/" className="relative z-[100] block md:absolute md:top-6 md:left-6 text-center mt-6 md:mt-0">
        <button className="w-36 px-4 py-2 rounded-lg text-white font-semibold uppercase text-sm bg-gradient-to-r from-pink-500/30 to-blue-500/30 border border-white/40 backdrop-blur-md shadow-md transition hover:scale-105 hover:shadow-[0_0_18px_rgba(255,255,255,0.3)]">
          &lt; Back
        </button>
      </Link>

      {/* Header */}
      <div className="flex justify-center items-center gap-4 mt-10 z-20 relative text-center px-4">
        <Image
          src="/iconcoin/image-Photoroom (17).png"
          alt="Coin"
          width={40}
          height={40}
          className="drop-shadow-md animate-bounce-slow"
          draggable={false}
        />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
          RAIN.GG{' '}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
            500 COIN
          </span>{' '}
          WEEKLY
        </h1>
        <Image
          src="/iconcoin/image-Photoroom (17).png"
          alt="Coin"
          width={40}
          height={40}
          className="drop-shadow-md animate-bounce-slow"
          draggable={false}
        />
      </div>

      {/* Countdown */}
      <div className="mt-6 z-20 relative px-4">
        <CountdownTimer />
      </div>

      {/* Top 3 Cards */}
      <div className="relative z-20 flex flex-col md:flex-row justify-center items-center md:items-end gap-4 md:gap-10 mb-20 mt-10 animate-softFadeIn px-4">
        {/* #1 */}
        {topThree[0] && (
          <div className="order-1 md:order-2 w-[180px] md:w-[220px] hover:scale-105 transition-transform duration-300">
            <div className="relative bg-gradient-to-br from-yellow-300/60 to-pink-200/40 backdrop-blur-md rounded-3xl border-2 border-yellow-400 p-6 shadow-lg text-center h-full">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                #1
              </div>
              <Image
                src={topThree[0].profilePicture}
                alt={topThree[0].username}
                width={70}
                height={70}
                className="mx-auto rounded-full border-4 border-white/50"
                draggable={false}
              />
              <p className="text-base font-bold mt-3 text-yellow-200">{topThree[0].username}</p>
              <div className="text-xs text-white/70">WAGERED</div>
              <div className="text-sm font-bold">${topThree[0].wageredAmount.toFixed(2)}</div>
              <div className="text-xs text-white/70 mt-1">REWARD</div>
              <CoinIcon
                amount={topThree[0].reward}
                className="text-sm mt-1 font-bold text-black bg-yellow-300/80 rounded px-2 py-1"
              />
            </div>
          </div>
        )}

        {/* #2 */}
        {topThree[1] && (
          <div className="order-2 md:order-1 w-[180px] md:w-[170px] hover:scale-105 transition-transform duration-300">
            <div className="relative bg-gradient-to-br from-purple-400/60 to-pink-300/40 backdrop-blur-md rounded-3xl border-2 border-white/30 p-6 shadow-lg text-center h-full">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                #2
              </div>
              <Image
                src={topThree[1].profilePicture}
                alt={topThree[1].username}
                width={64}
                height={64}
                className="mx-auto rounded-full border-2 border-white/40"
                draggable={false}
              />
              <p className="text-base font-bold mt-3 text-purple-500">{topThree[1].username}</p>
              <div className="text-xs text-white/70">WAGERED</div>
              <div className="text-sm font-bold">${topThree[1].wageredAmount.toFixed(2)}</div>
              <div className="text-xs text-white/70 mt-1">REWARD</div>
              <CoinIcon
                amount={topThree[1].reward}
                className="text-sm mt-1 font-bold text-white bg-purple-500/70 rounded px-2 py-1"
              />
            </div>
          </div>
        )}

        {/* #3 */}
        {topThree[2] && (
          <div className="order-3 md:order-3 w-[180px] md:w-[170px] hover:scale-105 transition-transform duration-300">
            <div className="relative bg-gradient-to-br from-orange-300/50 to-yellow-200/30 backdrop-blur-md rounded-3xl border-2 border-white/30 p-6 shadow-lg text-center h-full">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                #3
              </div>
              <Image
                src={topThree[2].profilePicture}
                alt={topThree[2].username}
                width={64}
                height={64}
                className="mx-auto rounded-full border-2 border-white/40"
                draggable={false}
              />
              <p className="text-base font-bold mt-3 text-orange-200">{topThree[2].username}</p>
              <div className="text-xs text-white/70">WAGERED</div>
              <div className="text-sm font-bold">${topThree[2].wageredAmount.toFixed(2)}</div>
              <div className="text-xs text-white/70 mt-1">REWARD</div>
              <CoinIcon
                amount={topThree[2].reward}
                className="text-sm mt-1 font-bold text-white bg-orange-400/80 rounded px-2 py-1"
              />
            </div>
          </div>
        )}
      </div>

      {/* Leaderboard Table */}
      <div className="relative z-20 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl border border-white/20 animate-softFadeIn bg-white/10 backdrop-blur-lg">
        <table className="w-full text-sm">
          <thead className="bg-white/10 text-white/80">
            <tr>
              <th className="px-4 py-3 text-left">Rank</th>
              <th className="px-4 py-3 text-left">Player</th>
              <th className="px-4 py-3 text-left">Wagered</th>
              <th className="px-4 py-3 text-left">Reward</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {others.map((player) => (
              <tr
                key={player.id}
                className="transition hover:bg-white/10 bg-gradient-to-r from-purple-500/5 to-pink-400/5"
              >
                <td className="px-4 py-3 font-bold">#{player.rank}</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <Image
                    src={player.profilePicture}
                    alt={player.username}
                    width={28}
                    height={28}
                    className="rounded-full"
                    draggable={false}
                  />
                  <span className="text-white font-medium">{player.username}</span>
                </td>
                <td className="px-4 py-3">${player.wageredAmount.toFixed(2)}</td>
                <td className="px-4 py-3 text-yellow-300 font-bold">
                  {[8, 9].includes(player.rank) ? '-' : <CoinIcon amount={player.reward} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="relative z-30 mt-20 pb-10 flex flex-col items-center justify-center text-white text-sm opacity-90">
        <div className="flex items-center gap-5 mb-4">
          {[
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@gamblesoftcotton',
              icon: '/icons/youtube.webp',
              bg: 'bg-red-600',
              glow: 'shadow-[0_0_20px_rgba(255,0,0,0.5)]',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/gambaSoftCotton',
              icon: '/icons/twitter.png',
              bg: 'bg-neutral-800',
              glow: 'shadow-[0_0_15px_rgba(255,255,255,0.3)]',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/2QBapYDXJH',
              icon: '/icons/discord.webp',
              bg: 'bg-indigo-600',
              glow: 'shadow-[0_0_20px_rgba(100,150,255,0.4)]',
            },
          ].map(({ label, href, icon, bg, glow }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition transform hover:scale-110 ${bg} ${glow}`}
            >
              <img src={icon} alt={label} className="w-5 h-5" draggable={false} />
            </a>
          ))}
        </div>

        <p className="text-white/70">&copy; 2025 All rights reserved</p>
        <p className="text-white/50 text-xs mt-1">
          Made by{' '}
          <a
            href="https://x.com/MMesinco"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            acesnap
          </a>
        </p>
      </div>
    </div>
  );
}
