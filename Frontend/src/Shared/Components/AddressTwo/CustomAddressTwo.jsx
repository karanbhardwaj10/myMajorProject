import {
  Box,
  Typography,
  Checkbox,
  Tooltip,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "./Style.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import { deleteUserAddress } from "./State/deleteAddress";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteAddress } from "./Features/deleteUserAddressSlice";
const CustomAddressTwo = ({
  label,
  addressType,
  customerName,
  customerAddress,
  userAddressId,
  ...props
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, deleteAddressStatusCode } = useSelector(
    (state) => state.deleteAddressSlice
  );
  const [open, setOpen] = useState(false);

  const handleDeleteIconOpen = () => {
    setOpen(true);
  };
  const handleDeleteDialogNoClick = () => {
    setOpen(false);
  };
  const handleDeleteDialogClose = () => {
    setOpen(false);
  };
  const handleDeleteDialogCloseYesClick = () => {
    handleDeleteAddress()
    window.location.reload();
    setOpen(false);
  };
  const [checked, setChecked] = useState(false);
  function handleChange(e) {
    console.log(checked, "before set");
    if (checked) {
      console.log(checked, "inside if");
    }
    console.log(e.target.value, "from checked");
    checked === false ? setChecked(true) : setChecked(false);

    console.log(checked, "checked from state");
  }
  function handleDeleteAddress() {
    console.log(userAddressId, "rowId");
    dispatch(deleteAddress(userAddressId));
    
    //await deleteUserAddress(userAddressId);
  }

  useEffect(() => {
    if (deleteAddressStatusCode === 200) {
      navigate("/checkout");
    }
  }, [deleteAddressStatusCode, navigate]);

  return (
    <Box sx={{ display: "flex", ml: 7, width: "650px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid grey",
          borderRadius: "5px",
          minHeight: "90px",
          width: "100%",
          maxWidth: "600px",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Checkbox
            icon={<TripOriginIcon />}
            {...label}
            checked={checked}
            onClick={handleChange}
            sx={{
              marginRight: "15px",
              "& .MuiSvgIcon-root": { fontSize: 28 },
            }}
          />
          <Box>
            <Typography
              sx={{
                marginBottom: "8px",
                fontWeight: "bold",
                wordBreak: "break-word",
              }}
              {...props}
            >
              {customerName} ({addressType})
            </Typography>
            <Typography
              sx={{
                color: "grey",
                wordBreak: "break-word",
              }}
              {...props}
            >
              {customerAddress}
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          {checked ? (
            <Box display={"flex"} flexDirection={"row"}>
              <Tooltip
                title="Edit this address"
                sx={{
                  width: "10px",
                }}
              >
                <Box
                  sx={{
                    color: "#005685",
                  }}
                >
                  <EditOutlinedIcon />
                </Box>
              </Tooltip>
              <Tooltip title="Delete this address">
                <Box
                  sx={{
                    marginRight: "10px",
                    color: "red",
                  }}
                 // onClick={handleDeleteAddress}
                >
                  <Button
                    sx={{
                      width: 0,
                      mr: -2,
                      p: 0,
                      color: "red",
                    }}
                    onClick={handleDeleteIconOpen}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Button>
                </Box>
              </Tooltip>
                <Dialog
                  open={open}
                  onClose={handleDeleteDialogClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    Delete Address 
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                     Are you sure you want to delete this address ?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button variant="contained" onClick={handleDeleteDialogNoClick}>No</Button>
                    <Button variant="contained" sx={{backgroundColor:'red'}} onClick={handleDeleteDialogCloseYesClick} autoFocus>
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
            </Box>
          ) : (
            <Tooltip title="Edit this address">
              <Box
                display={"flex"}
                flexDirection={"row"}
                sx={{
                  marginRight: "10px",
                  color: "#005685",
                }}
              >
                <EditOutlinedIcon />
              </Box>
            </Tooltip>
          )}
          <Tooltip title="Check Delivery status for this address">
            <Box
              sx={{
                marginRight: "10px",
                ml: 1,
                cursor: "pointer",
                "&:hover": {
                  animation: "bounce 0.5s infinite",
                },
                "@keyframes bounce": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-5px)" },
                },
              }}
            >
              <LocalShippingIcon />
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

CustomAddressTwo.propTypes = {
  label: PropTypes.string,
  addressType: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  customerAddress: PropTypes.string.isRequired,
};
export default CustomAddressTwo;
