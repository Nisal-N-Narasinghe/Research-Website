"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    const emailBody = `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
    <h2 style="color: #0a66c2;">New Contact Message</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; font-weight: bold;">Name:</td>
        <td style="padding: 8px;">${firstName} ${lastName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">Email:</td>
        <td style="padding: 8px;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">Subject:</td>
        <td style="padding: 8px;">${subject}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
        <td style="padding: 8px; white-space: pre-wrap;">${message}</td>
      </tr>
    </table>
    <p style="margin-top: 20px; color: #888; font-size: 0.9em;">
      This message was sent via the 24-25j-216-research-website contact form.
    </p>
  </div>
`;

    const payload = {
      mail: {
        from_name: "24-25j-216 Research Website",
        to_email: "nisal.nn24@gmail.com",
        subject: subject || "Message from Contact Form",
        body: btoa(emailBody),
        type: "support-service",
        category: "customer",
        encode: "base64",
      },
    };

    try {
      const res = await fetch(
        "https://fx.softmint.net/mailserver/public/api/custom-email",
        {
          method: "POST",
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();

      if (res.ok) {
        setResponseMsg("Message sent successfully! ✅");
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setResponseMsg(
          `Failed to send message. ${result.message || "Please try again."}`
        );
      }
    } catch (error) {
      console.error(error);
      setResponseMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact' className='py-16 bg-slate-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6'>
              <Phone className='w-8 h-8 text-blue-600' />
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-4'>
              Contact Us
            </h2>
            <p className='text-xl text-slate-600'>
              Get in touch with our research team
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div>
              <h3 className='text-2xl font-bold text-blue-900 mb-6'>
                General Contact Information
              </h3>
              <Card className='hover:shadow-md transition-all duration-300'>
                <CardContent className='p-6'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                      <Mail className='w-6 h-6 text-blue-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-blue-900 mb-2'>
                        Emails
                      </h4>
                      <p className='text-slate-600'>it21257568@my.sliit.lk</p>
                      <p className='text-slate-600'>it21258626@my.sliit.lk</p>
                      <p className='text-slate-600'>it21227622@my.sliit.lk</p>
                      <p className='text-slate-600'>it21259302@my.sliit.lk</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className='text-2xl font-bold text-blue-900 mb-6'>
                Send us a Message
              </h3>
              <Card className='hover:shadow-lg transition-all duration-300'>
                <CardContent className='p-6'>
                  <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='grid md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>
                          First Name
                        </label>
                        <Input
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder='Enter your first name'
                          required
                        />
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>
                          Last Name
                        </label>
                        <Input
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder='Enter your last name'
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-slate-700 mb-2'>
                        Email
                      </label>
                      <Input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email address'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-slate-700 mb-2'>
                        Subject
                      </label>
                      <Input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder='Enter message subject'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-slate-700 mb-2'>
                        Message
                      </label>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Enter your message here...'
                        className='min-h-[120px]'
                        required
                      />
                    </div>
                    <Button
                      type='submit'
                      disabled={loading}
                      className='w-full bg-blue-900 hover:bg-blue-800 transition-all duration-300'>
                      <Mail className='w-4 h-4 mr-2' />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                    {responseMsg && (
                      <p className='text-sm text-center mt-2 text-blue-700'>
                        {responseMsg}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>

              <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
                <h4 className='font-semibold text-blue-900 mb-2'>
                  Response Time
                </h4>
                <p className='text-sm text-blue-700'>
                  We typically respond to inquiries within 24-48 hours during
                  business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
