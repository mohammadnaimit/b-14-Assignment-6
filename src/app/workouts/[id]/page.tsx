import { IExercise } from "@/types/workout";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
// import workoutsData from "@/data/workouts.json";
import AddButton from "@/app/components/workoutDetails/AddButton";
import SavedButton from "@/app/components/workoutDetails/SavedButton";

interface IExerciseCardProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({ params }: IExerciseCardProps) => {
  const { id } = await params;
const getWorkouts = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

  const workoutsData = await getWorkouts()
  console.log(workoutsData)
  // JSON data filter with type casting
  const workout = (workoutsData as IExercise[]).find(
    (item) => String(item.id) === String(id),
  );

  if (!workout) {
    notFound();
  }

  return (
    <div className="bg-[#0b0c0e] min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-white font-sans">
      
      <div className="container mx-auto bg-[#121316] rounded-2xl p-6 sm:p-8 border border-gray-800/50 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
         
          <div className="lg:col-span-5 relative w-full h-[350px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden bg-gray-900">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-white mb-2">
                {workout.name}
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                {workout.description}
              </p>

              
              <div className="flex flex-wrap gap-2 mb-6">
                {workout.muscleGroups?.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#ccff00] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            
              <div className="bg-[#181a1e] border border-gray-800/60 rounded-xl p-4 divide-y divide-gray-800/60">
                <div className="flex justify-between py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    EQUIPMENT
                  </span>
                  <span className="text-gray-200 font-medium">
                    {workout.equipment}
                  </span>
                </div>
                <div className="flex justify-between py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    DIFFICULTY
                  </span>
                  <span className="text-gray-200 font-medium capitalize">
                    {workout.difficulty || "Intermediate"}
                  </span>
                </div>
                <div className="flex justify-between py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    SETS
                  </span>
                  <span className="text-gray-200 font-medium">
                    {workout.sets || 4}
                  </span>
                </div>
                <div className="flex justify-between py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    REPS
                  </span>
                  <span className="text-gray-200 font-medium">
                    {workout.reps || "6-8"}
                  </span>
                </div>
                <div className="flex justify-between py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    DURATION
                  </span>
                  <span className="text-gray-200 font-medium">
                    {workout.duration} min
                  </span>
                </div>
                <div className="flex justify-between py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    CALORIES
                  </span>
                  <span className="text-gray-200 font-medium">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>
                <div className="flex justify-between py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    RATING
                  </span>
                  <span className="text-gray-200 font-medium">
                    {workout.rating}
                  </span>
                </div>
              </div>

              
              {workout.instructions && workout.instructions.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                    INSTRUCTIONS
                  </h3>
                  <ol className="space-y-2 text-xs text-gray-400 leading-relaxed">
                    {workout.instructions.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-semibold text-gray-400">
                          {idx + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Buttons */}
              <div className="card-actions mt-5 flex justify-between gap-3">
                <AddButton workout={workout}/>
                <SavedButton workout={workout}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
