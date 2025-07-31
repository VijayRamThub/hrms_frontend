"use client";

import { useState } from "react";
import { Calendar, Download, FileText, Users, Banknote, Settings, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function PayrollDashboard() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [activeTab, setActiveTab] = useState("overview");
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  // Mock data
  const teamMembers = [
    { id: 1, name: "John Doe", position: "Developer", salary: 7500, bank: "Chase", account: "****4532", status: "Active" },
    { id: 2, name: "Jane Smith", position: "Designer", salary: 6500, bank: "Bank of America", account: "****7890", status: "Active" },
    { id: 3, name: "Mike Johnson", position: "Manager", salary: 8500, bank: "Wells Fargo", account: "****1234", status: "Active" },
    { id: 4, name: "Sarah Williams", position: "QA Engineer", salary: 7000, bank: "Citibank", account: "****5678", status: "On Leave" },
  ];

  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const years = [
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];

  const handleDownloadAttendance = () => {
    setProcessing(true);
    setProgress(0);
    
    // Simulate processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleGeneratePaysheets = () => {
    setProcessing(true);
    setProgress(0);
    
    // Simulate processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="flex min-h-screen w-full bg-zinc-50 dark:bg-zinc-900">
      {/* Sidebar */}
      <div className=" border-r bg-zinc-100/40 dark:bg-zinc-800/40 w-64">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <h1 className="font-semibold text-lg dark:text-white">Payroll Manager</h1>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex items-center gap-3  rounded-lg px-3 py-2 transition-all ${activeTab === "overview" ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white" : "text-zinc-600 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}
              >
                <Users className="h-4 w-4" />
                Team Overview
              </button>
              <button
                onClick={() => setActiveTab("attendance")}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${activeTab === "attendance" ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}
              >
                <Calendar className="h-4 w-4" />
                Attendance
              </button>
              <button
                onClick={() => setActiveTab("payslips")}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${activeTab === "payslips" ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}
              >
                <Banknote className="h-4 w-4" />
                Payslips
              </button>
              <button
                onClick={() => setActiveTab("reports")}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${activeTab === "reports" ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}
              >
                <FileText className="h-4 w-4" />
                Reports
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${activeTab === "settings" ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}
              >
                <Settings className="h-4 w-4" />
                Settings
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <header className="flex h-14 items-center gap-4 border-b bg-zinc-100/40 dark:bg-zinc-800/40 px-4 lg:h-[60px] lg:px-6">
          <h1 className="text-lg font-semibold">
            {activeTab === "overview" && "Team Overview"}
            {activeTab === "attendance" && "Attendance Management"}
            {activeTab === "payslips" && "Payslip Generation"}
            {activeTab === "reports" && "Reports"}
            {activeTab === "settings" && "Settings"}
          </h1>
          <div className="ml-auto flex items-center gap-2">
            <Select value={month.toString()} onValueChange={(value) => setMonth(parseInt(value))}>
              <SelectTrigger className="w-[180px] bg-white dark:bg-zinc-800">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-zinc-800">
                {months.map((month) => (
                  <SelectItem 
                    key={month.value} 
                    value={month.value}
                    className="hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={year.toString()} onValueChange={(value) => setYear(parseInt(value))}>
              <SelectTrigger className="w-[180px] bg-white dark:bg-zinc-800">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-zinc-800">
                {years.map((year) => (
                  <SelectItem 
                    key={year.value} 
                    value={year.value}
                    className="hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {activeTab === "overview" && (
            <>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white dark:bg-zinc-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      Total Employees
                    </CardTitle>
                    <Users className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{teamMembers.length}</div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-zinc-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      Active Employees
                    </CardTitle>
                    <Users className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {teamMembers.filter(m => m.status === "Active").length}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-zinc-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      Monthly Payroll
                    </CardTitle>
                    <Banknote className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      ${teamMembers.reduce((sum, member) => sum + member.salary, 0).toLocaleString()}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-zinc-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      Payroll Status
                    </CardTitle>
                    <FileText className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      Pending
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white dark:bg-zinc-800">
                <CardHeader>
                  <CardTitle className="text-zinc-900 dark:text-zinc-50">Team Members</CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400">
                    List of all employees with their salary and bank details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-zinc-100 dark:hover:bg-zinc-700">
                        <TableHead className="text-zinc-900 dark:text-zinc-50">Name</TableHead>
                        <TableHead className="text-zinc-900 dark:text-zinc-50">Position</TableHead>
                        <TableHead className="text-zinc-900 dark:text-zinc-50">Status</TableHead>
                        <TableHead className="text-zinc-900 dark:text-zinc-50">Salary</TableHead>
                        <TableHead className="text-zinc-900 dark:text-zinc-50">Bank</TableHead>
                        <TableHead className="text-zinc-900 dark:text-zinc-50">Account</TableHead>
                        <TableHead className="text-right text-zinc-900 dark:text-zinc-50">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {teamMembers.map((member) => (
                        <TableRow key={member.id} className="hover:bg-zinc-100 dark:hover:bg-zinc-700">
                          <TableCell className="font-medium text-zinc-900 dark:text-zinc-50">{member.name}</TableCell>
                          <TableCell className="text-zinc-600 dark:text-zinc-400">{member.position}</TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              member.status === "Active" 
                                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400" 
                                : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                            }`}>
                              {member.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-zinc-900 dark:text-zinc-50">${member.salary.toLocaleString()}</TableCell>
                          <TableCell className="text-zinc-600 dark:text-zinc-400">{member.bank}</TableCell>
                          <TableCell className="text-zinc-600 dark:text-zinc-400">{member.account}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">Open menu</span>
                                  <MoreHorizontal className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent 
                                align="end" 
                                className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                              >
                                <DropdownMenuItem className="hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </>
          )}

          {activeTab === "attendance" && (
            <Card className="bg-white dark:bg-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-900 dark:text-zinc-50">Attendance Report</CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  Download monthly attendance report for all team members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <Select value={month.toString()} onValueChange={(value) => setMonth(parseInt(value))}>
                      <SelectTrigger className="w-[180px] bg-white dark:bg-zinc-800">
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-zinc-800">
                        {months.map((month) => (
                          <SelectItem 
                            key={month.value} 
                            value={month.value}
                            className="hover:bg-zinc-100 dark:hover:bg-zinc-700"
                          >
                            {month.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={year.toString()} onValueChange={(value) => setYear(parseInt(value))}>
                      <SelectTrigger className="w-[180px] bg-white dark:bg-zinc-800">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-zinc-800">
                        {years.map((year) => (
                          <SelectItem 
                            key={year.value} 
                            value={year.value}
                            className="hover:bg-zinc-100 dark:hover:bg-zinc-700"
                          >
                            {year.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {processing && (
                    <div className="space-y-2">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Generating attendance report...
                      </p>
                      <Progress value={progress} className="h-2 bg-zinc-200 dark:bg-zinc-700" />
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleDownloadAttendance} disabled={processing}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "payslips" && (
            <Card className="bg-white dark:bg-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-900 dark:text-zinc-50">Generate Payslips</CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  Create and download payslips for your team members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <Select value={month.toString()} onValueChange={(value) => setMonth(parseInt(value))}>
                      <SelectTrigger className="w-[180px] bg-white dark:bg-zinc-800">
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-zinc-800">
                        {months.map((month) => (
                          <SelectItem 
                            key={month.value} 
                            value={month.value}
                            className="hover:bg-zinc-100 dark:hover:bg-zinc-700"
                          >
                            {month.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={year.toString()} onValueChange={(value) => setYear(parseInt(value))}>
                      <SelectTrigger className="w-[180px] bg-white dark:bg-zinc-800">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-zinc-800">
                        {years.map((year) => (
                          <SelectItem 
                            key={year.value} 
                            value={year.value}
                            className="hover:bg-zinc-100 dark:hover:bg-zinc-700"
                          >
                            {year.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Payslip Options</p>
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" className="border-zinc-200 dark:border-zinc-700">
                        <FileText className="mr-2 h-4 w-4" />
                        Individual Payslips
                      </Button>
                      <Button variant="outline" className="border-zinc-200 dark:border-zinc-700">
                        <FileText className="mr-2 h-4 w-4" />
                        Bulk Payslips
                      </Button>
                    </div>
                  </div>
                  {processing && (
                    <div className="space-y-2">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Generating payslips...
                      </p>
                      <Progress value={progress} className="h-2 bg-zinc-200 dark:bg-zinc-700" />
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" className="border-zinc-200 dark:border-zinc-700">Preview</Button>
                <Button onClick={handleGeneratePaysheets} disabled={processing}>
                  <Download className="mr-2 h-4 w-4" />
                  Generate Payslips
                </Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "reports" && (
            <Card className="bg-white dark:bg-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-900 dark:text-zinc-50">Payroll Reports</CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  Generate and download various payroll reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Monthly Payroll
                      </CardTitle>
                      <FileText className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Summary of monthly payroll expenses
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Tax Deductions
                      </CardTitle>
                      <FileText className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Report on tax deductions for the period
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Bank Transfers
                      </CardTitle>
                      <FileText className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Report for bank transfers with account details
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "settings" && (
            <Card className="bg-white dark:bg-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-900 dark:text-zinc-50">Payroll Settings</CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  Configure your payroll system settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Payroll Schedule</p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-white dark:bg-zinc-800">
                        <SelectValue placeholder="Select schedule" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-zinc-800">
                        <SelectItem value="monthly" className="hover:bg-zinc-100 dark:hover:bg-zinc-700">Monthly</SelectItem>
                        <SelectItem value="biweekly" className="hover:bg-zinc-100 dark:hover:bg-zinc-700">Bi-weekly</SelectItem>
                        <SelectItem value="weekly" className="hover:bg-zinc-100 dark:hover:bg-zinc-700">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Default Payment Method</p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-white dark:bg-zinc-800">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-zinc-800">
                        <SelectItem value="bank" className="hover:bg-zinc-100 dark:hover:bg-zinc-700">Bank Transfer</SelectItem>
                        <SelectItem value="check" className="hover:bg-zinc-100 dark:hover:bg-zinc-700">Check</SelectItem>
                        <SelectItem value="cash" className="hover:bg-zinc-100 dark:hover:bg-zinc-700">Cash</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Currency</p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-white dark:bg-zinc-800">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-zinc-800">
                        <SelectItem value="usd" className="hover:bg-zinc-100 dark:hover:bg-zinc-700">USD ($)</SelectItem>
                        <SelectItem value="eur" className="hover:bg-zinc-100 dark:hover:bg-zinc-700">EUR (€)</SelectItem>
                        <SelectItem value="gbp" className="hover:bg-zinc-100 dark:hover:bg-zinc-700">GBP (£)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}