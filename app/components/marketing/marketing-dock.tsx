import React from "react";
import Link from "next/link";
import {
  BotMessageSquare,
  CalendarIcon,
  ChartNoAxesCombined,
  CircleFadingPlus,
  HomeIcon,
  MailIcon,
  PencilIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/app/agents", icon: BotMessageSquare, label: "Agents" },
    { href: "/app/alpha-chat", icon: CircleFadingPlus, label: "Alpha Chat" },
    { href: "#", icon: ChartNoAxesCombined, label: "Trade" },
  ],
};

export function MarketingDock() {
  return (
    <div className="fixed bottom-4 inset-x-0 tems-center justify-center overflow-hidden rounded-lg">
      <TooltipProvider>
        <Dock className="bg-primary text-primary-foreground" direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-12" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="mb-4 text-base bg-accent text-accent-foreground">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
