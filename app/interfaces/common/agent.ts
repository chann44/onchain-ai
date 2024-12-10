export interface Agent {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Inactive";
  image: string;
  riskLevel: string;
  stopLoss: number;
  roles: string[];
  target: number;
  targetDate: string;
}
