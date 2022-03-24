import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import FaceIcon from "@mui/icons-material/Face";
import Avatar from "@mui/material/Avatar";
import { AFormPaper } from "../../components/theme";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../_redux_apis/selectors";
import { useActions } from "../../_redux_apis/actions/callActions";

const Login = (props) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const user = useSelector(getUser);
  const { fetchUserRequest } = useActions();

  const signIn = (e) => {
    fetchUserRequest(userName, password);
    props.setUser(user);
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto"
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <AFormPaper elevation={10} style={paperStyle}>
        <Grid alignItems="center">
          <Avatar style={avatarStyle}>
            <FaceIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={(e) => signIn(e)}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </AFormPaper>
    </Grid>
  );
};

export default Login;
