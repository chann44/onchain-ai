import { GlobalAgentInfoSheet } from "../agent/global-agent-info-sheet"
import { TransparentLogo } from "../logo/transparent"
import { UserProfilePopover } from "../user/user-profile-modal"

export function TopMainNav() {
    return <header className="w-full flex justify-between">
        <UserProfilePopover />
        <TransparentLogo />
        <GlobalAgentInfoSheet />
    </header>
}
