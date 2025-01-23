import { Play } from "lucide-react";

interface VideoCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  videoThumbnail: string;
}

export function VideoCard({
  avatarUrl,
  name,
  title,
  videoThumbnail,
}: VideoCardProps) {
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm"
      style={{ padding: "32px" }}
    >
      <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-[#3b82f6]">
        <button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          aria-label="Play video"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
            <Play fill="white" color="white" size={40} />
          </div>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-[#3b82f6]" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
}
