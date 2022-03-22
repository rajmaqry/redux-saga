import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalStyle } from "./theme";

export default function AModal(props) {
  return (
    <div>
      <Modal
        open={props.toopen}
        onClose={props.handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>{props.children}</Box>
      </Modal>
    </div>
  );
}
