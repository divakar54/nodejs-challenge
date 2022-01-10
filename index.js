import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Todos from './routes/todos.js'
import Users from './routes/users.js'
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use('/todos', Todos);
app.use('/users', Users);

app.listen(3001, (req, res) => {
    console.log("server running on 3001")
});