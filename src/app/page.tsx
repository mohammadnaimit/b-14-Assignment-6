import React from 'react';
import { Suspense } from 'react';
import Banner from './components/homepage/Banner';
import Workout from './components/homepage/Workout';

const WorkoutLoading = () => (
  <section
    aria-label="Loading workouts"
    aria-busy="true"
    className="container mx-auto"
  >
    <div className="animate-pulse px-4">
      <div className="h-10 w-56 rounded bg-gray-800" />
      <div className="mt-3 h-4 w-80 max-w-full rounded bg-gray-800" />
    </div>
    <div className="grid grid-cols-1 gap-7 py-20 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-2xl border border-gray-800/60 bg-[#141518]"
        >
          <div className="h-48 bg-gray-800" />
          <div className="space-y-4 p-5">
            <div className="h-5 w-24 rounded-full bg-gray-800" />
            <div className="h-7 w-3/4 rounded bg-gray-800" />
            <div className="h-3 w-1/2 rounded bg-gray-800" />
            <div className="h-4 w-2/3 rounded bg-gray-800" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

const page = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<WorkoutLoading />}>
        <Workout />
      </Suspense>
    </div>
  );
};

export default page;