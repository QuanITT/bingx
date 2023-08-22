import { Channel, News } from "../Models/NewsTest";

class NewsController {
  private newsList: News[] = [];

  constructor() {
    // Tạo một số tin tức giả định
    const channel = new Channel("Channel Name", "icon1");
    this.newsList.push(new News("Title 1", "img1.jpg", 10, 5, channel));
    this.newsList.push(new News("Title 2", "img2.jpg", 20, 8, channel));
    // Thêm tin tức khác vào đây nếu cần
  }
  getNewsList(): News[] {
    return this.newsList;
  }
  renderNewsList() {
    const appElement = document.getElementById("app");
    if (appElement) {
      this.newsList.forEach((news) => {
        // Tạo một phần tử div cho mỗi tin tức
        const newsElement = document.createElement("div");
        newsElement.classList.add("news-item"); // Thêm class cho phần tử

        // Tạo các phần tử con bên trong phần tử tin tức
        const imgElement = document.createElement("img");
        imgElement.src = news.imgUrl;
        imgElement.alt = news.title;

        const titleElement = document.createElement("h3");
        titleElement.textContent = news.title;

        const likeElement = document.createElement("p");
        likeElement.textContent = `Likes: ${news.like}`;

        const unlikeElement = document.createElement("p");
        unlikeElement.textContent = `Unlikes: ${news.unlike}`;

        const channelElement = document.createElement("p");
        channelElement.textContent = `Channel: ${news.channel.name}`;

        // Thêm các phần tử con vào phần tử tin tức
        newsElement.appendChild(imgElement);
        newsElement.appendChild(titleElement);
        newsElement.appendChild(likeElement);
        newsElement.appendChild(unlikeElement);
        newsElement.appendChild(channelElement);

        // Thêm phần tử tin tức vào DOM
        appElement.appendChild(newsElement);
      });
    }
  }
}

export default NewsController;
