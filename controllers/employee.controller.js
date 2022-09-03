/** models */

const { Employee } = require("../models/employee.model");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200);

    res.json({
      status: "success",
      data: {
        employees: employees,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getOneEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id } });
    res.status(200);

    if (!employee) {
      return res.status(400).json({
        status: "error",
        message: "Employe not found",
      });
    }

    res.json({
      status: "success",
      data: {
        employee: employee,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const createEmployee = async (req, res) => {
  try {
    const { entranceTime, exitTime } = req.body;

    const newEmployee = await Employee.create({ entranceTime, exitTime });

    res.status(201).json({
      status: "success",
      data: { newEmployee },
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const updateEmployee = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;

    // check if user exists before update the DB
    const employee = await Employee.findOne({ where: { id } });

    // send error if employee doesn't exists
    if (!employee) {
      return res.status(404).json({
        status: "error",
        message: "Employee not found",
      });
    }

    // Update
    await employee.update({ exitTime, status: "out" });

    res.status(200).json({
      status: "success",
      // data: { employee },
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const deleteEmployee = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;

    // check if user exists before update the DB
    const employee = await Employee.findOne({ where: { id } });

    // send error if employee doesn't exists
    if (!employee) {
      return res.status(404).json({
        status: "error",
        message: "Employee not found",
      });
    }

    //
    await employee.update({ exitTime, status: "cancelled" });

    res.status(200).json({
      status: "success",
      // data: { employee },
    });
  } catch (error) {
    console.log(error);
  }
};

//
module.exports = {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
