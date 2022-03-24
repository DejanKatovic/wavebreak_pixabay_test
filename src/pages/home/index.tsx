import React, { useMemo } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

import { DataViewer } from "./components/dataViewer";
import { LoadMore } from "src/components/loadMore";
import { useGetHits } from "src/query/pixabay";
import { IHit } from "src/types/pixabay";

export const Home: React.FC = () => {
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetHits();

  const hits = useMemo(
    () =>
      data?.pages.reduce(
        (prev: IHit[], curr) => [...prev, ...(curr.data.hits || [])],
        []
      ) || [],
    [data]
  );

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
        Pixabay API Test
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
      {!isLoading && !hits.length && !error && (
        <Typography variant="h4" color="info" sx={{ textAlign: "center" }}>
          No hits
        </Typography>
      )}
      {!isLoading && hits.length && <DataViewer data={hits} />}
      {hasNextPage ? (
        <LoadMore isLoading={isFetchingNextPage} onLoad={fetchNextPage} />
      ) : null}
    </Box>
  );
};
