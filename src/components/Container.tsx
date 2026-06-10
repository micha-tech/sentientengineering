"use client";

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
