import { FinanceQuote } from "./FinanceQuote";
import { Pagination } from "./Pagination";

export class Finances {
  private title: string;
  private icon?: string;
  private pagination?: Pagination<number>;
  private financequote: FinanceQuote;
  private type: string;
  constructor(financequote: FinanceQuote, title: string,type:string) {
    this.financequote = financequote,
    this.title = title,
    this.type = type
  }
}
