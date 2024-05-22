const GOOGLE_API_KEY="AIzaSyA8ItaMF0kKd43YrVPtY-SAYLQhGq-j1Pk";

// const GOOGLE_API_KEY = "AIzaSyBues05Ag37Lyx1QuOxTUE1J2Sr_2Uj6SY";  // My API 

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// export const YOUTUBE_VIDEO_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyA8ItaMF0kKd43YrVPtY-SAYLQhGq-j1Pk&maxResults=24`

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const GET_COMMENTS_URL =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=35&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const VIDEO_DETAILS_FROM_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

// export const RELATED_VIDEOS_URL =
//   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&key=" +
//   GOOGLE_API_KEY +
//   "&relatedToVideoId=";


export const getYtVideosApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=10&key=${GOOGLE_API_KEY}`;