'use client'

import { BeamOfLight } from "@/components/marketing/beam-of-light";
import { MarketingDock } from "@/components/marketing/marketing-dock";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingTopNav } from "@/components/marketing/marketing-top-nav";

export default function MarketingPage() {
    return <main className="relative">
        <MarketingTopNav />
        <BeamOfLight />
        <MarketingHeader />
        <MarketingDock />
    </main>
}
