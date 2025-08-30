"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Il nome deve essere di almeno 2 caratteri.",
  }),
  email: z.string().email({
    message: "Inserisci un indirizzo email valido.",
  }),
  subject: z.string().min(5, {
    message: "L'oggetto deve essere di almeno 5 caratteri.",
  }),
  message: z.string().min(10, {
    message: "Il messaggio deve essere di almeno 10 caratteri.",
  }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Messaggio inviato", {
          description:
            "Grazie per avermi contattato. Ti risponderò al più presto.",
        });
        form.reset();
      } else {
        throw new Error("Errore nell'invio del messaggio");
      }
    } catch (error) {
      toast.error("Errore", {
        description:
          "Si è verificato un errore nell'invio del messaggio. Riprova più tardi.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-tertiary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
              Contattami
            </h2>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Hai un progetto in mente? Parliamone insieme e trasformiamo la tua idea in realtà
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Il tuo nome"
                            className="border-2 border-tertiary focus:border-primary rounded-lg px-4 py-3 bg-tertiary/50 focus:bg-white transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="La tua email"
                            className="border-2 border-tertiary focus:border-primary rounded-lg px-4 py-3 bg-tertiary/50 focus:bg-white transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Oggetto</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Oggetto del messaggio"
                          className="border-2 border-tertiary focus:border-primary rounded-lg px-4 py-3 bg-tertiary/50 focus:bg-white transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Messaggio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Il tuo messaggio"
                          className="border-2 border-tertiary focus:border-primary rounded-lg px-4 py-3 bg-tertiary/50 focus:bg-white transition-all duration-300 min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-primary text-white hover:bg-primary/90 py-4 rounded-lg font-medium text-lg tracking-wide transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}