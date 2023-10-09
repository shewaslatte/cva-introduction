import React from "react"

import { fontMono } from "@/lib/fonts"
import { capitalizeString, cn } from "@/lib/utils"
import {
  Loader,
  type LoaderSize,
  type LoaderType,
  type LoaderVariant,
} from "@/components/common/loader"

export default function PreviewPage() {
  return (
    <div
      className={cn(
        fontMono.className,
        "grid h-[calc(100vh-68px)] w-full place-content-center gap-4"
      )}
    >
      <h1 className="text-xl font-bold">Loader with CVA Preview</h1>
      <div className="grid w-max grid-cols-4 gap-6">{renderLoader()}</div>
    </div>
  )
}

const arrOfSize: Array<LoaderSize> = ["default", "sm", "lg"]
const arrOfType: Array<LoaderType> = ["buffer", "circle", "pen-loader"]
const arrOfVariant: Array<LoaderVariant> = [
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
