import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Redirect everything EXCEPT .well-known paths
        source: "/:path((?!.well-known/).*)",
        has: [
          {
            type: "host",
            value: "pipn.app",
          },
        ],
        destination: "https://www.pipn.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
