'use client'

import { MarketingDock } from "@/components/marketing/marketing-dock";
import { MarketingTopNav } from "@/components/marketing/marketing-top-nav";

export default function MarketingPage() {
    return <main className="relative">
        <MarketingTopNav />
        <MarketingDock />
    </main>
}
