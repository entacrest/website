import * as yup from "yup";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const ContactFormSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain letters "),
  last_name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain letters "),
  email: yup
    .string()
    .matches(emailRegex, "Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Phone number must contain only digits")

    .matches(/^\d{10,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});
export const ApplicationFormSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain letters "),
  last_name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain letters "),
  email: yup
    .string()
    .matches(emailRegex, "Invalid email format")
    .required("Email is required"),
  role: yup.string().required("Enter the role you are applying for"),
  cover_letter: yup.string(),
});
