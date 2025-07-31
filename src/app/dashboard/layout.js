"use client"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Toggle } from "@/components/ui/toggle"

export default function layout({children}) {
  return (
    <div className="bg-black">
      <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {/* Toggle for dark mode (icon changes based on theme) */}
            <Toggle
              aria-label="Toggle dark mode"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const html = document.documentElement;
                  if (html.classList.contains("dark")) {
                    html.classList.remove("dark");
                    localStorage.setItem("theme", "light");
                  } else {
                    html.classList.add("dark");
                    localStorage.setItem("theme", "dark");
                  }
                }
              }}
            >
              <span className="sr-only">Toggle dark mode</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g className="block dark:hidden">
                  {/* Sun icon for light mode */}
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </g>
                <g className="hidden dark:block">
                  {/* Moon icon for dark mode */}
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
                </g>
              </svg>
            </Toggle>
          </div>
        </header>
        {children}

      </SidebarInset>
    </SidebarProvider>
    </div>
  )
}
