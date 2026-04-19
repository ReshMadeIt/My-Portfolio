export default function PricingPage() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-3xl font-semibold">Pricing</h1>
        <p className="text-[#888] mt-2 mb-10">
          Starting estimates based on typical projects.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-[#1a1a1a] rounded-xl p-6 bg-[#0a0a0a]">
            <h3 className="text-xl">Starter App</h3>
            <p className="text-orange-400 text-2xl mt-3">From $150</p>
            <p className="text-[#888] text-sm mt-3">
              Simple Android UI + basic features.
            </p>
          </div>

          <div className="border border-[#1a1a1a] rounded-xl p-6 bg-[#0a0a0a]">
            <h3 className="text-xl">Full App</h3>
            <p className="text-red-400 text-2xl mt-3">From $300</p>
            <p className="text-[#888] text-sm mt-3">
              API integration, auth, database (Supabase/Firebase).
            </p>
          </div>

          <div className="border border-[#1a1a1a] rounded-xl p-6 bg-[#0a0a0a]">
            <h3 className="text-xl">Advanced System</h3>
            <p className="text-orange-500 text-2xl mt-3">Custom</p>
            <p className="text-[#888] text-sm mt-3">
              Scalable architecture, full-stack systems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}