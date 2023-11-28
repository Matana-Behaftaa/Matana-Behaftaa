import { Model } from 'sequelize-typescript';
export declare class Costumer extends Model {
    name: string;
    company: string;
    phone: string;
    item: string;
    email: string;
    city: string;
    contact: string;
    date: Date;
    status: string;
}
