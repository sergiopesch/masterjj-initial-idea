'use client';

import { CircleDot } from 'lucide-react';

const pathNotes = [
  {
    title: 'Calm is trained',
    label: 'Breath',
    content:
      'Start with the body. Track when breath shortens, posture collapses, or urgency takes over.',
  },
  {
    title: 'Simple is deep',
    label: 'Technique',
    content:
      'Return to the same fundamental until it becomes reliable under pressure.',
  },
  {
    title: 'Progress is conduct',
    label: 'Character',
    content:
      'The record is not a scoreboard. It is a mirror for discipline, patience, and the next honest action.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="flow-section w-full bg-card/70 py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase text-primary">
              The path
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Built for the practitioner you become between rounds.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pathNotes.map((note, index) => (
            <article
              key={note.title}
              className={`flow-card bg-background/85 p-6 ${index === 1 ? 'md:mt-6' : ''}`}
            >
              <div className="mb-8 flex items-center justify-between">
                <CircleDot className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium uppercase text-muted-foreground">
                  {note.label}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{note.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {note.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
