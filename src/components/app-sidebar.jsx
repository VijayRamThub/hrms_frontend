"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { MdLockOutline } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCalendarTimes } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";
// This is sample data.
const data = {
  user: {
    name: "Vijay Ram",
    email: "22P31A04J0@technicalhub.io",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Super Intern",
      logo: GalleryVerticalEnd,
      plan: "Level 1",
    },
    {
      name: "Employee",
      logo: GalleryVerticalEnd,
      plan: "Level 2",
    },
    {
      name: "Team Lead",
      logo: AudioWaveform,
      plan: "Level 3",
    },
    {
      name: "Manager",
      logo: AudioWaveform,
      plan: "Level 4",
    },
    {
      name: "CEO",
      logo: Command,
      plan: "Master",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/dashboard/home",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Attendance",
      url: "/dashboard/attendance",
      icon: IoCalendarOutline ,
      isActive: true,
    },
    {
      title: "Permissions",
      url: "/dashboard/permissions",
      icon: MdLockOutline ,
      isActive: true,
    },
    {
      title: "Leave Management",
      url: "/dashboard/leaves",
      icon: FaRegCalendarTimes ,
      isActive: true,
    },
    {
      title: "Onboarding Offboarding",
      url: "/dashboard/onboarding",
      icon: BsPersonBoundingBox ,
      isActive: true,
    },
    {
      title: "Payroll Management",
      url: "/dashboard/payroll",
      icon: MdOutlinePayment ,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard/payroll/overview",
          icon : GrOverview
        },
        {
          title: "Attendance",
          url: "/dashboard/payroll/attendance",
          icon : IoCalendarOutline
        },
        {
          title: "Payslips",
          url: "/dashboard/payroll/payslips",
          icon : MdOutlinePayments
        },
        {
          title: "Reports",
          url: "/dashboard/payroll/reports",
          icon : TbReportSearch
        },
        {
          title: "Settings",
          url: "/dashboard/payroll/settings",
          icon : IoSettingsOutline
        },
      ],
    },
    // {
    //   title: "My Track",
    //   url: "#",
    //   icon: SquareTerminal,
    //   items: [
    //     {
    //       title: "Attendance",
    //       url: "#",
    //     },
    //     {
    //       title: "Leave Tracker",
    //       url: "#",
    //     },
    //     {
    //       title: "Personal Vault",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Manager",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Track Your Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Manage Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Permissions",
    //       url: "#",
    //     },
    //     {
    //       title: "Travels",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    // {
    //   name: "Design Engineering",
    //   url: "#",
    //   icon: Frame,
    // },
    // {
    //   name: "Sales & Marketing",
    //   url: "#",
    //   icon: PieChart,
    // },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: Map,
    // },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
