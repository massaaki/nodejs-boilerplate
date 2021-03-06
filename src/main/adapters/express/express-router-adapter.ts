import { Request, Response } from "express";

import { IController } from "@/presentation/protocols/controller";
import { IHttpRequest } from "@/presentation/protocols/http";

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.statusCode >= 200 || httpResponse.statusCode < 300) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};
