'use client'

import { CreateYourCustomAgent } from "@/components/marketing/create-your-custom-agent";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { MarketingDock } from "@/components/marketing/marketing-dock";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingTopNav } from "@/components/marketing/marketing-top-nav";

export default function MarketingPage() {
    return <main className="relative">
        <MarketingTopNav />
        <MarketingHeader />
        <HowItWorks />
        <CreateYourCustomAgent />
        <MarketingDock />
    </main>
}
