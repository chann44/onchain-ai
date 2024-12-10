import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Agent } from "@/interfaces/common/agent";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-900/50 border-gray-800">
      <div className="relative">
        <img
          alt={agent.name}
          className="object-cover w-full h-48 rounded-t-lg"
          src="https://img.freepik.com/premium-vector/agent-logo-vector-detective-logo_776251-7.jpg"
        />
        <Badge
          className={`absolute top-2 right-2 ${
            agent.status === "Active"
              ? "bg-green-500/20 text-green-500"
              : "bg-red-500/20 text-red-500"
          }`}
        >
          {agent.status}
        </Badge>
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold text-white">{agent.name}</h3>
        <p className="text-sm text-gray-400">{agent.description}</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-400">Risk Level</p>
            <p className="font-medium text-white">{agent.riskLevel}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Stop Loss</p>
            <p className="font-medium text-white">${agent.stopLoss}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.roles.map((role) => (
            <Badge
              key={role}
              variant="secondary"
              className="bg-gray-800 text-gray-300"
            >
              {role}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-400">
          <span>Target: ${agent.target}</span>
          <span>{agent.targetDate}</span>
        </div>
      </CardContent>
    </Card>
  );
}
