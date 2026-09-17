import { AppError } from "./AppError.js";

export class ValidationError extends AppError {
  constructor(message = "invalid input") {
    super(400, "INVALID_INPUT", message);
  }
}
