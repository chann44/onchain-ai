import { FolderOpen, Link, LucideImage, Zap } from "lucide-react";

const AGENT_STATS_DATA = [
    {
        label: "ETH",
        value: "0.0",
        icon: <Link className="" />,
    },

    {
        label: "NFTs",
        value: "0.0",
        icon: <LucideImage/>,
    },
    {
        label: "Collections",
        value: "0.0",
        icon: <FolderOpen />,
    },

    {
        label: "Core Value",
        value: "0.0",
        icon: <Zap />
    }
]

export function AgentHeaderStats() {
    return <section className="grid grid-cols-2 gap-6 justify-between">
        {AGENT_STATS_DATA.map(({ icon, label, value }) => {
            return <div key={label} className="col-span-1 flex gap-3 items-center">
                {icon}
                <div className="flex items-center gap-2 text-xl font-medium">
                    <p className="underline font-bold">{value}</p>
                    <p>{label}</p>

                </div>
            </div>
        })}
    </section>

}
