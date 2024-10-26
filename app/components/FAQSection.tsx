"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, Music2, Zap, DollarSign, Clock, Sparkles, Shield, Laptop } from "lucide-react";

const faqs = [
  {
    question: "How does AI Music Lab work?",
    answer: "AI Music Lab uses advanced machine learning algorithms trained on millions of songs to understand musical patterns, harmony, and composition. Our AI analyzes your input (lyrics, style preferences, or musical parameters) and generates original compositions that match your creative vision. The system continuously learns and improves from user feedback.",
    icon: <Zap className="w-5 h-5 text-blue-500" />,
  },
  {
    question: "What music styles are supported?",
    answer: "We support a wide range of musical styles including Pop, Rock, Jazz, Classical, Electronic, Hip Hop, R&B, Country, Folk, Ambient, Blues, Latin, World Music, and many more. Our AI can also blend different styles to create unique fusion genres based on your preferences.",
    icon: <Music2 className="w-5 h-5 text-purple-500" />,
  },
  {
    question: "Can I use the generated music commercially?",
    answer: "Yes! All music generated through AI Music Lab is royalty-free and can be used for commercial purposes under our standard license. This includes use in videos, podcasts, games, apps, and other commercial projects. We also offer enhanced commercial licenses for large-scale distribution.",
    icon: <DollarSign className="w-5 h-5 text-green-500" />,
  },
  {
    question: "How long does it take to generate a track?",
    answer: "Most tracks are generated within 1-2 minutes. Complex compositions or high-quality longer pieces might take up to 5 minutes. The generation time depends on factors like track length, complexity, and current server load. Premium users get priority processing for faster results.",
    icon: <Clock className="w-5 h-5 text-orange-500" />,
  },
  {
    question: "What makes AI Music Lab different from other AI music generators?",
    answer: "AI Music Lab stands out with its advanced neural networks trained specifically for music composition, intuitive user interface, and high-quality output. We offer unique features like style mixing, advanced tempo control, and detailed customization options. Our platform also provides collaborative tools and a community feature for musicians.",
    icon: <Sparkles className="w-5 h-5 text-yellow-500" />,
  },
  {
    question: "Is my generated music unique and copyright-free?",
    answer: "Yes, each piece of music generated is completely unique and you own all rights to the music you create. Our AI ensures originality by generating new compositions rather than remixing existing ones. We also provide a certificate of originality for each track generated.",
    icon: <Shield className="w-5 h-5 text-red-500" />,
  },
  {
    question: "What file formats and quality options are available?",
    answer: "We support multiple export formats including WAV, MP3, and MIDI files. You can choose different quality settings: Standard (192kbps), High Quality (320kbps), and Studio Quality (WAV 24-bit/48kHz). Premium users get access to stem separation and additional format options.",
    icon: <Laptop className="w-5 h-5 text-indigo-500" />,
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide 24/7 customer support through chat, email, and our community forum. Premium users get priority support and access to our dedicated support team. We also offer comprehensive documentation, video tutorials, and regular webinars for users to get the most out of our platform.",
    icon: <AlertCircle className="w-5 h-5 text-cyan-500" />,
  },
];

export function FAQSection() {
  return (
    <section className="w-full min-h-screen py-24 px-4 bg-background/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-up-delay">
            Everything you need to know about AI Music Lab
          </p>
        </div>

        <div className="grid gap-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionItem value={`item-${index}`} className="border rounded-lg px-6 transition-all duration-200 hover:shadow-md">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      {faq.icon}
                      <span className="text-lg font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center animate-fade-in-delay">
          <p className="text-muted-foreground">
            Still have questions? {" "}
            <a href="#contact" className="text-primary hover:underline transition-colors">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}