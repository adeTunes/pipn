import { getPost } from "@/lib/api";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: postId } = await params;
  const post = await getPost(postId);

  if (!post) {
    return {
      title: "Post Not Found | PiPn",
      description: "This post could not be found on PiPn.",
    };
  }

  const title = `Post by ${post.user.fullName} (@${post.user.username}) | PiPn`;
  const description =
    post.content || `Check out this post on PiPn - The Social App for Traders.`;
  const image =
    post.mediaUrls?.[0] ||
    post.user.profilePicUrl ||
    "https://pipn.app/logo.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function PostPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">
        You&apos;re being redirected to the PiPn app...
      </h1>
      <p className="text-gray-400 text-center max-w-md">
        This post is best viewed in the PiPn mobile app. Please open this link
        on your mobile device to view the full content and interact with the
        community.
      </p>
    </div>
  );
}
