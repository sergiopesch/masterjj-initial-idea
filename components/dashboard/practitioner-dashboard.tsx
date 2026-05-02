import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpenCheck, Calendar, Compass, ShieldCheck } from "lucide-react"

const cards = [
  {
    title: "Next Session",
    value: "Fundamentals",
    detail: "Today at 6:00 PM",
    icon: Calendar,
  },
  {
    title: "Intention",
    value: "Hold posture",
    detail: "Closed guard",
    icon: Compass,
  },
  {
    title: "Correction",
    value: "Elbows inside",
    detail: "Review before rounds",
    icon: BookOpenCheck,
  },
  {
    title: "Composure",
    value: "Steady",
    detail: "Breathe before force",
    icon: ShieldCheck,
  },
]

export function PractitionerDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.detail}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
