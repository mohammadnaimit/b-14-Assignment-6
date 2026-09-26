import React from "react";
import WorkoutCard from "../shared/WorkoutCard";
import { IExercise } from "@/types/workout";

const getWorkouts = async () => {
  const response = await fetch("http://localhost:3000/workouts.json");
  const data = await response.json();
  return data;
};

const Workout = async () => {
  const workoutsData = await getWorkouts();
  return (
    <section className="container mx-auto">
      <div className="container mx-auto sm: text-center md:text-left lg:text-left">
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white mb-2 leading-tight">
          THE LIBRARY
        </h1>
        <p className="font-sub text-gray-400 text-sm sm:text-lg lg:text-xl font-normal">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 py-20">
          {workoutsData.map((book: IExercise, ind: number) => {
            return <WorkoutCard workout={book} key={ind} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Workout;
