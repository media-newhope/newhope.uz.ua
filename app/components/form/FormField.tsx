"use client";
import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ErrorMessage, Field } from "formik";
import { FieldProps } from "formik/dist/Field";

interface BaseFieldProps {
  label: string;
  error?: string;
  className?: string;
}

interface InputFieldProps
  extends BaseFieldProps,
    InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password" | "number";
  multiline?: false;
}

interface TextAreaFieldProps
  extends BaseFieldProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  multiline: true;
}

type FormFieldProps = InputFieldProps | TextAreaFieldProps;

export const FormField: FC<FormFieldProps> = ({
  label,
  name = "",
  className = "",
  multiline = false,
  ...props
}) => {
  const baseFieldClasses = `
    w-full
    px-6
    bg-white
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    transition-all
    duration-200
  `;

  const inputClasses = `
    h-16
    rounded-lg
  `;

  const textareaClasses = `
    h-32
    py-4
    rounded-lg
    resize-none
  `;

  return (
    <div className={`relative ${className}`}>
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <>
            {multiline ? (
              <textarea
                {...field}
                {...(props as TextAreaFieldProps)}
                id={name}
                placeholder={label}
                className={`
                  ${baseFieldClasses}
                  ${textareaClasses}
                  ${meta.touched && meta.error ? "bg-red-50" : "bg-gray-50"}
                `}
              />
            ) : (
              <input
                {...field}
                {...(props as InputFieldProps)}
                id={name}
                placeholder={label}
                className={`
                  ${baseFieldClasses}
                  ${inputClasses}
                  ${meta.touched && meta.error ? "bg-red-50" : "bg-gray-50"}
                `}
              />
            )}
            <ErrorMessage
              name={name}
              component="div"
              className="absolute -bottom-5 left-0 text-sm text-red-500"
            />
          </>
        )}
      </Field>
    </div>
  );
};
