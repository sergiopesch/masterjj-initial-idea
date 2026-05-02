'use client';

import { BookOpen, ClipboardCheck, RotateCcw } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Set the intention',
    description:
      'Choose one position, one behavior, and one standard for the next session.',
  },
  {
    icon: ClipboardCheck,
    title: 'Train without ornament',
    description:
      'Drill, roll, breathe, and notice the moments where attention breaks.',
  },
  {
    icon: RotateCcw,
    title: 'Return better',
    description:
      'Keep the useful lesson, discard the noise, and let the next practice begin cleaner.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="flow-section py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase text-primary">
            Method
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            A simple rhythm for the long road.
          </h2>
        </div>

        <div className="flow-rail mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flow-card relative bg-card/80 p-8"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="text-sm text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
