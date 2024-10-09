import { VideoCard } from './VideoCard';

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

interface MainViewProps {
  videos: VideoData[];
}

export const MainView: React.FC<MainViewProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          title={video.snippet.title}
          thumbnail={video.snippet.thumbnails.medium.url}
          channelTitle={video.snippet.channelTitle}
          viewCount={video.statistics.viewCount}
        />
      ))}
    </div>
  );
};

