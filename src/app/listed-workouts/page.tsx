

"use client";
import { useWorkoutsContext } from "@/context/WorkoutsContext";

import { IExercise } from "@/types/workout";
import React, { useState } from "react";
import ListedWorkoutsCard from "@/app/components/shared/ListedWorksCard";
import { ActiveLink } from "../components/shared/ActiveLink";
import { RiArrowDropDownLine } from "react-icons/ri";

const sortOptions = [
  { value: "duration", label: "Duration" },
  { value: "caloriesBurned", label: "Calories Burned" },
  { value: "rating", label: "Rating" },
] as const;

const ListedBooks = () => {
  const {
    workouts,
    savedWorkouts,
    activeListTab,
    setActiveListTab,
  } = useWorkoutsContext();

  const [saved, setSaved] = useState<"rating" | "duration" | "caloriesBurned">(
    "duration",
  );
  // dynamic stats calculate
  const totalExercises = workouts.length;
  const totalMinutes = workouts.reduce(
    (sum: number, w: IExercise) => sum + (w.duration || 0),
    0,
  );
  const totalCalories = workouts.reduce(
    (sum: number, w: IExercise) => sum + (w.caloriesBurned || 0),
    0,
  );

  const sortWorkouts = (workout: IExercise[]) => {
    const sortedWorkouts = [...workout];
    if (saved === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    } else if (saved === "duration") {
      sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (saved === "caloriesBurned") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }
    return sortedWorkouts;
  };
  const sortedWorkouts = sortWorkouts(workouts);
  const sortedSavedWorkouts = sortWorkouts(savedWorkouts);
  return (
    <div className="container mx-auto py-[20px]">
      <div className=" my-4 bg-[#0c0c0e] rounded-3xl py-4 font-semibold">
        <h2 className="text-4xl">MY PLAN</h2>
        <p className="text-gray-400 text-sm my-2">
          Cap of five lifts for today. Finish them, load more.
        </p>
      </div>

      <div className="border border-gray-700 rounded-lg bg-[#12141a] px-6 py-6 flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-xl mb-1">Exercises</p>
          <p className="text-[#ccff00] text-4xl font-bold">{totalExercises}</p>
        </div>

        <div>
          <p className="text-gray-400 text-xl mb-1">Minutes</p>
          <p className="text-white text-4xl font-bold">{totalMinutes}</p>
        </div>

        <div>
          <p className="text-gray-400 text-xl mb-1">Calories</p>
          <p className="text-white text-4xl font-bold">{totalCalories}</p>
        </div>
      </div>
      {/* <h2 className=" my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center"> */}
      <div className="flex justify-end mt-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-base text-gray-400">Sort By</span>
          <details className="group relative">
            <summary className="flex h-11 w-48 cursor-pointer list-none items-center justify-between gap-3 rounded-full border border-gray-600 bg-gray-900 px-4 text-base text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-400 [&::-webkit-details-marker]:hidden">
              {sortOptions.find((option) => option.value === saved)?.label}
              <RiArrowDropDownLine className="shrink-0 text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <div
              aria-label="Sort workouts"
              className="absolute right-0 top-full z-30 mt-2 w-48 max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg border border-gray-700 bg-[#12141a] p-1 shadow-xl"
            >
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={saved === option.value}
                  onClick={(event) => {
                    setSaved(option.value);
                    event.currentTarget.closest("details")?.removeAttribute("open");
                  }}
                  className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    saved === option.value
                      ? "bg-lime-400 text-black"
                      : "text-gray-200 hover:bg-gray-800"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </details>
        </div>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={"Today's Plan"}
          checked={activeListTab === "plan"}
          onChange={() => setActiveListTab("plan")}
        />
        <div className="tab-content bg-base-100 border-dashed border-gray-500 p-6 mt-10">
          {sortedWorkouts.length > 0 ? (
            sortedWorkouts.map((workout: IExercise) => {
              return (
                <ListedWorkoutsCard
                  key={workout.id}
                  workout={workout}
                  listType="plan"
                />
              );
            })
          ) : (
            <div className="text-center pt-20 pb-30">
              <h2 className=" text-3xl font-semibold">NOTHING HERE YET</h2>
              <p className=" text-gray-400 mt-2">
                Browse the library and add a lift to get today moving.
              </p>
              <div className="btn bg-lime-400 rounded-full mt-10">
                <ActiveLink href="/" exact className="!text-black">
                  Go to Workouts
                </ActiveLink>
              </div>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={"Saved"}
          checked={activeListTab === "saved"}
          onChange={() => setActiveListTab("saved")}
        />
        <div className="tab-content bg-base-100 border-dashed border-gray-500 p-6 mt-10">
          {sortedSavedWorkouts.length > 0 ? (
            sortedSavedWorkouts.map((workout: IExercise) => {
              return (
                <ListedWorkoutsCard
                  key={workout.id}
                  workout={workout}
                  listType="saved"
                />
              );
            })
          ) : (
            <div className="text-center pt-20 pb-30">
              <h2 className=" text-3xl font-semibold">NOTHING HERE YET</h2>
              <p className=" text-gray-400 mt-2">
                Browse the library and add a lift to get today moving.
              </p>
              <div className="btn bg-lime-400 rounded-full mt-10">
                <ActiveLink href="/" exact className="!text-black">
                  Go to Workouts
                </ActiveLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;