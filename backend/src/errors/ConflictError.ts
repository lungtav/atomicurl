import { AppError } from "./AppError.js";

export class ConflictError extends AppError {
  constructor(message = "resource already exists") {
    super(409, "CONFLICT_ERROR", message);
  }
}
