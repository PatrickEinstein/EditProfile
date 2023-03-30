import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Bookmark, Briefcase, GearSix, StackSimple, UserFocus } from "phosphor-react";
import React from "react";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const Leftboard =( ) =>{
    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery("(min-width:600px)");
    return(
        <Stack
          sx={{
            width: "auto",
            height: "auto",
            backgroundColor: "blue",
            borderTopLeftRadius:isNonMobileScreen ? "8%" : "0",
            borderBottomLeftRadius: isNonMobileScreen ? "8%" : "0",
            backgroundColor: "black",
            
          }}
        >
          <Stack spacing={2} alignItems="center" justifyContent="flex-start" padding={5}>
            <IconButton color="info" size="large">
              <GearSix />
            </IconButton>
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <IconButton color="info" size="medium">
                <StackSimple />
              </IconButton>
              <Typography
                align="center"
                color={theme.palette.secondary.contrastText}
                sx={{
                  fontWeight: "bold",
                  fontSize: "10px",
                  pt: 2,
                }}
              >
                {" "}
                Dashboard
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              alignItem="center"
              justifyContent="center"
            >
              <IconButton color="info" size="medium">
                <UserFocus />
              </IconButton>
              <Typography
                align="left"
                color={theme.palette.secondary.contrastText}
                sx={{
                  fontWeight: "bold",
                  fontSize: "10px",
                  pt: 2,
                }}
              >
                {" "}
                Profile
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              alignItem="center"
              justifyContent="center"
            >
              <IconButton color="info" size="medium">
                <Briefcase />
              </IconButton>
              <Typography
                align="center"
                color={theme.palette.secondary.contrastText}
                sx={{
                  fontWeight: "bold",
                  fontSize: "10px",
                  pt: 2,
                }}
              >
                {" "}
                Job Feed
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              alignItem="center"
              justifyContent="center"
            >
              <IconButton color="info" size="medium">
                <Bookmark />
              </IconButton>
              <Typography
                align="center"
                color={theme.palette.secondary.contrastText}
                sx={{
                  fontWeight: "bold",
                  fontSize: "10px",
                  pt: 2,
                }}
              >
                {" "}
                Save Jobs
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              alignItem="center"
              justifyContent="center"
            >
              <IconButton color="info" size="medium">
                <GearSix />
              </IconButton>
              <Typography
                align="center"
                color={theme.palette.secondary.contrastText}
                sx={{
                  fontWeight: "bold",
                  fontSize: "10px",
                  pt: 2,
                }}
              >
                {" "}
                Settings
              </Typography>
            </Stack>
          </Stack>
        </Stack>
    )
}