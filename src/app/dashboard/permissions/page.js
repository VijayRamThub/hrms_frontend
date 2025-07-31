import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertCircle, Zap, CalendarCheck, ChevronRight, Download } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {Approved, Rejected} from "@/components/ui/Approval";

export default function page() {
  // Sample data 
  const pendingRequests = [
    { id: 1, type: "Late In", employee: "Alex Johnson", time: "9:30 AM", date: "Today" },
    { id: 2, type: "Early Out", employee: "Maria Garcia", time: "3:00 PM", date: "Today" },
    { id: 3, type: "Hourly", employee: "Sam Wilson", hours: "2 hours", date: "Tomorrow" },
  ];

  const recentApprovals = [
    { id: 1, type: "Emergency", employee: "Taylor Swift", status: "Approved", date: "2 hours ago" },
    { id: 2, type: "Late In", employee: "John Doe", status: "Rejected", date: "1 day ago" },
    { id: 3, type: "Early Out", employee: "Jane Smith", status: "Approved", date: "2 days ago" },
  ];

  const permissionStats = [
    { type: "Late In", count: 24, trend: "up", percentage: 15 },
    { type: "Early Out", count: 18, trend: "down", percentage: 8 },
    { type: "Hourly", count: 12, trend: "up", percentage: 22 },
    { type: "Emergency", count: 5, trend: "stable", percentage: 3 },
  ];

  // Use bg-neutral-50 for offwhite in light mode
  const cardBaseClass = "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800";

  return (
    <div className="px-6 pb-10 space-y-6  min-h-screen dark:bg-neutral-950">
      {/* Header Section */}
      <div className="flex flex-wrap gap-2 justify-between items-center pt-2">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Permissions Management
        </h1>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
            Active Requests: 7
          </Badge>
          <Button variant="outline" className="border-neutral-200 dark:border-neutral-800">
            <CalendarCheck className="mr-2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              {new Date().toLocaleDateString()}
            </span>
          </Button>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Late In Permission */}
        <Card className={`${cardBaseClass} hover:shadow-sm transition-shadow`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                Late In
              </CardTitle>
              <Badge variant="secondary" className="h-6 w-6 p-0 flex items-center justify-center bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                <Clock className="h-3 w-3" />
              </Badge>
            </div>
            <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
              Request permission for arriving late
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-neutral-200 dark:border-neutral-800">
              New Request <ChevronRight className="ml-2 h-3 w-3" />
            </Button>
          </CardContent>
        </Card>

        {/* Early Out Permission */}
        <Card className={`${cardBaseClass} hover:shadow-sm transition-shadow`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                Early Out
              </CardTitle>
              <Badge variant="secondary" className="h-6 w-6 p-0 flex items-center justify-center bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300">
                <Clock className="h-3 w-3" />
              </Badge>
            </div>
            <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
              Request permission to leave early
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-neutral-200 dark:border-neutral-800">
              New Request <ChevronRight className="ml-2 h-3 w-3" />
            </Button>
          </CardContent>
        </Card>

        {/* Hourly Permission */}
        <Card className={`${cardBaseClass} hover:shadow-sm transition-shadow`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                Hourly
              </CardTitle>
              <Badge variant="secondary" className="h-6 w-6 p-0 flex items-center justify-center bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300">
                <Clock className="h-3 w-3" />
              </Badge>
            </div>
            <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
              Request hourly time off
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-neutral-200 dark:border-neutral-800">
              New Request <ChevronRight className="ml-2 h-3 w-3" />
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Permission */}
        <Card className={`${cardBaseClass} hover:shadow-sm transition-shadow`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                Emergency
              </CardTitle>
              <Badge variant="secondary" className="h-6 w-6 p-0 flex items-center justify-center bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300">
                <AlertCircle className="h-3 w-3" />
              </Badge>
            </div>
            <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
              Request emergency time off
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-neutral-200 dark:border-neutral-800">
              New Request <ChevronRight className="ml-2 h-3 w-3" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Pending Approvals */}
        <Card className={`${cardBaseClass} md:col-span-2`}>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Pending Approvals
            </CardTitle>
            <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
              {pendingRequests.length} requests awaiting your action
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <div className="flex items-center space-x-3">
                  {request.type === "Late In" && (
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                      <Clock className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                    </div>
                  )}
                  {request.type === "Early Out" && (
                    <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30">
                      <Clock className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                    </div>
                  )}
                  {request.type === "Hourly" && (
                    <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/30">
                      <Zap className="h-4 w-4 text-amber-500 dark:text-amber-400" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{request.employee}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {request.type} • {request.time || request.hours} • {request.date}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="h-8 text-xs">
                    Approve
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 text-xs border-neutral-200 dark:border-neutral-800">
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="text-xs text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300">
              View All Pending Requests
            </Button>
          </CardFooter>
        </Card>

        {/* Permission Statistics */}
        <Card className={cardBaseClass}>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Permission Trends
            </CardTitle>
            <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
              Last 30 days compared to previous period
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {permissionStats.map((stat) => (
              <div key={stat.type} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{stat.type}</span>
                  <span className="text-xs font-medium text-neutral-900 dark:text-neutral-100">{stat.count}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={stat.percentage} className="h-2" indicatorColor={
                    stat.type === "Late In" ? "bg-blue-500" :
                    stat.type === "Early Out" ? "bg-purple-500" :
                    stat.type === "Hourly" ? "bg-amber-500" : "bg-red-500"
                  } />
                  <span className={`text-xs ${
                    stat.trend === "up" ? "text-green-500" :
                    stat.trend === "down" ? "text-red-500" : "text-neutral-500"
                  } flex w-12 items-center`}>
                    {stat.trend === "up" ? "↑" : stat.trend === "down" ? "↓" : "→"} {stat.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Approvals */}
        <Card className={`${cardBaseClass} lg:col-span-3`}>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Recent Approvals
            </CardTitle>
            <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
              Last 10 permission decisions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentApprovals.map((approval) => (
                <div key={approval.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                  <div className="flex items-center space-x-3">
                    {approval.type === "Emergency" ? (
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    ) : (
                      <Clock className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{approval.employee}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {approval.type} • {approval.date}
                      </p>
                    </div>
                  </div>
                  {/* <Badge variant={ "default" : "destructive"} className="text-xs">
                    {approval.status}
                  </Badge> */}
                  {
                    approval.status === "Approved" ? <Approved label={approval.status} /> : <Rejected label={approval.status} />
                  }
                  
                  
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" className="text-xs text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300">
              View Approval History
            </Button>
            <Button variant="outline" size="sm" className="text-xs border-neutral-200 dark:border-neutral-800">
              <Download className="mr-2 h-3 w-3" />
              Export Data
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}