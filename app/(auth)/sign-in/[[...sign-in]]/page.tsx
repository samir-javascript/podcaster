import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
     <div   className="flex-center glassmorphism-auth h-screen w-full">
        <SignIn />
     </div>
  ) ;
}

// style={{
//    backgroundImage: "url(/images/bg-img.png)",
//    backgroundPosition: "center",
//    backgroundRepeat: "no-repeat",
//    backgroundSize: "cover"
// }}