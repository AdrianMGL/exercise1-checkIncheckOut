// DB
const { db } = require("./utils/database.utils");

// endpoints
const { app } = require("./app");

/** server */
const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    // port
    const PORT = 9000;

    // listen
    app.listen(PORT, () => {
      console.log(" 🚀 Server running! 🟢  ");
    });
  } catch (error) {
    console.log(error);
  }
};

// run server
startServer();
