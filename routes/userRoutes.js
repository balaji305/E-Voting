const express = require("express");
const {
  authUser,
  loggedInUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUserById,
  getUserById,
  updateUserById,
} = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleWare");

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/login").post(authUser);
router.route("/auth").get(loggedInUser);
router.route("/logout").get(logoutUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUserById)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUserById);

module.exports = router;
