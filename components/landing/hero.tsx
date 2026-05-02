'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CircleDot,
  Compass,
  Play,
  ShieldCheck,
  TimerReset,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const principles = ['Breathe', 'Observe', 'Return'];

const matRows = [
  { label: 'Posture', value: 91 },
  { label: 'Base', value: 86 },
  { label: 'Patience', value: 78 },
];

const sessions = [
  { time: 'Before', title: 'One technical intention', state: 'Set' },
  { time: 'During', title: 'Stay calm under pressure', state: 'Watch' },
  { time: 'After', title: 'Record the lesson, not the excuse', state: 'Done' },
];

const stats = [
  { label: 'Current focus', value: 'Mount' },
  { label: 'Sessions', value: '48' },
  { label: 'Next review', value: '3d' },
];

export function LandingHero() {
  return (
    <section className="flow-page mat-grid relative isolate overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-border" />
      <div className="movement-thread drift-slow" />

      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-14 px-4 py-16 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <div className="reveal-flow max-w-3xl">
          <div className="mb-8 flex flex-wrap gap-2">
            {principles.map((principle) => (
              <span
                key={principle}
                className="rounded-md border border-border/75 bg-background/70 px-3 py-1 text-xs font-semibold uppercase text-muted-foreground backdrop-blur"
              >
                {principle}
              </span>
            ))}
          </div>

          <h1 className="display-copy text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl md:text-7xl">
            The quiet path for serious practitioners.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            MasterJJ helps you train with intention, keep an honest record, and
            return to the mat with a clearer mind. Fundamentals first. Ego last.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 gap-2 px-6 text-base">
              <Link href="/auth/sign-up">
                Begin the path
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 gap-2 border-foreground/20 bg-transparent px-6 text-base"
            >
              <Link href="#video-showcase">
                <Play className="h-4 w-4" />
                See the rhythm
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 overflow-hidden rounded-md border border-border/80 bg-card/70 shadow-sm backdrop-blur">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-5 ${index > 0 ? 'border-l border-border/75' : ''}`}
              >
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="mt-2 text-xs font-medium uppercase text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-flow relative [animation-delay:140ms]" aria-label="MasterJJ product preview">
          <div className="tatami-panel relative overflow-hidden border border-border/80 bg-card p-3 lg:-rotate-1">
            <div className="flow-panel bg-background/90 p-5">
              <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-5">
                <div>
                  <p className="text-xs uppercase text-muted-foreground">
                    Practice ledger
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold">
                    Tonight on the mat
                  </h2>
                </div>
                <div className="rounded-md border border-border/75 bg-card/80 px-3 py-2 text-right">
                  <p className="text-xs text-muted-foreground">Composure</p>
                  <p className="text-xl font-semibold">Steady</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {matRows.map((row) => (
                  <div key={row.label} className="rounded-md border border-border/75 bg-card/60 p-3">
                    <div className="flex items-center justify-between text-xs">
                      <span>{row.label}</span>
                      <span>{row.value}%</span>
                    </div>
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${row.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 pt-3 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flow-card bg-card/90 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">Session rhythm</h3>
                  <TimerReset className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  {sessions.map((session) => (
                    <div
                      key={session.time}
                      className="flex items-center gap-3 rounded-md border border-border/75 bg-background/80 p-3 transition hover:-translate-y-0.5 hover:border-primary/30"
                    >
                      <div className="w-12 text-sm font-semibold">
                        {session.time}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {session.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {session.state}
                        </p>
                      </div>
                      <CircleDot className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flow-card bg-card/90 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Current work</h3>
                    <p className="text-sm text-muted-foreground">
                      Technical notes, pressure, and recovery
                    </p>
                  </div>
                  <Compass className="h-5 w-5 text-primary" />
                </div>

                <div className="mt-6 space-y-4">
                  {['Mount escape sequence', 'Collar grip discipline', 'Closed guard entries'].map(
                    (item, index) => (
                      <div key={item}>
                        <div className="flex justify-between text-sm">
                          <span>{item}</span>
                          <span className="text-muted-foreground">
                            {index === 0 ? 'Ready' : index === 1 ? 'Review' : 'Next'}
                          </span>
                        </div>
                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-border">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${92 - index * 18}%` }}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-6 rounded-md border border-primary/20 bg-background/80 p-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Next lesson: protect the base before attacking
                  </div>
                </div>
              </div>
            </div>

            <div className="belt-stripe mt-3 h-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
