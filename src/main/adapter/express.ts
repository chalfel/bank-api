import { Request, Response } from 'express'

export type ExpressResponseBody = {
  data: Pick<string, any>;
  statusCode: number;
};
export class ExpressAdapter {
  static adapt (func: any) {
    return async (req: Request, res: Response): Promise<Response> => {
      try {
        const { body, param, query } = req
        const payload = { body, param, query }
        const { statusCode, data }: ExpressResponseBody = await func(payload)

        return res.status(statusCode).json(data)
      } catch (err) {
        const { message } = err
        return res.status(500).json({ message })
      }
    }
  }
}
