import { getProfile } from "@/lib/api";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: username } = await params;
  const user = await getProfile(username);

  if (!user) {
    return {
      title: "User Not Found | PiPn",
      description: "This user profile could not be found on PiPn.",
    };
  }

  const title = `${user.fullName} (@${user.username}) | PiPn`;
  const description =
    user.bio ||
    `Check out ${user.fullName}'s profile on PiPn - The Social App for Traders.`;
  const image = user.profilePicUrl || "https://pipn.app/logo.png"; // Fallback to logo

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "profile",
      username: user.username,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function UserProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">
        You&apos;re being redirected to the PiPn app...
      </h1>
      <p className="text-gray-400 text-center max-w-md">
        PiPn is a mobile-first social app for traders. Please open this link on
        your mobile device to view the full profile.
      </p>
    </div>
  );
}
