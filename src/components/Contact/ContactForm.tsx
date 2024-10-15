"use client";
import { sendContactForm } from "@/lib/ContactForm";
import Swal from "sweetalert2";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPhoneError(null); // Reset phone error

    // Custom validation for phone number
    if (!phone || phone.length !== 10 || isNaN(Number(phone))) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }

    setSubmitting(true);

    const emailSent = await sendContactForm(
      name || undefined, // Convert null to undefined
      email || undefined,
      phone || undefined,
      message || undefined
    );

    if (emailSent) {
      // Set submitting to false and clear form fields
      setSubmitting(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Notify success with Swal
      Swal.fire({
        title: "Success!",
        text: "Our team will reach you soon! Thanks",
        icon: "success",
      });

      try {
        const response = await fetch(
          "https://rubyeng.demo-web.live/wp-json/contact_form/v1/submit",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name || "",
              email: email || "",
              contact: `${phone || ""}`,
              message: message || "",
            }),
          }
        );

        if (!response.ok) {
          setSubmitting(false);
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    } else {
      // Set submitting to false and notify failure
      setSubmitting(false);
      Swal.fire({
        title: "Failed!",
        text: "Form Submission Failed!",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="relative p-3  border-primary rounded-lg shadow-lg dark:bg-dark-2 sm:p-10">
        <form onSubmit={handleContactSubmit}>
          <div className="mb-6">
            <input
              type="text"
              required
              name="name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              required
              name="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
            />
          </div>
          <div className="mb-6 flex gap-2 w-full">
            <input
              type="text"
              required
              name="phone"
              value={phone || ""}
              placeholder="Your Phone"
              onChange={(e) => setPhone(e.target.value)}
              className="dark:border-dark-3 border-gray-300 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
            />
          </div>
          {phoneError && <p className="text-red-600 mt-2">{phoneError}</p>}
          <div className="mb-6">
            <textarea
              rows={6}
              required
              name="message"
              value={message || ""}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full text-base text-white bg-[#232c77] font-bold p-3 transition border shadow-lg rounded-full bg-primary hover:bg-opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
