import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { UserAuthForm } from "../components/userAuthForm";

export default function Home() {
  return (
    <>
      <div className="md:hidden">
        {/* <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        /> */}
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/inicio"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}>
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6">
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and helped me deliver
                stunning designs to my clients faster than ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// <div className="hidden md:block">
// <Menu />
// <div className="border-t">
//   <div className="bg-background">
//     <div className="grid lg:grid-cols-5">
//       <div className="col-span-3 lg:col-span-4 lg:border-l">
//         <div className="h-full px-4 py-6 lg:px-8">
//           <Tabs defaultValue="music" className="h-full space-y-6">
//             <div className="space-between flex items-center">
//               <TabsList>
//                 <TabsTrigger value="music" className="relative">
//                   Music
//                 </TabsTrigger>
//                 <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
//                 <TabsTrigger value="live" disabled>
//                   Live
//                 </TabsTrigger>
//               </TabsList>
//               <div className="ml-auto mr-4">
//                 <Button>
//                   <PlusCircledIcon className="mr-2 h-4 w-4" />
//                   Add music
//                 </Button>
//               </div>
//             </div>
//             <TabsContent
//               value="music"
//               className="border-none p-0 outline-none"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="space-y-1">
//                   <h2 className="text-2xl font-semibold tracking-tight">
//                     Listen Now
//                   </h2>
//                   <p className="text-sm text-muted-foreground">
//                     Top picks for you. Updated daily.
//                   </p>
//                 </div>
//               </div>
//               <Separator className="my-4" />
//               <div className="relative">
//                 <ScrollArea>
//                   <div className="flex space-x-4 pb-4">
//                     {listenNowAlbums.map((album) => (
//                       <AlbumArtwork
//                         key={album.name}
//                         album={album}
//                         className="w-[250px]"
//                         aspectRatio="portrait"
//                         width={250}
//                         height={330}
//                       />
//                     ))}
//                   </div>
//                   <ScrollBar orientation="horizontal" />
//                 </ScrollArea>
//               </div>
//               <div className="mt-6 space-y-1">
//                 <h2 className="text-2xl font-semibold tracking-tight">
//                   Made for You
//                 </h2>
//                 <p className="text-sm text-muted-foreground">
//                   Your personal playlists. Updated daily.
//                 </p>
//               </div>
//               <Separator className="my-4" />
//               <div className="relative">
//                 <ScrollArea>
//                   <div className="flex space-x-4 pb-4">
//                     {madeForYouAlbums.map((album) => (
//                       <AlbumArtwork
//                         key={album.name}
//                         album={album}
//                         className="w-[150px]"
//                         aspectRatio="square"
//                         width={150}
//                         height={150}
//                       />
//                     ))}
//                   </div>
//                   <ScrollBar orientation="horizontal" />
//                 </ScrollArea>
//               </div>
//             </TabsContent>
//             <TabsContent
//               value="podcasts"
//               className="h-full flex-col border-none p-0 data-[state=active]:flex"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="space-y-1">
//                   <h2 className="text-2xl font-semibold tracking-tight">
//                     New Episodes
//                   </h2>
//                   <p className="text-sm text-muted-foreground">
//                     Your favorite podcasts. Updated daily.
//                   </p>
//                 </div>
//               </div>
//               <Separator className="my-4" />
//               <PodcastEmptyPlaceholder />
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
