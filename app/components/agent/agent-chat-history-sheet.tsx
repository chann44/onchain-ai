'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from "../ui/tooltip";
import { LucideMessagesSquare } from "lucide-react";

export function AgentChatHistory() {
    const [open, setOpen] = useState(false)
    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button onClick={() => setOpen(true)} size={open ? "icon" : "default"} variant={"secondary"}>
                            <LucideMessagesSquare />
                            {open && <span>History</span>}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Chat History</p>
                    </TooltipContent>

                </Tooltip >
            </TooltipProvider>
        </SheetTrigger>
        <SheetContent>
            CHAT History
        </SheetContent>
    </Sheet>
}
