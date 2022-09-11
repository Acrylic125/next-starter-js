/**
 * The base error represents a base error object, as described by
 * the JSON API (https://jsonapi.org/format/#error-objects).
 *
 * This is NOT the WHOLE RESPONSE returned to the client.
 */
export default class BaseError extends Error {
  status: string;
  title: string;

  /**
   *
   * @param {string} message
   */
  constructor(message: string) {
    super(message);
    this.status = "400";
    this.title = "Base Error";
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      status: this.status,
      title: this.title,
      detail: this.message,
    };
  }
}
