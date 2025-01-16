
import FormInputs from "@/components/form/FormInputs";
import TextareaInputs from "@/components/form/TextareaInputs";
import { useForm } from "react-hook-form";
const Camping = () => {
  const { register, handleSubmit } = useForm();
  const CampingonSubmit = (data) => {
    console.log(data);
  };
  return (
    <section>
      <h1 className="capitalize mb-4 text-2xl font-semibold">create Camping</h1>
      <div className="border p-8 rounded-md">
        <form action="" onSubmit={handleSubmit(CampingonSubmit)}>
          <div className=" grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs register={register} name={"title"} type={"text"} placeholder={"enter your title"}/>
            <FormInputs register={register} name={"price"} type={"number"} placeholder={"enter your price"}/>
            <TextareaInputs register={register} name={"description"} type={"text"} placeholder={"enter your description"}/>

          
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Camping;
