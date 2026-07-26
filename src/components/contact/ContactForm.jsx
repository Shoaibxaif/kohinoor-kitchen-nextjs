"use client";

import { CheckCircle2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { SITE } from "@/constants/siteConfig";

const services = [
  "Modular Kitchen",
  "Wardrobe",
  "Bed",
  "Sofa",
  "TV Panel",
  "Dining Furniture",
];
const budgets = ["Under ₹2 Lakhs", "₹2–5 Lakhs", "₹5–10 Lakhs", "₹10 Lakhs+"];
const stages = ["Planning", "Construction", "Renovation", "Ready to Start"];
const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const fieldClasses =
  "w-full border border-[#e8e4dc] px-5 py-4 outline-none transition-colors focus:border-[#C8A97A] focus-visible:ring-2 focus-visible:ring-[#C8A97A]/40";
const phoneHref = `tel:${SITE.phone.replace(/\s/g, "")}`;
function ContactForm() {
  const [submissionState, setSubmissionState] = useState("idle");

  useEffect(() => {
    if (emailPublicKey) {
      emailjs.init({ publicKey: emailPublicKey });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submissionState === "sending") {
      return;
    }

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setSubmissionState("configuration-error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    // A hidden field that ordinary visitors never complete. It quietly drops
    // simple bot submissions before they reach EmailJS.
    if (formData.get("website")) {
      form.reset();
      setSubmissionState("success");
      return;
    }

    const templateParams = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      city: formData.get("city"),
      services: formData.getAll("services").join(", ") || "Not specified",
      budget: formData.get("budget") || "Not specified",
      stage: formData.get("stage") || "Not specified",
      message: formData.get("message") || "Not provided",
      time: new Date().toLocaleString("en-IN"),
    };

    setSubmissionState("sending");

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        templateParams,
        emailPublicKey,
      );
      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <section id="contact-form" className="bg-[#f7f5f0] py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              align="left"
              tag="Free Consultation"
              title="Let's Build Your"
              italicWord="Dream Space"
            />
            <p className="mt-6 max-w-xl leading-8 text-[#6b6b66]">
              Share your requirements and our design experts will contact you within 24 hours.
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
                    City / location <span aria-hidden="true">*</span>
                  </span>
                  <input
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    maxLength={120}
                    required
                    className={fieldClasses}
                  />
                </label>
              </div>

              <input
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <fieldset>
                <legend className="mb-4 text-sm font-semibold uppercase text-[#1a1a18]">
                  Services required
                </legend>
                <div className="grid gap-4 md:grid-cols-2">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex cursor-pointer items-center gap-3 border border-[#e8e4dc] p-4 transition-colors hover:border-[#C8A97A]"
                    >
                      <input name="services" value={service} type="checkbox" />
                      {service}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-8 md:grid-cols-2">
                <fieldset>
                  <legend className="mb-4 text-sm font-semibold uppercase text-[#1a1a18]">
                    Budget
                  </legend>
                  {budgets.map((budget) => (
                    <label key={budget} className="mb-2 flex cursor-pointer gap-3">
                      <input type="radio" name="budget" value={budget} />
                      {budget}
                    </label>
                  ))}
                </fieldset>

                <fieldset>
                  <legend className="mb-4 text-sm font-semibold uppercase text-[#1a1a18]">
                    Project stage
                  </legend>
                  {stages.map((stage) => (
                    <label key={stage} className="mb-2 flex cursor-pointer gap-3">
                      <input type="radio" name="stage" value={stage} />
                      {stage}
                    </label>
                  ))}
                </fieldset>
              </div>

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

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={submissionState === "sending"}
              >
                {submissionState === "sending"
                  ? "Sending Request..."
                  : "Get Free Design Consultation"}
              </Button>

              <div aria-live="polite" aria-atomic="true">
                {submissionState === "success" && (
                  <div className="rounded-md border border-[#C8A97A] bg-[#fdf9f3] p-5">
                    <h4 className="font-semibold text-[#1a1a18]">
                      Your enquiry has been received.
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[#5f5f5f]">
                      Thank you for choosing <strong>{SITE.name}</strong>. Our design consultant
                      will review your requirements and get in touch within the next{" "}
                      <strong>24 hours</strong>.
                    </p>
                    <p className="mt-3 text-sm text-[#5f5f5f]">
                      Need immediate assistance?{" "}
                      <a className="font-semibold underline" href={phoneHref}>
                        Call us at {SITE.phone}
                      </a>
                    </p>
                  </div>
                )}

                {submissionState === "error" && (
                  <p role="alert" className="text-sm text-red-700">
                    We could not send your request. Please try again or call us directly.
                  </p>
                )}

                {submissionState === "configuration-error" && (
                  <p role="alert" className="text-sm text-red-700">
                    The contact form is not configured yet. Please call us directly.
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-6 border-t pt-6 text-sm text-[#6b6b66]">
                <span>✓ Free Consultation</span>
                <span>✓ Free Site Visit</span>
                <span>✓ 24-Hour Response</span>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1a1a18] p-8 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C8A97A]">
                Why Choose Kohinoor?
              </p>
              <h3 className="mt-4 text-3xl" style={{ fontFamily: "Playfair Display" }}>
                Trusted Interior Experts
              </h3>
              <div className="mt-8 space-y-4">
                {[
                  "Free Design Consultation",
                  "Free Site Measurement",
                  "Premium Materials",
                  "Factory Manufacturing",
                  "Professional Installation",
                  "After Sales Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} aria-hidden="true" className="text-[#C8A97A]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

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
                className="h-[340px] w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;
