"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

export default function GithubActivity() {
  return (
    <section className="max-w-screen-xl mx-auto p-3 pb-16">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-10"
      >
        <h2 className="text-[#b1b1b1] py-3 text-lg">GitHub Activity</h2>
        <GitHubCalendar username="rawatshubham269" />
      </motion.div>
    </section>
  );
}
