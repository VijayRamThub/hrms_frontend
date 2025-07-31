"use client"

import React, { useState } from 'react'
import TabSection from './components/Tabs'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon } from "lucide-react"

const leaveTypes = [
    { value: "Annual", label: "Annual" },
    { value: "Sick", label: "Sick" },
    { value: "Emergency", label: "Emergency" },
    { value: "Maternity", label: "Maternity" },
    { value: "Unpaid", label: "Unpaid" },
]

const dayOptions = [
    { value: "1", label: "1 day" },
    { value: "2", label: "2 days" },
    { value: "3", label: "3 days" },
    { value: "custom", label: "Custom" },
]

const page = () => {
    // Form state
    const [form, setForm] = useState({
        type: "",
        startDate: "",
        endDate: "",
        notes: "",
        days: "1",
    })

    // For calendar popover open state
    const [startOpen, setStartOpen] = useState(false)
    const [endOpen, setEndOpen] = useState(false)

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target ? e.target.value : e })
    }

    const handleSelectChange = (value) => {
        setForm({ ...form, type: value })
    }

    const handleDaysChange = (value) => {
        // Reset dates when days selection changes
        if (value === "1") {
            setForm(f => ({
                ...f,
                days: value,
                startDate: "",
                endDate: "",
            }))
        } else {
            setForm(f => ({
                ...f,
                days: value,
                startDate: "",
                endDate: "",
            }))
        }
    }

    // Handle date selection for start and end date
    const handleStartDateSelect = (date) => {
        if (form.days === "1") {
            setForm({ ...form, startDate: date ? date.toISOString().split('T')[0] : "", endDate: date ? date.toISOString().split('T')[0] : "" })
        } else {
            setForm({ ...form, startDate: date ? date.toISOString().split('T')[0] : "" })
        }
        setStartOpen(false)
    }

    const handleEndDateSelect = (date) => {
        setForm({ ...form, endDate: date ? date.toISOString().split('T')[0] : "" })
        setEndOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Submit logic here
        console.log(form)
        console.log(typeof form.startDate)
    }

    return (
        <div className='px-6'>
            <div className='flex justify-between items-center pr-6'>
                <h1 className='text-xl md:text-3xl dark:text-neutral-300 text-neutral-900 tracking-tighter font-semibold py-6'>Leave Tracker</h1>
                
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="blue">Apply Leave</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Apply for Leave</DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4 pt-2" onSubmit={handleSubmit}>
                            <div className="grid gap-2">
                                <Label htmlFor="leave-type">Leave Type</Label>
                                <Select value={form.type} onValueChange={handleSelectChange}>
                                    <SelectTrigger id="leave-type">
                                        <SelectValue placeholder="Select leave type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {leaveTypes.map((type) => (
                                            <SelectItem key={type.value} value={type.value}>
                                                {type.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="days">How many days?</Label>
                                <Select value={form.days} onValueChange={handleDaysChange}>
                                    <SelectTrigger id="days">
                                        <SelectValue placeholder="Select days" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {dayOptions.map((opt) => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="start-date">
                                    {form.days === "1" ? "Select Date" : "From Date"}
                                </Label>
                                <Popover open={startOpen} onOpenChange={setStartOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            id="start-date"
                                            className="w-48 justify-between font-normal"
                                            type="button"
                                        >
                                            {form.startDate
                                                ? new Date(form.startDate).toLocaleDateString()
                                                : (form.days === "1" ? "Select date" : "Select from date")}
                                            <ChevronDownIcon />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={form.startDate ? new Date(form.startDate) : undefined}
                                            captionLayout="dropdown"
                                            onSelect={handleStartDateSelect}
                                            fromYear={new Date().getFullYear() - 1}
                                            toYear={new Date().getFullYear() + 1}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            {(form.days !== "1") && (
                                <div className="grid gap-2">
                                    <Label htmlFor="end-date">To Date</Label>
                                    <Popover open={endOpen} onOpenChange={setEndOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                id="end-date"
                                                className="w-48 justify-between font-normal"
                                                type="button"
                                            >
                                                {form.endDate
                                                    ? new Date(form.endDate).toLocaleDateString()
                                                    : "Select to date"}
                                                <ChevronDownIcon />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={form.endDate ? new Date(form.endDate) : undefined}
                                                captionLayout="dropdown"
                                                onSelect={handleEndDateSelect}
                                                fromYear={new Date().getFullYear() - 1}
                                                toYear={new Date().getFullYear() + 1}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            )}
                            <div className="grid gap-2">
                                <Label htmlFor="notes">Notes</Label>
                                <Textarea
                                    id="notes"
                                    value={form.notes}
                                    onChange={handleChange("notes")}
                                    placeholder="Add any notes (optional)"
                                />
                            </div>
                            <div className="flex justify-end pt-2">
                                <Button type="submit" variant="blue">
                                    Submit Application
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <TabSection />
        </div>
    )
}

export default page