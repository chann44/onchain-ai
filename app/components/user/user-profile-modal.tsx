import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { User } from "lucide-react"
import { Button } from "../ui/button"

export function UserProfilePopover() {
    return <Popover>
        <PopoverTrigger asChild>
            <Button className="w-14 h-14" variant={"ghost"} size={"icon"}>
                <User className="h-8 w-8" />
            </Button>
        </PopoverTrigger>
        <PopoverContent side="left" className="top-10">Place content for the popover here.</PopoverContent>
    </Popover>

}
