import { Search } from "lucide-react";

import { Mail } from "@/data/mail-data";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MailList } from "./mail-list";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  mails: Mail[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function Mail({ mails, defaultCollapsed = false }: MailProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tabs defaultValue="all">
        <div className="flex items-center px-4 py-2">
          <h1 className="text-xl font-bold">Solicitudes</h1>
          <TabsList className="ml-auto">
            <TabsTrigger value="all" className="text-neutral-600 dark:text-neutral-200">
              Todas
            </TabsTrigger>
            <TabsTrigger value="unread" className="text-neutral-600 dark:text-neutral-200">
              No leidas
            </TabsTrigger>
          </TabsList>
        </div>
        <Separator />
        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </form>
        </div>
        <TabsContent value="all" className="m-0">
          <MailList items={mails} />
        </TabsContent>
        <TabsContent value="unread" className="m-0">
          <MailList items={mails.filter((item) => !item.read)} />
        </TabsContent>
      </Tabs>
    </TooltipProvider>
  );
}
