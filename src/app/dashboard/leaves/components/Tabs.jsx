import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {  EmployeeAttendanceTable, EmployeeLeavePendingTable, EmployeeLeaveRejectedTable, EmployeeLeaveSuccessTable, EmployeeLeaveTable } from './Table'

const TabSection = () => {
    return (
        <Tabs defaultValue="All" className="w-full px-2">
            <TabsList>
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="Pending">Pending</TabsTrigger>
                <TabsTrigger value="Success">Success</TabsTrigger>
                <TabsTrigger value="Rejected">Rejected</TabsTrigger>
            </TabsList>
            <TabsContent value="All">
                <EmployeeLeaveTable />
            </TabsContent>
            <TabsContent value="Success">
                <EmployeeLeaveSuccessTable />
            </TabsContent>
            <TabsContent value="Rejected">
                <EmployeeLeaveRejectedTable />
            </TabsContent>
            <TabsContent value="Pending">
                <EmployeeLeavePendingTable />
            </TabsContent>
        </Tabs>
    )
}

export default TabSection
