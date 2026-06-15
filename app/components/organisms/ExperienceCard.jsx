import { motion } from "framer-motion";

const ExperienceCard = ({ experience, isSelected, onClick }) => {
  const { company, role, period, duration, location, tags } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        cursor-pointer rounded-xl p-5 transition-all duration-300
        ${
          isSelected
            ? "bg-[#a78bfa] shadow-lg ring-2 ring-[#a78bfa] ring-offset-2"
            : "bg-[#050505] hover:shadow-lg border border-gray-200"
        }
      `}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3
            className={`text-xl font-bold ${isSelected ? "text-white" : "text-green-100"}`}
          >
            {company}
          </h3>
          <p
            className={`text-sm font-medium ${isSelected ? "text-blue-100" : "text-green-100"}`}
          >
            {role}
          </p>
        </div>
        {duration && (
          <span
            className={`
            text-xs font-semibold px-2 py-1 rounded-full
            ${
              isSelected
                ? "bg-blue-500 text-white"
                : "bg-green-100 text-green-700"
            }
          `}
          >
            {duration}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {location && (
          <span
            className={`text-xs ${isSelected ? "text-blue-100" : "text-green-100"}`}
          >
            📍 {location}
          </span>
        )}
        <span
          className={`text-xs ${isSelected ? "text-blue-100" : "text-green-100"}`}
        >
          📅 {period}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {tags.slice(0, 4).map((tag, idx) => (
          <span
            key={idx}
            className={`
              text-xs px-2 py-1 rounded-full font-mono
              ${
                isSelected
                  ? "bg-[#7451dd] text-white"
                  : "bg-gray-100 text-gray-700"
              }
            `}
          >
            {tag}
          </span>
        ))}
        {tags.length > 4 && (
          <span
            className={`text-xs px-2 py-1 rounded-full font-mono ${isSelected ? "bg-[#7451dd] text-white" : "bg-gray-100 text-gray-700"}`}
          >
            +{tags.length - 4}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
