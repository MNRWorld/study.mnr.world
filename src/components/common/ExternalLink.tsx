"use client";

import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

const ExternalLink = ({
  href,
  text,
  icon,
  className,
  showIcon = true,
}: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-primary hover:underline inline-flex items-center gap-1",
        className,
      )}
    >
      {icon}
      {text}
      {showIcon && <ArrowUpRightFromSquare className="h-3 w-3" />}
    </Link>
  );
};

export default ExternalLink;
