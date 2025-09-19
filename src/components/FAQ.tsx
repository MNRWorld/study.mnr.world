import { faqs } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  return (
    <section className="container max-w-4xl mx-auto px-5 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          সাধারণ জিজ্ঞাসা
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
          আমাদের সম্পর্কে আপনার সাধারণ প্রশ্নগুলোর উত্তর এখানে পাবেন।
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
