const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function getProfile(username: string) {
  const res = await fetch(`${BASE_URL}/users/${username}/profile`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  if (!res.ok) return null;
  return res.json();
}

export async function getPost(postId: string) {
  const res = await fetch(`${BASE_URL}/feed/posts/${postId}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function getCommunity(communityId: string) {
  const res = await fetch(`${BASE_URL}/communities/${communityId}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}
