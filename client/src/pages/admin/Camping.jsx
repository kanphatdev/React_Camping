import FormInputs from "@/components/form/FormInputs";
import TextareaInputs from "@/components/form/TextareaInputs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/Schema";
import Buttons from "@/components/form/Buttons";
import CategoriesInputs from "@/components/form/CategoriesInputs";
import Mainmap from "@/components/map/Mainmap";

const Camping = () => {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(campingSchema),
  });
  const { errors, isSubmitting } = formState;

  const CampingonSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Create Camping
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10">
        <form onSubmit={handleSubmit(CampingonSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Title Input */}
            <FormInputs
              register={register}
              name="title"
              type="text"
              placeholder="Enter your title"
              errors={errors}
            />
            {/* Price Input */}
            <FormInputs
              register={register}
              name="price"
              type="number"
              placeholder="Enter your price"
              errors={errors}
            />
            {/* Description Input */}
            <TextareaInputs
              register={register}
              name="description"
              type="text"
              placeholder="Enter your description"
              errors={errors}
            />
            {/* Categories Input */}
            <CategoriesInputs
              name="category"
              register={register}
              setValue={setValue}
            />
            {/* Map Input */}
            <Mainmap register={register} setValue={setValue} />
          </div>

          <div className="flex justify-center mt-8">
            <Buttons
              text="Create Camping"
              isPending={isSubmitting}
              type="submit"
              
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Camping;
