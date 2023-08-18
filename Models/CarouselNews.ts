import { News } from "./News";


export class CarouselNews {
  listNew() {
    throw new Error("Method not implemented.");
  }

  constructor(private newsList: News[]) { 
    
  }
}
