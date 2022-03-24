import React from "react";
import { Grid } from "@mui/material";

import { HitItem } from "./hitItem";
import { IHit } from "src/types/pixabay";

interface DataViewerPropType {
  data: IHit[];
}

export const DataViewer: React.FC<DataViewerPropType> = ({ data }) => {
  return (
    <Grid container spacing={2} sx={{ maxWidth: "1440px", marginX: "auto" }}>
      {data.map((hit) => (
        <HitItem key={hit.id} hit={hit} />
      ))}
    </Grid>
  );
};
