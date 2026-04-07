export default function NotFound({ params }) {
  const { slug } = params;

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold">{slug.replace("-", " ")}</h1>
      <p className="mt-6 text-white/70">
        Full case study, architecture, stack, challenges, and screenshots.
      </p>
    </main>
  );
}