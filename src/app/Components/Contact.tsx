"use client";
import { useState } from "react";
import { contactInfo } from "../data";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("meoqrzvq");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    await handleSubmit(e);
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900 text-secondary-foreground"
    >
      <div className="container mx-auto px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto ">
            I&apos;m always excited to work on new projects and collaborate with
            amazing people. Let&apos;s discuss how we can bring your ideas to
            life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 group bg-background/10 backdrop-blur-sm border border-border/10 p-3 rounded-2xl flex-col sm:flex-row text-center sm:text-left gap-5 "
              >
                <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-full group-hover:scale-110 transition-transform duration-300 m-0 text-primary-foreground">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold">
                    {info.title}
                  </h4>
                  <a
                    href={info.link}
                    className=" hover:text-primary-foreground transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-background/5 rounded-2xl backdrop-blur-sm border border-border/10">
              <h4 className="text-xl font-semibold mb-4 text-center sm:text-left">Why Work With Me?</h4>
              <ul className="space-y-2 font-bold text-sm sm:text-base">
                <li>✨ Creative problem-solving approach</li>
                <li>🚀 Fast turnaround times</li>
                <li>💡 Modern technology stack</li>
                <li>🤝 Collaborative communication</li>
                <li>📱 Mobile-first responsive design</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/10 backdrop-blur-sm border-border/20 rounded-2xl border text-card-foreground shadow-sm ">
            <div className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium /90 mb-2">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      placeholder="John"
                      required
                      className=" placeholder:text-muted-foreground/60 focus:border-ring flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium /90 mb-2">
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      placeholder="Doe"
                      required
                      className=" placeholder:text-muted-foreground/60 focus:border-ring flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium /90 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className=" placeholder:text-muted-foreground/60 focus:border-ring flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium /90 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className=" placeholder:text-muted-foreground/60 focus:border-ring flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || state.submitting}
                  className="w-full flex justify-center items-center font-bold bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting || state.submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
