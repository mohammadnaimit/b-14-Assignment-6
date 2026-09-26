"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useWorkoutsContext } from "@/context/WorkoutsContext";

const NavbarCounts = () => {
  const {
    workouts,
    savedWorkouts,
    activeListTab,
    setActiveListTab,
  } = useWorkoutsContext();
  const pathname = usePathname();
  const isListedWorkoutsPage = pathname === "/listed-workouts";
  const isPlanActive = !isListedWorkoutsPage || activeListTab === "plan";
  const isSavedActive = isListedWorkoutsPage && activeListTab === "saved";

  return (
    <div className="navbar-end gap-2">
      <Link
        href="/listed-workouts"
        onClick={() => setActiveListTab("plan")}
        className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
      >
        <span>Plan</span>
        <span
          className={`badge badge-sm ${
            isPlanActive
              ? "!border-lime-400 !bg-lime-400 text-black"
              : "!border-gray-700 !bg-transparent text-gray-300"
          }`}
        >
          {workouts.length}
        </span>
      </Link>
      <Link
        href="/listed-workouts"
        onClick={() => setActiveListTab("saved")}
        className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
      >
        <span>Saved</span>
        <span
          className={`badge badge-sm ${
            isSavedActive
              ? "!border-lime-400 !bg-lime-400 text-black"
              : "!border-gray-700 !bg-transparent text-gray-300"
          }`}
        >
          {savedWorkouts.length}
        </span>
      </Link>
    </div>
  );
};

export default NavbarCounts;