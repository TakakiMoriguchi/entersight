interface InformationProps {
  title: string;
  description: string | string[];
}

export function Information({ title, description }: InformationProps) {
  return (
    <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-sm">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {Array.isArray(description) ? (
        description.map((text, index) => (
          <p key={index} className="mb-2 last:mb-0">{text}</p>
        ))
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
}
