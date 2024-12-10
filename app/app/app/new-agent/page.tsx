"use client";
import { CustomAgentForm } from "@/components/agent/custom-agent-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CreaeNewAgentPage() {
  return (
    <main className="flex flex-col gap-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-light">
            Create Your Custom Agent
          </CardTitle>
          <CardDescription className="text-xl">
            Give Your Agent a unique skill set
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CustomAgentForm />
        </CardContent>
      </Card>
    </main>
  );
}
