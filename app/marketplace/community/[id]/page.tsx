import { getCommunity } from "@/lib/api";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: communityId } = await params;
  const community = await getCommunity(communityId);

  if (!community) {
    return {
      title: "Community Not Found | PiPn",
      description: "This community could not be found on PiPn.",
    };
  }

  const title = `${community.name} | PiPn Community`;
  const description =
    community.description ||
    `Join ${community.name} on PiPn. Connect with other traders and grow your skills together.`;
  const image =
    community.image || community.coverImage || "https://pipn.app/logo.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">
        You&apos;re being redirected to the PiPn app...
      </h1>
      <p className="text-gray-400 text-center max-w-md">
        PiPn communities are interactive spaces best experienced in our mobile
        app. Please open this link on your mobile device to join and
        participate.
      </p>
    </div>
  );
}
