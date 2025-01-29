"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

import type React from "react"; // Added import for React

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
