"use client";

import { useWorkoutsContext } from "@/context/WorkoutsContext";
import { IExercise } from "@/types/workout";
import React from "react";
import { toast } from "react-toastify";
import { FiPlusSquare, FiCheck } from "react-icons/fi";

const AddButton = ({ workout }: { workout: IExercise }) => {
  const { workouts, setWorkouts } = useWorkoutsContext();
  const isSaved = workouts.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    if (isSaved) return;

    setWorkouts((currentWorkouts) =>
      currentWorkouts.some((item) => item.id === workout.id)
        ? currentWorkouts
        : [...currentWorkouts, workout],
    );
    toast.success("Workout added to plan");
  };

  return (
    
      <button
      className="btn bg-lime-400 flex-1 text-black rounded-2xl"
      onClick={() => handleAddToPlan()}
    >
      {isSaved ? (
        <FiCheck className="text-black text-xl" />
      ) : (
        <FiPlusSquare className="text-black text-xl" />
      )}
      {isSaved ? "Added" : "Add today's plan"}
    </button>
    
  );
};

export default AddButton;