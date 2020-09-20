import Repo from '../repositories/todo-dao';

class TodoCtrl {

    async create (req, res) {
        const todo = req.body;
        todo.createdAt = Date.now();
        todo.updatedAt = Date.now();

        const id = await Repo.create(todo);
        res.status(204).json(id);
    }

    async update (req, res) {
        const todo = req.body;
        todo.updatedAt = Date.now();

        const response = await Repo.update(todo);
        res.status(200).json(response);
    }

    async delete (req, res) {
        await Repo.delete(req.query);
        res.status(202).json('delete ok');
    }

    async findByQuery (req, res) {
        console.log('####################################');
        console.log(`Finding ${req.query} on table todo`);
        const todo = await Repo.findByQuery(req.query);
        if(todo) {
            res.json(todo);
        } else {
            res.status(404).json({ message: 'Fail'})
        }  
    }
}
export default new TodoCtrl();