"use client";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { FormField } from "@/app/components/form/FormField";
import { Button } from "@/app/components/Button/Button";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

export const FeedbackForm = () => {
  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: any,
  ) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      resetForm();
      alert("Thank you for your message. We will get back to you soon!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleSubmit }) => (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <FormField label="Name" type="text" name="name" id="name" />
          </div>

          <div>
            <FormField label="Email" type="email" name="email" id="email" />
          </div>

          <div>
            <FormField
              label="Message"
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
                "Відправити"
              )}
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};
