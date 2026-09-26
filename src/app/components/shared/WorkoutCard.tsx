import { IExercise } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IExerciseCardProps {
  workout: IExercise;
}

const WorkoutCard = ({ workout }: IExerciseCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="group overflow-hidden rounded-2xl bg-[#141518] border border-gray-800/60 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-700">
        
        {/* Workout Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-900">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Tags / Muscle Groups */}
          <div className="flex flex-wrap gap-2 mb-3">
            {workout.muscleGroups?.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-[#ccff00] px-4 py-1 text-xs font-bold uppercase tracking-wider text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Workout Title */}
          <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white line-clamp-1">
            {workout.name}
          </h3>

          {/* Equipment / Subtitle */}
          <p className="mt-1 text-xs text-gray-400 font-bold">
            {workout.equipment}
          </p>

          {/* Info Stats (Duration, Calories, Rating) */}
          <div className="mt-5 flex items-center gap-4 text-xs font-medium text-gray-400">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{workout.duration} min</span>
            </div>

            {/* Calories / Burn */}
            {workout.caloriesBurned && (
              <div className="flex items-center gap-1.5  ">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                <span>{workout.caloriesBurned} kcal</span>
              </div>
            )}

            {/* Rating */}
            <div className="flex items-center gap-1.5  ">
              <span className="text-yellow-300">☆</span>
              <span>{workout.rating}</span>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;






