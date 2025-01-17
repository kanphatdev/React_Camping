import FormInputs from "@/components/form/FormInputs";
import TextareaInputs from "@/components/form/TextareaInputs";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/Schema";
import Buttons from "@/components/form/Buttons";

const Camping = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(campingSchema),
  });
  const { errors, isSubmitting } = formState;

  const CampingonSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    
  };
  return (
    <section>
      <h1 className="capitalize mb-4 text-2xl font-semibold">create Camping</h1>
      <div className="border p-8 rounded-md">
        <form action="" onSubmit={handleSubmit(CampingonSubmit)}>
          <div className=" grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name={"title"}
              type={"text"}
              placeholder={"enter your title"}
              errors={errors}
            />
            <FormInputs
              register={register}
              name={"price"}
              type={"number"}
              placeholder={"enter your price"}
              errors={errors}
            />
            <TextareaInputs
              register={register}
              name={"description"}
              type={"text"}
              placeholder={"enter your description"}
              errors={errors}
            />
            <Buttons text={"create Camping"} isPending={isSubmitting} type={"submit"} />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Camping;
