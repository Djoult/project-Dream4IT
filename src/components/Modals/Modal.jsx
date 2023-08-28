import { useState, useEffect } from "react";
import { Modal as ModalMUI, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Modal = ({ message }) => {
  const [isOpen, toggleIsOpen] = useState(false);

  useEffect(() => {
    toggleIsOpen(true);
  }, []);

  const handleClose = () => {
    toggleIsOpen(false);
  };
  return (
    <ModalMUI
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" color="white" sx={{ mt: 2 }}>
          {message}
        </Typography>
      </Box>
    </ModalMUI>
  );
};
