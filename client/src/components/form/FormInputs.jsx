
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInputs = ({register,name,type,placeholder}) => {

  return (
    <div className="mb-2">
      <Label className="capitalize">{name}</Label>
      <Input
        type={type}
        {...register(name)}
        name={name}
        id=""
        placeholder={placeholder}
        className="capitalize"
      />
    </div>
  );
};
export default FormInputs;
