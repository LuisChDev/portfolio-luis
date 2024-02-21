"use client";

import { useRef } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

import { useTranslation } from "@/app/i18n/client";

const Contact = ({ params }: { params: { lng: string; }}) => {
  const { t } = useTranslation(params.lng, "contact");
  const captchaRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      email1: "",
      subject1: "",
      message1: "",
    },
    onSubmit: (values) => {
      const { subject1, email1, message1 } = values;
      const token = (captchaRef.current || { getValue: () => "a" }).getValue();

      fetch("/api/send_mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          subject1,
          email1,
          message1,
          token
        }),
      })
        .then((response) => {
          response.json().then((response) => {
            console.log("the response: ", response);
          });
        })
        .catch(() => {
          console.log("there was an error");
        });
    },
  });

  return (
    <div className="h-screen p-6 text-black dark:text-stone-200">
      <div className="text-xl">
        {t("description")}
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="flex max-w-xs md:max-w-md flex-col gap-4 border-2
         dark:border-stone-200 p-6 mt-6 rounded-xl"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value={t("contactEmail")} />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder={t("contactEmailPlaceholder")}
            required
            value={formik.values.email1}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="subject1" value={t("contactSubject")} />
          </div>
          <TextInput
            id="subject1"
            required
            value={formik.values.subject1}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="message1" value={t("contactMessage")} />
          </div>
          <Textarea
            id="message1"
            placeholder={t("contactMessagePlaceholder")}
            rows={4}
            required
            value={formik.values.message1}
            onChange={formik.handleChange}
          />
        </div>

        <ReCAPTCHA
          hl={params.lng}
          ref={captchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "default"}
        />
        <Button type="submit">{t("submit")}</Button>
      </form>
    </div>
  );
};

export default Contact;
