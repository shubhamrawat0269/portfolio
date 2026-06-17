import StoryCard from "./StoryCard";

const stories = [
  {
    act: "ACT 01",
    title: "The Spark",
    number: "01",
    description:
      "Got into coding back in school — fascinated by how a few lines of code could turn into something people actually use. Not magic, just logic. But it felt like both.",
  },
  {
    act: "ACT 02",
    title: "The Learning Curve",
    number: "02",
    description:
      "Spent countless hours building projects, breaking things, and figuring out why they broke. Every bug taught something new.",
  },
  {
    act: "ACT 03",
    title: "Building for Others",
    number: "03",
    description:
      "Started creating products and websites for real users. Learned that good software isn't just code — it's solving problems.",
  },
  {
    act: "ACT 04",
    title: "What's Next",
    number: "04",
    description:
      "Continuously exploring new technologies, refining skills, and building experiences that leave an impact.",
  },
];

export default function JourneySection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#7284c7]">
          My Journey
        </p>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          The Story So Far
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stories.map((story) => (
          <StoryCard
            key={story.number}
            act={story.act}
            title={story.title}
            description={story.description}
            number={story.number}
          />
        ))}
      </div>
    </section>
  );
}
