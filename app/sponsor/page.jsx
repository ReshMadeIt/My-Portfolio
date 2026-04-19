export default function SponsorPage() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">
          Sponsor My Work
        </h1>

        <p className="text-[#888] mb-12 max-w-2xl">
          Support my work as an Android developer building modern apps, tools,
          and a growing developer audience.
        </p>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Tier 1 */}
          <div className="border border-[#1a1a1a] bg-[#0a0a0a] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Supporter</h3>
            <p className="text-[#888] text-sm mb-4">Entry-level visibility</p>

            <ul className="text-sm text-[#ccc] space-y-2">
              <li>• Mention in sponsor list</li>
              <li>• Support badge on site</li>
            </ul>

            <a
              href="mailto:reshmadeit@gmail.com?subject=Supporter%20Sponsor"
              className="mt-6 inline-block px-4 py-2 text-sm bg-[#111] hover:bg-[#1a1a1a] rounded-lg"
            >
              Become Supporter
            </a>
          </div>

          {/* Tier 2 */}
          <div className="border border-orange-500/30 bg-[#0a0a0a] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-orange-400">
              Partner
            </h3>
            <p className="text-[#888] text-sm mb-4">Medium visibility</p>

            <ul className="text-sm text-[#ccc] space-y-2">
              <li>• Website banner placement</li>
              <li>• Email newsletter mention</li>
              <li>• Beta app exposure</li>
            </ul>

            <a
              href="mailto:reshmadeit@gmail.com?subject=Partner%20Sponsor"
              className="mt-6 inline-block px-4 py-2 text-sm bg-gradient-to-r from-orange-500 to-red-500 rounded-lg"
            >
              Become Partner
            </a>
          </div>

          {/* Tier 3 */}
          <div className="border border-red-500/30 bg-[#0a0a0a] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-red-400">
              Premium Sponsor
            </h3>
            <p className="text-[#888] text-sm mb-4">Maximum exposure</p>

            <ul className="text-sm text-[#ccc] space-y-2">
              <li>• Top placement on site</li>
              <li>• Dedicated email campaign</li>
              <li>• App integration mentions</li>
              <li>• Social media shoutouts</li>
            </ul>

            <a
              href="mailto:reshmadeit@gmail.com?subject=Premium%20Sponsor"
              className="mt-6 inline-block px-4 py-2 text-sm bg-red-500 hover:bg-red-600 rounded-lg"
            >
              Become Sponsor
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}