import { create, get, getId, update, remove, login, receiveData, retrieveData } from "../controllers/user.controller";

const userRoutes = app => {
    app.post("/user", create);
    app.get("/user", get);
    app.get("/user/:id", getId);
    app.put("/user/:id", update);
    app.delete("/user/:id", remove);
    app.post("/user/login", login);
    app.post("/user/retrievedata", retrieveData);
    app.post("/user/receivedata", receiveData);
}

export default userRoutes;