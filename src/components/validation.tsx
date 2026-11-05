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
export const BuildFlexFormSchema = yup.object().shape({
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
    .matches(/^\d{10,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  organisation: yup.string().default(""),
  applicant_type: yup.string().required("Tell us who is applying"),
  service: yup.string().required("Choose what you want built"),
  budget: yup.string().required("Choose an estimated budget"),
  duration: yup.string().required("Choose a preferred payment period"),
  details: yup
    .string()
    .required("Tell us about your project")
    .min(20, "Please give us a little more detail (at least 20 characters)"),
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
