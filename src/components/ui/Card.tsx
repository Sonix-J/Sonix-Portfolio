type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`border border-gray-100 rounded p-6 shadow-sm bg-white ${className}`}
    >
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
}
