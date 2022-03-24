import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";

import { useGetHit } from "src/query/pixabay";

type DetailParamType = {
  img_id: string;
};

export const Detail: React.FC = () => {
  const { img_id } = useParams<DetailParamType>();

  const { data, isLoading, error } = useGetHit(img_id || "");
  console.log(data);

  return (
    <Box sx={{ padding: "30px" }}>
      <Typography
        variant="h1"
        color="primary"
        sx={{
          textAlign: "center",
          marginY: "40px",
          fontSize: "30px",
          fontWeight: 800,
        }}
      >
        Pixabay Image Detail
      </Typography>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      {error && (
        <Typography variant="h4" color="error" sx={{ textAlign: "center" }}>
          {error.response?.status === 429
            ? "API rate limit exceeded. Please try later or create new account."
            : "Failed to connect to server. Please try again later."}
        </Typography>
      )}
      {!isLoading && !data?.data.hits.length && !error && (
        <Typography variant="h4" color="error" sx={{ textAlign: "center" }}>
          The hit is not existed
        </Typography>
      )}
      {/* {!isLoading && hits.length && <DataViewer data={hits} />}*/}
    </Box>
  );
};
