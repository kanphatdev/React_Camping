import { LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";

const Buttons = ({ text, isPending, type }) => {
  return (
    <Button className="capitalize mt-2" type={type} disabled={isPending}>
      {/*  {text} */}
      {isPending ? (
        <>
          <span className="flex gap-2 items-center animate-bounce">
            please wait... <LoaderCircle className="animate-spin" />
          </span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};
export default Buttons;
