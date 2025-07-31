"use client";

import { Users, Banknote, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export default function page() {
    const cardBaseClass = "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800";

    const teamMembers = [
        { id: 1, name: "John Doe", position: "Developer", salary: 7500, bank: "Chase", account: "**4532", status: "Active" },
        { id: 2, name: "Jane Smith", position: "Designer", salary: 6500, bank: "Bank of America", account: "**7890", status: "Active" },
        { id: 3, name: "Mike Johnson", position: "Manager", salary: 8500, bank: "Wells Fargo", account: "**1234", status: "Active" },
        { id: 4, name: "Sarah Williams", position: "QA Engineer", salary: 7000, bank: "Citibank", account: "**5678", status: "On Leave" },
    ];

    const stats = [
        {
            title: "Total Employees",
            value: teamMembers.length,
            icon: Users
        },
        {
            title: "Active Employees",
            value: teamMembers.filter(m => m.status === "Active").length,
            icon: Users
        },
        {
            title: "Monthly Payroll",
            value: `$${teamMembers.reduce((sum, m) => sum + m.salary, 0).toLocaleString()}`,
            icon: Banknote
        },
        {
            title: "Payroll Status",
            value: "Pending",
            icon: FileText,
            highlight: true
        }
    ];

    return (
        <div className="px-6 pb-10">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight pb-6">Payroll Overview</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Stats Cards */}
                {stats.map((stat, index) => (
                    <Card key={index} className={cardBaseClass}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                        </CardHeader>
                        <CardContent>
                            <div className={`text-2xl font-bold ${stat.highlight ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-900 dark:text-neutral-50'}`}>
                                {stat.value}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className={`${cardBaseClass} mt-4`}>
                <CardHeader>
                    <CardTitle className="text-neutral-900 dark:text-neutral-50">Team Members</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                <TableHead>Name</TableHead>
                                <TableHead>Position</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Salary</TableHead>
                                <TableHead>Bank</TableHead>
                                <TableHead>Account</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teamMembers.map((member) => (
                                <TableRow key={member.id} className="hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                    <TableCell className="font-medium">{member.name}</TableCell>
                                    <TableCell>{member.position}</TableCell>
                                    <TableCell>
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${member.status === "Active"
                                                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                                                : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                                            }`}>
                                            {member.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>${member.salary.toLocaleString()}</TableCell>
                                    <TableCell>{member.bank}</TableCell>
                                    <TableCell>{member.account}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}