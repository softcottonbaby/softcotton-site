import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import SparkleCanvas from '../components/SparkleCanvas';

const CountdownTimer = dynamic(() => import('../components/CountdownTimer'), { ssr: false });

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
      {/* Sparkles behind content */}
      <div className="absolute inset-0 z-10">
        <SparkleCanvas />
      </div>

      {/* Background gradients and grid */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-blue-500 via-pink-400 to-purple-600 blur-sm" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* Back Button */}
      <Link href="/" className="absolute top-6 left-6 z-30">
        <button className="w-36 px-4 py-2 rounded-lg text-white font-semibold uppercase text-sm bg-gradient-to-r from-pink-500/30 to-blue-500/30 border border-white/40 backdrop-blur-md shadow-md transition hover:scale-105 hover:shadow-[0_0_18px_rgba(255,255,255,0.3)]">
          &lt; Back
        </button>
      </Link>

      {/* Header */}
      <div className="relative z-20 py-20 px-4 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
          Rain.GG 500 COIN WEEKLY
        </h1>
        <p className="text-lg text-white/80 mt-1">Leaderboard</p>
      </div>

      <CountdownTimer />

      {/* Top 3 Cards */}
      <div className="relative z-20 flex justify-center items-end gap-6 md:gap-12 mb-20 animate-softFadeIn">
        {/* #2 */}
        {topThree[1] && (
          <div className="flex flex-col items-center z-10 hover:scale-105 transition-transform duration-300">
            <div className="relative bg-gradient-to-br from-purple-400/60 to-pink-300/40 backdrop-blur-md rounded-3xl border-2 border-white/30 p-5 w-[140px] md:w-[170px] shadow-lg text-center">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white/30 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                #2
              </div>
              <Image
                src={topThree[1].profilePicture}
                alt={topThree[1].username}
                width={64}
                height={64}
                className="mx-auto rounded-full border-2 border-white/40"
              />
              <p className="text-base font-bold mt-3 text-blue-200">{topThree[1].username}</p>
              <div className="text-xs text-white/70">WAGERED</div>
              <div className="text-sm font-bold">${topThree[1].wageredAmount.toFixed(2)}</div>
              <div className="text-xs text-white/70">REWARD</div>
              <div className="text-yellow-300 font-bold text-sm">{topThree[1].reward}</div>
            </div>
          </div>
        )}

        {/* #1 */}
        {topThree[0] && (
          <div className="flex flex-col items-center z-20 hover:scale-105 transition-transform duration-300">
            <div className="relative bg-gradient-to-br from-yellow-300/60 to-pink-200/40 backdrop-blur-md rounded-3xl border-2 border-yellow-400 p-6 w-[160px] md:w-[200px] shadow-lg text-center">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                #1
              </div>
              <Image
                src={topThree[0].profilePicture}
                alt={topThree[0].username}
                width={70}
                height={70}
                className="mx-auto rounded-full border-4 border-white/50"
              />
              <p className="text-base font-bold mt-3 text-yellow-200">{topThree[0].username}</p>
              <div className="text-xs text-white/70">WAGERED</div>
              <div className="text-sm font-bold">${topThree[0].wageredAmount.toFixed(2)}</div>
              <div className="text-xs text-white/70">REWARD</div>
              <div className="text-yellow-100 font-bold text-sm">{topThree[0].reward}</div>
            </div>
          </div>
        )}

        {/* #3 */}
        {topThree[2] && (
          <div className="flex flex-col items-center z-10 hover:scale-105 transition-transform duration-300">
            <div className="relative bg-gradient-to-br from-orange-300/50 to-yellow-200/30 backdrop-blur-md rounded-3xl border-2 border-white/30 p-5 w-[140px] md:w-[170px] shadow-lg text-center">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white/30 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                #3
              </div>
              <Image
                src={topThree[2].profilePicture}
                alt={topThree[2].username}
                width={64}
                height={64}
                className="mx-auto rounded-full border-2 border-white/40"
              />
              <p className="text-base font-bold mt-3 text-orange-200">{topThree[2].username}</p>
              <div className="text-xs text-white/70">WAGERED</div>
              <div className="text-sm font-bold">${topThree[2].wageredAmount.toFixed(2)}</div>
              <div className="text-xs text-white/70">REWARD</div>
              <div className="text-yellow-300 font-bold text-sm">{topThree[2].reward}</div>
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
                  />
                  <span className="text-white font-medium">{player.username}</span>
                </td>
                <td className="px-4 py-3">${player.wageredAmount.toFixed(2)}</td>
                <td className="px-4 py-3 text-yellow-300 font-bold">{player.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
