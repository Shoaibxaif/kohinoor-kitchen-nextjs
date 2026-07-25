"use client";

import {
    MapPin, Phone, Mail, Clock3, CheckCircle2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

const services = ["Modular Kitchen", "Wardrobe", "Bed", "Sofa", "TV Panel", "Dining Furniture"];
const budgets = ["Under ₹2 Lakhs", "₹2–5 Lakhs", "₹5–10 Lakhs", "₹10 Lakhs+"];
const stages = ["Planning", "Construction", "Renovation", "Ready to Start"];
const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

if (emailPublicKey) {
    emailjs.init({ publicKey: emailPublicKey });
}

function ContactForm() {
    const [submissionState, setSubmissionState] = useState("idle");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
            setSubmissionState("configuration-error");
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);
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
                emailPublicKey
            );
            form.reset();
            setSubmissionState("success");
        } catch (error) {
            console.error("EmailJS Error:", error);

            console.log("Status:", error.status);
            console.log("Text:", error.text);

            setSubmissionState("error");
        }
    };

    return (
        <section id="contact-form" className="bg-[#f7f5f0] py-24 lg:py-32">
            <Container>
                <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <SectionHeading align="left" tag="Free Consultation" title="Let's Build Your" italicWord="Dream Space" />
                        <p className="mt-6 max-w-xl leading-8 text-[#6b6b66]">Share your requirements and our design experts will contact you within 24 hours.</p>
                        <form onSubmit={handleSubmit} className="mt-10 space-y-8 rounded-sm border border-[#e8e4dc] bg-white p-8">
                            <div className="grid gap-5 md:grid-cols-2">
                                <input name="name" type="text" placeholder="Full Name *" required className="border border-[#e8e4dc] px-5 py-4 outline-none focus:border-[#C8A97A]" />
                                <input name="phone" type="tel" placeholder="Mobile Number *" required className="border border-[#e8e4dc] px-5 py-4 outline-none focus:border-[#C8A97A]" />
                                <input name="email" type="email" placeholder="Email Address" className="border border-[#e8e4dc] px-5 py-4 outline-none focus:border-[#C8A97A]" />
                                <input name="city" type="text" placeholder="City / Location *" required className="border border-[#e8e4dc] px-5 py-4 outline-none focus:border-[#C8A97A]" />
                            </div>
                            <div><h4 className="mb-4 text-sm font-semibold uppercase">Services Required</h4><div className="grid gap-4 md:grid-cols-2">{services.map(s => <label key={s} className="flex items-center gap-3 border border-[#e8e4dc] p-4 hover:border-[#C8A97A]"><input name="services" value={s} type="checkbox" />{s}</label>)}</div></div>
                            <div className="grid gap-8 md:grid-cols-2">
                                <div><h4 className="mb-4 text-sm font-semibold uppercase">Budget</h4>{budgets.map(b => <label key={b} className="flex gap-3 mb-2"><input type="radio" name="budget" value={b} />{b}</label>)}</div>
                                <div><h4 className="mb-4 text-sm font-semibold uppercase">Project Stage</h4>{stages.map(s => <label key={s} className="flex gap-3 mb-2"><input type="radio" name="stage" value={s} />{s}</label>)}</div>
                            </div>
                            <textarea name="message" rows={6} placeholder="Tell us about your project..." className="w-full resize-none border border-[#e8e4dc] px-5 py-4 outline-none focus:border-[#C8A97A]" />
                            <Button type="submit" variant="primary" className="w-full" disabled={submissionState === "sending"}>{submissionState === "sending" ? "Sending Request..." : "Get Free Design Consultation"}</Button>
                            {submissionState === "success" && (
                                <div className="rounded-md border border-[#C8A97A] bg-[#fdf9f3] p-5">
                                    <h4 className="font-semibold text-[#1a1a18]">
                                        ✨ Your enquiry has been received.
                                    </h4>

                                    <p className="mt-2 text-sm text-[#5f5f5f] leading-6">
                                        Thank you for choosing <strong>Kohinoor Interior</strong>.
                                        Our design consultant will review your requirements and get in touch
                                        within the next <strong>24 hours</strong>.
                                    </p>

                                    <p className="mt-3 text-sm text-[#5f5f5f]">
                                        📞 Need immediate assistance?
                                        <br />
                                        Call us at <strong>+91 8929120505</strong>
                                    </p>
                                </div>
                            )}
                            {submissionState === "error" && <p role="alert" className="text-sm text-red-700">We could not send your request. Please try again or call us directly.</p>}
                            {submissionState === "configuration-error" && <p role="alert" className="text-sm text-red-700">The contact form is not configured yet. Please contact us by phone.</p>}
                            <div className="flex flex-wrap gap-6 border-t pt-6 text-sm text-[#6b6b66]"><span>✓ Free Consultation</span><span>✓ Free Site Visit</span><span>✓ 24-Hour Response</span></div>
                        </form>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-[#1a1a18] p-8 text-white"><p className="text-xs uppercase tracking-[0.2em] text-[#C8A97A]">Why Choose Kohinoor?</p><h3 className="mt-4 text-3xl" style={{ fontFamily: "Playfair Display" }}>Trusted Interior Experts</h3><div className="mt-8 space-y-4">{["Free Design Consultation", "Free Site Measurement", "Premium Materials", "Factory Manufacturing", "Professional Installation", "After Sales Support"].map(i => <div key={i} className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#C8A97A]" />{i}</div>)}</div></div>
                        <div className="border border-[#e8e4dc] bg-white p-8"><h3 className="text-3xl" style={{ fontFamily: "Playfair Display" }}>Visit Our Showroom</h3><div className="mt-8 space-y-6"><div className="flex gap-4"><MapPin className="mt-1 text-[#C8A97A]" /><p>G-396, Shaheed Nagar,<br />Ghaziabad, Uttar Pradesh</p></div><div className="flex gap-4"><Phone className="mt-1 text-[#C8A97A]" /><p>+91 8929120505<br />+91 8929547291</p></div><div className="flex gap-4"><Mail className="mt-1 text-[#C8A97A]" /><p>kohinoor9210@gmail.com</p></div><div className="flex gap-4"><Clock3 className="mt-1 text-[#C8A97A]" /><p>Mon–Sat<br />10 AM–7 PM</p></div></div></div>
                        <div className="overflow-hidden border border-[#e8e4dc]"><iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4023010851697!2d77.3354214!3d28.67761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5e9e1ba4c9%3A0x17296668bdcc9822!2sKohinoor%20Modular%20Kitchen%20-%20Interior%20Designer%2C%20Modular%20Kitchen%2C%20Wardrobe%2C%20and%20Bed%20Manufacturer%20in%20Ghaziabad!5e0!3m2!1sen!2sin!4v1782674839635!5m2!1sen!2sin" className="h-[340px] w-full" /></div>
                    </div>
                </div>
            </Container>
        </section>);
}
export default ContactForm;
