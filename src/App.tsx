import { useEffect, useState } from 'react';
import "./App.css"
import axios from 'axios';
import { MainView } from './components/Main';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';


interface VideoData {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: { url: string };
    };
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
  };
}

const API_KEY = 'YOUR_YOUTUBE_API_KEY';

const App: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=12&key=${API_KEY}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube videos', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <MainView videos={videos} />
      </div>
    </div>
  );
};

export default App;
