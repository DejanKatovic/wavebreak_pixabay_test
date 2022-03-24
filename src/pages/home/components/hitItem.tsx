import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@mui/icons-material";

import { IHit } from "src/types/pixabay";

interface HitItemPropType {
  hit: IHit;
}

export const HitItem: React.FC<HitItemPropType> = ({ hit }) => {
  const navigate = useNavigate();

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Card onClick={() => navigate(`/detail/${hit.id}`)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={hit.imageURL}
            alt="Hit Image"
          />
        </CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            {hit.user}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <FavoriteBorderIcon
            color="primary"
            sx={{ fontSize: "14px", marginRight: "4px" }}
          />
          <Typography sx={{ fontSize: "14px", marginRight: "10px" }}>
            {hit.likes}
          </Typography>
          <VisibilityIcon
            color="primary"
            sx={{ fontSize: "14px", marginRight: "4px" }}
          />
          <Typography sx={{ fontSize: "14px" }}>{hit.views}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
