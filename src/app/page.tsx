import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { CSSProperties } from "react";

const mainStyle = {
  backgroundImage: 'url("/app/hero_background.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
};

const indexWrapperStyle: CSSProperties = {
  width: '100%',
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

export default function Home() {
  return (
    <div>
      <main style={mainStyle}>
        <div style={indexWrapperStyle}>
          {/* Hero */}
          <Hero />

          {/* Services */}
          <Services />


        </div>
      </main>
    </div>
  );
}
