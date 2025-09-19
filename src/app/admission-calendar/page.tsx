'use client';
import { PageHeader } from '@/components/PageHeader';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { admissionEvents } from '@/lib/data';
import { useState } from 'react';
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';

export default function AdmissionCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const eventsByDate = admissionEvents.reduce((acc, event) => {
    const eventDate = new Date(event.date);
    const dateKey = format(eventDate, 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, typeof admissionEvents>);

  const selectedDateKey = date ? format(date, 'yyyy-MM-dd') : '';
  const selectedEvents = eventsByDate[selectedDateKey] || [];

  return (
    <div>
      <PageHeader
        title="ভর্তি ক্যালেন্ডার"
        description="গুরুত্বপূর্ণ তারিখ এবং সময়সীমা ট্র্যাক করুন, যাতে কোনো সুযোগ হাতছাড়া না হয়।"
      />
      <div className="container max-w-7xl mx-auto px-5 pb-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1 flex justify-center">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                locale={bn}
            />
        </div>
        <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">
                {date ? format(date, "d MMMM, yyyy", { locale: bn }) : 'একটি তারিখ নির্বাচন করুন'}
            </h2>
            {selectedEvents.length > 0 ? (
                selectedEvents.map((event, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{event.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{event.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Card>
                    <CardContent className="pt-6">
                        <p className="text-muted-foreground">এই তারিখে কোনো ইভেন্ট নেই।</p>
                    </CardContent>
                </Card>
            )}
        </div>
      </div>
    </div>
  );
}
