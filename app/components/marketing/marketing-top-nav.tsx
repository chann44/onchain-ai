import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { SiteLogo } from "../logo/transparent";

export function MarketingTopNav() {
  return (
    <nav className="h-16 flex w-full bg-transparent justify-between items-center">
      <SiteLogo className="h-6 w-6 stroke-primary" />
      <Link
        href={"/app/about"}
        className={cn(
          buttonVariants({ variant: "link", size: "lg" }),
          "text-xl"
        )}
      >
        About
      </Link>
    </nav>
  );
}
