

import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextareaInputs = ({register,name,type,placeholder}) => {

  return (
    <div className="mb-2">
      <Label className="capitalize">{name}</Label>
      <Textarea 
        type={type}
        {...register(name)}
        name={name}
        id=""
        placeholder={placeholder}
        className="capitalize"
        rows={5}
      />
    </div>
  );
};
export default TextareaInputs;
