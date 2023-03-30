
import { Stack } from "@mui/material";
import React from "react";
import { Dashboard } from "./Profile/Dashboard";
import { Relationship } from "./Relationship/relationship";

function App() {

return(
 
<Stack 

justifyContent= "space-around"
alignItems= "center"
sx={{
 
  pt:3,
  pl:2,
  pr:2,
  pb:3
}}

>

    <Dashboard/>
    <Relationship/>
    </Stack>
  );
}

export default App;
