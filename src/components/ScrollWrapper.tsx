import { CSSProperties } from "react";

const scrollWrapperStyle: CSSProperties = {
  width: '100%',
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  return <div style={scrollWrapperStyle}>{children}</div>;
}
