"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme/theme-toggle"

const navigation = [
  { name: "Practice", href: "#features" },
  { name: "Method", href: "#how-it-works" },
  { name: "Study", href: "#video-showcase" },
  { name: "Path", href: "#testimonials" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/86 backdrop-blur-xl supports-[backdrop-filter]:bg-background/78">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link className="flex items-center space-x-2" href="/">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-foreground/80 bg-card text-xs font-semibold shadow-sm">
              MJ
            </span>
            <span className="hidden text-lg font-semibold sm:inline-block">
              MasterJJ
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href as any}
                className="relative text-muted-foreground transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:text-foreground hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild className="font-medium">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="gap-2 shadow-sm shadow-primary/15">
              <Link href="/auth/sign-up">Begin</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href as any}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-1 text-lg"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="ghost" asChild>
                    <Link href="/login">Log in</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/auth/sign-up">Begin</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
