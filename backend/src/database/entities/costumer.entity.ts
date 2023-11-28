import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'costumer',
})
export class Costumer extends Model {
  @Column
  name: string;

  @Column
  company: string;

  @Column
  phone: string;

  @Column
  item: string;

  @Column
  email: string;

  @Column
  city: string;

  @Column
  contact: string;

  @Column
  date: Date;
  
  @Column
  status: string;
}