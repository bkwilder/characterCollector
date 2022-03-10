const router = require("express").Router();
const {
  models: { User, Quiz },
} = require("../db");
const { requireAdminToken, requireUserToken } = require("./gatekeeper");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    if(req.user){
     const quizzes =  await req.user.getQuizzes()
     res.send(quizzes);
    }
  } catch (error) {
      next(error)
  }
});
