import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DataForm } from "./IngestionForms";
import { INGESTION_ENDPOINTS } from "./data_ingestions";
import SelectButton from "../../components/SelectButton";
import { APaper, paperTheme, AFormPaper } from "../../components/theme";

export const IngestionOptions = (props) => {
  const [selected, setSelected] = useState(INGESTION_ENDPOINTS["Select"].text);
  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };
  const isSelected = selected !== "Select" ? true : false;
  const renderDetailsForm = (selected) => {
    switch (selected) {
      case "AWSS3":
        return (
          <AFormPaper elevation="2">
            <DataForm />
          </AFormPaper>
        );
      default:
        return <p></p>;
    }
  };

  const ingestionOptions = () => {
    return (
      <SelectButton
        name="ingestion_op"
        value={selected}
        id="ingestion_op"
        options={INGESTION_ENDPOINTS}
        onValueChange={(e) => handleSelect(e)}
      />
    );
  };
  return (
    <div>
      <Grid container spacing={2} columns={30}>
        <Grid item xs={15}>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            Select ingestion endpoints:
          </Typography>
        </Grid>
        <Grid item xs={15}>
          {ingestionOptions()}
        </Grid>
      </Grid>
      <span style={{ marginTop: "10px" }}></span>
      {isSelected && (
        <ThemeProvider theme={paperTheme}>
          <Grid container spacing={2} columns={30}>
            <Grid item xs={16}>
              {renderDetailsForm(selected)}
            </Grid>
          </Grid>
        </ThemeProvider>
      )}
    </div>
  );
};
