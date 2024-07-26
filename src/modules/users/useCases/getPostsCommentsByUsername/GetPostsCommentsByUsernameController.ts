import { BaseController } from "../../../../shared/infra/http/models/BaseController";
import { DecodedExpressRequest } from "../../infra/http/models/decodedRequest";
import * as express from "express";
import { GetPostsCommentsByUsername } from "./GetPostsCommentsByUsername";
import { GetPostsCommentsByUsernameDTO } from "./GetPostsCommentsByUsernameDTO";


export class GetPostsCommentsByUsernameController extends BaseController {
    private useCase: GetPostsCommentsByUsername;

    constructor( useCase: GetPostsCommentsByUsername) {
        super ()
        this.useCase = useCase;
    }

    async executeImpl(req:DecodedExpressRequest, res: express.Response, ): Promise <any> {
        const dto: GetPostsCommentsByUsernameDTO = {
            username : req.params.username,
        };
        try {
            const result = await this.useCase.execute(dto);
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