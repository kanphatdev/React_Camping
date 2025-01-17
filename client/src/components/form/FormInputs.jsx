
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInputs = ({register,name,type,placeholder,errors}) => {

  return (
    <div className="mb-2">
      <Label className="capitalize">{name}</Label>
      <Input
        type={type}
        {...register(name)}
        name={name}
        id=""
        placeholder={placeholder}
        className={`${errors[name] && "border-rose-500"}`}
      />
      {errors[name] && (
        <p className="text-rose-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};
export default FormInputs;
