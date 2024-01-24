import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { HomeIcon, InboxIcon, SettingsIcon } from "lucide-react";

import Logo from "@/public/logo_mintur_red.svg";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle";

export function Sidebar({ className }: { className?: string }) {
  return (
    <div className={cn("pb-12  min-w-[200px] bg-primary-900 sticky top-0", className)}>
      <div className="flex flex-col items-start px-3 py-2">
        <div className="flex items-center justify-between mb-12 gap-8">
          <div className="h-12 w-32 relative">
            <Image src={Logo} alt="Logo" fill />
          </div>
          <ModeToggle />
        </div>
        <h2 className="mb-4 px-4 text-xs font-semibold tracking-tight text-white">Menú</h2>
        <div className="flex flex-col gap-3 w-full">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={cn(buttonVariants({ variant: "outline" }), "w-full justify-start")}>
              <item.icon className="h-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const menu: any[] = [
  {
    path: "/inicio",
    icon: HomeIcon,
    label: "Inicio",
  },
  {
    path: "/solicitudes",
    icon: InboxIcon,
    label: "Solicitudes",
  },
  {
    path: "/configuracion",
    icon: SettingsIcon,
    label: "Configuración",
  },
];

{
  /* <div className="px-3 py-2">
  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
  <div className="space-y-1">
    <Button variant="ghost" className="w-full justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-4 w-4">
        <path d="M21 15V6" />
        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M12 12H3" />
        <path d="M16 6H3" />
        <path d="M12 18H3" />
      </svg>
      Playlists
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-4 w-4">
        <circle cx="8" cy="18" r="4" />
        <path d="M12 18V2l7 4" />
      </svg>
      Songs
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-4 w-4">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
      Made for You
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-4 w-4">
        <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
        <circle cx="17" cy="7" r="5" />
      </svg>
      Artists
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-4 w-4">
        <path d="m16 6 4 14" />
        <path d="M12 6v14" />
        <path d="M8 8v12" />
        <path d="M4 4v16" />
      </svg>
      Albums
    </Button>
  </div>
</div>
<div className="py-2">
  <h2 className="relative px-7 text-lg font-semibold tracking-tight">Playlists</h2>
  <ScrollArea className="h-[300px] px-1">
    <div className="space-y-1 p-2">
      {playlists?.map((playlist, i) => (
        <Button
          key={`${playlist}-${i}`}
          variant="ghost"
          className="w-full justify-start font-normal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4">
            <path d="M21 15V6" />
            <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M12 12H3" />
            <path d="M16 6H3" />
            <path d="M12 18H3" />
          </svg>
          {playlist}
        </Button>
      ))}
    </div>
  </ScrollArea>
</div> */
}
