import * as yup from "yup";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Booking window for scoping calls; the backend enforces the same rules in Lagos time.
export const BOOKING_WINDOW_DAYS = 60;
export const isoDate = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
export const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

export const BookCallSchema = yup.object().shape({
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
  company: yup.string().default(""),
  service: yup.string().required("Choose what you want built"),
  budget: yup.string().required("Choose an estimated budget"),
  timeline: yup.string().required("Choose when you'd like to start"),
  payment_preference: yup.string().required("Choose how you'd like to pay"),
  preferred_date: yup
    .string()
    .required("Pick a date for the call")
    .test("weekday", "Calls run Monday to Friday. Please choose a weekday.", (v) => {
      if (!v) return false;
      const day = new Date(`${v}T12:00:00`).getDay();
      return day !== 0 && day !== 6;
    })
    .test("window", `Choose a date between tomorrow and ${BOOKING_WINDOW_DAYS} days from now.`, (v) => {
      if (!v) return false;
      const today = new Date();
      return v >= isoDate(addDays(today, 1)) && v <= isoDate(addDays(today, BOOKING_WINDOW_DAYS));
    }),
  preferred_time: yup.string().required("Pick a time"),
  details: yup
    .string()
    .required("Tell us about your project")
    .min(30, "Tell us a little more (at least 30 characters)"),
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

// Nigerian mobile numbers, with or without +234 / 234 / leading 0 (spaces and dashes ignored).
export const NG_PHONE = /^(?:\+?234|0)[789][01]\d{8}$/;

export const OlecClaimSchema = yup.object().shape({
  code: yup.string().trim().required("Enter your voucher code"),
  full_name: yup.string().trim().required("Enter your full name"),
  business_name: yup.string().trim().required("Enter your business name"),
  email: yup
    .string()
    .matches(emailRegex, "Enter a valid email address")
    .required("Enter your email address"),
  phone: yup
    .string()
    .required("Enter your phone or WhatsApp number")
    .test("ng-phone", "Enter a valid Nigerian number, e.g. 08012345678", (v) => NG_PHONE.test((v || "").replace(/[\s\-()]/g, ""))),
  about: yup.string().max(500, "Keep this under 500 characters").default(""),
  accept_terms: yup.boolean().oneOf([true], "Please accept the terms and conditions").required(),
});
