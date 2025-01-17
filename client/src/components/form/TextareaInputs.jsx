

import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextareaInputs = ({register,name,type,placeholder,errors}) => {

  return (
    <div className="mb-2">
      <Label className="capitalize">{name}</Label>
      <Textarea 
        type={type}
        {...register(name)}
        name={name}
        id=""
        placeholder={placeholder}
        className={`${errors[name] && "border-rose-500"}`}
        rows={5}
      />
          {errors[name] && (
        <p className="text-rose-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};
export default TextareaInputs;
