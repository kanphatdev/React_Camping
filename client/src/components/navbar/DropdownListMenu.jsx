import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
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
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
            links.map((item,index) => {
return (
     <DropdownMenuItem key={index}>
        <Link to={item.href} className="capitalize flex gap-3">
         {item.label} {item.icon}
        </Link>
       
     </DropdownMenuItem>
)
            })
        }
       
    
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
