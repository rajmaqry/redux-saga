import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { INGESTION_ENDPOINTS } from "./data_ingestions";
import SelectButton from "../../components/SelectButton";
import { AFormPaper } from "../../components/theme";

export const IngestionOptions = (props) => {
  const label = { inputProps: { "aria-label": "AWS Assume Role" } };
  const [s3path, setS3Path] = useState("");
  const [s3AssumeRole, setS3AssumeRole] = useState(false);
  const [s3AccessKey, sets3AccessKey] = useState("");
  const [s3SecretKey, sets3SecretKey] = useState("");
  const [s3SessionKey, sets3SessionKey] = useState("");
  const [s3ProxyHost, sets3ProxyHost] = useState("");
  const [s3ProxyPort, sets3ProxyPort] = useState("");
  const [s3AssuemRoleArn, setS3AssuemRoleArn] = useState("");
  const handleFieldChange = (field, e) => {
    field(e.target.value);
  };
  const handleFieldChangeCheck = (field, e) => {
    // console.log(s3path);
    field(e.target.checked);
  };
  const [selected, setSelected] = useState(INGESTION_ENDPOINTS["Select"].text);
  const handleSelect = (e) => {
    //console.log(e.target.value);
    setSelected(e.target.value);
  };
  const isSelected = selected !== "Select" ? true : false;
  const renderDetailsForm = (selected) => {
    switch (selected) {
      case "AWSS3":
        return (
          <div>
            <Grid container spacing={2} columns={30}>
              <Grid item xs={15}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="s3path"
                  label="S3 Path"
                  type="s3path"
                  fullWidth
                  variant="standard"
                  inputProps={{ style: { fontSize: 12 } }}
                  sx={{ width: 200 }}
                  onChange={(e) => handleFieldChange(setS3Path, e)}
                  value={s3path}
                />
              </Grid>
              <Grid item xs={15}>
                <Checkbox
                  label="Use AWS Assume Role"
                  size="small"
                  onChange={(e) => handleFieldChangeCheck(setS3AssumeRole, e)}
                />
                Use AWS Assume Role
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={30}>
              <Grid item xs={15}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="s3AssuemRoleArn"
                  label="S3 Assume Role ARN"
                  type="s3Arole"
                  fullWidth
                  variant="standard"
                  inputProps={{ style: { fontSize: 12 } }}
                  sx={{ width: 200 }}
                  onChange={(e) => handleFieldChange(setS3AssuemRoleArn, e)}
                  value={s3AssuemRoleArn}
                  disabled={!s3AssumeRole}
                />
              </Grid>
              <Grid item xs={15}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="s3AccessKey"
                  label="S3 Access Key"
                  type="s3AKey"
                  fullWidth
                  variant="standard"
                  inputProps={{ style: { fontSize: 12 } }}
                  sx={{ width: 200 }}
                  onChange={(e) => handleFieldChange(sets3AccessKey, e)}
                  value={s3AccessKey}
                  disabled={s3AssumeRole}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={30}>
              <Grid item xs={15}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="s3SecretKey"
                  label="S3 Secret Key"
                  type="s3SKey"
                  fullWidth
                  variant="standard"
                  inputProps={{ style: { fontSize: 12 } }}
                  sx={{ width: 200 }}
                  onChange={(e) => handleFieldChange(sets3SecretKey, e)}
                  value={s3SecretKey}
                  disabled={s3AssumeRole}
                />
              </Grid>
              <Grid item xs={15}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="s3AccessKey"
                  label="S3 Access Key"
                  type="s3AKey"
                  fullWidth
                  variant="standard"
                  inputProps={{ style: { fontSize: 12 } }}
                  sx={{ width: 200 }}
                  onChange={(e) => handleFieldChange(sets3SessionKey, e)}
                  value={s3SessionKey}
                  disabled={s3AssumeRole}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={30}>
              <Grid item xs={15}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="s3ProxyHost"
                  label="S3 Proxy Host"
                  type="s3PHost"
                  fullWidth
                  variant="standard"
                  inputProps={{ style: { fontSize: 12 } }}
                  sx={{ width: 200 }}
                  onChange={(e) => handleFieldChange(sets3ProxyHost, e)}
                  value={s3ProxyHost}
                />
              </Grid>
              <Grid item xs={15}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="s3ProxyPort"
                  label="S3 Proxy Port"
                  type="s3PPort"
                  fullWidth
                  variant="standard"
                  inputProps={{ style: { fontSize: 12 } }}
                  sx={{ width: 200 }}
                  onChange={(e) => handleFieldChange(sets3ProxyPort, e)}
                  value={s3ProxyPort}
                />
              </Grid>
            </Grid>
          </div>
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
      <Grid container spacing={2} columns={30} justifyContent="flex-end">
        <Grid item xs={15}>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            Select ingestion endpoints:
          </Typography>
        </Grid>
        <Grid item xs={15}>
          {ingestionOptions()}
        </Grid>
      </Grid>
      {isSelected && (
        <div>
          <Divider textAlign="center" sx={{ marginBottom: "10px" }}>
            Details
          </Divider>
          <AFormPaper elevation="2">{renderDetailsForm(selected)}</AFormPaper>
        </div>
      )}
    </div>
  );
};
