# Class Variance Authority

### Apa itu Class Variance Authority?

Class Variance Authority (CVA) adalah sebuah konsep yang digunakan pada Tailwind CSS untuk mengatur variasi class yang digunakan pada suatu component (React). Dengan CVA, kita dapat mengatur style yang digunakan pada suatu component (React) dengan lebih terstruktur dan mudah dibaca.

### Problem yang di solve sama CVA?

Kompleksitas dalam mengatur variant class-class tailwind yang kita gunain di component (React)
dengan cva:

- Kita dapat mengatur variant pada suatu component (React) dengan lebih terstruktur, lebih konsisten, dan lebih mudah dibaca.
- Kita dapat mengurangi jumlah CSS yang harus diunduh oleh browser (karena tailwindcss)

### Keunggulan pake Tailwind CSS x CVA? (Lo Jadi Ganteng)

- Mempercepat proses pembuatan tampilan website atau aplikasi web karena kita dapat mengatur class-class yang digunakan pada suatu component (React) dengan lebih terstruktur dan mudah dibaca
- Memudahkan dalam membuat perubahan pada tampilan website atau aplikasi web karena kita hanya perlu mengubah varian yang sudah kita atur pake CVA
- Tampilan website atau aplikasi web yang konsisten karena kita menggunakan class-class yang sudah kitar atur dengan CVA
- Mengurangi jumlah CSS yang harus diunduh oleh browser karena kita hanya menggunakan class-class tailwind yang dibutuhkan

### Gimana cara pake nya?

### Install dulu pake pnpm:

karena pnpm kenceng banget awokaowkaok

```bash
pnpm add class-variance-authority
```

### Gini contoh singkat penggunaan CVA pada React/Next.js:

```typescript
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader as Buffer, Loader2 as Circle, PenToolIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const loaderVariants = cva("mx-auto", {
  variants: {
    variant: {
      default: "text-primary dark:text-white",
      destructive: "text-destructive dark:text-red-400",
      secondary: "text-secondary dark:text-secondary-foreground",
      ghost: "text-accen dark:text-primary-foreground",
    },
    size: {
      default: "h-12 w-12",
      sm: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface LoaderVariants
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {
  type?: "buffer" | "circle" | "pen-loader"
}

const Loader = React.forwardRef<HTMLDivElement, LoaderVariants>(
  ({ className, variant, size, type = "buffer", ...props }, ref) => {
    const typeNotFound = !["buffer", "circle", "pen-loader"].includes(type)

    if (typeNotFound) throw new Error("Loader type not found")

    return (
      <>
        {type === "buffer" && (
          <Buffer
            className={cn(
              loaderVariants({ variant, size, className }),
              "animate-spin rounded-full"
            )}
            ref={ref}
            {...props}
          />
        )}
        {type === "circle" && (
          <Circle
            className={cn(
              loaderVariants({ variant, size, className }),
              "animate-spin rounded-full"
            )}
            ref={ref}
            {...props}
          />
        )}
        {type === "pen-loader" && (
          <PenToolIcon
            className={cn(
              loaderVariants({ variant, size, className }),
              "animate-spin rounded-full"
            )}
            ref={ref}
            {...props}
          />
        )}
      </>
    )
  }
)

Loader.displayName = "Loader"

type LoaderSize = "default" | "sm" | "lg"
type LoaderType = "buffer" | "circle" | "pen-loader"
type LoaderVariant = "default" | "destructive" | "secondary" | "ghost"

export { Loader, loaderVariants }
export type { LoaderSize, LoaderType, LoaderVariant }
```

[Preview nya ada disini](https://cva-introduction.vercel.app/)

# shadcn-ui

## Apa itu shadcn-ui?

shadcn-ui adalah sebuah library UI yang dibuat dengan menggunakan Tailwind CSS dan Class Variance Authority (CVA). Library ini dibuat untuk mempermudah proses pembuatan tampilan website atau aplikasi web dengan menggunakan Tailwind CSS dan CVA.

## Problem yang di solve sama shadcn-ui?

- Mempercepat proses pembuatan tampilan website atau aplikasi web karena kita dapat menggunakan component-component yang sudah dibuat oleh shadcn-ui
- Memudahkan dalam membuat perubahan pada tampilan website atau aplikasi web karena kita hanya perlu mengubah component-component yang sudah dibuat oleh shadcn-ui
- Tampilan website atau aplikasi web yang konsisten karena kita menggunakan component-component yang sudah dibuat oleh shadcn-ui
- Mengurangi jumlah CSS yang harus diunduh oleh browser karena kita hanya menggunakan class-class tailwind yang dibutuhkan
- Mengurangi jumlah dependency yang harus diunduh karena kita hanya menggunakan component-component shandcn yang kita dibutuhkan

## Gimana cara pake nya?

### Run shadcn-ui init untuk setup shadcn-ui di proyek kamu

```bash
pnpm dlx shadcn-ui@latest init
```

Setelah itu kalian bisa liat dokumentasi shadcn-ui di [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs)
untuk melihat component-component yang sudah dibuat oleh shadcn-ui.

jika kalian sudah menentukan component-component yang akan kalian gunakan, kalian bisa install component-component tersebut dengan cara:

misalnya kalian ingin menggunakan component button:

```bash
pnpm dlx shadcn-ui@latest add button
```

### Penutup

Terimakasih sudah hadir di acara ini, semoga kalian bisa mengerti apa itu CVA dan shadcn-ui, dan semoga kalian bisa menggunakan CVA dan shadcn-ui di proyek kalian dan memudahkan kalian dalam membuat tampilan website atau aplikasi web.

Saran Template Next.js yang sudah menggunakan class-variance-authority, shadcn-ui, dan tailwindcss.
dengan konfigurasi prettier, eslint, dan plugin-plugin nya agar kualitas kode lebih terjaga.

```bash
pnpm create-next-app -e https://github.com/shadcn/next-template
```

### Referensi

- [https://ui.shadcn.com/](https://ui.shadcn.com/)
- [https://tailwindcss.com/](https://tailwindcss.com/)
- [https://cva.style/docs](https://cva.style/docs)
