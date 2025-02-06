import { Card, CardContent } from "@mui/material";

interface TrafficCardProps {
  visitors: number;
  percentage: string;
}

export const TrafficCard: React.FC<TrafficCardProps> = ({
  visitors,
  percentage,
}) => {
  return (
    <Card sx={{ bgcolor: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-gray-500 text-sm">Daily Traffic</div>
            <div className="text-2xl font-bold mt-1">
              {visitors.toLocaleString()}
            </div>
            <div className="text-gray-500 text-sm">Visitors</div>
          </div>
          <div className="text-green-500">{percentage}</div>
        </div>
      </CardContent>
    </Card>
  );
};
