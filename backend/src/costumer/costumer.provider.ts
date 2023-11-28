import { Costumer } from "src/database/entities/costumer.entity";

export const costumerProviders = [
  {
    provide: 'CUSTUMER_REPOSITORY',
    useValue: Costumer,
  },
];