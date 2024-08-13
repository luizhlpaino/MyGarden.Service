import { Request, RequestHandler, Response } from "express"
export interface APIRoute {
    path: string;
    method: string;
    handler(req: Request, res: Response): Promise<void>;
}

export interface APIController {
    routes: Array<APIRoute>;
}