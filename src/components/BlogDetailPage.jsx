import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, User } from "lucide-react";

export default function BlogDetailPage({ data }) {
  // Dữ liệu bài viết (có thể lấy từ API)

  return (
    <article className="py-10 px-6 max-w-4xl mx-auto">
      {/* Header Info */}
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Published on {data?.createdAt}</span>
          </div>
        </div>
        <Badge
          variant="secondary"
          className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
        >
          {/* {data.tags?.map((tag) => tag.name).join(", ")} */}
        </Badge>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        {data?.title}
      </h1>

      {/* Author */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        {/* data.author.name */}
        <div className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>by {data?.author.username}</span>
        </div>
      </div>

      <Separator className="mb-8" />

      {/* Featured Image */}
      <div className="mb-10 -mx-6 md:mx-0">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-auto rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
        {data.subtitle}
      </h2>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none text-foreground"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </article>
  );
}
