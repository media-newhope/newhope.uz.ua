interface InfoPanelProps {
  children: React.ReactNode;
}

export function InfoPanel({ children }: InfoPanelProps) {
  return (
    <div className="bg-secondary-50 p-8 rounded-lg mb-16">
      <div className="space-y-4 text-gray-700">
        {children}
      </div>
    </div>
  );
} 