const router = require("express").Router();

router.get('/', (_, res) => {
  res.send("hello from database");
})

module.exports = router;