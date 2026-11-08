// Option values must match the choice keys on the backend (synchgate entacrest/models).

export const budgets = [
  { value: "below_500k", label: "Below ₦500,000" },
  { value: "500k_2m", label: "₦500,000 – ₦2 million" },
  { value: "2m_5m", label: "₦2 million – ₦5 million" },
  { value: "above_5m", label: "Above ₦5 million" },
  { value: "unsure", label: "Not sure yet" },
];

export const timelines = [
  { value: "asap", label: "As soon as possible" },
  { value: "1_3_months", label: "In 1 to 3 months" },
  { value: "3_6_months", label: "In 3 to 6 months" },
  { value: "exploring", label: "Just exploring" },
];

export const paymentPreferences = [
  { value: "outright", label: "Pay outright" },
  { value: "buildflex", label: "BuildFlex (pay small small)" },
  { value: "unsure", label: "Not sure yet" },
];

// Weekday call slots, Lagos time (WAT).
export const timeSlots = [
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
];
