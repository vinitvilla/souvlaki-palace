'use client'

import { NextUIProvider } from "@nextui-org/system"
import { AuthContextProvider } from "./context/auth-context"
import React from "react"

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </AuthContextProvider>
  )
}