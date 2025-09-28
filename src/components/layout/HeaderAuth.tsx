"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogIn, LogOut } from "lucide-react";

interface AuthButtonProps {
  isHovered: boolean;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isDestructive?: boolean;
}

function AuthButton({
  isHovered,
  label,
  icon,
  onClick,
  isDestructive = false,
}: AuthButtonProps) {
  const activeClasses = isDestructive
    ? "bg-destructive/10 text-destructive"
    : "bg-accent text-accent-foreground";

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex cursor-pointer items-center justify-center rounded-full transition-colors duration-300",
        "h-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "text-muted-foreground",
        "px-3",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-full transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
          isDestructive ? "bg-destructive/10" : "bg-accent",
        )}
      />
      <div className="relative z-10 flex items-center">
        <div
          className={cn(
            "shrink-0 transition-colors",
            isHovered &&
              (isDestructive ? "text-destructive" : "text-accent-foreground"),
          )}
        >
          {icon}
        </div>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxWidth: isHovered ? "100px" : "0",
            marginLeft: isHovered ? "0.5rem" : "0",
          }}
        >
          <span
            className={cn(
              "whitespace-nowrap text-sm font-medium transition-colors",
              isHovered &&
                (isDestructive ? "text-destructive" : "text-accent-foreground"),
            )}
          >
            {label}
          </span>
        </div>
      </div>
    </button>
  );
}

export default function HeaderAuth() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  if (loading) {
    return <div className="w-20 h-9" />; // Placeholder to prevent layout shift
  }

  return (
    <div onMouseLeave={() => setHoveredId(null)}>
      {user ? (
        <div onMouseEnter={() => setHoveredId("logout")}>
          <AuthButton
            isHovered={hoveredId === "logout"}
            onClick={handleLogout}
            label="লগ আউট"
            icon={<LogOut size={20} />}
            isDestructive
          />
        </div>
      ) : (
        <Link href="/login" onMouseEnter={() => setHoveredId("login")}>
          <AuthButton
            isHovered={hoveredId === "login"}
            label="লগিন"
            icon={<LogIn size={20} />}
          />
        </Link>
      )}
    </div>
  );
}
