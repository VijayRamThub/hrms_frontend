"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const cardBaseClass = "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800";

export default function page() {
  return (
    <div className="px-6 pb-10">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight pb-6">Payroll Settings</h1>
      <Card className={cardBaseClass}>
        <CardHeader>
          <CardTitle className="text-neutral-900 dark:text-neutral-50">Payroll Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Payroll Schedule</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select schedule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Default Payment Method</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="check">Check</SelectItem>
                  <SelectItem value="cash">Cash</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Currency</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save Settings</Button>
        </CardFooter>
      </Card>
    </div>
  );
}