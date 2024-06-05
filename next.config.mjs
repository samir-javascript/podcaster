

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
              hostname: "oaidalleapiprodscus.blob.core.windows.net"
             },
             {
               protocol: "https",
               hostname: "s3-alpha-sig.figma.com"
             },
             {
              protocol: "https",
              hostname: "ucarecdn.com"
             },
            
        ]
     }
};

export default nextConfig;
