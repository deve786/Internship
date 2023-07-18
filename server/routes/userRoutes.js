import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

// Route to get all users
router.get('/allUsers', async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

// Route to toggle the role of a user
router.patch('/toggleRole/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;
    const newRole = role === 0 ? 1 : 0;

    await User.findByIdAndUpdate(userId, { role: newRole });
    res.json({ message: 'Role toggled successfully' });
    console.log(newRole)
  } catch (error) {
    res.status(500).json({ message: 'Error toggling the role for the user', error });
  }
});

// Route to remove a user
router.delete('/removeUser/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
    res.json({ message: 'User removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing the user', error });
  }
});

export default router;
