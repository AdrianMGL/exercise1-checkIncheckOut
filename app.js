//
const express = require("express");

// routers
const { employeeRouter } = require("./routes/employee.routes");

// init express app
const app = express();

// enable express app to receive data
app.use(express.json());

/**
 * Define endpoint employee
 */
app.use("/api/v1/registrations", employeeRouter);

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server `,
  });
});

//
module.exports = { app };
