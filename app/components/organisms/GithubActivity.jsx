"use client";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
  return (
    <section className="max-w-md mx-auto p-3 flex flex-col items-center pb-16">
      <h2 className="text-[#b1b1b1] py-3 text-lg">GitHub Activity</h2>
      <div className="flex flex-col gap-10 space-y-5">
        <GitHubCalendar username="antfu" />
        <GitHubCalendar username="gaearon" />
      </div>
    </section>
  );
}
