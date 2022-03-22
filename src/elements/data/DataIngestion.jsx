import { useState } from "react";
import { INGESTION_ENDPOINTS } from "./data_ingestions";
import SubHeader from "../../components/SubHeader";
import { IngestionOptions } from "./IngestionOptions";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary
}));
const DataIngestion = () => {
  const [selected, setSelected] = useState(INGESTION_ENDPOINTS["Select"].text);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleOnChange = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setInputValues({ ...inputValues, ...abc });
  };

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      justifyContent="center"
      alignItems="strech"
    >
      <Grid item xs={12}>
        <SubHeader
          display="Configure you data ingestion points"
          addButton="ture"
          buttonText="Create new"
          buttonClick={() => handleClick()}
          buttonIcon={<AddIcon />}
        />
      </Grid>
      {Object.keys(inputValues).map((c) => {
        return (
          <Grid item xs={12}>
            {inputValues[c]}
          </Grid>
        );
      })}
      {Array.from(Array(counter)).map((c, index) => {
        return (
          <Grid item xs={12}>
            <Item onChange={handleOnChange} key={c} className={index}>
              {<IngestionOptions />}
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DataIngestion;
