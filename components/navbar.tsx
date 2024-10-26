"use client";

import { Music2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const pathname = usePathname();
  
  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/create",
      label: "Create",
      active: pathname === "/create",
    },
    {
      href: "/pricing",
      label: "Pricing",
      active: pathname === "/pricing",
    },
  ];

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-x-2">
          <Music2Icon className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">AI Music Lab</span>
        </Link>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 flex-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-primary" : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-x-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}