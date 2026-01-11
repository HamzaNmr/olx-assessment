interface HeadProps {
    title: string;
    description?: string;
}

export interface LayoutProps {
    head: HeadProps;
    children: React.ReactNode;
}