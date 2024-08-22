"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export function NextBreadCrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 0 && <BreadcrumbSeparator />}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemLink = link[0].toUpperCase() + link.slice(1, link.length);
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {pathNames.length !== index + 1 ? (
                  <BreadcrumbLink href={href}>{itemLink}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{itemLink}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
