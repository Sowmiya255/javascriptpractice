import express from "express";
import { 
  UserCreate, 
  UserIndex, 
  UserDelete, 
  UserId 
} from "../controllers/users.controller.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

router.get("/", authorize(["Admin","Member","Guest"]), UserIndex);


router.get("/:id", authorize(["Admin","Member","Guest"]), UserId);

router.post("/", authorize(["Admin","Member"]), UserCreate);


router.delete("/:id", authorize(["Admin"]), UserDelete);

export default router;
