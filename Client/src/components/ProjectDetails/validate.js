import { useTranslation } from "react-i18next";

export const validate = (values) => {
  const errors = {};
  if (!values.amount) {
    errors.amount = "Required";
  } else if (values.amount < 10) {
    errors.amount = "The minimum amount must be at least 10 USD";
  }
  if (!values.duration) {
    errors.duration = "Required";
  } else if (values.duration <= 0) {
    errors.duration = "The minimum duration must be at least 1 day";
  }
  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.split(/\s/).length < 5) {
    errors.description = "The minimum description must be at least 5 words";
  }

  return errors;
};
