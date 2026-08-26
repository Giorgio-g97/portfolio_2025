"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve essere di almeno 2 caratteri." }),
  email: z.string().email({ message: "Inserisci un indirizzo email valido." }),
  subject: z.string().min(5, { message: "L'oggetto deve essere di almeno 5 caratteri." }),
  message: z.string().min(10, { message: "Il messaggio deve essere di almeno 10 caratteri." }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema), defaultValues: { name: "", email: "", subject: "", message: "" } });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      if (response.ok) {
        toast.success("Messaggio inviato", { description: "Grazie per avermi contattato. Ti risponderò al più presto." });
        form.reset();
      } else throw new Error("Errore nell'invio del messaggio");
    } catch (error) {
      toast.error("Errore", { description: "Si è verificato un errore nell'invio del messaggio. Riprova più tardi." });
      console.error(error);
    } finally { setIsSubmitting(false); }
  }

  return <section id="contact" className="bg-[#0b1117] px-4 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-24"><div><h2 className="text-responsive text-white">Contattami</h2><p className="mt-5 max-w-md text-base leading-relaxed text-white/55 sm:text-lg">Hai un progetto in mente? Parliamone insieme e trasformiamo la tua idea in realtà</p></div><div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 sm:p-8"><Form {...form}><form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2"><FormField control={form.control} name="name" render={({ field }) => <FormItem><FormLabel className="text-white/70">Nome</FormLabel><FormControl><Input placeholder="Il tuo nome" {...field} /></FormControl><FormMessage /></FormItem>} /><FormField control={form.control} name="email" render={({ field }) => <FormItem><FormLabel className="text-white/70">Email</FormLabel><FormControl><Input placeholder="La tua email" {...field} /></FormControl><FormMessage /></FormItem>} /></div><FormField control={form.control} name="subject" render={({ field }) => <FormItem><FormLabel className="text-white/70">Oggetto</FormLabel><FormControl><Input placeholder="Oggetto del messaggio" {...field} /></FormControl><FormMessage /></FormItem>} /><FormField control={form.control} name="message" render={({ field }) => <FormItem><FormLabel className="text-white/70">Messaggio</FormLabel><FormControl><Textarea placeholder="Il tuo messaggio" {...field} /></FormControl><FormMessage /></FormItem>} /><Button type="submit" disabled={isSubmitting} className="h-12 w-full bg-white text-[#172127] shadow-none hover:bg-[#dbe8eb] hover:text-[#172127]">{isSubmitting ? "Invio in corso..." : "Invia Messaggio"}</Button></form></Form></div></div></div></section>;
}
