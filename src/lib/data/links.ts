import linksData from './links.json';

interface LinkItem {
    href: string;
    label: string;
    target?: string;
    rel?: string;
    colSpan?: number;
}

export const duLinks: LinkItem[][] = linksData.du;
export const collegeLinks: LinkItem[][] = linksData.college;
export const privateLinks: LinkItem[][] = linksData.private;
