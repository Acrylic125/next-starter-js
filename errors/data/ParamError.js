import { strJoined } from "../../utils/string-utils";

export default class ParamError extends BaseError {
  /**
   *
   * @param {string | string[]} parameters
   */
  constructor(parameters = []) {
    super(`Invalid ${strJoined(param)} supplied`);
    this.status = "400";
    this.title = "Param Error";
    Error.captureStackTrace(this, this.constructor);
  }
}
