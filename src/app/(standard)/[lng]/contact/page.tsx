"use client";

import { useRef } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
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
        .catch((_response) => {
          console.log("there was an error");
        });
    },
  });

  return (
    <div className="p-6 dark:text-stone-200">
      <div className="text-xl">
        I'd be happy to hear from you. Please fill in the form below:
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="flex max-w-md flex-col gap-4 border-2
         dark:border-stone-200 p-6 mt-6 rounded-xl"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@email.com"
            required
            value={formik.values.email1}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="subject1" value="Subject" />
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
            <Label htmlFor="message1" value="Your Message" />
          </div>
          <Textarea
            id="message1"
            placeholder="leave your message here..."
            rows={4}
            required
            value={formik.values.message1}
            onChange={formik.handleChange}
          />
        </div>

        <ReCAPTCHA
          ref={captchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "default"}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;
