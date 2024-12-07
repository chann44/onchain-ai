import { Bot, Key, ShieldCheck } from "lucide-react";
import { MagicCard } from "../ui/magic-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const steps = [
    {
      icon: Bot,
      title: "Create Your Agent",
      description: "Define your AI trading agent with pre-configured skills and strategies for memecoin trading.",
      items: [
        "Trend Analysis",
        "Volatility Management",
        "Social Sentiment Tracking"
      ]
    },
    {
      icon: Key,
      title: "Grant Access",
      description: "Securely connect your trading account and set permissions for your AI agent.",
      items: [
        "Read market data",
        "Place orders",
        "Manage positions"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Start Secure Trading",
      description: "Activate your AI agent and monitor its performance with advanced security measures.",
      items: [
        "Real-time monitoring",
        "Automatic risk management",
        "Encrypted transactions"
      ]
    }
  ];


export function CreateYourCustomAgent() {
    return <section className="h-screen gap-y-20 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Create Your Custom Agent in 3 Steps</h2>
        <div className="grid grid-cols-3 gap-6 w-full">
        {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <MagicCard key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <StepIcon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm list-disc list-inside text-muted-foreground">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </MagicCard>
            );
          })}
 
        </div>
           </section>
}
