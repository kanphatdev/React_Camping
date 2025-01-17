import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { categories } from "@/utils/categories";
const CategoriesInputs = ({ name, register, setValue }) => {
  return (
    <div className="mb-2">
        <inputcv hidden type="text" {...register(name)} />
      <Label className="capitalize">{name}</Label>
      <Select required onValueChange={(value) =>setValue(name,value) }>
        <SelectTrigger>
          <SelectValue placeholder="Please select categories" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item, index) => {
            return (
              <SelectItem value={item.label} key={index}>
                <span className="capitalize flex gap-4 items-center justify-between">
                  <item.icon />
                  <p className="text-lg"> {item.label}</p>
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoriesInputs;
