import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ADialog(props) {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>{props.displaytext}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.content}</DialogContentText>
        <span style={{ marginRight: "10px" }}></span>
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleCancel}>{props.canceltext}</Button>
        <Button onClick={props.handleSave}>{props.submittext}</Button>
        {props.extrab && (
          <Button onClick={props.extraHandleExtra}>{props.extrab}</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
