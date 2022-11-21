import express from "express";
import asyncHandler from "express-async-handler";
import  User  from "../models/User.js";
import authMiddleware  from "../middleware/authMiddleware.js";
import  token  from "../utils/token.js";

const router = express.Router();

// router.get(
//   "/",
//   authMiddleware.requireAuth,
//   async (req, res) => {
//     res.send({
//       status: "you are now authorized",
//     });
//   }
// );
// router.get(
//   "/",
//   authMiddleware.requireAuth,
//   asyncHandler(async (req, res, next) => {
//     console.log("res locals", res.locals.user)
    
//     res.locals.user = await User.findById(req.user, function (err, user) {
//       if (user) {
//         res.json({ id: user._id,
//             token: token.generateToken(user._id)});
//       }else {
//        // err.status = 404;
//         next(err);
//       }
//       return
//   });
//   })
// );

router.get(
  "/",
  authMiddleware.requireAuth,
  asyncHandler(async (req, res, next) => {
   
    const { id } = res.locals.user
    console.log("id", id)
    res.locals.user = await User.findById({ _id: id }, function (err, user) {
      if (user) {
        res.json({ id: user._id,
            token: token.generateToken(user._id)});
      }else {
       // err.status = 404;
        next(err);
      }
      return
  });
  })
);
router.get(
  "/me/:id",
  authMiddleware.requireAuth,
  // authMiddleware.requireAdmin,
  // asyncHandler(async (req, res) => {
  //   res.locals.user = await User.findById(req.user, function (err, user) {
  //     if (user) {
  //       res.json(user);
  //     }else {
  //       err.status = 404;
  //       next(err);
  //     }
  // });
  // })
  asyncHandler(async (req, res, next) => {
    const userId  = req.params.id
  const user = await User.find({ _id: userId }, function (err, user) {
      if (user) {
        res.json(user);
      }else {
       // err.status = 404;
        next(err);
      }
      return
  });
  })
);
router.post(
  "/register",
  asyncHandler(async (req, res, next) => {
    const {  email, username, firstName,lastName, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      const err = new Error("User already registered.");
      err.status = 400;
      next(err);
    }
    const user = await User.create({
        email,
      username,
      firstName,
      lastName,
      password,
    });
    res.json({
      token: token.generateToken(user._id),
    });
 
  })
);
router.post(
  "/login",
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log ("userdata", user)
    if (user ) {
      // && (await user.matchPassword(password))
      res.json({
        username: user.username,
        id: user._id,
        email: user.email,
        // isAdmin: user.isAdmin,
        token: token.generateToken(user._id),
      });
    } else {
      const err = new Error("Invalid email or password");
      err.status = 401;
      next(err);
    }
  })
);
export default router;
