"use client";

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    setStatus("Loading...");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("Subscribed successfully 🚀");
      setEmail("");
    } else {
      setStatus("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto text-center py-10">
      <h2 className="text-2xl font-semibold text-white mb-3">
        Subscribe for updates
      </h2>

      <p className="text-[#888] mb-6">
        Get notified when I launch new apps or beta tests.
      </p>

      <div className="flex gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-[#0a0a0a] border border-[#1a1a1a] text-white"
        />

        <button
          onClick={handleSubscribe}
          className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg"
        >
          Join
        </button>
      </div>

      {status && (
        <p className="text-xs text-[#888] mt-3">{status}</p>
      )}
    </div>
  );
}