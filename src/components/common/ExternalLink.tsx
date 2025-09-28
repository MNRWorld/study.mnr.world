import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

interface ExternalLinkProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const ExternalLink = ({ href, text, icon, className }: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-primary hover:underline inline-flex items-center gap-1 ${className}`}
    >
      {icon}
      {text}
    </Link>
  );
};

export default ExternalLink;
