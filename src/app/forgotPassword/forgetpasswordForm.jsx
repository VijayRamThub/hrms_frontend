"use client"

import { useState } from "react"
import axios from "axios"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function ForgotPasswordForm({ className, ...props }) {
  // Theme classes for neutral/offwhite
  // Apply: dark:bg-neutral-900 dark:border-neutral-900
  const darkNeutral = "dark:bg-neutral-900"
  const cardBorder = "border border-neutral-200 dark:border-neutral-900"
  const inputBg = "bg-white dark:bg-neutral-900"
  const labelColor = "text-neutral-700 dark:text-neutral-200"
  const mutedText = "text-neutral-500 dark:text-neutral-400"
  const offWhite = "bg-[#f7f7f9]"
  const offWhiteInput = "bg-[#f2f2f5] dark:bg-neutral-900"
  const blackText = "text-black"
  const borderColor = "border-neutral-200"
  const inputBorder = "border-neutral-300 dark:border-neutral-700"
  const placeholderColor = "placeholder-neutral-400"
  // const buttonNeutral = "bg-neutral-800 text-white hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600"
  const outlineButton = "border-neutral-300 dark:border-neutral-900 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"

  const [step, setStep] = useState(2)
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: ""
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const REGEXP_ONLY_DIGITS = /^[0-9]+$/

  const handleChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateEmail = () => {
    if (!formData.email) {
      setErrors(prev => ({ ...prev, email: "Email is required" }))
      return false
    }
    if (!EMAIL_REGEX.test(formData.email)) {
      setErrors(prev => ({ ...prev, email: "Invalid email format" }))
      return false
    }
    return true
  }

  const validateOtp = () => {
    if (formData.otp.length !== 6) {
      setErrors(prev => ({ ...prev, otp: "OTP must be 6 digits" }))
      return false
    }
    if (!REGEXP_ONLY_DIGITS.test(formData.otp)) {
      setErrors(prev => ({ ...prev, otp: "OTP must contain only digits" }))
      return false
    }
    return true
  }

  const validatePassword = () => {
    const strength = getPasswordStrength(formData.newPassword)
    if (strength < 4) {
      setErrors(prev => ({ ...prev, password: "Password is too weak" }))
      return false
    }
    return true
  }

  const handleSendOtp = async (e) => {
    e.preventDefault()
    if (!validateEmail()) return
    
    setIsLoading(true)
    try {
      await axios.post('/api/auth/send-otp', { email: formData.email })
      setStep(2)
    } catch (error) {
      setErrors({ email: "Failed to send OTP. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    if (!validateOtp()) return
    
    setIsLoading(true)
    try {
      await axios.post('/api/auth/verify-otp', { 
        email: formData.email, 
        otp: formData.otp 
      })
      setStep(3)
    } catch (error) {
      setErrors({ otp: "Invalid OTP. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    if (!validatePassword()) return
    
    setIsLoading(true)
    try {
      await axios.post('/api/auth/reset-password', {
        email: formData.email,
        otp: formData.otp,
        newPassword: formData.newPassword
      })
      // Handle successful password reset (redirect or show success message)
    } catch (error) {
      setErrors({ password: "Failed to reset password. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const getPasswordStrength = (password) => {
    const hasUpper = /[A-Z]/.test(password)
    const hasLower = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecial = /[^A-Za-z0-9]/.test(password)
    const hasMinLength = password.length > 7
    return [hasUpper, hasLower, hasNumber, hasSpecial, hasMinLength].filter(Boolean).length
  }

  const strength = getPasswordStrength(formData.newPassword)
  const strengthPercentage = (strength / 5) * 100

  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-500"
    if (strength <= 3) return "bg-yellow-500"
    return "bg-green-600"
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        className
      )}
      {...props}
    >
      <Card className={cn(offWhite, darkNeutral, cardBorder, "shadow-lg")}>
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-neutral-900 dark:text-neutral-100">Reset your password</CardTitle>
        </CardHeader>

        <CardContent>
          {step === 1 && (
            <form onSubmit={handleSendOtp} className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <Label htmlFor="email" className={labelColor}>Enter your email</Label>
                  {errors.email && (
                    <span className="text-red-600 text-xs">{errors.email}</span>
                  )}
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email')(e.target.value)}
                  required
                  className={cn(inputBg, inputBorder)}
                />
              </div>

              <Button 
                type="submit" 
                className={cn("w-full rounded-md")}
                disabled={!EMAIL_REGEX.test(formData.email) || isLoading}
              >
                {isLoading ? "Sending..." : "Send OTP"}
              </Button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyOtp} className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <Label htmlFor="otp" className={labelColor}>Enter 6-digit OTP</Label>
                  {errors.otp && (
                    <span className="text-red-600 text-xs">{errors.otp}</span>
                  )}
                </div>

                <div className="flex justify-center items-center">
                  <InputOTP 
                    maxLength={6} 
                    value={formData.otp}
                    pattern={REGEXP_ONLY_DIGITS}
                    onChange={(value) => handleChange('otp')(value)}
                  >
                    <InputOTPGroup>
                      {[...Array(6)].map((_, i) => (
                        <InputOTPSlot className="dark:border-zinc-800 border-zinc-400 " key={i} index={i} />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
              
              <div className="flex justify-between gap-2">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  className={cn("w-1/2 rounded-md", outlineButton)}
                  disabled={isLoading}
                >
                  Back
                </Button>

                <Button 
                  type="submit" 
                  className={cn("w-1/2 rounded-md")}
                  disabled={formData.otp.length !== 6 || isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleResetPassword} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="newPassword" className={labelColor}>New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={formData.newPassword}
                  onChange={(e) => handleChange('newPassword')(e.target.value)}
                  maxLength={16}
                  required
                  className={cn(inputBg, inputBorder)}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">{errors.password}</span>
                )}
              </div>

              {/* Password strength indicator */}
              <div className="space-y-2">
                <div className="h-[6px] w-full rounded-full bg-muted">
                  <div
                    className={cn("h-full rounded-full transition-all", getStrengthColor())}
                    style={{ width: `${strengthPercentage}%` }}
                  />
                </div>

                <ul className={cn("text-xs list-disc ml-4 space-y-1", mutedText)}>
                  <li className={formData.newPassword.match(/[A-Z]/) ? "text-green-500" : ""}>
                    At least one uppercase letter
                  </li>
                  <li className={formData.newPassword.match(/[a-z]/) ? "text-green-500" : ""}>
                    At least one lowercase letter
                  </li>
                  <li className={formData.newPassword.match(/\d/) ? "text-green-500" : ""}>
                    At least one number
                  </li>
                  <li className={formData.newPassword.match(/[^A-Za-z0-9]/) ? "text-green-500" : ""}>
                    At least one special character
                  </li>
                  <li className={formData.newPassword.length > 7 ? "text-green-500" : ""}>
                    At least 8 characters
                  </li>
                </ul>
              </div>

              <Button 
                type="submit" 
                className={cn("w-full rounded-md")}
                disabled={formData.newPassword.length < 8 || isLoading || strengthPercentage < 100}
              >
                {isLoading ? "Resetting..." : "Reset Password"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}