import express from 'express';
import { users, records } from '../data';

const router = express.Router();

router.post('/login', (req, res) => {

  const { username, password, role } = req.body;

  const user = users.find(
    u =>
      u.username === username &&
      u.password === password &&
      u.role === role
  );

  if (!user) {

    return res.status(401).json({
      message: 'Invalid Credentials'
    });
  }

  res.json({
    username: user.username,
    role: user.role
  });

});

router.get('/records', async (req, res) => {

  const delay = Number(req.query.delay) || 3000;

  await new Promise(resolve =>
    setTimeout(resolve, delay)
  );

  res.json(records);

});

router.get('/users', (req, res) => {

  res.json(users);

});

router.delete(
  '/users/:id',
  function (req, res) {

    const id = parseInt(req.params.id);

    const index = users.findIndex(
      user => user.id === id
    );

    if (index === -1) {

      res.status(404).json({
        message: 'User not found'
      });

      return;
    }

    users.splice(index, 1);

    res.status(200).json({
      message: 'User deleted successfully'
    });

  }
);

export default router;