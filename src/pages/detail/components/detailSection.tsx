import React from "react";
import { Grid, Box, Typography, Avatar } from "@mui/material";

import { DetailItem } from "./detailItem";
import { IHit } from "src/types/pixabay";

interface DetailSectionPropType {
  hit: IHit;
}

export const DetailSection: React.FC<DetailSectionPropType> = ({ hit }) => {
  return (
    <Grid container sx={{ maxWidth: "1200px", marginX: "auto" }}>
      <Grid item xs={12} md={5} sx={{ marginBottom: "20px" }}>
        <img src={hit.imageURL} width="100%" alt="Hit" data-testid="hitImage" />
      </Grid>
      <Grid item xs={0} md={1} />
      <Grid item xs={12} md={6}>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Avatar
              alt={hit.user}
              src={hit.userImageURL}
              sx={{ marginRight: "12px" }}
            />
            <Typography
              color="secondary"
              sx={{ fontSize: "30px", fontWeight: 600 }}
              data-testid="userName"
            >
              {hit.user}
            </Typography>
          </Box>
          <DetailItem title="Tags" content={hit.tags} />
          <DetailItem title="Views" content={hit.views} />
          <DetailItem title="Downloads" content={hit.downloads} />
          <DetailItem title="Size" content={hit.imageSize} />
        </Box>
      </Grid>
    </Grid>
  );
};
