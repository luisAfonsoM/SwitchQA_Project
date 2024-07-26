import { BaseController } from "../../../../shared/infra/http/models/BaseController";
import { DecodedExpressRequest } from "../../infra/http/models/decodedRequest";
import * as express from "express";
import { GetUserWithMoreCommentsPosts } from "./GetUserWithMoreCommentsPosts";


export class GetUserWithMoreCommentsPostsController extends BaseController {
    private useCase: GetUserWithMoreCommentsPosts;

    constructor( useCase: GetUserWithMoreCommentsPosts) {
        super ()
        this.useCase = useCase;
    }

    async executeImpl(req:DecodedExpressRequest, res: express.Response, ): Promise <any> {

        try {
            const result = await this.useCase.execute();
            if (result.isLeft()) {
                    return this.fail(res, result.value.getErrorValue().message);
              } else {
                const user = result.value.getValue();
                return this.ok(res, {
                    user: user, 
                })
              }
            } catch (err) {
              return this.fail(res, err);
            }
          }
        }