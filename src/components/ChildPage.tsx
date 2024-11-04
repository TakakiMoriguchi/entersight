import {ReactNode } from "react";
import Link from "next/link";
type ChildPageProps = {
  children: ReactNode;
};

export default function ChildPage({ children }: ChildPageProps) {
  return (
    <>
      <div className="py-3 border-b border-gray-200 mb-5 w-full">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <h1 className="text-4xl font-bold">Entersight</h1>
          </Link>
        </div>
      </div>
      <div className="w-4/5 mx-auto min-h-screen">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
