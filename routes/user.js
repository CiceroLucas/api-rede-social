// routes/user.js
const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const userController = require("../controllers/userController");
const authController = require("../middleware/authMiddleware");

router.post("/create", upload.single("fotoPerfil"), userController.createUser);
router.post("/login", userController.login);
router.get("/list", authController.checkToken, userController.listUsers);
router.get("/:id", authController.checkToken, userController.getUserById);
router.get('/:nome', userController.buscarUsuarioPorNome);

router.put(
  "/:id",
  upload.single("fotoPerfil"),
  authController.checkToken,
  userController.updateUserById
);
router.delete("/:id", authController.checkToken, userController.deleteUserById);

module.exports = router;
