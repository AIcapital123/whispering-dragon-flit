import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RadialBar,
  RadialBarChart,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const MOCK_RISK_SCORE = 75;

export function RiskMeter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lease Risk Score</CardTitle>
        <CardDescription>Based on your latest upload</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[150px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="80%"
              outerRadius="100%"
              data={[{ value: MOCK_RISK_SCORE }]}
              startAngle={180}
              endAngle={0}
              barSize={20}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                dataKey="value"
                cornerRadius={10}
                fill="var(--color-fill)"
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <div
            className="absolute inset-0 flex flex-col items-center justify-end"
            style={{ bottom: "15%" }}
          >
            <span className="text-4xl font-bold text-thai-blue">
              {MOCK_RISK_SCORE}
            </span>
            <span className="text-sm text-muted-foreground">Medium Risk</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}