import { ModeToggle } from "./ModeToggl";
import { NextBreadCrumb } from "./NextBreadCrumb";

export default function Header() {
  return (
    <>
      <header className="container my-5 flex items-center justify-between">
        <NextBreadCrumb />
        <ModeToggle />
      </header>
    </>
  );
}
