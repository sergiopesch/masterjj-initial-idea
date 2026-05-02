'use client';

import { Play, Search, Shield, TimerReset } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techniqueRows = [
  ['Closed guard posture', 'Watch again', '12 min'],
  ['Mount maintenance', 'Drill tonight', '8 min'],
  ['Back control retention', 'Ask coach', '16 min'],
  ['Collar choke entries', 'Keep simple', '9 min'],
];

export function VideoShowcase() {
  return (
    <section id="video-showcase" className="flow-section w-full bg-foreground py-20 text-background md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">
              Study
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Study only what serves the next practice.
            </h2>
            <p className="mt-5 text-lg leading-8 text-background/70">
              The library is not a place to collect moves. It is a place to
              sharpen attention around the position you are actually working.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Search, label: 'Position search' },
                { icon: Shield, label: 'Fundamental filters' },
                { icon: TimerReset, label: 'Round notes' },
              ].map((item) => (
                <div key={item.label} className="rounded-md border border-background/15 bg-background/[0.04] p-4 transition hover:-translate-y-1 hover:border-primary/35">
                  <item.icon className="mb-4 h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-background/15 bg-background/[0.04] p-3 shadow-2xl shadow-black/20 lg:rotate-1">
            <div className="grid min-h-[330px] overflow-hidden rounded-md bg-background text-foreground md:grid-cols-[1.15fr_0.85fr]">
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-foreground">
                <div className="absolute left-5 top-5 rounded-md border border-background/20 bg-foreground/90 px-3 py-2 text-xs font-medium text-background backdrop-blur">
                  Study: closed guard posture
                </div>
                <Button className="relative h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90">
                  <Play className="h-6 w-6" />
                  <span className="sr-only">Play technique lesson</span>
                </Button>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="h-px bg-background/20">
                    <div className="h-px w-2/3 bg-background" />
                  </div>
                  <div className="mt-3 flex justify-between text-xs font-medium text-background/75">
                    <span>00:42</span>
                    <span>One detail</span>
                    <span>02:18</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">Study queue</h3>
                  <span className="border border-border px-2 py-1 text-xs font-medium">
                    Lean
                  </span>
                </div>
                <div className="space-y-2">
                  {techniqueRows.map(([title, belt, clips]) => (
                    <div key={title} className="rounded-md border border-border/80 bg-card p-3 transition hover:-translate-y-0.5 hover:border-primary/30">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm font-medium">{title}</p>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {clips}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{belt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
