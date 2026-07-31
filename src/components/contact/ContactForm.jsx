"use client";

import { CheckCircle2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/siteConfig";

const RATE_LIMIT_MS = 30_000;
const CONTACT_FORM_LAST_SUBMIT = "contactFormLastSubmit";

const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const fieldClasses =
  "w-full border border-[#e8e4dc] px-5 py-4 outline-none transition-colors focus:border-[#C8A97A] focus-visible:ring-2 focus-visible:ring-[#C8A97A]/40";
const phoneHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

function ContactForm() {
  const [submissionState, setSubmissionState] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [cooldown, setCooldown] = useState(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    const lastSubmit = Number(window.localStorage.getItem(CONTACT_FORM_LAST_SUBMIT) || "0");
    const timeSinceLast = Date.now() - lastSubmit;

    return timeSinceLast < RATE_LIMIT_MS ? Math.ceil((RATE_LIMIT_MS - timeSinceLast) / 1000) : 0;
  });

  useEffect(() => {
    if (emailPublicKey) {
      emailjs.init({ publicKey: emailPublicKey });
    }
  }, []);

  useEffect(() => {
    if (cooldown <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setCooldown((current) => {
        if (current <= 1) {
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [cooldown]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submissionState === "sending") {
      return;
    }

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setSubmissionState("validation-error");
      setStatusMessage("Please complete all required fields before sending your enquiry.");
      return;
    }

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setSubmissionState("configuration-error");
      setStatusMessage("The contact form is not fully configured. Please call us directly.");
      return;
    }

    const formData = new FormData(form);

    if (formData.get("website")) {
      form.reset();
      setSubmissionState("success");
      setStatusMessage("Thank you. Your enquiry has been received.");
      return;
    }

    const consentAccepted = formData.get("consent") === "on";

    if (!consentAccepted) {
      setSubmissionState("validation-error");
      setStatusMessage("Please agree to our privacy policy to proceed.");
      return;
    }

    const now = Date.now();
    const lastSubmit = Number(window.localStorage.getItem(CONTACT_FORM_LAST_SUBMIT) || "0");
    const timeSinceLast = now - lastSubmit;

    if (timeSinceLast < RATE_LIMIT_MS) {
      const waitSeconds = Math.ceil((RATE_LIMIT_MS - timeSinceLast) / 1000);
      setSubmissionState("rate-limit");
      setStatusMessage(`Please wait ${waitSeconds} second${waitSeconds === 1 ? "" : "s"} before submitting again.`);
      setCooldown(waitSeconds);
      return;
    }

    const templateParams = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email") || "Not provided",
      message: formData.get("message") || "Not provided",
      consent: consentAccepted ? "Yes" : "No",
      time: new Date().toLocaleString("en-IN"),
    };

    setSubmissionState("sending");
    setStatusMessage("");

    try {
      await emailjs.send(emailServiceId, emailTemplateId, templateParams, emailPublicKey);
      window.localStorage.setItem(CONTACT_FORM_LAST_SUBMIT, String(now));
      setSubmissionState("success");
      setStatusMessage("Your enquiry has been sent successfully. We will reply within 24 hours.");
      setCooldown(Math.ceil(RATE_LIMIT_MS / 1000));
      form.reset();
    } catch {
      setSubmissionState("error");
      setStatusMessage("We could not send your message right now. Please try again later or call us directly.");
    }
  };

  return (
    <section id="contact-form" className="bg-[#f7f5f0] pt-24 pb-16 lg:pt-32 lg:pb-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              align="left"
              tag="Free Consultation"
              title="Let's Build Your"
              italicWord="Dream Modular Kitchen"
            />
            <p className="mt-6 max-w-xl leading-8 text-[#6b6b66]">
              Share your modular kitchen requirements and our design experts will contact you within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              aria-busy={submissionState === "sending"}
              className="mt-10 space-y-8 rounded-sm border border-[#e8e4dc] bg-white p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#1a1a18]">
                    Full name <span aria-hidden="true">*</span>
                  </span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    required
                    className={fieldClasses}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#1a1a18]">
                    Mobile number <span aria-hidden="true">*</span>
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={30}
                    required
                    className={fieldClasses}
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#1a1a18]">
                  Email address
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  className={fieldClasses}
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#1a1a18]">
                  Tell us about your project
                </span>
                <textarea
                  name="message"
                  rows={6}
                  maxLength={3000}
                  className={`${fieldClasses} resize-none`}
                />
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 rounded border-[#e8e4dc] text-[#C8A97A] focus:ring-[#C8A97A]"
                />
                <span className="text-sm leading-6 text-[#4a4a46]">
                  I agree to receive project updates from {SITE.name}. I have read and agree
                  to the <Link href={ROUTES.PRIVACY} className="underline text-[#1a1a18]">Privacy Policy</Link>.
                </span>
              </label>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={submissionState === "sending" || cooldown > 0}
              >
                {submissionState === "sending"
                  ? "Sending Request..."
                  : cooldown > 0
                    ? `Please wait ${cooldown}s...`
                    : "Get Free Design Consultation"}
              </Button>

              <div id="contact-form-status" aria-live="polite" aria-atomic="true">
                {statusMessage ? (
                  <div
                    role={submissionState === "success" ? "status" : "alert"}
                    className={`mt-6 rounded-md p-5 ${submissionState === "success"
                      ? "border border-[#C8A97A] bg-[#fdf9f3] text-[#1a1a18]"
                      : "border border-red-200 bg-red-50 text-red-700"
                      }`}
                  >
                    <p className="text-sm leading-6">{statusMessage}</p>
                    {submissionState === "success" && (
                      <p className="mt-3 text-sm text-[#5f5f5f]">
                        Need immediate assistance? <a className="font-semibold underline" href={phoneHref}>
                          Call us at {SITE.phone}
                        </a>
                      </p>
                    )}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-6 border-t text-sm text-[#6b6b66]">
                <span>✓ Free Consultation</span>
                <span>✓ Free Site Visit</span>
                <span>✓ 24-Hour Response</span>
              </div>
            </form>
          </div>

          <div className="space-y-8">

            <div className="border border-[#e8e4dc] bg-white p-8">
              <h3 className="text-3xl" style={{ fontFamily: "Playfair Display" }}>
                Visit Our Showroom
              </h3>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <MapPin aria-hidden="true" className="mt-1 shrink-0 text-[#C8A97A]" />

                  <a
                    href={SITE.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {SITE.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </a>
                </div>

                <div className="flex gap-4">
                  <Phone aria-hidden="true" className="mt-1 text-[#C8A97A]" />
                  <p>
                    <a className="hover:underline" href={phoneHref}>
                      {SITE.phone}
                    </a>
                  </p>
                </div>

                <div className="flex gap-4">
                  <Mail aria-hidden="true" className="mt-1 text-[#C8A97A]" />
                  <a className="hover:underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </div>

                <div className="flex gap-4">
                  <Clock3 aria-hidden="true" className="mt-1 text-[#C8A97A]" />
                  <p>
                    {SITE.hours.days}
                    <br />
                    {SITE.hours.time}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-[#e8e4dc]">
              <iframe
                title={`${SITE.name} showroom location`}
                src={SITE.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section >
  );
}

export default ContactForm;
