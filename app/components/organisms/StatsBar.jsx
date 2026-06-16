export default function StatsBar() {
  const stats = [
    {
      value: "~4",
      label: "YEARS EXPERIENCE",
    },
    {
      value: "12.0k",
      label: "TOTAL CONTRIBUTIONS",
    },
    {
      value: "15+",
      label: "PROJECTS SHIPPED",
    },
  ];

  return (
    <section className="w-full mb-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[24px] border border-[#171a22] bg-[#0b0c10]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative px-8 py-10 md:px-6 md:py-6 ${
                  index !== stats.length - 1
                    ? "border-b border-[#171a22] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <h3 className="text-4xl font-bold text-[#e8e8ec]">
                  {stat.value}
                </h3>

                <p className="mt-2 text-xs uppercase text-[#7c8191]">
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
