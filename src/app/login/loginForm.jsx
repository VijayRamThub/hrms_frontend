"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaMicrosoft } from "react-icons/fa"
import axios from "axios"
import Link from "next/link"

export function LoginForm({ className, ...props }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({ email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { email: "", password: "" }

    if (!EMAIL_REGEX.test(credentials.email)) {
      newErrors.email = "Please enter a valid email address"
      valid = false
    }

    if (credentials.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    try {
      const response = await axios.post('/api/auth/login', credentials)
      console.log("Login credentials:", credentials)
      // Add success logic
    } catch (error) {
      setErrors({
        email: "Invalid credentials",
        password: "Invalid credentials"
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Off-white for light mode, dark for dark mode
  const offWhite = "bg-[#f7f7f9]"
  const offWhiteInput = "bg-[#f2f2f5]"
  const blackText = "text-black"
  const borderColor = "border-neutral-200"
  const inputBorder = "border-neutral-300"
  const placeholderColor = "placeholder-neutral-400"

  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-md p-4",
        className
      )}
      {...props}
    >
      <Card
        className={cn(
          offWhite,
          "border",
          borderColor,
          "shadow-md",
          "dark:bg-neutral-900 dark:border-neutral-900 "
        )}
      >
        <CardHeader className="text-center">
          <CardTitle className={cn("text-xl", blackText, "dark:text-neutral-100")}>
            Welcome back
          </CardTitle>
          <CardDescription className={cn("text-neutral-600", "dark:text-neutral-400")}>
            Login with your Office or Microsoft account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className={cn(blackText, "dark:text-neutral-200")}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                className={cn(
                  offWhiteInput,
                  blackText,
                  inputBorder,
                  "border",
                  "focus:ring-2 focus:ring-neutral-300",
                  "dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700",
                  placeholderColor
                )}
                value={credentials.email}
                onChange={handleChange}
                placeholder="m@example.com"
                required
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password" className={cn(blackText, "dark:text-neutral-200")}>
                  Password
                </Label>
                <Link
                  href="/forgotPassword"
                  className={cn(
                    "ml-auto text-sm underline-offset-4 hover:underline",
                    "text-neutral-700 dark:text-neutral-400"
                  )}
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                className={cn(
                  offWhiteInput,
                  blackText,
                  inputBorder,
                  "border",
                  "focus:ring-2 focus:ring-neutral-300",
                  "dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700",
                  placeholderColor
                )}
                value={credentials.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className={cn(
                "w-full",
                "bg-black",
                "text-white",
                "hover:bg-neutral-800",
                "dark:bg-neutral-700 dark:hover:bg-neutral-600"
              )}
              disabled={isLoading || !EMAIL_REGEX.test(credentials.email) || credentials.password.length < 8}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className={cn("w-full border-t", inputBorder, "dark:border-neutral-700")} />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span
                className={cn(
                  offWhite,
                  "dark:bg-neutral-900",
                  "px-2",
                  "text-neutral-500 dark:text-neutral-400"
                )}
              >
                Or continue with
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className={cn(
              "w-full gap-2",
              inputBorder,
              "border",
              offWhiteInput,
              blackText,
              "hover:bg-neutral-200",
              "dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-700"
            )}
          >
            <FaMicrosoft className="h-4 w-4" />
            Login with Microsoft
          </Button>
        </CardContent>
      </Card>

      <div className={cn("text-center text-xs", "text-neutral-600", "dark:text-neutral-400")}>
        By clicking continue, you agree to our{" "}
        <a
          href="#"
          className={cn(
            "underline underline-offset-4",
            "hover:text-black dark:hover:text-neutral-300"
          )}
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="#"
          className={cn(
            "underline underline-offset-4",
            "hover:text-black dark:hover:text-neutral-300"
          )}
        >
          Privacy Policy
        </a>.
      </div>
    </div>
  )
}