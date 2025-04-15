import * as yup from "yup";
export const ContactFormSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});
export const ApplicationFormSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  role: yup
    .string()
    .matches(/^\d{10,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  cover_letter: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});
