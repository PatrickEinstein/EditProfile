import { faker } from "@faker-js/faker";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Forms = () => {
  const theme = useTheme();
  return (
    <Box>
      <Stack
        spacing={2}
        justifyContent="space-between"
        alignItems={"center"}
        sx={{
          width: "auto",
          padding: 5,
        }}
      >
        {/* 1 */}
        <Avatar src={faker.image.avatar()} />
        {/* w */}
        <Stack width="400px">
          <Box sx={{ width: "100%" }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 6">
                <TextField
                  label="Firstname"
                  id="outlined-size-small"
                  size="small"
                />
              </Box>
              <Box gridColumn="span 6">
                <TextField
                  label="Lastname"
                  id="outlined-size-small"
                  size="small"
                />
              </Box>
              <Box gridColumn="span 12">
                <TextField
                  label="E-mail"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 12">
                <TextField
                  label="Contact"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 12">
                <TextField
                  label="Adress"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 6">
              <TextField
                  label="City"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 6">
              <TextField
                  label="State"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 6">
              <TextField
                  label="Zip Code"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                />
              </Box>
              <Box gridColumn="span 6">
              <TextField
                  label="Country"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                />
              </Box>
            </Box>
          </Box>
        </Stack>
        <Button
          variant="contained"
          color="info"
          style={{
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "8px",
            }}
            color={theme.palette.primary.main}
          >
            Save
          </Typography>
        </Button>
        {/* 3 */}
      </Stack>
    </Box>
  );
};
