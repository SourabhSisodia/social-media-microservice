import { Router } from "express";

const router = Router();

router.use("/", (req,res) => {
  res.send("hello");
})

export default router;