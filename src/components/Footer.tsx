export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className='bg-gray-800 text-white p-4 text-center'>
      <p>© {year} Entersight</p>
    </footer>
  );
}
