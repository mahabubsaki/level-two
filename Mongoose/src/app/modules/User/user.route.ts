
import { express } from "../../../imports";
import { createUserController, getAdminUsersController, getUserByIdController, getUsersController } from "./user.controller";


const userRouter = express.Router();
userRouter.get('/users', getUsersController);
userRouter.get('/admin-users', getAdminUsersController);
userRouter.get('/user/:id', getUserByIdController);
userRouter.post('/create-user', createUserController);

export default userRouter;
