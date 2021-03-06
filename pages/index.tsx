import type { NextPage } from "next";
import Head from "next/head";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import MuiTypography from "../src/components/MuiTypography";
import MuiButton from "../src/components/MuiButton";
import MuiButtonGroup from "../src/components/MuiButtonGroup";
import MuiToogleButton from "../src/components/MuiToogleButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MUI Course</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Container>
          <Stack direction="column" alignItems="center" spacing={4} py={2}>
            <Typography variant="h2" component="h1" textAlign="center">
              MUI full course 2022
            </Typography>
            {/* <MuiTypography /> */}
            {/* <MuiButton /> */}
            {/* <MuiButtonGroup /> */}
            <MuiToogleButton />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
