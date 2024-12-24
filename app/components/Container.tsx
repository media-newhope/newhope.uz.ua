// import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import {cn} from "@/app/lib/utils";

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({
  children,
  className,
    ...props
}: ContainerProps) {
  return (
    <div {...props}
      className={cn(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  )
}
