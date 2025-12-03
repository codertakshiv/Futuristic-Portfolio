'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => new Set(prev).add(name));
    
    // Validate this field on blur
    const fieldErrors: FormErrors = {};
    
    if (name === 'name' && (!formData.name.trim() || formData.name.length < 2)) {
      fieldErrors.name = !formData.name.trim() ? 'Name is required' : 'Name must be at least 2 characters';
    }
    
    if (name === 'email' && (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))) {
      fieldErrors.email = !formData.email.trim() ? 'Email is required' : 'Please enter a valid email address';
    }
    
    if (name === 'subject' && (!formData.subject.trim() || formData.subject.length < 3)) {
      fieldErrors.subject = !formData.subject.trim() ? 'Subject is required' : 'Subject must be at least 3 characters';
    }
    
    if (name === 'message' && (!formData.message.trim() || formData.message.length < 10 || formData.message.length > 1000)) {
      if (!formData.message.trim()) {
        fieldErrors.message = 'Message is required';
      } else if (formData.message.length < 10) {
        fieldErrors.message = 'Message must be at least 10 characters';
      } else if (formData.message.length > 1000) {
        fieldErrors.message = 'Message must be less than 1000 characters';
      }
    }
    
    setErrors(prev => ({ ...prev, ...fieldErrors }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate random success/failure for demo
      if (Math.random() > 0.1) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched(new Set());
        setErrors({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (fieldName: string) => {
    return touched.has(fieldName) ? errors[fieldName as keyof FormErrors] : undefined;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`w-full rounded-xl border px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all ${
                getFieldError('name')
                  ? 'border-red-500/50 bg-red-500/5 focus:ring-red-500/20'
                  : 'border-white/10 bg-white/5 focus:border-cyan-500/50 focus:ring-cyan-500/20'
              }`}
              placeholder="Your name"
            />
            {getFieldError('name') && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-400"
              >
                {getFieldError('name')}
              </motion.p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`w-full rounded-xl border px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all ${
                getFieldError('email')
                  ? 'border-red-500/50 bg-red-500/5 focus:ring-red-500/20'
                  : 'border-white/10 bg-white/5 focus:border-cyan-500/50 focus:ring-cyan-500/20'
              }`}
              placeholder="your@email.com"
            />
            {getFieldError('email') && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-400"
              >
                {getFieldError('email')}
              </motion.p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full rounded-xl border px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all ${
              getFieldError('subject')
                ? 'border-red-500/50 bg-red-500/5 focus:ring-red-500/20'
                : 'border-white/10 bg-white/5 focus:border-cyan-500/50 focus:ring-cyan-500/20'
            }`}
            placeholder="What's this about?"
          />
          {getFieldError('subject') && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-400"
            >
              {getFieldError('subject')}
            </motion.p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            rows={5}
            maxLength={1000}
            className={`w-full rounded-xl border px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all resize-none ${
              getFieldError('message')
                ? 'border-red-500/50 bg-red-500/5 focus:ring-red-500/20'
                : 'border-white/10 bg-white/5 focus:border-cyan-500/50 focus:ring-cyan-500/20'
            }`}
            placeholder="Your message..."
          />
          <div className="flex justify-between items-center mt-1">
            {getFieldError('message') && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400"
              >
                {getFieldError('message')}
              </motion.p>
            )}
            <span className="text-xs text-white/50 ml-auto">
              {formData.message.length}/1000
            </span>
          </div>
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-medium text-white transition-all hover:from-cyan-600 hover:to-fuchsia-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}
