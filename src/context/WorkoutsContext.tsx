'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { IExercise } from '@/types/workout';

interface WorkoutsContextValue {
    workouts: IExercise[];
    setWorkouts: React.Dispatch<React.SetStateAction<IExercise[]>>;
    savedWorkouts: IExercise[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IExercise[]>>;
    activeListTab: 'plan' | 'saved';
    setActiveListTab: React.Dispatch<React.SetStateAction<'plan' | 'saved'>>;
}

export const WorkoutsContext = createContext<WorkoutsContextValue | null>(null);

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);
    if (!context) {
        throw new Error('useWorkoutsContext must be used within WorksProvider');
    }
    return context;
};

const WorksProvider = ({ children }: { children: ReactNode }) => {
    const [workouts, setWorkouts] = useState<IExercise[]>([]);
    
    const [savedWorkouts, setSavedWorkouts] = useState<IExercise[]>([]);
    const [activeListTab, setActiveListTab] = useState<'plan' | 'saved'>('saved');
    const sharedData = {
        workouts,
        setWorkouts,
        savedWorkouts,
        setSavedWorkouts,
        activeListTab,
        setActiveListTab,
    };
    return <WorkoutsContext.Provider value={sharedData}>
        
        {children}
        
        </WorkoutsContext.Provider>;
};

export default WorksProvider;