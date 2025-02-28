// import { sendMail } from "../../../lib/mailService";
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
    const { subject, email, message } = reqBody;
    const googleRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${
        process.env.RECAPTCHA_SECRET_KEY
       }&response=${reqBody.token}`,
      { method: "POST" }
    );
    const approval = await googleRes.json();

    if (approval.success) {
      console.log(JSON.stringify(reqBody));
      fetch("https://formspree.io/f/mnnjkeyp", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },

        body: JSON.stringify({
          subject, email, message
        })
      })
        .then(async response => {
          if (response.ok) return Response.json({ success: true })
          else {
            const data = await response.json();
            if (Object.hasOwn(data, 'errors')) {
              return Response.json({
                success: false,
                errors: data.errors.map(error => error.message).join(", ")
              })
            }
            return Response.json({
              success: false,
            })
          }
        })
        .catch(error => {
          return new Response(`there was an error: ${error}`, {status: 500});
        })

      // sendMail({
      //   subject: reqBody.subject1,
      //   fromEmail: reqBody.email1 || "inquiriesluisedo@gmail.com",
      //   toEmail: "luischa123@gmail.com",
      //   otpText: `${reqBody.message1} \n\n enviado por ${reqBody.email1}`,
      // });

      return Response.json({ success: true })
    }

    return new Response(`There was a problem: ${JSON.stringify(approval)}`, {
      status: 500
    });
  } catch (error) {
    return new Response(`There was an error sending the email: ${error}`, {
      status: 500,
    });
  }
};
