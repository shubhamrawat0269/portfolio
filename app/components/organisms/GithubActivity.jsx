"use client";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

export default function GithubActivity() {
  return (
    <section className="max-w-screen-xl mx-auto p-3 flex flex-col items-center pb-16">
      <h2 className="text-[#b1b1b1] py-3 text-lg">GitHub Activity</h2>
      <GitHubCalendar username="gaearon" />
    </section>
  );
}
