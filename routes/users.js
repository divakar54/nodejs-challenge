import express from 'express';
import fetch from "node-fetch";
const router = express.Router();

router.get('/:id', async(req, res) => {
    const {id} = req.params;

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await userResponse.json();

    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todosList = await response.json(); 
    
    const userTodoList = todosList.map(todos => {
        if(todos.userId == id){
            return todos;
        }
    });
    
    user.todos = userTodoList.filter(x => x!=null);
    res.json(user);
})

export default router;