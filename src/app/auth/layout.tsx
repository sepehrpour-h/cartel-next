export const metadata = {
    title: 'Cartel',
    description: 'Authentication pages for My App',
  };
  
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="fa">
        <body style={{ backgroundColor: '#f0f0f0', textAlign: 'center' }}>
          <div style={{ padding: '50px', maxWidth: '400px', margin: 'auto' }}>
            <h2>صفحات احراز هویت</h2>
          </div>
          <main>{children}</main>
        </body>
      </html>
    );
  }
  