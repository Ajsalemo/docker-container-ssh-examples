import { Router } from "express";
const router = Router();

const homeController = router.get("/", (_, res, next) => {
  try {
    res.send("debian-node");
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});

export default homeController;
