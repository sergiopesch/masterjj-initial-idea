'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="flow-section w-full bg-card/80 py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div
          className="flow-panel grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase text-primary">
              Start quietly
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Keep the path simple. Keep showing up.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Begin with one intention, one note, and one correction you are
              willing to meet again tomorrow.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
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
              <Link href="/login">
                Log in
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
