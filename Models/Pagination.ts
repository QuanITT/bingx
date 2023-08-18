export class Pagination<T> {

  constructor(
    public items: T[],
    public currentPage: number,
    public totalPages: number
  ) {}

  getCurrentPageItems(): T[] {
    return this.items.slice((this.currentPage - 1) * 10, this.currentPage * 10);
  }
  getTotalPages() {
    return Math.ceil(this.items.length / this.currentPage);
  }

  //pagesize
}