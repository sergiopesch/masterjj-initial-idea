'use client';

import { BookMarked, Brain, Compass, Footprints, Library, MessageSquareText } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Training intention',
    description: 'Set the one problem you are solving before you step on the mat.',
  },
  {
    icon: Footprints,
    title: 'Position path',
    description: 'Track the positions that keep returning: where you lose base, frames, timing, or breath.',
  },
  {
    icon: Library,
    title: 'Study queue',
    description: 'Keep only the clips and notes that serve the current phase of your practice.',
  },
  {
    icon: Brain,
    title: 'Pressure record',
    description: 'Notice what happened when fatigue, frustration, or urgency tried to lead.',
  },
  {
    icon: BookMarked,
    title: 'Training journal',
    description: 'Write the lesson plainly: what worked, what failed, and what deserves another round.',
  },
  {
    icon: MessageSquareText,
    title: 'Coach feedback',
    description: 'Attach corrections to the exact position, round, and next action.',
  },
];

export function Features() {
  return (
    <section id="features" className="flow-section w-full bg-card/70 py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">
              Practice system
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              The essentials, kept honest.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            Inspired by a fundamentals-first life on the mat: fewer screens,
            clearer attention, and a record that rewards consistency over
            performance theatre.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="flow-card group bg-background/85 p-6"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-md border border-border/80 bg-card text-foreground transition group-hover:border-primary/40 group-hover:text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
