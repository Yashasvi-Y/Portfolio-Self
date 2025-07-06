import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <div className="bg-black border border-white/10 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 w-6 h-6 border-2 border-white/20 rotate-45"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 bg-white/20 rounded-full"></div>

            <div className="relative z-10">
              <h3 className="font-tanPearl text-3xl font-light text-white mb-2">
                get in touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="What's your email?"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                />

                <textarea
                  name="message"
                  placeholder="Drop your message ..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-lg transition-all duration-300 cursor-glow disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send it →"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Profile Info */}
          <div className="text-center lg:text-right">
            <div className="inline-block">
              <img
                src="/images/logo-light.png"
                alt="Y Logo"
                className="w-16 h-16 mx-auto lg:ml-auto mb-6"
              />

              <h2 className="font-tanPearl text-4xl md:text-5xl font-light mb-4">
                Yashasvi Yadav
              </h2>

              <p className="text-white/60 mb-8">
                Tech-stack here : React, Tailwindcss, Vite, emailjs
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-end space-x-6 mb-8">
                <a
                  href="mailto:yashi83yadav@example.com"
                  className="cursor-glow p-2"
                >
                  <Mail className="w-6 h-6 text-white/70 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/yashasvi-yadav05"
                  className="cursor-glow p-2"
                >
                  <Linkedin className="w-6 h-6 text-white/70 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://github.com/Yashasvi-Y"
                  className="cursor-glow p-2"
                >
                  <Github className="w-6 h-6 text-white/70 hover:text-white transition-colors" />
                </a>
              </div>

              <p className="text-white/50 text-sm">
                © 2025 Yashasvi Yashasvi. Built with care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
