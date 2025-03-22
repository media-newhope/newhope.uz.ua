interface QuoteProps {
  children: React.ReactNode;
}

export function Quote({ children }: QuoteProps) {
  return (
    <div className="border-l-4 border-primary-300 pl-6 text-gray-700 leading-relaxed">
      
        {children}
      
    </div>
  );
} 