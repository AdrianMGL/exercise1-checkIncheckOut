const express = require("express");

/** controllers */
const {
  getAllEmployees,
  createEmployee,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
} = require("./../controllers/employee.controller");

//
const employeeRouter = express.Router();

/**
 * GET all employees
 */
employeeRouter.get("/", getAllEmployees);

/**
 * GET one employee
 */
employeeRouter.get("/:id", getOneEmployee);

/**
 * POST
 */
employeeRouter.post("/", createEmployee);

/**
 * PATCH
 */
employeeRouter.patch("/:id", updateEmployee);

/**
 * DELETE
 */
employeeRouter.delete("/:id", deleteEmployee);

//
module.exports = { employeeRouter };
