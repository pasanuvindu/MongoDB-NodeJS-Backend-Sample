//users.js

const express = require("express");
const router = express.Router();
const User = require("../models/user");

//Get All
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
});
//Get One
router.get("/:id", getUser, (req, res) => {
  //   res.json(res.user);
  res.send(res.user.name);
});
//Create One
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    registerToSystem: req.body.registerToSystem,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ massage: err.massage });
  }
});
//Update One
router.patch("/:id", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.body.name = req.body.name;
  }
  if (req.body.registerToSystem != null) {
    res.user.registerToSystem = req.body.registerToSystem;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: RegExp.massage });
  }
});
// Delete One
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ massage: "Deleted User" });
  } catch (err) {
    res.status(500).json({ massage: RegExp.massage });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ massage: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ massage: err.massage });
  }

  res.user = user;
  next();
}

module.exports = router;
