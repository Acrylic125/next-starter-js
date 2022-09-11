import BaseError from "../BaseError";

export default class InvalidMethodError extends BaseError {
  constructor(method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "CONNECT" | "TRACE") {
    super(`${method} is not a valid method for this route`);
    this.status = "405";
    this.title = "Invalid Method";
    Error.captureStackTrace(this, this.constructor);
  }
}
