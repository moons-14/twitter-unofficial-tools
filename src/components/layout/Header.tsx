import Link from "next/link";
import { AccountSwitcher } from "../account/AccountSwitcher";

export const Header = () => {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4 container md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Tools
            </Link>
            <a
              href="https://github.com/fa0311/TwitterInternalAPIDocument"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden sm:block"
              target="_blank"
            >
              Special Thanks
            </a>
            <a
              href="https://github.com/moons-14/twitter-unofficial-tools"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden sm:block"
              target="_blank"
            >
              Github
            </a>
          </nav>
          <div className="ml-auto flex items-center space-x-4 w-[200px]">
            <AccountSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};
