"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const subscribe = async () => {
    setLoading(true);

    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email, type: "newsletter" }),
    });

    setLoading(false);
    setDone(true);
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto text-center space-y-4">

      <h2 className="text-2xl font-semibold text-white">
        Subscribe to Newsletter
      </h2>

      <p className="text-sm text-[#888]">
        Get updates on apps, builds, and new releases.
      </p>

      {!done ? (
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 rounded-lg bg-[#111] text-white border border-[#222]"
          />

          <button
            onClick={subscribe}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white"
          >
            {loading ? "..." : "Join"}
          </button>
        </div>
      ) : (
        <p className="text-green-400 text-sm">
          You're subscribed 🚀
        </p>
      )}

    </div>
  );
}