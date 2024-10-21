import './globals.css';

export const metadata = {
  title: 'Cartel',
  description: 'یک اپلیکیشن با صفحات مختلف',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>
        <header style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
          <h1>صفحه اصلی</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

