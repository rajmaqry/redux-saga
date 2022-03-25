import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { APaper } from "../../components/theme";

export const SelectWorkspace = (props) => {
  return (
    <Grid>
      <APaper elevation={10}>
        <Grid alignItems="center"></Grid>
        {Object.keys(this.props.options).map((val) => (
          <Grid item xs>
            <Button
              variant="contained"
              onClick={props.selected(val.workspace_id)}
            >
              {val.workspace_name}
            </Button>
          </Grid>
        ))}
      </APaper>
    </Grid>
  );
};

export const CreatetWorkspace = (props) => {
  return (
    <Grid>
      <APaper elevation={10}>
        <Grid alignItems="center"></Grid>
        {Object.keys(this.props.options).map((val) => (
          <Grid item xs>
            <Button
              variant="contained"
              onClick={props.selected(val.workspace_id)}
            >
              {val.workspace_name}
            </Button>
          </Grid>
        ))}
      </APaper>
    </Grid>
  );
};
