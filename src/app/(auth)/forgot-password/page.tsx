"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = async (data: ForgotPasswordValues) => {
    try {
      // In a real app, you would call your password reset API here
      console.log("Reset password for:", data.email)
      
      // For demo purposes, just show success message
      setIsSubmitted(true)
    } catch (error) {
      setError("An error occurred. Please try again.")
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-100">
        <div className="w-full max-w-[400px] p-8">
          <div className="text-left mb-8">
            <h1 className="text-lg font-semibold">Labwear Studios</h1>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">Check your email</h2>
            <p className="text-gray-600 mb-6">
              We've sent password reset instructions to your email address.
            </p>
            <Link
              href="/login"
              className="text-blue-600 hover:underline"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100">
      <div className="w-full max-w-[400px] p-8">
        <div className="text-left mb-8">
          <h1 className="text-lg font-semibold">Labwear Studios</h1>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">Reset password</h2>
          <p className="text-gray-600 mb-6 text-center">
            Enter your email address and we'll send you instructions to reset your password.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Email *"
                error={!!errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <Button
              type="submit"
              className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send reset instructions"}
            </Button>

            <div className="text-center">
              <Link
                href="/login"
                className="text-blue-600 hover:underline text-sm"
              >
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
