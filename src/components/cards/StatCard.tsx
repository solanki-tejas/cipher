import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { borderRadius, boxShadow } from "@/styles/theme";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, title, value }) => {
  const theme = useTheme(); // Access the theme for styling

  return (
    <Card
      sx={{
        // Glassy frosted effect without box shadow
        background: theme.palette.background.paper, // Light transparent background
        borderRadius: borderRadius, // Rounded corners
        overflow: "hidden", // Ensure content doesn't spill out of card
      }}
    >
      <CardContent sx={{ padding: "16px" }}>
        <div className="flex items-start gap-3">
          {/* Icon with primary color */}
          <div
            style={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: "50%",
              padding: "8px",
              color: "#fff",
              display: "inline-flex",
            }}
          >
            {icon}
          </div>
          <div>
            {/* Title with secondary color */}
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              {title}
            </Typography>
            {/* Value with primary color */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                color: theme.palette.primary.main,
              }}
            >
              {value}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
