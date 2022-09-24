let {
    addToLikedMovies,
    getLikedMovies,
    removeFromLikedMovies,
  } = require("../controllers/UserController");
  
  let router = require("express").Router();
  
  router.get("/liked/:email", getLikedMovies);
  router.post("/add", addToLikedMovies);
  router.put("/remove", removeFromLikedMovies);
  
  module.exports = router;
  