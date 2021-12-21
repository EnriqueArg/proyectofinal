import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Inventario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cantidad?: number;

  @property({
    type: 'string',
    required: true,
  })
  Id: string;

  @property({
    type: 'string',
    required: true,
  })
  producto: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Inventario>) {
    super(data);
  }
}

export interface InventarioRelations {
  // describe navigational properties here
}

export type InventarioWithRelations = Inventario & InventarioRelations;
