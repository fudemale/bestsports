import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely parse a date string, returning null if invalid or missing.
 * Prevents "RangeError: Invalid time value" errors during build.
 */
export function safeDate(dateString?: string | null): Date | null {
  if (!dateString) return null
  const d = new Date(dateString)
  return isNaN(d.getTime()) ? null : d
}
