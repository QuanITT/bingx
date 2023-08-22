import NewsController from './NewsController';

class NewsView {
  private controller: NewsController;

  constructor(controller: NewsController) {
    this.controller = controller;
  }

  // Phương thức này tạo và trả về một mảng các phần tử HTML (HTMLElements)
  renderNewsList(): HTMLElement[] {
    const newsList = this.controller.getNewsList();
    const newsElements: HTMLElement[] = [];

    newsList.forEach(news => {
      // Tạo một phần tử div cho mỗi tin tức
      const newsElement = document.createElement('div');
      newsElement.classList.add('news-item'); // Thêm class cho phần tử

      // Tạo các phần tử con bên trong phần tử tin tức
      const imgElement = document.createElement('img');    
      imgElement.src = news.imgUrl;
      imgElement.alt = news.title;

      const titleElement = document.createElement('h3');
      titleElement.textContent = news.title;

      const likeElement = document.createElement('p');
      likeElement.textContent = `Likes: ${news.like}`;

      const unlikeElement = document.createElement('p');
      unlikeElement.textContent = `Unlikes: ${news.unlike}`;

      const channelElement = document.createElement('p');
      channelElement.textContent = `Channel: ${news.channel.name}`;

      // Thêm các phần tử con vào phần tử tin tức
      newsElement.appendChild(imgElement);
      newsElement.appendChild(titleElement);
      newsElement.appendChild(likeElement);
      newsElement.appendChild(unlikeElement);
      newsElement.appendChild(channelElement);

      // Thêm phần tử tin tức vào mảng
      newsElements.push(newsElement);
    });

    return newsElements;
  }
}

export default NewsView;
