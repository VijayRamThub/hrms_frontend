import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Activity, TrendingUp, AlertCircle, ChevronRight, Download } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function page() {
  // Card base class for all cards
  const cardBaseClass = "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800";

  // Sample data
  const lastLogin = {
    time: "2 hours 15 minutes",
    date: "Today, 9:15 AM",
    location: "Office Main Entrance",
    device: "iPhone 13"
  };

  const attendanceStats = [
    { metric: "Present Days", value: 18, trend: "up", change: 2, target: 22 },
    { metric: "Late Arrivals", value: 3, trend: "down", change: 1, target: 0 },
    { metric: "Early Departures", value: 2, trend: "stable", change: 0, target: 0 },
    { metric: "Absences", value: 0, trend: "stable", change: 0, target: 0 },
  ];

  const recentActivity = [
    { id: 1, type: "Check-in", time: "9:15 AM", date: "Today", status: "On time" },
    { id: 2, type: "Check-out", time: "6:30 PM", date: "Yesterday", status: "On time" },
    { id: 3, type: "Check-in", time: "9:45 AM", date: "Yesterday", status: "Late" },
    { id: 4, type: "Check-out", time: "5:45 PM", date: "Nov 10", status: "Early" },
  ];

  const currentStreak = {
    days: 12,
    startDate: "October 29, 2023",
    bestStreak: 18
  };

  return (
    <div className="px-6 pb-10 space-y-6 min-h-screen ">
      {/* Header Section */}
      <div className="flex justify-between items-center pt-2">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Attendance Overview
        </h1>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
            Current Status: Active
          </Badge>
          <Button variant="outline" className="border-neutral-200 dark:border-neutral-800">
            <Calendar className="mr-2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              {new Date().toLocaleDateString()}
            </span>
          </Button>
        </div>
      </div>

      {/* Last Login Card */}
      <Card className={cardBaseClass}>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            Last Login
          </CardTitle>
          <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
            Your most recent attendance activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                <Clock className="h-6 w-6 text-green-500 dark:text-green-400" />
              </div>
              <div>
                <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {lastLogin.time} ago
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {lastLogin.date} • {lastLogin.location}
                </p>
              </div>
            </div>
            <Badge variant="outline" className="border-neutral-200 dark:border-neutral-800">
              {lastLogin.device}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-neutral-100 dark:border-neutral-800 pt-4">
          <Button variant="ghost" size="sm" className="text-xs text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300">
            View login history
          </Button>
        </CardFooter>
      </Card>

      {/* Attendance Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {attendanceStats.map((stat) => (
          <Card key={stat.metric} className={cardBaseClass}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                {stat.metric}
              </CardTitle>
              <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
                This month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-1">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : stat.trend === "down" ? (
                      <TrendingUp className="h-3 w-3 text-red-500 transform rotate-180" />
                    ) : (
                      <Activity className="h-3 w-3 text-neutral-500" />
                    )}
                    <span className={`text-xs ml-1 ${
                      stat.trend === "up" ? "text-green-500" :
                      stat.trend === "down" ? "text-red-500" : "text-neutral-400"
                    }`}>
                      {stat.change} {stat.trend === "stable" ? "" : stat.trend} from last month
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">Target</span>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {stat.target}
                  </p>
                </div>
              </div>
              <Progress 
                value={(stat.value / stat.target) * 100} 
                className="mt-3 h-2" 
                indicatorColor={
                  stat.metric === "Present Days" ? "bg-green-500" :
                  stat.metric === "Late Arrivals" ? "bg-amber-500" :
                  stat.metric === "Early Departures" ? "bg-orange-500" : "bg-red-500"
                }
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Current Streak */}
      <Card className={cardBaseClass}>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            Current Streak
          </CardTitle>
          <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
            Your consecutive days of attendance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <Activity className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {currentStreak.days} days
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Since {currentStreak.startDate}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Best streak</span>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {currentStreak.bestStreak} days
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className={cardBaseClass}>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            Recent Activity
          </CardTitle>
          <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
            Your last 10 attendance records
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <div className="flex items-center space-x-3">
                  {activity.type === "Check-in" ? (
                    <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <Clock className="h-4 w-4 text-green-500 dark:text-green-400" />
                    </div>
                  ) : (
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                      <Clock className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                      {activity.type} at {activity.time}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {activity.date}
                    </p>
                  </div>
                </div>
                <Badge 
                  variant={
                    activity.status === "On time" ? "default" :
                    activity.status === "Late" ? "secondary" : "destructive"
                  }
                  className="text-xs"
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-neutral-100 dark:border-neutral-800 pt-4">
          <Button variant="ghost" className="text-xs text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300">
            View full history
          </Button>
          <Button variant="outline" size="sm" className="text-xs border-neutral-200 dark:border-neutral-800">
            <Download className="mr-2 h-3 w-3" />
            Export records
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}