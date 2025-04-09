"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormSchema } from "./validation";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };
  const inputs: {
    value: "firstName" | "lastName" | "email" | "message" | "phoneNumber";
    placeholder: string;
  }[] = [
    { value: "firstName", placeholder: "First Name" },
    { value: "lastName", placeholder: "Last Name" },
    { value: "email", placeholder: "E mail" },
    { value: "phoneNumber", placeholder: "Phone Number" },
  ];
  return (
    <div className="w-[560px] md:w-full max-w-6xl">
      <form className="space-y-6 max-w-[560px] p-6 bg-button-blue ">
        <p className="text-white">
          Fill out the form below with questions or inquiries you maybe have and
          a member of our team will get back to you in no time!
        </p>
        {inputs.map(({ value, placeholder }, i) => {
          return (
            <div className="mb-4" key={i}>
              <input
                {...register(value)}
                className="w-full p-3 py-4 bg-white border-none text-secondary-one outline-none rounded"
                placeholder={placeholder}
              />
              <p className="text-red-500 text-sm">{errors[value]?.message}</p>
            </div>
          );
        })}

        <div className="mb-4">
          <textarea
            {...register("message")}
            className="w-full p-2 bg-white resize-none h-32 border rounded"
            placeholder="Message "
          ></textarea>
          <p className="text-red-500 text-sm">{errors.message?.message}</p>
        </div>

        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-white">
            I agree that Entacrest may contact me at the email address or phone
            number above.
          </label>
        </div>

        <div className="w-full mx-auto">
          <Button
            title="Submit"
            className="bg-white text-secondary-one font-bold "
            textClassName="text-secondary-one"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
