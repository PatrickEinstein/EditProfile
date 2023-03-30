import { GetApp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";

import { CaretDown, Gear, Notification, Pen, Pencil } from "phosphor-react";

import { MiddleTab } from "./middletab";
import { Leftboard } from "./leftboard";
import { faker } from "@faker-js/faker";
import { Forms } from "./forms";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

export const Dashboard = () => {
  const [openDashboard, setOpenDashBoard] = useState(0);
  const [openList, setopenList] = useState(0);

  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        width: "auto",
        height: "auto",
      }}
    >
      {/* BOX 1 */}

      {isNonMobileScreen && <Leftboard />}

      {/*BODY BOX 2*/}
      <Stack spacing={1}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: isNonMobileScreen ? "100%" : 500,
            borderTopRightRadiusRadius: "8%",
            backgroundColor: "whitesmoke",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            justifyContents="space-between"
            alignItems="center"
            spacing={10}
          >
            {!isNonMobileScreen && (
              <Box>
                <Stack
                  direction="row"
                  justifyContents="space-between"
                  alignItems="center"
                >
                  <IconButton onClick={() => setOpenDashBoard((prev) => !prev)}>
                    <Gear />
                  </IconButton>
                  {openDashboard &&
                    (<Box
                    sx={{
                        position:"absolute",
                        top: "80px",
                        left : "0px",
                        zIndex:"5"
                    }}
                    >
                      <Leftboard />
                    </Box>)
                  }
                  <IconButton onClick={() => setopenList((prev) => !prev)}>
                    <Pencil />
                  </IconButton>

                  {openList &&
                    (<Box
                    sx={{
                        position:"absolute",
                        top: "80px",
                        right : "0px",
                        zIndex:"5",
                        backgroundColor:"powderblue"
                    }}
                    >
                      <MiddleTab/>
                    </Box>)
                  }
                  
                </Stack>
              </Box>
            )}
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  pt: 1,
                }}
              >
                My Profile
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" justifyContent="space-between">
                <IconButton>
                  <Notification />
                </IconButton>
                <Avatar src={faker.image.avatar()} />

                <IconButton>
                  <CaretDown />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Box
          sx={{
            width: "auto",
            height: "auto",
            borderBottomRightRadius: "8%",
            backgroundColor: "whitesmoke",
          }}
        >
          <Stack direction="row" spacing={2}>
            {isNonMobileScreen && <MiddleTab />}

            <Box
              sx={{
                width: "auto",
                height: "auto",
              }}
            >
              <Forms />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
