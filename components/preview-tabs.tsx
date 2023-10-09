import React from "react"
import { Trash2Icon } from "lucide-react"

import { capitalizeString } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type ButtonSize = "default" | "sm" | "lg" | "icon"
type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"

const arrOfButtonSize: Array<ButtonSize> = ["default", "sm", "lg", "icon"]
const arrOfButtonVariant: Array<ButtonVariant> = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
]

export default function PreviewTabs() {
  return (
    <Tabs defaultValue="loader" className="w-max transition-all delay-75">
      <TabsList>
        <TabsTrigger value="todo">Todo</TabsTrigger>
        <TabsTrigger value="loader">Loader Component</TabsTrigger>
        <TabsTrigger value="button">Button Component</TabsTrigger>
      </TabsList>
      <TabsContent value="todo">
        <ul>
          <li>1. Create loader componet</li>
          <li>2. modify button to have is loading state</li>
        </ul>
      </TabsContent>
      <TabsContent value="loader"></TabsContent>
      <TabsContent value="button">
        <div className="grid w-full grid-cols-6 gap-3">
          {arrOfButtonSize.map((size: ButtonSize) =>
            arrOfButtonVariant.map((variant: ButtonVariant) => (
              <>
                {size !== "icon" && (
                  <Button
                    key={`${size}-${variant}`}
                    size={size}
                    variant={variant}
                  >
                    {`${capitalizeString(variant)} (${size})`}
                  </Button>
                )}
                {size === "icon" && (
                  <div className="flex flex-col">
                    <Button
                      key={`${size}-${variant}`}
                      size={size}
                      variant={variant}
                    >
                      <Trash2Icon className="h-6 w-6" />
                    </Button>
                    <span className="text-sm">{`${capitalizeString(
                      variant
                    )} (${size})`}</span>
                  </div>
                )}
              </>
            ))
          )}
        </div>
      </TabsContent>
    </Tabs>
  )
}
