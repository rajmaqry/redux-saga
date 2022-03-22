import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalStyle } from "./theme";

export default function AModal(props) {
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setCounter(counter + 1);
    console.log(counter);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>{props.children}</Box>
      </Modal>
    </div>
  );
}
