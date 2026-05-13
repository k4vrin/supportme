"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function LightDarkToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={className}
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          <Button variant={"outline"}>
            <SunIcon className={"block dark:hidden"} />
            <MoonIcon className={"hidden dark:block"} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className={"hidden dark:inline"}>Enable light mode</span>
          <span className={"inline dark:hidden"}>Enable dark mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
