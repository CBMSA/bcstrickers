
import React, { useState } from "react";

export default function CryptoStrikerWorldCup() {
  const [wallet, setWallet] = useState({ usd: 10, tokens: 1 });
  const [team, setTeam] = useState(null);
  const [mode, setMode] = useState("menu");
  const [message, setMessage] = useState("");

  const tournaments = [
    "FIFA World Cup", "EURO Nations", "AFCON", "Copa America"
  ];
  const leagues = [
    "English Premier League", "DSTV Premiership", "UEFA Champions League", "La Liga"
  ];

  const pickMode = (modeType) => {
    setMode(modeType);
    setMessage("");
  };

  const handleBet = () => {
    if (wallet.usd >= 1) {
      setWallet(prev => ({ ...prev, usd: prev.usd - 1 }));
      setMessage("Bet placed! Match starting...");
    } else {
      setMessage("Insufficient funds to place bet.");
    }
  };

  return (
    <div className="p-4 text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Crypto Striker: World Cup Edition</h1>
      <p>Wallet: ${wallet.usd} | Tokens: {wallet.tokens}</p>
      {mode === "menu" && (
        <>
          <button onClick={() => pickMode("tournament")} className="m-2 p-2 bg-blue-500 text-white rounded">Tournaments</button>
          <button onClick={() => pickMode("league")} className="m-2 p-2 bg-green-600 text-white rounded">Leagues</button>
          <button onClick={() => pickMode("friendly")} className="m-2 p-2 bg-yellow-600 text-white rounded">Friendly</button>
          <button onClick={() => pickMode("betting")} className="m-2 p-2 bg-red-600 text-white rounded">Bet Match</button>
        </>
      )}

      {mode === "tournament" && (
        <>
          <h2 className="text-xl mt-4">Choose a Tournament</h2>
          {tournaments.map(t => <p key={t}>{t}</p>)}
          <button onClick={() => setMode("menu")} className="mt-4 p-2 bg-gray-400 rounded">Back</button>
        </>
      )}

      {mode === "league" && (
        <>
          <h2 className="text-xl mt-4">Choose a League</h2>
          {leagues.map(l => <p key={l}>{l}</p>)}
          <button onClick={() => setMode("menu")} className="mt-4 p-2 bg-gray-400 rounded">Back</button>
        </>
      )}

      {mode === "friendly" && (
        <>
          <p>Play a quick friendly match against AI or random opponent.</p>
          <button className="m-2 p-2 bg-indigo-500 text-white rounded">Play vs AI</button>
          <button className="m-2 p-2 bg-indigo-700 text-white rounded">Online Opponent</button>
          <button onClick={() => setMode("menu")} className="mt-4 p-2 bg-gray-400 rounded">Back</button>
        </>
      )}

      {mode === "betting" && (
        <>
          <p>Bet $1 on match outcome</p>
          <button onClick={handleBet} className="m-2 p-2 bg-red-700 text-white rounded">Place Bet</button>
          <button onClick={() => setMode("menu")} className="mt-4 p-2 bg-gray-400 rounded">Back</button>
        </>
      )}

      {message && <p className="mt-4 text-md text-purple-800">{message}</p>}
    </div>
  );
}
