import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description: string;
  className?: string;
};

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("text-center py-16 md:py-24", className)}>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">{title}</h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
