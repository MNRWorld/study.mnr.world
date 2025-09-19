import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
  GraduationCap,
  ClipboardList,
  Library,
  Building,
  CalendarDays,
  BookOpen,
  User,
  Info,
  Phone,
  Newspaper,
  Book,
} from 'lucide-react';

export const navLinks = [
  { href: '/question-bank', label: 'প্রশ্ন ব্যাংক' },
  { href: '/admission-calendar', label: 'ভর্তি ক্যালেন্ডার' },
  { href: '/courses', label: 'কোর্সসমূহ' },
  { href: '/blog', label: 'ব্লগ' },
];

export const heroCards = [
  { icon: CalendarDays, label: 'ভর্তি ক্যালেন্ডার', href: '/admission-calendar' },
  { icon: Library, label: 'প্রশ্নব্যাংক', href: '/question-bank' },
  { icon: BookOpen, label: 'কোর্সসমূহ', href: '/courses' },
  { icon: Newspaper, label: 'ব্লগ', href: '/blog' },
  { icon: GraduationCap, label: 'বিশ্ববিদ্যালয়', href: '#' },
];

export const footerLinks = [
  { label: 'কোর্সসমূহ', href: '/courses' },
  { label: 'ভর্তি ক্যালেন্ডার', href: '/admission-calendar' },
  { label: 'বইসমূহ', href: '#' },
  { label: 'ব্লগ', href: '/blog' },
];

export const footerShortcuts = [
  { label: 'হোম', href: '/' },
  { label: 'প্রোফাইল', href: '/profile' },
  { label: 'আমাদের সম্পর্কে', href: '/about' },
  { label: 'যোগাযোগ', href: '/contact' },
];

export const socialLinks = [
  { href: '#', icon: Facebook, label: 'ফেসবুক' },
  { href: '#', icon: Send, label: 'টেলিগ্রাম' },
  { href: '#', icon: Youtube, label: 'ইউটিউব' },
  { href: '#', icon: Instagram, label: 'ইנস্টাগ্রাম' },
  { href: '#', icon: Twitter, label: 'টুইটার' },
];

export const questionBankFilters = {
  universities: [
    { value: 'all', label: 'সকল বিশ্ববিদ্যালয়' },
    { value: 'du', label: 'ঢাকা বিশ্ববিদ্যালয়' },
    { value: 'cu', label: 'চট্টগ্রাম বিশ্ববিদ্যালয়' },
    { value: 'ru', label: 'রাজশাহী বিশ্ববিদ্যালয়' },
    { value: 'ju', label: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয়' },
  ],
  subjects: [
    { value: 'all', label: 'সকল বিষয়' },
    { value: 'physics', label: 'পদার্থবিজ্ঞান' },
    { value: 'chemistry', label: 'রসায়ন' },
    { value: 'math', label: 'গণিত' },
    { value: 'bangla', label: 'বাংলা' },
  ],
  years: [
    { value: 'all', label: 'সকল সাল' },
    { value: '2023', label: '২০২৩' },
    { value: '2022', label: '২০২২' },
    { value: '2021', label: '২০২১' },
    { value: '2020', label: '২০২০' },
  ],
};

export const questions = [
  {
    id: 1,
    question: 'পানিতে দ্রবণীয় ভিটামিন কোনটি?',
    options: ['ভিটামিন এ', 'ভিটামিন ডি', 'ভিটামিন সি', 'ভিটামিন ই'],
    answer: 'ভিটামিন সি',
    university: 'ঢাকা বিশ্ববিদ্যালয়',
    year: '২০২২-২৩',
    subject: 'রসায়ন',
  },
  {
    id: 2,
    question: 'নিউটনের গতির প্রথম সূত্র কোনটি?',
    options: ['বল', 'জড়তা', 'শক্তি', 'কাজ'],
    answer: 'জড়তা',
    university: 'রাজশাহী বিশ্ববিদ্যালয়',
    year: '২০২১-২২',
    subject: 'পদার্থবিজ্ঞান',
  },
  {
    id: 3,
    question: '‘আমার ভাইয়ের রক্তে রাঙানো’ গানটির রচয়িতা কে?',
    options: ['আব্দুল গাফফার চৌধুরী', 'আলতাফ মাহমুদ', 'রবীন্দ্রনাথ ঠাকুর', 'কাজী নজরুল ইসলাম'],
    answer: 'আব্দুল গাফফার চৌধুরী',
    university: 'চট্টগ্রাম বিশ্ববিদ্যালয়',
    year: '২০২০-২১',
    subject: 'বাংলা',
  },
];


export const admissionEvents = [
  { date: '2024-09-15', title: 'ঢাকা বিশ্ববিদ্যালয়: ক ইউনিট ভর্তি পরীক্ষা', description: 'সকাল ১১টা থেকে দুপুর ১২:৩০ পর্যন্ত।' },
  { date: '2024-09-22', title: 'রাজশাহী বিশ্ববিদ্যালয়: এ ইউনিট আবেদন শুরু', description: 'অনলাইনে আবেদন চলবে ৩০শে সেপ্টেম্বর পর্যন্ত।' },
  { date: '2024-10-01', title: 'চট্টগ্রাম বিশ্ববিদ্যালয়: বি ইউনিট ভর্তি পরীক্ষা', description: 'দুপুর ২টা থেকে বিকাল ৩:৩০ পর্যন্ত।' },
  { date: '2024-10-10', title: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয়: ডি ইউনিট ফলাফল প্রকাশ', description: 'বিশ্ববিদ্যালয়ের ওয়েবসাইটে ফলাফল পাওয়া যাবে।' },
];

export const courses = [
  {
    slug: 'hsc-crash-course',
    title: 'HSC ক্র্যাশ কোর্স',
    description: 'HSC পরীক্ষার চূড়ান্ত প্রস্তুতির জন্য একটি সম্পূর্ণ কোর্স।',
    thumbnail: 'https://picsum.photos/seed/course1/600/400',
    dataAiHint: 'online course',
    instructor: 'ড. জ্ঞান আলো',
    rating: 4.5,
    reviews: [
      { id: 1, author: 'আবির হাসান', rating: 5, text: 'চমৎকার কোর্স! অনেক কিছু শিখতে পেরেছি।' },
      { id: 2, author: 'সাদিয়া ইসলাম', rating: 4, text: 'শিক্ষক খুবই অভিজ্ঞ। তবে আরও কিছু প্র্যাকটিস টেস্ট থাকলে ভালো হতো।' }
    ],
    syllabus: [
      { week: 1, topic: 'পদার্থবিজ্ঞান প্রথম পত্র: ভেক্টর ও গতিবিদ্যা' },
      { week: 2, topic: 'রসায়ন প্রথম পত্র: গুণগত রসায়ন' },
      { week: 3, topic: 'গণিত প্রথম পত্র: ম্যাট্রিক্স ও নির্ণায়ক' },
    ]
  },
  {
    slug: 'university-admission-prep',
    title: 'বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি',
    description: 'ঢাকা, রাজশাহী, চট্টগ্রাম বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার জন্য বিশেষ কোর্স।',
    thumbnail: 'https://picsum.photos/seed/course2/600/400',
    dataAiHint: 'university admission',
    instructor: 'অধ্যাপক সফল বড়ুয়া',
    rating: 4.8,
    reviews: [
      { id: 1, author: 'রাফি আহমেদ', rating: 5, text: 'এই কোর্সটি আমার ভর্তি প্রস্তুতিতে অনেক সাহায্য করেছে।' },
      { id: 2, author: 'ফারজানা আক্তার', rating: 5, text: 'গত বছরের প্রশ্নগুলো সমাধান করার কৌশলগুলো অসাধারণ ছিল।' },
      { id: 3, author: 'ইমরান হোসেন', rating: 4.5, text: 'সবকিছুই ভালো ছিল।' }
    ],
    syllabus: [
      { week: 1, topic: 'বাংলা ও ইংরেজি রিভিশন' },
      { week: 2, topic: 'সাধারণ জ্ঞান: বাংলাদেশ ও আন্তর্জাতিক' },
      { week: 3, topic: 'মডেল টেস্ট ও সল্ভ ক্লাস' },
    ]
  },
  {
    slug: 'medical-admission-prep',
    title: 'মেডিকেল ভর্তি প্রস্তুতি',
    description: 'মেডিকেল কলেজে ভর্তির স্বপ্ন পূরণে অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে পূর্ণাঙ্গ প্রস্তুতি।',
    thumbnail: 'https://picsum.photos/seed/course3/600/400',
    dataAiHint: 'medical student',
    instructor: 'ড. আশরাফ সিদ্দিকী',
    rating: 4.7,
     reviews: [
      { id: 1, author: 'নাবিলা রহমান', rating: 5, text: 'জীববিজ্ঞানের ক্লাসগুলো খুবই কার্যকরী ছিল।' },
    ],
    syllabus: [
      { week: 1, topic: 'জীববিজ্ঞান: কোষ ও এর গঠন' },
      { week: 2, topic: 'পদার্থবিজ্ঞান: আধুনিক পদার্থবিজ্ঞানের সূচনা' },
      { week: 3, topic: 'রসায়ন: জৈব রসায়ন' },
    ]
  },
   {
    slug: 'engineering-admission-prep',
    title: 'ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতি',
    description: 'বুয়েট, রুয়েট, কুয়েট, চুয়েটের ভর্তি পরীক্ষার জন্য বিশেষায়িত কোর্স।',
    thumbnail: 'https://picsum.photos/seed/course4/600/400',
    dataAiHint: 'engineering student',
    instructor: 'প্রকৌ. খালিদ হাসান',
    rating: 4.6,
     reviews: [],
    syllabus: [
      { week: 1, topic: 'উচ্চতর গণিত: কনিকস ও স্থিতিবিদ্যা' },
      { week: 2, topic: 'পদার্থবিজ্ঞান: তড়িৎ ও চুম্বকবিদ্যা' },
      { week: 3, topic: 'রসায়ন: তড়িৎ রসায়ন' },
    ]
  },
];

export const blogPosts = [
  {
    slug: 'effective-study-techniques',
    title: 'কার্যকরী পড়াশোনার কৌশল',
    description: 'কীভাবে কম সময়ে বেশি পড়া যায় এবং মনে রাখা যায় তার কিছু বৈজ্ঞানিক কৌশল।',
    author: 'ড. জ্ঞান আলো',
    date: '২০ আগস্ট, ২০২৪',
    thumbnail: 'https://picsum.photos/seed/blog1/800/400',
    dataAiHint: 'student studying',
    comments: [
        { id: 1, author: 'সুমন', date: '২১ আগস্ট, ২০২৪', text: 'খুবই উপকারী একটি পোস্ট। ধন্যবাদ!' },
        { id: 2, author: 'রিয়া', date: '২২ আগস্ট, ২০২৪', text: 'এই কৌশলগুলো আমি অনুসরণ করার চেষ্টা করব।' },
    ]
  },
  {
    slug: 'admission-test-preparation',
    title: 'ভর্তি পরীক্ষার প্রস্তুতি: প্রথম থেকেই শুরু করুন',
    description: 'ভর্তি পরীক্ষার জন্য কীভাবে প্রথম বর্ষ থেকেই প্রস্তুতি নেওয়া উচিত তার একটি পূর্ণাঙ্গ গাইডলাইন।',
    author: 'অধ্যাপক সফল বড়ুয়া',
    date: '১৫ আগস্ট, ২০২৪',
    thumbnail: 'https://picsum.photos/seed/blog2/800/400',
    dataAiHint: 'exam preparation',
    comments: []
  },
  {
    slug: 'time-management-for-students',
    title: 'ছাত্রজীবনে সময় ব্যবস্থাপনার গুরুত্ব',
    description: 'একাডেমিক চাপের মাঝেও কীভাবে পড়াশোনা, ঘুম এবং অন্যান্য কাজের মধ্যে ভারসাম্য বজায় রাখা যায়।',
    author: 'প্রিয়াঙ্কা চৌধুরী',
    date: '১০ আগস্ট, ২০২৪',
    thumbnail: 'https://picsum.photos/seed/blog3/800/400',
    dataAiHint: 'time management',
    comments: [
       { id: 1, author: 'আকাশ', date: '১১ আগস্ট, ২০২৪', text: 'সময় ব্যবস্থাপনা নিয়ে আমি অনেক সমস্যায় ছিলাম। পোস্টটি পড়ে ভালো লাগলো।' },
    ]
  },
];

export const faqs = [
  {
    question: 'স্টাডি প্ল্যাটফর্মটি কী?',
    answer: 'স্টাডি একটি অনলাইন শিক্ষা প্ল্যাটফর্ম যা বাংলাদেশের শিক্ষার্থীদের বিশ্ববিদ্যালয় ভর্তি পরীক্ষা, একাডেমিক পড়াশোনা এবং অন্যান্য প্রতিযোগিতামূলক পরীক্ষার জন্য প্রস্তুতি নিতে সাহায্য করে।'
  },
  {
    question: 'এখানে কী কী কোর্স পাওয়া যায়?',
    answer: 'আমাদের এখানে HSC ক্র্যাশ কোর্স, বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি, মেডিকেল ও ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতিসহ বিভিন্ন একাডেমিক এবং স্কিল ডেভেলপমেন্ট কোর্স রয়েছে।'
  },
  {
    question: 'প্রশ্ন ব্যাংক কীভাবে ব্যবহার করব?',
    answer: 'প্রশ্ন ব্যাংক পেজে গিয়ে আপনি বিশ্ববিদ্যালয়, বিষয় এবং সাল ফিল্টার করে আপনার প্রয়োজনীয় প্রশ্ন খুঁজে নিতে পারেন এবং অনুশীলন করতে পারেন।'
  },
  {
    question: 'কোর্সগুলোতে কীভাবে ভর্তি হব?',
    answer: 'প্রতিটি কোর্সের বিস্তারিত পেজে "ভর্তি হোন" বাটনে ক্লিক করে নির্দিষ্ট নির্দেশনা অনুসরণ করে আপনি খুব সহজেই ভর্তি হতে পারবেন।'
  },
];
