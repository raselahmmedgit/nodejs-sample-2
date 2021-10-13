import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"
import { AuthConfig } from "../config/auth-config";
import { MessageHelper } from "../helper/message-helper";

export class AuthJwt {

    async authenticateJwt(req: Request, res: Response, next: NextFunction) {
        const authConfigSecret = AuthConfig.Secret;
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader !== "null") {
            // const token = authHeader.split(" ")[1];
            
            jwt.verify(authHeader, authConfigSecret, (err: any, user: any) => {
                if (err) {
                    return res
                        .status(403)
                        .send(
                            { success: false, message: MessageHelper.TokenExpired }
                        )
                }
                //req.user = user
                next()
            })
        } else {
            res.status(403).json(
                { success: false, message: MessageHelper.UnAuthorized }
            )
        }
    }

}
