"use client";

import { useEffect, useState } from "react";

export function ClientRedirect({ postId }: { postId: string }) {
  const [platform, setPlatform] = useState<
    "desktop" | "android" | "ios" | "unknown"
  >("unknown");

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(userAgent)) {
      setPlatform("android");
      // Android Chrome recommended Intent URL
      window.location.replace(
        `intent://post/${postId}#Intent;scheme=pipn;package=app.pipn;end`,
      );
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      setPlatform("ios");
      // iOS custom scheme
      window.location.replace(`pipn://post/${postId}`);
    } else {
      setPlatform("desktop");
    }
  }, [postId]);

  return (
    <div className="mt-8 flex flex-col items-center w-full">
      {platform === "desktop" ? (
        <div className="text-center w-full max-w-sm">
          <p className="text-gray-500 mb-4">
            You must open this link on your mobile phone to view it.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=app.pipn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00ACC1] hover:bg-[#0096a8] transition-colors text-white px-6 py-3 rounded-full font-bold shadow-lg block w-full"
          >
            Get the Android App
          </a>
        </div>
      ) : (
        <button
          onClick={() => {
            if (platform === "android") {
              window.location.href = `intent://post/${postId}#Intent;scheme=pipn;package=app.pipn;end`;
            } else {
              window.location.href = `pipn://post/${postId}`;
            }
          }}
          className="bg-[#00ACC1] hover:bg-[#008ba3] transition-colors text-white px-8 py-3.5 rounded-full font-bold shadow-[0_4px_14px_0_rgba(0,172,193,0.39)] w-full max-w-[250px]"
        >
          Open App
        </button>
      )}
    </div>
  );
}
