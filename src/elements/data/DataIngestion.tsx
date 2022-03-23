import { useState } from "react";
import SubHeader from "../../components/SubHeader";
import { IngestionOptions } from "./IngestionOptions";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import ADialog from "../../components/Dialog";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary
}));
const DataIngestion = () => {
  const [open, setOpen] = useState(false);

  //  const [selected, setSelected] = useState(INGESTION_ENDPOINTS["Select"].text);
  // const handleSelect = (e) => {
  //   setSelected(e.target.value);
  // };
  const [tasks, setTaks] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
    setOpen(true);
  };
  const cancelIngestion = () => {
    setCounter(counter - 1);
    console.log(`Closing with counter in Cancel: ` + counter);
    setOpen(false);
  };
  const saveIngestion = (e) => {
    console.log(`Saving with counter in Save: ` + counter);
    const abc = {};
    abc[e.target.className] = e.target.value;
    setInputValues({ ...inputValues, ...abc });
    setOpen(false);
  };
  const saveIngestiontask = (e) => {
    console.log(`Saving as task with counter in Save: ` + counter);
    const abc = {};
    abc[e.target.className] = e.target.value;
    setTaks({ ...tasks, ...abc });
    setOpen(false);
  };
  const handleDClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
  };

  return (
    <div>
      <SubHeader
        display="Configure you data ingestion points"
        addButton="ture"
        buttonText="Create new"
        buttonClick={() => handleClick()}
        buttonIcon={<AddIcon />}
      />
      {Object.keys(inputValues).map((c) => {
        return (
          <Grid item xs={16}>
            {inputValues[c]}
          </Grid>
        );
      })}
      {Array.from(Array(counter)).map((c, index) => {
        return (
          <ADialog
            open={open}
            displaytext="New Ingestion"
            content="Configure new data ingestion endpoint"
            canceltext="Cancel"
            submittext="Save"
            extrab="Save as Task"
            handleCancel={cancelIngestion}
            handleSave={saveIngestion}
            extraHandleExtra={saveIngestiontask}
            handleClose={handleDClose}
          >
            {<IngestionOptions />}
          </ADialog>
        );
      })}
    </div>
  );
};

export default DataIngestion;
