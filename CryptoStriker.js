
import React, { useState } from "react";

export default function CryptoStriker() {
  const [wallet, setWallet] = useState({ usd: 0, tokens: 0 });
  const [teamBought, setTeamBought] = useState(false);
  const [message, setMessage] = useState("");

  const depositUSD = () => {
    const depositAmount = 10;
    setWallet(prev => ({ ...prev, usd: prev.usd + depositAmount }));
    setMessage("Deposited $10 successfully.");
  };

  const buyTeam = () => {
    if (wallet.usd >= 10 && !teamBought) {
      setWallet(prev => ({ ...prev, usd: prev.usd - 10, tokens: prev.tokens + 1 }));
      setTeamBought(true);
      setMessage("Team purchased! You can now play.");
    } else if (teamBought) {
      setMessage("Team already purchased.");
    } else {
      setMessage("Insufficient funds. Deposit at least $10.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Crypto Striker: FIFA25</h1>
      <p className="mb-2">Wallet Balance: ${wallet.usd}</p>
      <p>Owned Teams (Tokens): {wallet.tokens}</p>
      <button onClick={depositUSD} className="p-2 bg-blue-500 text-white rounded m-2">Deposit $10</button>
      <button onClick={buyTeam} className="p-2 bg-green-500 text-white rounded m-2">Buy Team</button>
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
