'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from "../ui/tooltip";
import { LucideBot} from "lucide-react";

export function AgentPolymarketQs() {
    const [open, setOpen] = useState(false)
    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <TooltipProvider>

        <Tooltip>
                <TooltipTrigger>
                    <Button size={ open ? "icon" : "default"} variant={"secondary"}>
                        <LucideBot/>
                        {open && <span>Polymarket</span>}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Chat History</p>
                </TooltipContent>

            </Tooltip>
            </TooltipProvider>
        </SheetTrigger>
        <SheetContent>
            CHAT History
        </SheetContent>
    </Sheet>
}
