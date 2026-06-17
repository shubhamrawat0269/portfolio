export default function StoryCard({
  act = "ACT 01",
  title,
  description,
  number = "01",
}) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-[#1f2330] bg-[#0d0d11] p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#13151d] via-[#0d0d11] to-[#090a0d]" />
      <div className="absolute right-8 top-8 h-2.5 w-2.5 rounded-full bg-[#7b89c8]" />
      <div className="pointer-events-none absolute bottom-[-20px] right-6 select-none text-[140px] font-bold leading-none text-white/[0.04]">
        {number}
      </div>

      <div className="relative z-10 flex gap-6">
        <div className="w-px bg-[#6676b6]" />
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.45em] text-[#7284c7]">
            {act}
          </p>

          <h2 className="mb-2 text-xl font-semibold text-[#a9b8f2]">
            {title}
          </h2>
          <p className="max-w-4xl text-base leading-relaxed text-[#b7bcc8]">
            {description}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[24px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" />
    </div>
  );
}
