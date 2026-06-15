import { motion } from "framer-motion";

const ExperienceDetail = ({ experience }) => {
  const {
    company,
    role,
    period,
    location,
    tags,
    achievements,
    learnings,
    feedback,
    highlight,
    whyLeft,
    type,
  } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header Section */}
      <div className="bg-gradient-to-r bg-[#a78bfa] p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">{company}</h2>
            <p className="text-blue-100 text-lg">{role}</p>
          </div>
          {type === "current" && (
            <span className="bg-[#7451dd] text-white text-xs font-semibold px-3 py-1 rounded-full">
              CURRENT
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-blue-100">
          <span>📅 {period}</span>
          <span>📍 {location}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-6 bg-[#e7e6eb]">
        {/* Highlight */}
        {highlight && (
          <div className="bg-[#eae8ef] border-l-4 border-violet-600 p-4 rounded-r-lg">
            <p className="text-[#7451dd] text-sm font-medium">{highlight}</p>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#7451dd] text-white text-xs px-3 py-1.5 rounded-full font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* What I Built */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center">
            <span className="mr-2">🚀</span> What I Built
          </h3>
          <ul className="space-y-2">
            {achievements.map((achievement, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2 text-gray-700 text-sm"
              >
                <span className="text-blue-600 mt-0.5">▹</span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Learnings */}
        <div className="bg-[#cecdd0] rounded-xl p-5">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center">
            <span className="mr-2">💡</span> Key Learnings
          </h3>
          <ul className="space-y-2">
            {learnings.map((learning, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-gray-700 text-sm"
              >
                <span className="text-yellow-600 mt-0.5">✦</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback */}
        <div className="border-t border-gray-200 pt-5">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center">
            <span className="mr-2">🗣️</span> Feedback Received
          </h3>
          <div className="bg-[#cecdd0] border border-green-200 rounded-lg p-4">
            <p className="text-gray-700 text-sm italic">"{feedback}"</p>
          </div>
        </div>

        {/* Why I Left (if applicable) */}
        {whyLeft && (
          <div className="border-t border-gray-200 pt-5">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center">
              <span className="mr-2">📌</span> Why I Left
            </h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">{whyLeft}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceDetail;
