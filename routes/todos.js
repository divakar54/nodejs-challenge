import express from 'express';
import fetch from "node-fetch";
const router = express.Router();

router.get('/', async(req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todosList = await response.json();
    const newTodosList = todosList.map(ele => {
        const id=ele.id;
        const title=ele.title;
        const completed=ele.completed;
        return {id, title, completed}
    })
    res.json(newTodosList);
})

export default router;