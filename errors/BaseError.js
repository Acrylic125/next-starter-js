export default class BaseError extends Error {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.status = "400";
    this.title = "Base Error";
    this.detail = message;
    Error.captureStackTrace(this, this.constructor);
  }
}
