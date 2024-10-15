"use server";

import { sendmail } from "./sendmail";

export const sendContactForm = async (
  name = "",
  email = "",
  phone = "",
  message = "",
  doctor = ""
) => {
  try {
    await sendmail({
      to: "info.team.website@gmail.com",
      name: name,
      subject: "Contact Form Submission From Dr Arpit Bansal",
      body: `
        <div>
          <h3>Name: ${name}</h3>
          <h3>Email: ${email}</h3>
        
          ${message ? `<h3>Phone: ${message}</h3>` : ""}
          ${doctor ? `<h3>Message: ${doctor}</h3>` : ""}
        </div>
      `,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
