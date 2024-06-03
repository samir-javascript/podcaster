/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
        remotePatterns:[
             {
                protocol: "https",
                hostname: "lovely-flamingo-139.convex.cloud"
             },
             {
               protocol: "https",
               hostname: "www.github.com"
             },
             {
               protocol: "https",
               hostname: "s3-alpha-sig.figma.com"
             }
        ]
     }
};

export default nextConfig;
