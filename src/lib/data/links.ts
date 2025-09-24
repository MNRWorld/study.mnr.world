
interface LinkItem {
    href: string;
    label: string;
    target?: string;
    rel?: string;
    colSpan?: number;
}

export const duLinks: LinkItem[][] = [
    [
        { href: "#Circular", label: "সার্কুলার" },
        { href: "/question-bank?tab=du", label: "প্রশ্নব্যাংক" }
    ],
    [
        { href: "https://www.du.ac.bd/", label: "মূল ওয়েবসাইট", target: "_blank", rel: "noreferrer noopener" },
        { href: "https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508", label: "ভর্তি ওয়েবসাইট", target: "_blank", rel: "noreferrer noopener" }
    ],
    [
        { href: "https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508", label: "আবেদন <b>|</b> প্রবেশপত্র <b>|</b> ফলাফল", target: "_blank", colSpan: 2 }
    ],
    [
        { href: "https://collegeadmission.eis.du.ac.bd/en/b45de047fde9788c53fradae3cfe8e88dc02", label: "অধিভুক্ত কলেজ ভর্তি", target: "_blank", colSpan: 2 }
    ]
];

export const collegeLinks: LinkItem[][] = [
    [
        { href: "#Circular", label: "সার্কুলার" },
        { href: "/question-bank", label: "প্রশ্নব্যাংক" }
    ],
    [
        { href: "http://xiclassadmission.gov.bd/", label: "মূল ওয়েবসাইট", target: "_blank", rel: "noreferrer noopener" },
        { href: "http://xiclassadmission.gov.bd/", label: "ভর্তি ওয়েবসাইট", target: "_blank", rel: "noreferrer noopener" }
    ]
];

export const privateLinks: LinkItem[][] = [
    [
        { href: "#Circular", label: "সার্কুলার" },
        { href: "/question-bank", label: "প্রশ্নব্যাংক" }
    ],
    [
        { href: "https://www.ugc.gov.bd/site/view/universities", label: "সব অনুমোদিত প্রাইভেট বিশ্ববিদ্যালয়ের তালিকা", target: "_blank", colSpan: 2 }
    ]
];
