import { Request, Response } from "express";

function sayHello(request: Request, response: Response): void {
  response.status(200).json({
    message: "hello11",
  });
}

export = { sayHello };
