import * as React from "react"

export interface ButtonProps {
  children: React.ReactNode
  className?: string
  kind?: "primary" | "secondary"
}

export function Button(props: ButtonProps) {
  const classes = [props.className, props.kind ?? "primary"]
  return (
    <button className={classes.filter(Boolean).join(" ")}>
      {props.children}
    </button>
  )
}
