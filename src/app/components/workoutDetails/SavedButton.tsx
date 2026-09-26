

"use client";

import { useWorkoutsContext } from "@/context/WorkoutsContext";
import { IExercise } from "@/types/workout";
import React from "react";
import { toast } from "react-toastify";
import { FiBookmark, FiCheck } from "react-icons/fi";

const SavedButton = ({ workout }: { workout: IExercise }) => {
  const { savedWorkouts, setSavedWorkouts } = useWorkoutsContext();
  const isSaved = savedWorkouts.some((item) => item.id === workout.id);

  const handleAddToSaved = () => {
    if (isSaved) return;

    setSavedWorkouts((currentSavedWorkouts) =>
      currentSavedWorkouts.some((item) => item.id === workout.id)
        ? currentSavedWorkouts
        : [...currentSavedWorkouts, workout],
    );
    toast.success("Workout saved for later");
  };

  return (
    
      <button
      className="btn btn-outline flex-1 text-white rounded-2xl"
      onClick={() => handleAddToSaved()}
    >
      {isSaved ? (
        <FiCheck className="text-white text-xl" />
      ) : (
        <FiBookmark className="text-white text-xl" />
      )}
      {isSaved ? "Saved" : "Save for later"}
    </button>
    
  );
};

export default SavedButton;