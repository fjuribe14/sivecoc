import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "../../components/sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex">
      <Sidebar className="h-screen hidden lg:block" />
      <ScrollArea className="flex-1">{children}</ScrollArea>
    </div>
  );
}
