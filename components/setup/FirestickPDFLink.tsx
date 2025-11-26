"use client"

import * as React from "react"

// NOTE: File must exist at public/setup/firestick-setup-guide.pdf
export default function FirestickPDFLink() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent the outer card <Link> from navigating
    event.stopPropagation()

    window.open(
      "/setup/firestick-setup-guide.pdf",
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-sm text-primary underline underline-offset-4 bg-transparent border-none p-0 inline-flex items-center gap-1 cursor-pointer"
    >
      Download PDF Guide
    </button>
  )
}
