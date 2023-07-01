import express, {Router} from "express";
//import { updateTodo } from "../../client/src/redux/actions/index.js";
//import { getAllTodos } from "../../client/src/redux/actions/index.js";

import { addTodo, getAllTodos, toggleTodoDone, updateTodo } from "../controller/todo-controller.js";



const route = express.Router();


route.post('/todos', addTodo)
route.get('/todos', getAllTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo);


export default route;