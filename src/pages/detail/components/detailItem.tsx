import React from "react";
import { Box, Typography } from "@mui/material";

interface DetailItemPropType {
  title: string;
  content: string | number;
}

export const DetailItem: React.FC<DetailItemPropType> = ({
  title,
  content,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <Typography
        sx={{
          fontWeight: 600,
          width: "120px",
          textAlign: "right",
          marginRight: "4px",
          fontSize: "20px",
        }}
      >
        {`${title}:`}
      </Typography>
      <Typography sx={{ fontSize: "16px" }}>{content}</Typography>
    </Box>
  );
};
