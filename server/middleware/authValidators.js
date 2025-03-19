import { check } from "express-validator";

export const validateRegister = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long.")
    .escape(),

  check("email").trim().isEmail().withMessage("Invalid email format.").escape(),

  check("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .matches(/[A-Z]/)
    .withMessage("Include at least one uppercase letter.")
    .matches(/[a-z]/)
    .withMessage("Include at least one lowercase letter.")
    .matches(/\d/)
    .withMessage("Include at least one number.")
    .matches(/[@$!%*?&#]/)
    .withMessage("Include at least one special character.")
    .escape(),

  check("confirmPassword")
    .trim()
    .notEmpty()
    .withMessage("Confirm Password is required.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    }),
];
