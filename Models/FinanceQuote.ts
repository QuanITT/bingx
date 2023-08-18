export  class FinanceQuote {
    constructor(
      public name: string,
      public trend: number,
      public trendType: string,
      public chart: string,
      public percentedTrend: number,
      public total: number,
      public typeOf: string
    ) {}
}
