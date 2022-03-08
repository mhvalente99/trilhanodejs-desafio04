import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

declare module "http" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface IncomingHttpHeaders {
    user_id?: string;
  }
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.send(users);
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }
}

export { ListAllUsersController };
