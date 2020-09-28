import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const repositories = await this.find();

    const { income, outcome } = repositories.reduce(
      (accumulator: Balance, currentValue: Transaction) => {
        switch (currentValue.type) {
          case 'income':
            accumulator.income += Number(currentValue.value);
            break;

          case 'outcome':
            accumulator.outcome += Number(currentValue.value);
            break;

          default:
            break;
        }

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    const balance = {
      income,
      outcome,
      total: income - outcome,
    };

    return balance;
  }
}

export default TransactionsRepository;
