import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";

export default function BlogDetailPage() {
  // Dữ liệu bài viết (có thể thay bằng API sau)
  const post = {
    title: "Enhancing your skills and capturing memorable moments",
    subtitle: "Enhancing Your Skills and Capturing Memorable Moments",
    author: "Admin",
    authorAvatar: "",
    publishedDate: "October 3, 2025",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&h=600&fit=crop",
    intro:
      "In today’s fast-paced world, personal growth and preserving memories go hand in hand. Here’s how to do both meaningfully.",
    steps: [
      {
        number: 1,
        title: "Invest in Skill Building",
        items: [
          "Set clear learning goals",
          "Practice consistently through real projects",
          "Use online platforms like YouTube, Coursera, or freeCodeCamp",
          "Track progress to stay motivated",
        ],
      },
      {
        number: 2,
        title: "Capture Moments That Matter",
        items: [
          "Take photos/videos of milestones, both big and small",
          "Keep a digital or physical journal",
          "Use apps like Google Photos or Notion to organize memories",
          "Reflect regularly — it helps you appreciate the journey",
        ],
      },
      {
        number: 3,
        title: "Balance Growth and Presence",
        content:
          "While chasing goals, don’t forget to pause and enjoy the process. Learn, improve, and make time to document the moments that shape you.",
      },
    ],
  };

  return (
    <article className="py-10 px-6 max-w-4xl mx-auto">
      {/* Header Info */}
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>Published on {post.publishedDate}</span>
        </div>
        <Badge
          variant="secondary"
          className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
        >
          {post.category}
        </Badge>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        {post.title}
      </h1>

      {/* Author */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Avatar className="h-6 w-6">
          <AvatarImage src={post.authorAvatar} />
          <AvatarFallback className="text-xs">{post.author[0]}</AvatarFallback>
        </Avatar>
        <span>by</span>
        <span className="font-medium text-foreground">{post.author}</span>
      </div>

      <Separator className="mb-8" />

      {/* Featured Image */}
      <div className="mb-10 -mx-6 md:mx-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        {post.subtitle}
      </h2>

      {/* Intro Paragraph */}
      <p className="text-muted-foreground mb-8 leading-relaxed">{post.intro}</p>

      {/* Steps */}
      <div className="space-y-10">
        {post.steps.map((step) => (
          <div key={step.number} className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 text-sm font-bold">
                {step.number}
              </span>
              {step.title}
            </h3>

            {step.items ? (
              <ul className="ml-12 space-y-1 text-muted-foreground">
                {step.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="relative before:content-['•'] before:absolute before:-left-4 before:text-indigo-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="ml-12 text-muted-foreground">{step.content}</p>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
