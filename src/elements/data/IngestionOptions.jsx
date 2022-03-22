import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DataForm } from "./IngestionForms";
import { INGESTION_ENDPOINTS } from "./data_ingestions";
import SelectButton from "../../components/SelectButton";
import { APaper, paperTheme, AFormPaper } from "../../components/theme";

export const IngestionOptions = () => {
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
    <ThemeProvider theme={paperTheme}>
      <Grid
        container
        spacing={2}
        columns={16}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            Select ingestion endpoints:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          {ingestionOptions()}
        </Grid>
        {isSelected && (
          <Grid item xs={16}>
            {renderDetailsForm(selected)}
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
};
