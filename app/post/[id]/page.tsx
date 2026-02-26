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

import { ClientRedirect } from "./ClientRedirect";

export default async function PostPage({ params }: Props) {
  const { id: postId } = await params;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Opening in PiPn...
      </h1>
      <p className="text-gray-400 text-center max-w-md text-lg">
        This post is best viewed in the PiPn mobile app.
      </p>

      <ClientRedirect postId={postId} />
    </div>
  );
}
