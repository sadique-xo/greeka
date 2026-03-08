import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#FAFCFF]">
      <h1 className="font-serif text-6xl font-bold text-[#1A5276] mb-2">404</h1>
      <p className="text-[#5D6D7E] mb-8">Page not found</p>
      <Link href="/">
        <Button className="gap-2">
          <Home className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
