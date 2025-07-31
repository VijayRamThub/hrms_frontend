import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, FileText, Gift, Plus } from "lucide-react";

const cardBaseClass = "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-sm";

export default function page() {
  // Get current time for greeting
  const currentHour = new Date().getHours();
  let greeting = "Good Evening";
  
  if (currentHour < 12) greeting = "Good Morning";
  else if (currentHour < 18) greeting = "Good Afternoon";

  // Sample data
  const upcomingEvents = [
    { id: 1, title: "Quarterly Review Meeting", date: "2023-11-15", time: "10:00 AM" },
    { id: 2, title: "HR Policy Update Workshop", date: "2023-11-20", time: "2:00 PM" },
    { id: 3, title: "Team Building Retreat", date: "2023-11-25", time: "9:00 AM" },
  ];

  const teamActivities = [
    { id: 1, name: "Alex Johnson", activity: "completed compliance training", time: "2 hours ago" },
    { id: 2, name: "Maria Garcia", activity: "submitted payroll reports", time: "1 day ago" },
    { id: 3, name: "Sam Wilson", activity: "updated employee handbook", time: "2 days ago" },
  ];

  const birthdays = [
    { id: 1, name: "Jamie Smith", date: "Nov 12", department: "Recruitment" },
    { id: 2, name: "Taylor Brown", date: "Nov 18", department: "Payroll" },
    { id: 3, name: "Jordan Lee", date: "Nov 22", department: "Benefits" },
  ];

  // Card header and accent backgrounds for visual hierarchy
  const cardHeaderBg = "bg-neutral-100/60 dark:bg-neutral-800/60";
  const cardHeaderBorder = "border-b border-neutral-100 dark:border-neutral-800";
  const cardAccentBg = "bg-neutral-200/60 dark:bg-neutral-800/80";
  const cardSubtleBg = "bg-neutral-100/40 dark:bg-neutral-900/40";

  return (
    <div className="px-6 pb-10 space-y-8 min-h-screen  transition-colors">
      {/* Greeting Section */}
      <div className="flex flex-wrap gap-2 justify-between items-center pt-2">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          {greeting}, <span className="text-emerald-600 dark:text-emerald-400">Vijay Ram!</span>
        </h1>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800 font-medium shadow-sm">
            Last sync: {new Date().toLocaleTimeString()}
          </Badge>
          <Button variant="outline" className="border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 shadow">
            <CalendarDays className="mr-2 h-4 w-4 text-neutral-500 dark:text-neutral-500" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              {new Date().toLocaleDateString()}
            </span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Upcoming Events Card */}
        <Card className={`${cardBaseClass} relative overflow-hidden`}>
          <div className={`${cardHeaderBg} ${cardHeaderBorder} rounded-t-lg px-6 py-4`}>
            <CardTitle className="flex items-center justify-between text-base font-semibold text-neutral-800 dark:text-neutral-100">
              <span>Upcoming Events</span>
              <Badge variant="secondary" className="px-2 py-1 text-xs bg-neutral-200/80 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 font-semibold">
                {upcomingEvents.length} upcoming
              </Badge>
            </CardTitle>
            <CardDescription className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
              Important dates for your calendar
            </CardDescription>
          </div>
          <CardContent className="space-y-3 pt-4 pb-5 px-6">
            {upcomingEvents.map((event, idx) => (
              <div
                key={event.id}
                className={`flex items-start space-x-3 group rounded-md px-2 py-2 transition-colors ${
                  idx === 0
                    ? "bg-neutral-100/60 dark:bg-neutral-800/40"
                    : "hover:bg-neutral-100/40 dark:hover:bg-neutral-800/30"
                }`}
              >
                <CalendarDays className="h-4 w-4 mt-0.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{event.title}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    {event.date} • {event.time}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 h-8 w-8 p-0 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full mt-3 h-8 text-xs border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 font-medium"
            >
              View All Events
            </Button>
          </CardContent>
        </Card>

        {/* Team Activities Card */}
        <Card className={`${cardBaseClass} relative overflow-hidden`}>
          <div className={`${cardHeaderBg} ${cardHeaderBorder} rounded-t-lg px-6 py-4`}>
            <CardTitle className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
              Team Activities
            </CardTitle>
            <CardDescription className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
              Recent actions by your team
            </CardDescription>
          </div>
          <CardContent className="space-y-3 pt-4 pb-5 px-6">
            {teamActivities.map((activity, idx) => (
              <div
                key={activity.id}
                className={`flex items-start space-x-3 rounded-md px-2 py-2 transition-colors ${
                  idx === 0
                    ? "bg-neutral-100/60 dark:bg-neutral-800/40"
                    : "hover:bg-neutral-100/40 dark:hover:bg-neutral-800/30"
                }`}
              >
                <Avatar className="h-7 w-7 ring-2 ring-neutral-200 dark:ring-neutral-800">
                  <AvatarImage src={`/avatars/${activity.id}.png`} />
                  <AvatarFallback className="text-xs bg-neutral-100 dark:bg-neutral-800">
                    {activity.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{activity.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    {activity.activity}{" "}
                    <span className="text-[0.7rem] text-neutral-400 dark:text-neutral-500">{activity.time}</span>
                  </p>
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full mt-3 h-8 text-xs border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 font-medium"
            >
              See More Activity
            </Button>
          </CardContent>
        </Card>

        {/* Birthdays Card */}
        <Card className={`${cardBaseClass} ${cardAccentBg} md:col-span-2 lg:col-span-1 relative overflow-hidden`}>
          <div className={`${cardHeaderBg} ${cardHeaderBorder} rounded-t-lg px-6 py-4`}>
            <CardTitle className="flex items-center justify-between text-base font-semibold text-neutral-800 dark:text-neutral-100">
              <span>This Month's Birthdays</span>
              <Badge
                variant="destructive"
                className="text-xs bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-300 font-semibold"
              >
                Celebrate!
              </Badge>
            </CardTitle>
            <CardDescription className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
              Send your best wishes
            </CardDescription>
          </div>
          <CardContent className="pt-4 pb-5 px-6">
            <div className="space-y-3">
              {birthdays.map((person, idx) => (
                <div
                  key={person.id}
                  className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                    idx === 0
                      ? "bg-pink-200/90 dark:bg-pink-900/20"
                      : "hover:bg-neutral-100/40 dark:hover:bg-neutral-800/30"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Gift className="h-4 w-4 text-pink-500 dark:text-pink-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{person.name}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500">{person.department}</p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="px-2 py-0.5 text-xs bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 font-semibold"
                  >
                    {person.date}
                  </Badge>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-3 h-8 text-xs border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 font-medium"
            >
              View Birthday Policy
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Company News Card - Full width */}
      <Card className={`${cardBaseClass} ${cardSubtleBg} relative overflow-hidden`}>
        <div className={`${cardHeaderBg} ${cardHeaderBorder} rounded-t-lg px-6 py-4`}>
          <CardTitle className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
            Company News
          </CardTitle>
          <CardDescription className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
            Latest updates from leadership
          </CardDescription>
        </div>
        <CardContent className="pt-4 pb-5 px-6">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 border rounded-lg border-neutral-100 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="text-xs bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 font-semibold">
                  Announcement
                </Badge>
                <span className="text-xs text-neutral-500 dark:text-neutral-500">Nov 5, 2023</span>
              </div>
              <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                New Healthcare Benefits
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                We're excited to announce enhanced healthcare benefits starting January 2024...
              </p>
            </div>
            <div className="p-4 border rounded-lg border-neutral-100 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="text-xs bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 font-semibold">
                  Policy Update
                </Badge>
                <span className="text-xs text-neutral-500 dark:text-neutral-500">Nov 1, 2023</span>
              </div>
              <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                Remote Work Guidelines
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                Updated remote work policies have been published in the employee portal...
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="mt-4 h-8 text-xs text-neutral-500 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300 font-semibold"
          >
            View All News
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}