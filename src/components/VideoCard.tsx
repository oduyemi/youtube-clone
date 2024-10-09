interface VideoCardProps {
    title: string;
    thumbnail: string;
    channelTitle: string;
    viewCount: string;
  }
  
  export const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, channelTitle, viewCount }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600">{channelTitle}</p>
          <p className="text-gray-500 text-sm">{viewCount} views</p>
        </div>
      </div>
    );
  };
  
  