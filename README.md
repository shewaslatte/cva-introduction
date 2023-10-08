## Apa itu Class Variance Authority?

Class Variance Authority (CVA) adalah sebuah konsep yang digunakan pada Tailwind CSS untuk mengatur variasi class yang digunakan pada suatu elemen HTML. Dengan CVA, kita dapat mengatur class-class yang digunakan pada suatu elemen HTML dengan lebih terstruktur dan mudah dibaca.

## CVA dipakai dimana saja dan case nya apa saja?

CVA dapat digunakan pada proyek-proyek web yang menggunakan Tailwind CSS. Beberapa case penggunaan CVA antara lain:

- Membangun style component yang dapat digunakan berulang-ulang di component lain
- Membangun style component yang dapat digunakan dengan variasi yang berbeda-beda
- Membangun style component yang dapat digunakan dengan variasi yang berbeda-beda dan dapat digunakan berulang-ulang di component lain

maap malah kena infinite loop gue awkaowkoawk

## Keunggulan pake Tailwind CSS x CVA? (Lo Jadi Ganteng)

- Mempercepat proses pembuatan tampilan website atau aplikasi web karena kita dapat mengatur class-class yang digunakan pada suatu elemen HTML dengan lebih terstruktur dan mudah dibaca
- Memudahkan dalam membuat perubahan pada tampilan website atau aplikasi web karena kita hanya perlu mengubah varian yang sudah kita atur pake CVA
- Menghasilkan tampilan website atau aplikasi web yang konsisten karena kita menggunakan class-class yang sudah diatur dengan CVA
- Mengurangi jumlah CSS yang harus diunduh oleh browser karena kita hanya menggunakan class-class yang dibutuhkan

## Gimana cara pake nya?

Gini contoh singkat penggunaan CVA pada React/Next.js:

```javascript
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader as Buffer, Loader2 as Circle, PenToolIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const loaderVariants = cva("", {
  variants: {
    variant: {
      default: "text-primary dark:text-white",
      destructive: "text-destructive dark:text-red-400",
      secondary: "text-secondary dark:text-secondary-foreground",
      ghost: "text-accen dark:text-primary-foreground",
    },
    size: {
      default: "h-10 w-10",
      sm: "h-9 w-9",
      lg: "h-11 w-11",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface LoaderVariants
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {
  type?: "buffer" | "circle" | "penis"
}

const Loader = React.forwardRef<HTMLDivElement, LoaderVariants>(
  ({ className, variant, size, type = "buffer", ...props }, ref) => {
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
        {type === "penis" && (
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

export { Loader, loaderVariants }

```

[Preview nya ada disini](https://cva-introduction.vercel.app/preview)

Untuk menggunakan CVA pada proyek Next.js, kita dapat menggunakan template yang sudah disediakan oleh `shadcn/next-template`. Template ini sudah dilengkapi dengan konfigurasi Tailwind CSS dan CVA. Berikut cara menggunakan template tersebut:

```bash
pnpm create-next-app -e https://github.com/shadcn/next-template
```
