"use client";

import { IExercise } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useWorkoutsContext } from "@/context/WorkoutsContext";

interface IListedWorksCardProps {
  workout: IExercise;
  listType: "plan" | "saved";
}

const ListedWorkoutsCard = ({ workout, listType }: IListedWorksCardProps) => {
  const { setWorkouts, setSavedWorkouts } = useWorkoutsContext();

  const handleRemove = () => {
    const removeWorkout = (workouts: IExercise[]) =>
      workouts.filter((item) => item.id !== workout.id);

    if (listType === "saved") {
      setSavedWorkouts(removeWorkout);
      return;
    }

    setWorkouts(removeWorkout);
  };

  return (
    <div className="bg-[#12141a] border border-gray-800/80 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full text-white transition-all hover:border-gray-700">
      
      
      <div className="flex items-center gap-4 sm:gap-5 w-full md:w-auto">
        
        <div className="relative w-28 h-20 sm:w-36 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-gray-900">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        
        <div className="flex flex-col gap-1">
          <h2 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-wider text-white">
            {workout.name}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-medium">
            {workout.equipment}
          </p>

         
          <div className="flex items-center gap-3 sm:gap-4 mt-1 text-xs text-gray-300">
            {/* Duration */}
            <div className="flex items-center gap-1">
              <span className="text-[#ccff00]">🕒</span>
              <span>{workout.duration || 8} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1">
              <span className="text-lime-400">🔥</span>
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span>{workout.rating || "4.1"}</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex items-center justify-end gap-3 w-full md:w-auto pt-2 md:pt-0 border-t border-gray-800/60 md:border-t-0">
        <Link href={`/workouts/${workout.id}`}>
          <button className="border border-gray-700/80 hover:border-gray-500 bg-transparent text-gray-200 hover:text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full transition cursor-pointer">
            View Details
          </button>
        </Link>

        {listType === "plan" && (
          <button className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-1.5 transition cursor-pointer">
            <span>✓</span> Mark as Done
          </button>
        )}

        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${workout.name} from ${listType}`}
          className="text-gray-500 hover:text-gray-300 p-1 transition cursor-pointer"
        >
          ✕
        </button>
      </div>

    </div>
  );
};

export default ListedWorkoutsCard;






























