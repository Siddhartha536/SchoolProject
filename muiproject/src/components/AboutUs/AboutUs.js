import React from "react";
import Home from "../Home/Home";
import { Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
export const AboutUs = () => {
  return (
    <div>
      <Grid container>
        <Grid items xs={12}>
          <Home />
        </Grid>
        <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
          <Grid item xs={4} style={{ border: "2px solid red" }}></Grid>
          <Grid item xs={4} style={{ border: "2px solid green" }}>
            <Grid item xs={12}>
              Green Secondary School
            </Grid>
            <Grid item xs={12}>
              <div>
                <div>Contact Us</div>
                <div>
                  <PhoneIcon /> 9353404609
                </div>

                <div>
                  <LocationOnIcon /> Green Secondary School <br></br>{" "}
                  Rajbiraj-01,Saptari<br></br>Nepal
                </div>
              </div>
            </Grid>
            <Grid>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <div style={{ cursor: "pointer" }}>
                  <FacebookIcon />
                </div>
                <div style={{ cursor: "pointer" }}>
                  <YouTubeIcon />
                </div>
                <div style={{ cursor: "pointer" }}>
                  <TwitterIcon />
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={4} style={{ border: "2px solid blue" }}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};
