import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { CaretRight, Money, Notification, Pencil, Shield } from "phosphor-react";
import React from "react";



export const MiddleTab = ( ) =>{
    return(
        <Box
    sx={{
        width:"40%"
    }}
    >
<Stack>
    <Stack direction="row" justifyContent="space-between" alignItem="center">
        <IconButton>
            <Pencil/>
        </IconButton>
        <Typography
        paddingTop={1.5}
        sx={{
            fontSize:"12px"
        }}
        >Edit Profile</Typography>
        <IconButton>
            <CaretRight/>
        </IconButton>
    </Stack>
    <Divider/>
    <Stack direction="row" justifyContent="space-between" alignItem="center">
        <IconButton>
            <Notification/>
        </IconButton>
        <Typography
        paddingTop={1.5}
        sx={{
            fontSize:"12px"
        }}
        >Notification</Typography>
        <IconButton>
            <CaretRight/>
        </IconButton>
    </Stack>
    <Divider/>
    <Stack direction="row" justifyContent="space-between" alignItem="center" spacing={0.5}>
        <IconButton>
            <Money/>
        </IconButton>
        <Typography
        paddingTop={1.5}
       
        sx={{
            fontSize:"12px",
            align :"left"
        }}
        >Choose plan</Typography>
        <IconButton>
            <CaretRight/>
        </IconButton>
    </Stack>
    <Divider/>
    <Stack direction="row" justifyContent="space-between" alignItem="center">
        <IconButton>
            <Shield/>
        </IconButton>
        <Typography
        paddingTop={1.5}
        align ="left"
        sx={{
            fontSize:"12px"
        }}
        >Password and Security</Typography>
        <IconButton>
        <CaretRight/>
        </IconButton>
    </Stack>
    <Divider/>
</Stack>

    </Box>
    )
}