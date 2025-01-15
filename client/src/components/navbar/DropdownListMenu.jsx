import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { AlignLeft, BookUser, LogIn } from "lucide-react";
import UserIcon from "./UserIcon";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import { Link } from "react-router";
const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {links.map((item, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link to={item.href} className="capitalize flex gap-3">
                {item.label} {item.icon}
              </Link>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />

        <SignedOut>
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="capitalize text-sm flex gap-2">
                register <BookUser size={20} />
              </button>
            </SignUpButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="capitalize text-sm flex gap-2">
                log in <LogIn size={20} />
              </button>
            </SignInButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          <DropdownMenuItem>
            <UserButton />
            <SignOutButton />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
