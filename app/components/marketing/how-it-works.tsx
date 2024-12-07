'use client'

import { Bitcoin, BotMessageSquare, ChartCandlestick} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
    {
        Icon: ChartCandlestick,
        name: "AI-Driven Trading Profiles & Social Trend Alerts",
        description: `
            The Customizable Risk Profiles AI Agent allows users to choose their risk level 
from conservative to "degen," with tailored trading parameters for each profile. 
It also monitors Farcaster and Twitter/X, delivering timely alerts on trends, meme token 
promotions, and investment opportunities in the Web3 space.
        `,
        href: "#",
        cta: "Learn more",
        className: "col-span-4 lg:col-span-2",
        background: (
            <></>
        ),
    },
    {
        Icon: Bitcoin,
        name: "Meme Token Tracker & High-Risk Investment Insights",
        description: `
The Alphas Finding Agent tracks Coinbase and CoinMarketCap to 
identify trending meme tokens, offering verification parameters and 
links to DexScreener and Uniswap. It also highlights early-stage meme 
tokens with high return potential, albeit with significant risks.

        `,
        href: "#",
        cta: "Learn more",
        className: "col-span-4 lg:col-span-2",
        background: (
            <></>
        ),
    },
    {
        Icon: BotMessageSquare ,
        name: "Automatic Portfolio Management Agent",
        description: `
The Automatic Portfolio Management Agent optimizes meme coin 
investments by adjusting portfolios based on user-defined risk parameters 
and stop-loss settings, automatically handling investments and redemptions 
after USDC/ETH deposits while providing detailed transaction monitoring and
 manual sale options through the website

    `,
        href: "#",
        cta: "Learn more",
        className: "col-span-4 lg:col-span-4",
        background: (
            <>
            </>
        ),
    },

];

export function HowItWorks() {
    return <section className="h-screen flex flex-col justify-center items-center gap-y-32">
        <h2 className="text-4xl font-bold text-center">How it works ?</h2>
        <BentoGrid>
            {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
        </BentoGrid>

    </section>
}
