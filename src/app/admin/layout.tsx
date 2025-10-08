import { notFound } from "next/navigation";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout ensures that all routes under /admin are only accessible in the development environment.
  // In a production environment, it will render a 404 Not Found page.
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <>{children}</>;
}
