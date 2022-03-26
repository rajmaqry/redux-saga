import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { APaper } from "../../components/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { IWorkSpaceMap } from "../../_redux_apis/models/user";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
export const SelectWorkspace = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleSelect = (e, id) => {
    props.selected(id);
    props.isselected(true);
  };

  const handleCreate = (e) => {
    setOpen(true);
  };

  const createWorkSpace = (e, name) => {
    console.log(name);
    const new_workSpace: IWorkSpaceMap = {
      workspace_id: name,
      workspace_name: name,
      create_by: props.user.user_id,
      created_at: "new"
    };
    props.workspaces.push(new_workSpace);
    console.log(props.workspaces);
    setOpen(false);
  };
  React.useEffect(() => {
    // console.log("LOGIN:::" + JSON.stringify(user));
    //e.preventDefault();
  }, [props.workspaces]);
  return (
    <>
      <APaper elevation={10}>
        <Grid container direction="column">
          {props.workspaces.map((val) => (
            <Grid item>
              <Button
                variant="contained"
                onClick={(e) => handleSelect(e, val.workspace_id)}
                id={val.workspace_id}
              >
                {val.workspace_name}
              </Button>
            </Grid>
          ))}
          <Grid item>
            <Button variant="contained" onClick={(e) => handleCreate(e)}>
              Create new
            </Button>
          </Grid>
        </Grid>
      </APaper>
      <CreatetWorkspace
        open={open}
        createWorkSpace={createWorkSpace}
        handleClose={createWorkSpace}
      />
    </>
  );
};

export const CreatetWorkspace = (props) => {
  const [workspaceName, setName] = React.useState("");
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Workspace Name
          </Typography>
          <TextField
            label="Workspace Name"
            placeholder="Workspace Name"
            fullWidth
            required
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: "10px" }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            onClick={(e) => props.createWorkSpace(e, workspaceName)}
          >
            Create
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
