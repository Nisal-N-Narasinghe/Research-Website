"use client";

import { useState } from "react";
import {
  Brain,
  Users,
  Target,
  Search,
  Settings,
  Clock,
  FileText,
  Presentation,
  Car,
  Shield,
  Bot,
  Network,
  Zap,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  Home,
  BookOpen,
  Trophy,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  Download,
  ExternalLink,
  CheckCircle,
  Circle,
  Linkedin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
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
              <div className='space-y-6'>
                <Card className='hover:shadow-md transition-all duration-300'>
                  <CardContent className='p-6'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                        <Mail className='w-6 h-6 text-blue-600' />
                      </div>
                      <div>
                        <h4 className='font-semibold text-blue-900 mb-2'>
                          Email
                        </h4>
                        <p className='text-slate-600'>it21257568@my.sliit.lk</p>
                        <p className='text-slate-600'>it21258626@my.sliit.lk</p>
                        <p className='text-slate-600'>it21227622@my.sliit.lk</p>
                        <p className='text-slate-600'>it21259302@my.sliit.lk</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* <Card className='hover:shadow-md transition-all duration-300'>
                    <CardContent className='p-6'>
                      <div className='flex items-start space-x-4'>
                        <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                          <Phone className='w-6 h-6 text-green-600' />
                        </div>
                        <div>
                          <h4 className='font-semibold text-blue-900 mb-2'>
                            Phone
                          </h4>
                          <p className='text-slate-600'>+1 (555) 123-4567</p>
                          <p className='text-slate-600'>+1 (555) 987-6543</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}

                {/* <Card className='hover:shadow-md transition-all duration-300'>
                    <CardContent className='p-6'>
                      <div className='flex items-start space-x-4'>
                        <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center'>
                          <MapPin className='w-6 h-6 text-purple-600' />
                        </div>
                        <div>
                          <h4 className='font-semibold text-blue-900 mb-2'>
                            Address
                          </h4>
                          <p className='text-slate-600'>
                            Faculty of Computing
                            <br />
                            University Research Center
                            <br />
                            123 Innovation Drive
                            <br />
                            Tech City, TC 12345
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className='text-2xl font-bold text-blue-900 mb-6'>
                Send us a Message
              </h3>
              <Card className='hover:shadow-lg transition-all duration-300'>
                <CardContent className='p-6'>
                  <form className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>
                          First Name
                        </label>
                        <Input placeholder='Enter your first name' />
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>
                          Last Name
                        </label>
                        <Input placeholder='Enter your last name' />
                      </div>
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-slate-700 mb-2'>
                        Email
                      </label>
                      <Input
                        type='email'
                        placeholder='Enter your email address'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-slate-700 mb-2'>
                        Subject
                      </label>
                      <Input placeholder='Enter message subject' />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-slate-700 mb-2'>
                        Message
                      </label>
                      <Textarea
                        placeholder='Enter your message here...'
                        className='min-h-[120px]'
                      />
                    </div>
                    <Button className='w-full bg-blue-900 hover:bg-blue-800 transition-all duration-300'>
                      <Mail className='w-4 h-4 mr-2' />
                      Send Message
                    </Button>
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
