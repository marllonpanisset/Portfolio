// app/blog/template.tsx

import Breadcrumb from 'app/components/Breadcrumb';

export default function BlogTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-28">
      <Breadcrumb className="mb-6" />
      {children}
    </div>
  );
}
