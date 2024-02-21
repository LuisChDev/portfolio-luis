import { sendMail } from "../../../lib/mailService";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  return new Response(
    `this is a GET request. This is the payload: ${request.body}`,
    {}
  );
};

export const POST = async (request: Request) => {
  try {
    const reqBody = await request.json();
    const googleRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${
        process.env.RECAPTCHA_SECRET_KEY
       }&response=${reqBody.token}`,
      { method: "POST" }
    );
    const approval = await googleRes.json();
    if (approval.success) {
      sendMail({
        subject: reqBody.subject1,
        fromEmail: reqBody.email1 || "inquiriesluisedo@gmail.com",
        toEmail: "luischa123@gmail.com",
        otpText: `${reqBody.message1} \n\n enviado por ${reqBody.email1}`,
      });

      return Response.json({ success: true })
    }

    return Response.json("robot");
  } catch (error) {
    return new Response(`There was an error sending the email: ${error}`, {
      status: 500,
    });
  }
};
