import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <div className="p-8 bg-card border border-border rounded-none flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4 font-mono">Get In Touch</h2>
        <p className="mb-6 opacity-80 font-mono text-sm text-muted-foreground">
          {`{ "status": "open_to_work" }`}
        </p>
        <Button className="gap-2 font-mono bg-primary text-white hover:bg-blue-600 rounded-none">
          <Mail size={16} />
          Email Me
        </Button>
      </div>
    </section>
  );
}
