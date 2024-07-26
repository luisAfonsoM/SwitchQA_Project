import { BaseController } from '../../../../shared/infra/http/models/BaseController';
import { DecodedExpressRequest } from '../../infra/http/models/decodedRequest';
import * as express from 'express';
import { GetStatisticsByDate } from './GetStatisticsByDate';
import { GetStatisticsByDateDTO } from './GetStatisticsByDateDTO';

export class GetStatisticsByDateController extends BaseController {
  private useCase: GetStatisticsByDate;

  constructor(useCase: GetStatisticsByDate) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: DecodedExpressRequest, res: express.Response): Promise<any> {
    const dto: GetStatisticsByDateDTO = {
        date: req.params.date,
        statType: req.params.statType, // Extract statType from request params
    };
    try {
      const result = await this.useCase.execute(dto);
      if (result.isLeft()) {
        console.log(dto);
        return this.fail(res, result.value.getErrorValue().message);
      } else {
        const user = result.value.getValue();
        return this.ok(res, {
          statistics: user,
        });
      }
    } catch (err) {
      return this.fail(res, err);
    }
  }
}
