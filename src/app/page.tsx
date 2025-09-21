import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline text-primary">
            DU Info Hub
          </CardTitle>
          <CardDescription>
            Your central hub for university information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-center">Hello World!</p>
        </CardContent>
      </Card>
    </main>
  );
}
