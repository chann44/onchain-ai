import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { AgentCard } from "@/components/agent/agent-card";
import Link from "next/link";
import { dummyAgentsData } from "@/data/agent-card";

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Trading Agents</h1>
          <Link href="/app/new-agent">
            <Button className="bg-primary hover:bg-primary/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Agent
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyAgentsData.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
}
