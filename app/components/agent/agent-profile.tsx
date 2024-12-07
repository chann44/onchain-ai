import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge"
import { Description } from "@/components/description"

export function AgentProfileBadge({ label, value, type }: {
    type: "green" | "yellow" | "normal"
    label: string
    value: string
}) {
    const badgeSTyle = type === "yellow" ? "bg-primary text-primary-foreground" : type === "green" ? "bg-green-500 text-white" : "text-foreground bg-blue-500"
    return <div className="flex flex-col gap-y-3 max-w-sm">
        <h2 className="text-xl font-bold underline">{label}</h2>
        <Badge className={cn("text-lg", badgeSTyle)}>{value}</Badge>
    </div>
}

const agentBadgeData = [
    {
        label: "Core Values",
        type: "green",
        value: "Aggresive"

    },
    {
        label: "Primary Aims",
        type: "yellow",
        value: "Profit"

    },
    {
        label: "Wallet Address",
        type: "normal",
        value: "0x.0x"

    }
]


export function AgentProfile() {
    return <section className="flex flex-col gap-y-6">
        {/*
            1. Core values
            2. wallet address
            3. personality
            */}
        <div className="flex flex-col gap-y-6">
            {agentBadgeData.map((badge) => {
                return <AgentProfileBadge key={badge.label} {...badge} />
            })}
        </div>
        <div>
            <h2 className="text-xl text-primary font-bold underline">Agent Description</h2>
            <Description description={
                `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, nisl a malesuada sagittis, lacus eros blandit metus, id varius nisl nunc ut arcu. Suspendisse euismod, magna vitae gravida condimentum, sapien urna scelerisque eros, nec cursus tortor arcu non libero. Curabitur ornare, neque sit amet scelerisque elementum, nulla justo vehicula risus, et suscipit velit elit id lectus. Donec at velit eu sapien ullamcorper dapibus. Aenean ultricies ex nec risus dictum, ut rhoncus urna vehicula. Sed facilisis, enim sed convallis aliquet, lectus nunc consequat magna, non fringilla velit nulla in elit. Duis id.`}>
            </Description>
        </div>
        <div>
            <h2 className="text-xl text-primary font-bold underline">Agent Prompt</h2>
            <Description description={
                `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, nisl a malesuada sagittis, lacus eros blandit metus, id varius nisl nunc ut arcu. Suspendisse euismod, magna vitae gravida condimentum, sapien urna scelerisque eros, nec cursus tortor arcu non libero. Curabitur ornare, neque sit amet scelerisque elementum, nulla justo vehicula risus, et suscipit velit elit id lectus. Donec at velit eu sapien ullamcorper dapibus. Aenean ultricies ex nec risus dictum, ut rhoncus urna vehicula. Sed facilisis, enim sed convallis aliquet, lectus nunc consequat magna, non fringilla velit nulla in elit. Duis id.`}>
            </Description>
        </div>
    </section>
}
