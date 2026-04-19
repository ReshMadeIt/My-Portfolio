export default function RenderDebug({ label }) {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div
      data-render-debug={label}
      className="fixed bottom-3 right-3 z-[9999] rounded-md border border-emerald-400/40 bg-black/80 px-3 py-1 text-xs font-medium text-emerald-300 shadow-lg"
    >
      render: {label}
    </div>
  );
}
