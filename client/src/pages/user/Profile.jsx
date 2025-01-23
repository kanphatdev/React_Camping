import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import axios from "axios";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors, isSubmitting } = formState;
  const ProfileonSubmit = async (data) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    await axios
      .post("http://localhost:5000/api/profile", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-800  mb-8 capitalize">
        Create profile
      </h1>
      <div className="border p-8 rounded-md">
        <form action="" onSubmit={handleSubmit(ProfileonSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              type={"text"}
              register={register}
              name={"firstname"}
              errors={errors}
              placeholder={"enter your First name"}
            />
            <FormInputs
              type={"text"}
              register={register}
              name={"lastname"}
              errors={errors}
              placeholder={"enter your last name"}
            />
            <Buttons
              isPending={isSubmitting}
              text={"create profile"}
              type={"submit"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Profile;
