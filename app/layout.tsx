import './globals.css'

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='w-full h-full bg-slate-50 '>
        {children}
      </body>
    </html>
  );
}
