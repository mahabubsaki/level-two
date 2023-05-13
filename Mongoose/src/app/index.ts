
import { Request, Response, cors, express, app } from "../imports";
import userRouter from "./modules/User/user.route";



//setup and middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/v1', userRouter);

//testing
app.get('/', async (req: Request, res: Response) => {
    res.send('Server running successfully');
});

export default app;