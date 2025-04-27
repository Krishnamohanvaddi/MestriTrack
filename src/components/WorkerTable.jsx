import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addWorker,
  setWorkersList,
  addToAddedWorkers,
  removeWorker,
} from "../redux/workerSlice";

function createData(Name, Type, Wage, Phone, Age, Address, Photo) {
  return { Name, Type, Wage, Phone, Age, Address, Photo };
}

const initialRows = [
  createData("Ram", "Mestri", 1000, 98767898, 45, "vvmk"),
  createData("Naren", "Mestri", 800, 8767898, 42, "vvmk local"),
  createData("Kittaya", "Labour", 700, 67898, 44, "vvmk sdfd"),
  createData("Srinu", "Mestri", 900, 767898, 42, "safefa"),
  createData("Yesu", "Labour", 700, 34767898, 50, "vvmk"),
];

export default function WorkerTable() {
  const dispatch = useDispatch();
  const workersList = useSelector((state) => state.workers.workersList);

  const [open, setOpen] = React.useState(false);
  const [addDialogOpen, setAddDialogOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  // const [rows, setRows] = React.useState(initialRows);

  const [newWorker, setNewWorker] = React.useState({
    Name: "",
    Type: "",
    Wage: "",
    Phone: "",
    Age: "",
    Address: "",
    Photo: "", // <-- Added this
  });

  React.useEffect(() => {
    dispatch(setWorkersList(initialRows));
  }, [dispatch]);

  const handleOpenDialog = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleAddWorkerOpen = () => {
    setAddDialogOpen(true);
  };

  const handleAddWorkerClose = () => {
    setAddDialogOpen(false);
    setNewWorker({
      Name: "",
      Type: "",
      Wage: "",
      Phone: "",
      Age: "",
      Address: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWorker((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddWorker = () => {
    const newRow = createData(
      newWorker.Name,
      newWorker.Type,
      parseFloat(newWorker.Wage),
      newWorker.Phone,
      newWorker.Age,
      newWorker.Address,
      newWorker.Photo // <-- Added
    );
    dispatch(addWorker(newRow));
    // setRows((prevRows) => [...prevRows, newRow]);
    handleAddWorkerClose();
  };

  const handleJoin = (row) => {
    dispatch(addToAddedWorkers(row));
  };

  const handleDelete = (row) => {
    dispatch(removeWorker(row));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewWorker((prev) => ({
          ...prev,
          Photo: reader.result, // Base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {/* Add Worker Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", ml: 2, mt: 2 }}>
        <Button
          onClick={handleAddWorkerOpen}
          sx={{
            border: 1,
            background:
              "linear-gradient(to top,rgb(27, 0, 180),rgb(61, 239, 67))",
            color: "white",
          }}
        >
          Add Worker
        </Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              background:
                "linear-gradient(to top,rgb(36, 36, 36),rgb(47, 163, 216))",
            }}
          >
            <TableRow>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Type
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Wage
              </TableCell>
              <TableCell align="right" sx={{ color: "white", pr: 5 }}>
                Join
              </TableCell>
              <TableCell align="right" sx={{ color: "white", pr: 5 }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workersList.map((row) => (
              <TableRow
                key={row.Name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  background:
                    "linear-gradient(to top,rgb(164, 230, 244),rgb(234, 238, 239))",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ cursor: "pointer", color: "black" }}
                  onClick={() => handleOpenDialog(row)}
                >
                  {row.Name}
                </TableCell>
                <TableCell align="right">{row.Type}</TableCell>
                <TableCell align="right">₹{row.Wage}</TableCell>
                <TableCell align="right">
                  <Button
                    sx={{ background: "rgb(23, 225, 50)", color: "white" }}
                    onClick={() => handleJoin(row)}
                  >
                    Join
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    sx={{ background: "rgb(234, 62, 28)", color: "white" }}
                    onClick={() => {
                      handleDelete(row.Name);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Employee Details Dialog */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle
          sx={{
            background:
              "linear-gradient(to top,rgb(0, 0, 0),rgb(23, 132, 183))",
            color: "white",
            border: 1,
          }}
        >
          Employee Details
        </DialogTitle>
        <DialogContent>
          {selectedRow && (
            <DialogContentText>
              <img
                src={selectedRow.Photo}
                alt="Worker Photo"
                style={{
                  width: "10%",
                  height: "auto",
                  marginBottom: "10px",
                  marginLeft: "0px",
                  borderRadius: "10px",
                }}
              />
              <br />
              <strong>Name:</strong> {selectedRow.Name} <br />
              <strong>Type:</strong> {selectedRow.Type} <br />
              <strong>Wage:</strong> ₹{selectedRow.Wage}
              <br />
              <strong>Phone number:</strong> {selectedRow.Phone} <br />
              <strong>Age:</strong> {selectedRow.Age} <br />
              <strong>Address:</strong> {selectedRow.Address} <br />
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            sx={{
              border: 1,
              color: "white",
              background:
                "linear-gradient(to top,rgb(0, 0, 0),rgb(23, 132, 183))",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Worker Dialog */}
      <Dialog open={addDialogOpen} onClose={handleAddWorkerClose}>
        <DialogTitle
          sx={{
            background:
              "linear-gradient(to top,rgb(0, 0, 0),rgb(23, 132, 183))",
            color: "white",
            border: 1,
          }}
        >
          Add Worker
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
          >
            <TextField
              label="Name"
              name="Name"
              value={newWorker.Name}
              onChange={handleInputChange}
            />
            <TextField
              select
              label="Type"
              name="Type"
              value={newWorker.Type}
              onChange={handleInputChange}
            >
              <MenuItem value="Mestri">Mestri</MenuItem>
              <MenuItem value="Labour">Labour</MenuItem>
            </TextField>
            <TextField
              label="Wage"
              name="Wage"
              value={newWorker.Wage}
              onChange={handleInputChange}
            />
            <TextField
              label="Phone"
              name="Phone"
              value={newWorker.Phone}
              onChange={handleInputChange}
            />
            <TextField
              label="Age"
              name="Age"
              value={newWorker.Age}
              onChange={handleInputChange}
            />
            <TextField
              label="Address"
              name="Address"
              value={newWorker.Address}
              onChange={handleInputChange}
            />
            <input
              type="file"
              accept="image/*"
              capture="environment" // allows direct camera usage on phone
              onChange={handlePhotoUpload}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleAddWorkerClose}
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
          <Button onClick={handleAddWorker} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
