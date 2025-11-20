import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function BlogCardsSection({ listBlogs, filters }) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filters.map((post) => (
          <Link
            to={`/blog-details/${post._id}`}
            key={post._id}
            className="no-underline"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="pb-3">
                {/* Category Badge */}
                <Badge
                  variant="secondary"
                  className={`w-fit text-xs font-medium ${
                    post.category === "Lifestyle"
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                      : post.category === "Technology"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  }`}
                >
                  {post.category}
                </Badge>

                {/* Title */}
                <CardTitle className="mt-3 text-lg line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                {/* Description */}
                <CardDescription className="text-sm line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
