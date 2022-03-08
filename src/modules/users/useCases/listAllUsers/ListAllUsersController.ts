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

    const users = this.listAllUsersUseCase.execute({ user_id });

    return response.send(users);
  }
}

export { ListAllUsersController };
