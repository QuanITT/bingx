import NewsController from './NewsController';
import NewsView from './Newview';

const newsController = new NewsController();
const newsView = new NewsView(newsController);

newsView.renderNewsList();
