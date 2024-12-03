import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"


export function GlobalAgentInfoSheet() {
    return <Sheet>
        <SheetTrigger asChild>
            <Button size={"lg"}>Create Your Agent</Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
            <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>

}
