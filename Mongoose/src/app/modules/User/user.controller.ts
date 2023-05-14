import { Request, Response, NextFunction } from '../../../imports';
import { createUser, getAdminUsers, getSpeceficUser, getUsers } from './user.service';

const createUserController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const newUser = await createUser(req);
        res.status(200).json(newUser);
    }
    catch (err) {
        console.log(err);
        res.status(404).send({ error: 'error' });
    }
};

const getUsersController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const allUsers = await getUsers();
        res.status(200).json(allUsers);
    }
    catch (err) {
        console.log(err);
        res.status(404).send({ error: 'error' });
    }
};


const getUserByIdController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const singleUser = await getSpeceficUser(req.params.id);
        res.status(200).json(singleUser);
    }
    catch (err) {
        console.log(err);
        res.status(404).send({ error: 'error' });
    }
};


const getAdminUsersController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const adminUsers = await getAdminUsers();
        res.status(200).json(adminUsers);
    }
    catch (err) {
        console.log(err);
        res.status(404).send({ error: 'error' });
    }
};

export { createUserController, getUsersController, getUserByIdController, getAdminUsersController };