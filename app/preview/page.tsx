import React from "react"
import { JetBrains_Mono } from "next/font/google"

import { capitalizeString, cn } from "@/lib/utils"
import { Loader } from "@/components/common/loader"

const fontJetBrainsMono = JetBrains_Mono({ weight: "400", subsets: ["latin"] })

export default function PreviewPage() {
  return (
    <div
      className={cn(
        fontJetBrainsMono.className,
        "grid h-[calc(100vh-68px)] w-full place-content-center gap-4"
      )}
    >
      <h1 className="text-xl font-bold">Loader Preview</h1>
      <div className="grid grid-cols-4 gap-6">{renderLoader()}</div>
    </div>
  )
}

type Size = "default" | "sm" | "lg"
type Type = "buffer" | "circle" | "penis"
type Variant = "default" | "destructive" | "secondary" | "ghost"

const arrOfSize: Array<Size> = ["default", "sm", "lg"]
const arrOfType: Array<Type> = ["buffer", "circle", "penis"]
const arrOfVariant: Array<Variant> = [
  "default",
  "destructive",
  "secondary",
  "ghost",
]

const renderLoader = (): React.ReactNode => {
  return arrOfType.map((type) => {
    return arrOfSize.map((size) => {
      return arrOfVariant.map((variant) => {
        return (
          <div className="flex flex-col space-y-2">
            <Loader variant={variant} size={size} type={type} />
            <div className="text-xs">
              <p>Type: {capitalizeString(type)}</p>
              <p>Variant: {capitalizeString(variant)}</p>
              <p>Size: {capitalizeString(size).toUpperCase()}</p>
            </div>
          </div>
        )
      })
    })
  })
}
