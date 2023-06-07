import React from "react";
import Home from "../Home/Home";
import { Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState, useEffect } from "react";
import { handleAPI } from "../../API/handleAPI";
import swal from "sweetalert";

import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ReactComponent as Student } from "../../images/Student.svg";
export const AboutUs = () => {
  let sid = (
    <img
      src="https://img.freepik.com/premium-photo/happy-schoolchild-uniform-hold-apple-books-yellow-background-back-school_545934-19098.jpg?w=2000"
      width="420px"
      height="450"
    />
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [hasSubmit, setHasSubmit] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  //Setting the value
  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmailId(event) {
    const inputLabel = event.target.value;
    setEmail(inputLabel);

    // Validate email using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    setIsValidEmail(emailRegex.test(inputLabel));
  }
  function handleQuery(event) {
    setQuery(event.target.value);
  }

  // function to save the input and call backend
  async function submitRequest() {
    setHasSubmit(true);
    console.log("Inside submit Request");
    if (!name.trim() || !email.trim() || !query.trim()) {
      alert("All fields Should be filled properly");
    } else {
      handleAPI("/aboutUs", {
        name: name,
        email: email,
        query: query,
      }).then((response) => {
        console.log("submit request response", response);
        swal({
          title: `Submitted!`,
          text: "Submitted Successfully",
          icon: "success",
          buttons: false,
          timer: 1500,
        });
      });
      setName("");
      setEmail("");
      setQuery("").catch((err) => {
        console.log("Error");
      });
    }
  }
  return (
    <div>
      <Grid container>
        <Grid items xs={12}>
          <Home />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            height: "40px",
            margin: "20px 0 20px 0",
          }}
        >
          <TextField
            variant="standard"
            label="Enter Name"
            name="name"
            value={name}
            onChange={handleName}
            helperText={
              hasSubmit && name.length === 0 ? "Name cannot be blank" : null
            }
            style={{ marginRight: "80px" }}
          />
          <TextField
            variant="standard"
            label="Enter Email"
            name="email"
            value={email}
            onChange={handleEmailId}
            helperText={
              hasSubmit && email.length === 0 ? "Email cannot be blank" : null
            }
            InputProps={{
              endAdornment: null,
            }}
            style={{ marginRight: "80px" }}
          />
          <TextField
            variant="standard"
            label="Enter Query"
            name="query"
            value={query}
            helperText={
              hasSubmit && query.length === 0 ? "Query cannot be blank" : null
            }
            onChange={handleQuery}
          />
          <Button
            onClick={submitRequest}
            style={{
              color: "green",
              background: "cream",
              margin: "10px 0px 0px 10px",
            }}
            disabled={!isValidEmail}
          >
            Submit{" "}
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            background: "aqua",
            marginTop: "20px",
          }}
        >
          <Grid item xs={4}>
            {/* <Student
              style={{
                height: "100%",
                width: "100%",
                border: "2px solid red",
              }}
            /> */}
            {sid}
          </Grid>
          <Grid item xs={4}>
            <Grid
              item
              xs={12}
              style={{
                height: "150px",
                fontWeight: "bolder",
                fontSize: "2em",
                color: "red",
              }}
            >
              Green Secondary School
            </Grid>
            <Grid item xs={12} style={{ height: "250px" }}>
              <div>
                <div>Contact Us</div>
                <div>
                  <PhoneIcon /> 9353404609
                </div>

                <div style={{ marginTop: "45px" }}>
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
          <Grid item xs={4}>
            {/* <Maps /> */}
            {
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3569.130962247915!2d86.7553417738451!3d26.54806037566912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDMyJzUzLjAiTiA4NsKwNDUnMjguNSJF!5e0!3m2!1sen!2sin!4v1684257730335!5m2!1sen!2sin"
                width="420"
                height="450"
                style={{
                  border: "0",
                  allowfullscreen: "",
                  loading: "lazy",
                  referrerpolicy: "no-referrer-when-downgrade",
                }}
                // style="border:0;"
                // allowfullscreen=""
                // loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
