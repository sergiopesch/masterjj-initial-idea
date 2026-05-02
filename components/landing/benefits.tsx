'use client';

import { CheckCircle2 } from 'lucide-react';

const outcomes = [
  'You arrive with one technical intention instead of vague ambition.',
  'You see patterns in the positions that keep breaking under pressure.',
  'You keep coach feedback close to the exact mistake it corrects.',
  'You study fewer techniques and apply them with more attention.',
  'You measure consistency without turning the journey into a leaderboard.',
  'You leave each session with one clear thing to repair.',
];

export function Benefits() {
  return (
    <section id="benefits" className="flow-section relative overflow-hidden py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase text-primary">
              Why it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Discipline in the interface, discipline in the practitioner.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              MasterJJ is designed around the lived rhythm of training: prepare,
              drill, roll, reflect, recover, and come back with less confusion.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flow-card bg-card/85 p-6"
              >
                <CheckCircle2 className="mb-6 h-5 w-5 text-primary" />
                <p className="font-semibold leading-7">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
