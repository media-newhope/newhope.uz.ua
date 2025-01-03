"use client";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { FormField } from "@/app/components/form/FormField";
import { Button } from "@/app/components/button/Button";
import { getTranslation } from "@/app/lib/utils";
import { LangProps, LANGUAGE } from "@/app/locales/models";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

function getValidationSchema(t: (token: LangProps) => string) {
  return Yup.object({
    name: Yup.string()
      .min(2, t("FEEDBACK.ERROR.NAME_MIN"))
      .required(t("FEEDBACK.ERROR.NAME_REQUIRED")),
    email: Yup.string()
      .email(t("FEEDBACK.ERROR.EMAIL"))
      .required(t("FEEDBACK.ERROR.EMAIL_REQUIRED")),
    message: Yup.string()
      .min(10, t("FEEDBACK.ERROR.MESSAGE_MIN"))
      .required(t("FEEDBACK.ERROR.MESSAGE_REQUIRED")),
  });
}

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const FORM_ID = "1FAIpQLSfoJl8L8zuMevPRlJJnL07BmC-IEMtpqtu3h39MIQsWbYehAA";
const NAME_ID = "1511643703";
const EMAIL_ID = "1593919696";
const MESSAGE_ID = "162008232";

export const FeedbackForm = ({ lang }: { lang: LANGUAGE }) => {
  const t = getTranslation(lang);

  const handleSubmit = async (
    formData: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>,
  ) => {
    const formUrl = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

    console.log();

    const data = new URLSearchParams();
    data.append(`entry.${NAME_ID}`, formData.name);
    data.append(`entry.${EMAIL_ID}`, formData.email);
    data.append(`entry.${MESSAGE_ID}`, formData.message);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      });

      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema(t)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleSubmit }) => (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <FormField
              label={t("FEEDBACK.NAME")}
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div>
            <FormField
              label={t("FEEDBACK.EMAIL")}
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div>
            <FormField
              label={t("FEEDBACK.MESSAGE")}
              multiline={true}
              name="message"
              id="message"
              rows={4}
            />
          </div>

          <div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                t("FEEDBACK.SEND")
              )}
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};
