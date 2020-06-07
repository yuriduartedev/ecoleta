import { Request, Response } from 'express';
import knex from '../database/connection';

// PADRÃO DE CRIAÇÂO de MÉTODOS DENTRO DO CONTROLLER
// index, show, create, update, delete

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.100.22:3333/uploads/${item.image}`
      }
    })
    return response.json(serializedItems);
  }
}

export default ItemsController;
