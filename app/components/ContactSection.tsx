"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSending(false);
    setEmail("");
    setMessage("");
  };

  return (
    <section className="w-full py-24 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          Have questions or feedback? We'd love to hear from you!
        </p>
        
        <Card className="p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <label htmlFor="email" className="text-sm font-medium">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2 text-left">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message or feedback"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[120px]"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSending}>
              {isSending ? (
                "Sending..."
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Card>

        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Mail className="w-4 h-4" />
          <span>Official Email: </span>
          <a 
            href="mailto:support@aimusiclab.co"
            className="text-primary hover:underline"
          >
            support@aimusiclab.co
          </a>
        </div>
      </div>
    </section>
  );
}