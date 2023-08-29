import React, { useEffect } from "react";
import { Snackbar } from "@mui/base";
import { Alert as MuiAlert } from "@mui/material";
import { styled } from "@mui/material/styles";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackbarWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export const CustomizedSnackbar = ({ severity, message }) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <SnackbarWrapper>
      <Snackbar
        style={{ width: "50%" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarWrapper>
  );
};
