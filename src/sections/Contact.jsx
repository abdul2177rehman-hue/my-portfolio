import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, Phone, MessageSquare, Paperclip } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Toast } from '../components/ui/Toast';
import { personalData } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    email: '',
    message: '',
  });

  const [hasAttachment, setHasAttachment] = useState(false);
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.whatsappNumber.trim() || !formData.message.trim()) {
      setStatus({ loading: false, success: false, error: 'Please fill in Name, WhatsApp Number, and Message.' });
      setToastMessage('Please fill in Name, WhatsApp Number, and Message.');
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    const textMessage = `New portfolio contact:\nName: ${formData.name.trim()}\nWhatsApp: ${formData.whatsappNumber.trim()}\nEmail: ${formData.email.trim() || 'Not provided'}\nMessage: ${formData.message.trim()}${
      hasAttachment ? '\n(Note: Visitor would also like to share attachments)' : ''
    }`;

    const whatsappUrl = `https://wa.me/923104568021?text=${encodeURIComponent(textMessage)}`;

    setTimeout(() => {
      setStatus({ loading: false, success: true, error: '' });
      setToastMessage('Opening WhatsApp chat with your pre-filled message...');

      // Open WhatsApp chat in a new tab with pre-filled message
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // Trigger celebratory confetti in vibrant hues
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.65 },
          colors: ['#25D366', '#E11D48', '#BE123C', '#FB7185', '#334155'],
        });
      } catch {
        // Fallback gracefully
      }

      setFormData({ name: '', whatsappNumber: '', email: '', message: '' });
      setHasAttachment(false);
    }, 450);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Initiate Dialogue"
          title="Let's Build Something Great"
          highlight="Together"
          subtitle="Have an ambitious web project in mind, need MERN Stack architecture, or seeking creative development? Reach out today."
        />

        {/* ─── SPLIT CARD CONTAINER (Following Reference Layout) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mx-auto rounded-3xl sm:rounded-[36px] bg-white border border-slate-200/90 shadow-2xl shadow-slate-200/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative"
        >
          {/* Left Form Column */}
          <div className="lg:col-span-7 p-7 sm:p-10 md:p-12 flex flex-col justify-between relative z-20 bg-white">
            <div>
              {/* Brand Mini Mark */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center shadow-xs">
                  <span className="font-mono text-xs font-bold text-rose-400">
                    {personalData.monogram}
                  </span>
                </div>
                <span className="text-sm font-bold font-heading text-slate-900">
                  {personalData.name}
                </span>
              </div>

              {/* Bold Headline */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-[1.1]">
                Let's work together<span className="text-rose-600">.</span>
              </h3>

              {/* Sublines with Email & WhatsApp direct channels */}
              <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <span className="text-slate-400">Email:</span>
                  <a
                    href={`mailto:${personalData.socials.email}`}
                    className="text-rose-600 hover:text-rose-700 font-semibold underline underline-offset-2 transition-colors"
                  >
                    {personalData.socials.email}
                  </a>
                </div>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <span className="text-slate-400">WhatsApp:</span>
                  <a
                    href="https://wa.me/923104568021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-2 transition-colors"
                  >
                    <span>+92 310 4568021</span>
                  </a>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {/* Name Row: Visitor Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-5 pr-11 py-3.5 rounded-2xl bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-rose-500 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* WhatsApp Number & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Visitor's WhatsApp Number Field */}
                  <div className="relative">
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="Your WhatsApp Number"
                      required
                      className="w-full pl-5 pr-11 py-3.5 rounded-2xl bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-rose-500 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Visitor's Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email (optional)"
                      className="w-full pl-5 pr-11 py-3.5 rounded-2xl bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-rose-500 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Project details or message..."
                    required
                    className="w-full pl-5 pr-11 py-3.5 rounded-2xl bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-rose-500 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all resize-none"
                  />
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                </div>

                {/* Action Row: Attachment Button + Send via WhatsApp Button */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setHasAttachment(!hasAttachment)}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-medium transition-all ${
                      hasAttachment
                        ? 'bg-rose-50 text-rose-700 border border-rose-300'
                        : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600 border border-slate-200/70'
                    }`}
                  >
                    <Paperclip className="w-3.5 h-3.5" />
                    <span>{hasAttachment ? 'Attachment Added' : 'Add attachment'}</span>
                  </button>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="flex-1 sm:flex-initial px-8 py-3 rounded-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold text-sm tracking-tight shadow-md shadow-rose-600/25 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    {status.loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Opening WhatsApp...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Visual Column with Organic Wavy Mask & Landscape Graphic */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-900 flex items-center justify-center">
            {/* Background Visual Image / Artistic Landscape */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')`,
              }}
            />

            {/* Subtle Crimson Brand Tint Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-950/60 via-slate-950/30 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-rose-600/10 pointer-events-none" />

            {/* Organic S-Curve Divider Overlay on Left Edge (Desktop) */}
            <div className="hidden lg:block absolute -left-1 top-0 bottom-0 w-24 z-10 pointer-events-none">
              <svg className="w-full h-full text-white fill-current" viewBox="0 0 100 800" preserveAspectRatio="none">
                <path d="M0,0 L100,0 C30,160 90,320 20,480 C-40,620 60,720 100,800 L0,800 Z" />
              </svg>
            </div>

            {/* Floating Glassmorphic Status Pill with WhatsApp Details */}
            <div className="relative z-20 m-6 p-5 sm:p-6 rounded-2xl bg-slate-950/75 backdrop-blur-xl border border-white/20 text-white max-w-xs shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Availability</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Responding to new inquiries within 24 hours. Open for MERN Stack engineering & creative web builds.
              </p>
              <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between">
                <span className="text-[10px] text-slate-300 font-mono">Direct WhatsApp:</span>
                <a
                  href="https://wa.me/923104568021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
                >
                  +92 310 4568021
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Toast
        message={toastMessage}
        type="success"
        onClose={() => setToastMessage('')}
      />
    </section>
  );
};
