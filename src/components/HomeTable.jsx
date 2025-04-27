import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { removeJoinedWorker } from "../redux/workerSlice";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// function createData(Name, Type, Wage, Phone, Age, Address, Join, Delete) {
//   return { Name, Type, Wage, Phone, Age, Address, Join, Delete };
// }

// const rows = [
//   createData("Ram", "Mestri", 1000, 98767898, 45, "vvmk"),
//   createData("Naren", "Mestri", 800, 8767898, 42, "vvmk local"),
//   createData("Kittaya", "Labour", 700, 67898, 44, "vvmk sdfd"),
//   createData("Srinu", "Mestri", 900, 767898, 42, "safefa"),
//   createData("Yesu", "Labour", 700, 34767898, 50, "vvmk"),
// ];

export default function HomeTable() {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [paidWorkers, setPaidWorkers] = React.useState([]);

  const dispatch = useDispatch();

  const addedWorkersList = useSelector(
    (state) => state.workers.addedWorkersList
  );

  const handleOpenDialog = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedRow(null);
  };
  const handleDelete = (row) => {
    dispatch(removeJoinedWorker(row));
  };
  const handlePaid = (row) => {
    alert("Amount of " + row.Wage + " has paid to " + row.Name);
    setPaidWorkers((prev) => [...prev, row.Name]);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              background:
                "linear-gradient(to top,rgb(36, 36, 36),rgb(47, 163, 216))",
              // background: 'linear-gradient(to top,  rgb(167, 70, 6),rgb(198, 154, 9))',
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
                Full Day
              </TableCell>
              <TableCell align="right" sx={{ color: "white", pr: 5 }}>
                Half Day
              </TableCell>
              <TableCell align="right" sx={{ color: "white", pr: 5 }}>
                Absent
              </TableCell>
              <TableCell align="right" sx={{ color: "white", pr: 5 }}>
                Paid
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addedWorkersList.map((row) => (
              <TableRow
                key={row.Name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  background:
                    "linear-gradient(to top,rgb(164, 230, 244),rgb(234, 238, 239))",
                  // background: 'linear-gradient(to top,rgb(255, 236, 219),rgb(232, 248, 252))',
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
                    sx={{ background: "rgb(23, 47, 225)", color: "white" }}
                  >
                    Full Day
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    sx={{ background: "rgb(28, 155, 234)", color: "white" }}
                  >
                    Half Day
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    sx={{ background: "rgb(234, 62, 28)", color: "white" }}
                    onClick={() => handleDelete(row.Name)}
                  >
                    Absent
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    sx={{ background: "rgb(5, 195, 5)", color: "white" }}
                    disabled={paidWorkers.includes(row.Name)}
                    onClick={() => handlePaid(row)}
                  >
                    {paidWorkers.includes(row.Name) ? "Paid" : "Pay"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog Section */}
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
    </>
  );
}
