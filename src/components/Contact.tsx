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
    <section id="contact" className="py-20 bg-muted dark:bg-muted-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
          Contattami
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-lg mx-auto space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Il tuo nome" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="La tua email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Oggetto</FormLabel>
                  <FormControl>
                    <Input placeholder="Oggetto del messaggio" {...field} />
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
                  <FormLabel>Messaggio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Il tuo messaggio" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
