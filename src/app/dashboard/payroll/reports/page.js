"use client";

import { FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function page() {
  const cardBaseClass = "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800";
  const reportTypes = [
    {
      title: "Monthly Payroll",
      description: "Summary of monthly payroll expenses",
      icon: FileText
    },
    {
      title: "Tax Deductions",
      description: "Report on tax deductions for the period",
      icon: FileText
    },
    {
      title: "Bank Transfers",
      description: "Report for bank transfers with account details",
      icon: FileText
    }
  ];

  return (
    <div className="px-6 pb-10">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight pb-6">Payroll Reports</h1>
      <Card className={cardBaseClass}>
        <CardHeader>
          <CardTitle className="text-neutral-950 dark:text-neutral-50">Payroll Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reportTypes.map((report, index) => (
              <Card
                key={index}
                className={`${cardBaseClass} cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800`}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {report.title}
                  </CardTitle>
                  <report.icon className="h-4 w-4 text-neutral-500 dark:text-neutral-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600 dark:text-neutral-500">
                    {report.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}