export default function StatsBar() {
  const stats = [
    {
      value: "~4",
      label: "YEARS EXPERIENCE",
    },
    {
      value: "12.0k",
      label: "TOTAL CONTRIBUTIONS",
      dot: true,
    },
    {
      value: "15+",
      label: "PROJECTS SHIPPED",
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[24px] border border-[#171a22] bg-[#0b0c10]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative px-8 py-10 md:px-10 md:py-9 ${
                  index !== stats.length - 1
                    ? "border-b border-[#171a22] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                {stat.dot && (
                  <span className="absolute left-6 top-12 h-1.5 w-1.5 rounded-full bg-red-500" />
                )}

                <h3 className="text-[42px] font-bold leading-none tracking-tight text-[#e8e8ec] md:text-[52px]">
                  {stat.value}
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#7c8191]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
