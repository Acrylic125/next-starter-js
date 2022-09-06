import { NextResponse, NextMiddleware } from "next/server";

/**
 *
 * @param {NextMiddleware} func
 */
export async function hanleErrorResponse(func) {
  try {
    if (func instanceof Promise) {
      await func();
    } else {
      func();
    }
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
