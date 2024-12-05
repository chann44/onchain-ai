import { MoveUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { IntroText } from "./intro-text";

export function MarketingHeader() {
    return <section className="min-h-[80%] flex items-center justify-center pt-16 overflow-hidden">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <IntroText /> 
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                AI-Powered 
                <br />
                <span className="text-primary"> Trading Platform</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-secondary-foreground mb-8">
                Intelligent profile analysis, automated job matching, and AI-driven insights for both talent and recruiters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="min-w-[200px] h-14 text-xl">

                    Trade Now
                    <MoveUpRight className="ml-2 h-6 w-6 shrink-0" />
                </Button>

            </div>
        </div>
    </section>

}
