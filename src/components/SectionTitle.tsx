interface SectionTitleProps {
  title: string;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <h2 className="text-4xl font-bold text-center mb-5">{props.title}</h2>
  );
}
