import express, {Express, Request, Response} from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post('/users', async (req: Request, res: Response) => {
    try {
        if (req.body.name === undefined || req.body.nickname === undefined || req.body.email === undefined){
            throw new Error('Você deve preencher todos os campos (name, nickname e email)!')
        }

        let id = Math.floor(Math.random() * (999999 - 111111)) + 111111

        await connection.raw(`
        INSERT INTO UsersToDoList VALUES
        ('${id.toString()}', '${req.body.name}', '${req.body.nickname}', '${req.body.email}');
        `)

        res.status(201).send('Usuário criado com sucesso!')

    } catch (error: any){
        res.status(500).send({message: error.message})
    }
})

app.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const user = await connection ("UsersToDoList")
        .select('id', 'nickname')
        .where({
            id: req.params.id.toString()
        })

        if (user.length === 0){
            throw new Error('Usuário não encontrado!')
        }

        res.status(200).send(user[0])

    } catch (error: any){
        res.status(500).send({message: error.message})
    }
})

app.put('/users/edit/:id', async (req: Request, res: Response) => {
    try {
        if (req.body.name === "" || req.body.nickname === '' || req.body.email === ''){
            throw new Error("Você não pode enviar um campo vazio!")
        }

        await connection ("UsersToDoList")
        .update({
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        })
        .where({
            id: req.params.id.toString()
        })

        res.status(201).send("Usuário alterado com sucesso!")


    } catch (error: any){
        res.status(500).send({message: error.message})
    }
})

app.post('/task', async (req: Request, res: Response) => {
    try {
        if (req.body.title === undefined || req.body.deadline === undefined || req.body.description === undefined || req.body.creatorUserId === undefined){
            throw new Error("Você deve passar todas as informações da tarefa (title, description, deadline e creatorUserId).")
        }

        let data = req.body.deadline.split('/')
        let id = Math.floor(Math.random() * (999999 - 111111)) + 111111

        await connection.raw(`
        INSERT INTO TasksToDoList(id, title, description, deadline, user_id) VALUES
        ('${id.toString()}', '${req.body.title}', '${req.body.description}', '${data[2]}-${data[1]}-${data[0]}', '${req.body.creatorUserId}');
        `)

        res.status(200).send('tarefa criada com sucesso!')

    } catch (error: any){
        res.status(500).send({message: error.message})
    }
})

app.post('/task/responsible', async (req: Request, res: Response) => {
    try {
        if (req.body.userId === undefined || req.body.taskId === undefined){
            throw new Error("preencha os campos.")
        }
        await connection.raw(`
        INSERT INTO ResponsibleToDoList VALUES
        ('${req.body.userId}','${req.body.taskId}');
        `)

        res.status(200).send('Tarefa atribuída com sucesso!')

    } catch (error: any){
        res.status(500).send({message: error.message})
    }
})

app.get('/task/:id', async (req: Request, res: Response) => {
    try {
        const task = await connection.raw(`
        SELECT TasksToDoList.id as taskId, title, description, deadline as limitDate, status, user_id as creatorUserId, nickname as creatorNickname
        FROM TasksToDoList
        JOIN UsersToDoList
        On UsersToDoList.id = TasksToDoList.user_id
        WHERE TasksToDoList.id = ${req.params.id};
        `)

        let data = new Date(task[0][0].limitDate);
        let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
        task[0][0].limitDate = dataFormatada

        res.status(200).send(task[0][0])
    } catch (error: any){
        res.status(500).send({message: error.message})
    }
})

app.get('/task/:id/responsible', async (req:Request, res: Response) => {
    try {
        const responsibles = await connection.raw(`
        SELECT UsersToDoList.id as userId, UsersToDoList.nickname as nickname
        FROM ResponsibleToDoList
        Join UsersToDoList
        ON UsersToDoList.id = ResponsibleToDoList.user_id
        WHERE task_id = '${req.params.id}';
        `)
    
    
        res.status(200).send(responsibles[0])
    } catch (error: any){
        res.status(500).send({message: error.message})
    }
})




import { AddressInfo } from "net";
import connection from './connection';

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});