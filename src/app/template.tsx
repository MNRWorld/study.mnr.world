export default function Template({ children }: { children: React.ReactNode }) {
  return <main className="flex-grow animate-fade-in-up">{children}</main>;
}
