import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { ReactComponent as School } from "../../images/School.svg";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Grid container>
        <Grid xs={12}>
          <Grid
            style={{ display: "flex", flexDirection: "row", background: "red" }}
          >
            <Grid>
              <School style={{ height: "200px", width: "200px" }} />
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "5%",
                color: "white",
                fontWeight: "bold",
                border: "2px solid red",
              }}
            >
              <Grid style={{ fontSize: "30px", marginTop: "30px" }}>
                Green English Boarding School
              </Grid>
              <Grid
                style={{ margin: "80px 30px 0px 0px", border: "2px solid red" }}
              >
                Rajbiraj-9,Sapatari,Nepal
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <List style={{ display: "flex", flexDirection: "row" }}>
            <ListItem disablePadding>
              <ListItemButton button component={Link} to="/Hello">
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Academic" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Achievements" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Activities" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Staff" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Gallaries" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Alumni" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton button component={Link} to="/aboutus">
                <ListItemText primary="AboutUs" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Help Desk" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;
