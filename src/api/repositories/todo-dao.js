import Model from '../models/todo';

class TodoDao {

    async findByQuery(query) {
      return Model.findAll({where: query});      
    }

    async create(todo) {
      return Model.create(todo);
    }

    async update(todo) {
      return Model.upsert(todo, {where: {id:todo.id}});
    }
    
    async delete(query) {
      return Model.destroy({where: query});
    }
}

export default new TodoDao();