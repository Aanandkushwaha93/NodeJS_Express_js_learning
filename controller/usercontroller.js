import { userlist } from "../model/userModel.js"

export function usercontroller(req, resp) {
    const userData = userlist();
    resp.render('user', { users: userData })
}
