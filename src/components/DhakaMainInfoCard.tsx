
'use client';
import Image from 'next/image';
import PageHeaderCard from '@/components/common/PageHeaderCard';

const DhakaMainInfoCard = () => {
  return (
    <>
      <div className="text-xs sm:text-sm text-foreground absolute top-[86px] sm:top-[91px] sm:left-[110px] left-6 bg-card border border-border rounded-[8px] px-3 py-1 z-20">
        <b>পাবলিক</b>
      </div>
      <PageHeaderCard
        icon={
          <Image
            src="https://study.mnr.world/wp-content/uploads/2025/05/DU-Logo.png"
            alt="DU Logo"
            width={100}
            height={100}
            className="p-1 w-full h-full object-contain rounded-2xl"
          />
        }
        title="ঢাকা বিশ্ববিদ্যালয়"
        subtitle="University of Dhaka"
        description="প্রাচ্যের অক্সফোর্ড খ্যাত ঢাকা বিশ্ববিদ্যালয়, বাংলাদেশের স্বপ্নদ্রষ্টাদের সূতিকাগার। এর করিডোরে হেঁটেছে ইতিহাস, জন্মেছে অজস্র জ্ঞানতাপস।"
        stats={[
          { value: '১৩টি', label: 'অনুষদ' },
          { value: '৮৩টি', label: 'বিষয়' },
          {
            value: '৬,১৩০+',
            label: 'আসন',
            tooltip: `
              'ক' ইউনিট: ১৮৯৬<br/>
              'খ' ইউনিট: ২৯৩৪<br/>
              'গ' ইউনিট: ১০৫০<br/>
              'চ' ইউনিট: ১৩০<br/>
              IBA ইউনিট: ১২০
            `,
          },
        ]}
        button={{ href: '#Info', label: 'মূল তথ্য' }}
      />
    </>
  );
};

export default DhakaMainInfoCard;
