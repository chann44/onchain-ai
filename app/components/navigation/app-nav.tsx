import { Button} from "../ui/button";
import { SiteLogo } from "../logo/transparent";

export function MainAppTopNav() {
    return <nav className="h-16 mb-10 flex w-full bg-transparent justify-between items-center">
        <SiteLogo className="h-6 w-6 stroke-primary" />
        <Button >Connect Wallet</Button>
    </nav>
}
