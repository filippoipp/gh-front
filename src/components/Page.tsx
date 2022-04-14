import { Container, Typography } from "@mui/material";
import * as React from "react";

type PageProps = {
  title: string;
  children: any;
};
export const Page: React.FC<PageProps> = (props) => {
  return (
    <Container style={{ maxWidth: '100%'}}>
      <Typography style={{ color: "#999999" }} component="h1" variant="h5">
        {props.title}
      </Typography>
      {props.children}
    </Container>
  );
};
