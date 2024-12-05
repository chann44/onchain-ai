import { AgentHeaderStats } from "@/components/agent/agent-header";
import { AgentProfile } from "@/components/agent/agent-profile";
import { AgentSkillTratis } from "@/components/agent/agent-skill-traits";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function AgentProfilePage() {
    return <main className="w-full flex flex-col gap-y-10">
        <section className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-10">
                <div className="flex items-center justify-start">
                    <Avatar className="size-20">
                        <AvatarImage className="size-20" src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <AgentHeaderStats />
                <AgentSkillTratis /> 
            </div>
            <div>
                <AgentProfile />
            </div>
        </section>
        <Separator />
    </main>
}
