import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/clerk-react";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({
        title: "Logout Status",
        description: "The Logout success ",
      })
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="capitalize" onClick={handleLogout}>logout</button>
    </SignOutButton>
  );
};
export default SignOutLink;
