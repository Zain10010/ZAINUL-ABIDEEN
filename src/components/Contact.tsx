import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Download,
  Copy,
  Check,
  MapPin,
  Sparkles,
  Phone,
  MessageSquare,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission / trigger client-side success feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#6285FF', '#00F0FF', '#8CA6FF', '#FFFFFF']
      });

      // Construct mailto as fallback so message is actually sendable
      const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject || 'Inquiry from ' + formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.open(mailtoLink, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151820] border border-white/10 text-xs font-semibold tracking-wider uppercase text-[#6285FF] mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-electric">Meaningful.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Have an interesting idea, an opportunity, or a project in mind? I'd love to connect and explore what we can create together.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className="bento-card p-6 border-l-4 border-l-[#6285FF] hover:border-[#6285FF]/50 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6285FF]">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${profileData.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-[#6285FF] transition-colors break-all"
              >
                {profileData.email}
              </a>

              <p className="mt-2 text-xs text-[#A1A1AA]">
                Feel free to email directly for collaborations, research inquiries, or project discussions.
              </p>
            </div>

            {/* Social & Profiles Bento Box */}
            <div className="bento-card p-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A1A1AA] block">
                Connect Online
              </span>

              {/* LinkedIn */}
              <a
                href={profileData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#101218] border border-white/[0.06] hover:border-[#6285FF]/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0077B5]/20 border border-[#0077B5]/40 flex items-center justify-center text-[#0077B5]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#6285FF] transition-colors">
                      LinkedIn
                    </h4>
                    <p className="text-[11px] text-[#71717A] font-mono">
                      linkedin.com/in/zainulabideen05
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#6285FF] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              {/* GitHub */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#101218] border border-white/[0.06] hover:border-[#6285FF]/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#6285FF] transition-colors">
                      GitHub
                    </h4>
                    <p className="text-[11px] text-[#71717A] font-mono">
                      github.com/Zain10010
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#6285FF] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${profileData.phone}`}
                className="p-3.5 rounded-xl bg-[#101218] border border-white/[0.06] hover:border-[#6285FF]/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[#6285FF]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#6285FF] transition-colors">
                      Phone / Mobile
                    </h4>
                    <p className="text-[11px] text-[#71717A] font-mono">
                      {profileData.phone}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#6285FF] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              {/* Location Badge */}
              <div className="p-3.5 rounded-xl bg-[#101218] border border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Location</h4>
                  <p className="text-[11px] text-[#71717A]">{profileData.location} &bull; Mangalore, India</p>
                </div>
              </div>
            </div>

            {/* Resume Download Action Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#151926] via-[#101218] to-[#0D1017] border border-[#6285FF]/30 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">Curriculum Vitae</h4>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Download a formal summary of my academics, research, and technical stack.
                </p>
              </div>
              <button
                onClick={onOpenResume}
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#6285FF] hover:bg-[#4F73EB] text-xs font-semibold text-white transition-all shadow-electric-sm active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bento-card p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  I typically respond within 24–48 hours.
                </p>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#6285FF]/10 text-[#8CA6FF] border border-[#6285FF]/20">
                Active Inbox
              </span>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#101218] border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md mx-auto">
                  Your email client has opened with your message directed to{' '}
                  <strong className="text-white">{profileData.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl bg-[#151820] border border-white/10 text-xs font-semibold text-white hover:bg-[#1B202D] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#D4D4D8]">
                      Your Name <span className="text-[#6285FF]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D1017] border border-white/10 text-xs sm:text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#6285FF] focus:ring-1 focus:ring-[#6285FF] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#D4D4D8]">
                      Your Email Address <span className="text-[#6285FF]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D1017] border border-white/10 text-xs sm:text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#6285FF] focus:ring-1 focus:ring-[#6285FF] transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#D4D4D8]">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Collaboration Opportunity / Research Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D1017] border border-white/10 text-xs sm:text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#6285FF] focus:ring-1 focus:ring-[#6285FF] transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#D4D4D8]">
                    Message <span className="text-[#6285FF]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your inquiry, project vision, or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D1017] border border-white/10 text-xs sm:text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#6285FF] focus:ring-1 focus:ring-[#6285FF] transition-all resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#6285FF] to-[#4F73EB] hover:from-[#4F73EB] hover:to-[#3858CC] disabled:opacity-50 text-xs sm:text-sm font-semibold text-white transition-all shadow-electric hover:shadow-[0_0_35px_rgba(98,133,255,0.6)] active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

