import { cn } from "@/lib/utils"
import { Slider } from "../ui/slider"

const agentSkillTratis = [
    {
        label: "Risk Tolerance",
        value: 90,
    },
    {
        label: "Rationality",
        value: 30
    },
    {
        label: "Autonomy",
        value: 40,
    }
]


export function AgentSkillTratis() {
    return <div className="flex flex-col gap-y-10">

        <h2 className="text-xl text-primary font-bold underline">Agent Skill Traits</h2>
        <div className="flex flex-col gap-y-10">
            {
                agentSkillTratis.map(({ label, value }) => {

                    return <div key={label}>
                        <p>{label}</p>
                        <Slider
                            defaultValue={[value]}
                            max={100}
                            step={1}
                            className={cn("w-[60%]",)}
                        />
                    </div>
                })
            }
        </div>
    </div>
}
