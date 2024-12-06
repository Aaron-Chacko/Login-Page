import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import aquilagusLogo from "./image/aquilagusLogo.jpg"; // Import your logo image
import TextField from "@mui/material/TextField";
import "./App.css";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function Languagedropdown() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "10px",
      }}
    >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-standard-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={1}>English</MenuItem>
          <MenuItem value={2}>Sinhala</MenuItem>
          <MenuItem value={3}>Hindi</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const card = (
  <React.Fragment>
    <CardContent>
      {/* Display the logo as a small icon */}
      <img
        src={aquilagusLogo}
        alt="Aquilagus Logo"
        style={{ width: "50px", height: "50px", marginBottom: "10px" }}
      />
      <Typography
        gutterBottom
        sx={{
          fontFamily: "Russo one, sans-serif",
          color: "text.primary",
          fontSize: 30,
          fontWeight: "bold",
          textShadow: "0px 0px 10px rgba(0, 255, 255, 0.45)", // glow effect
          animation: "pulse 2s infinite",
        }}
      >
        AQUILAGUS
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{ marginBottom: "20px", fontFamily: "Audiowide, sans-serif" }}
      >
        {bull}Aquilagus{bull}Login{bull}
      </Typography>
      <Typography>
        <TextField
          id="outlined-basic"
          label="Alias"
          variant="outlined"
          sx={{
            width: "500px",
            marginBottom: "25px",
            "&:focus-within": {
              borderColor: "#00FFFF", // Neon cyan border color when focused
              boxShadow: "0 0 5px #00FFFF", // Neon cyan glow effect on focus
              transition: "all 0.3s ease", // Smooth transition
            },
          }}
        />
      </Typography>
      <TextField
        id="outlined-basic"
        label="Code"
        variant="outlined"
        sx={{
          width: "500px",
          marginBottom: "25px",
          "&:focus-within": {
            borderColor: "#00FFFF", // Neon cyan border color when focused
            boxShadow: "0 0 5px #00FFFF", // Neon cyan glow effect on focus
            transition: "all 0.3s ease", // Smooth transition
          },
        }}
      />
      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
        <Checkbox {...label} />
        Remember Me?
      </Typography>
      <Typography>
        <Button
          variant="contained"
          sx={{
            width: "500px",
            marginBottom: "20px",
            backgroundColor: "#FF0090",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 5)",
            "&:hover": {
              backgroundColor: "pink", // Change the hover color to pink
              transform: "scale(1.05)",
            },
          }}
        >
          Proceed{" "}
        </Button>
      </Typography>
      <Button
        href="#text-buttons"
        sx={{ fontFamily: "Arial, sans-serif", fontSize: "13px" }}
      >
        Forgot Password?
      </Button>
      <Languagedropdown />
    </CardContent>
    <CardActions sx={{ justifyContent: "space-between" }}>
      <Button size="small">Learn More</Button>{" "}
      <Button size="small">Enable Cookies?</Button>
    </CardActions>
  </React.Fragment>
);

function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 550, minHeight: 550 }}>
      <Card
        variant="outlined"
        sx={{ borderRadius: "25px", boxShadow: "0 4px 20px rgba(0, 0, 0, 10)" }}
      >
        <CardContent sx={{ padding: 3 }}>{card}</CardContent>
      </Card>
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <div className="background">
        <header className="App-header">
          <Box
            sx={{
              background:
                "linear-gradient(45deg, #FF007F, #00F0FF, #9C27B0, #00CFFF)", // Cyberpunk Gradient
              padding: 3,
              borderRadius: 5,
              boxShadow: 3,
            }}
          >
            <OutlinedCard />
          </Box>
        </header>
      </div>
    </div>
  );
}

export default App;
