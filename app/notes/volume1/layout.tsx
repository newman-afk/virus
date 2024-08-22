"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  let paths = usePathname();

  // Create any shared layout or styles here
  return (
    <>
      <div className="prose prose-sky md:prose-lg lg:prose-xl xl:prose-2xl prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        {children}
        {/* <div className="flex items-center justify-between">
          <Button variant="ghost" className="dark:text-white">
            <ChevronLeftIcon className="h-4 w-4" />
            &nbsp; Chapter1
          </Button>
          <Button variant="ghost" className="dark:text-white">
            Chapter2 &nbsp; <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </>
  );
}
