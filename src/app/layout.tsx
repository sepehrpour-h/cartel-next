"use client";
import React, { useState } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settingsMenuVisible, setSettingsMenuVisible] = useState(false);
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

// تابع برای تغییر وضعیت نمایش زیرمنو تنظیمات
const toggleSettingsMenu = () => {
  setSettingsMenuVisible(prev => !prev);
};

// تابع برای تغییر وضعیت نمایش زیرمنو همبرگری
const toggleHamburgerMenu = () => {
  setHamburgerMenuVisible(prev => !prev);
};

  return (
    <html lang="fa" dir="rtl">
      <body style={{ backgroundColor: '#f0f0f0', margin: 0 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <header
            style={{
              backgroundColor: '#333',
              color: 'white',
              width: '90%',
              maxWidth: '500px',
              padding: '10px',
              textAlign: 'center',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* آیکن تنظیمات در سمت چپ */}
            <div
              style={{
                cursor: 'pointer',
                position: 'absolute',
                left: '10px',
                display: 'flex',
                alignItems: 'center', // تراز کردن عمودی آیکن
              }}
              onClick={toggleSettingsMenu}
              // onMouseEnter={() => setSettingsMenuVisible(true)}
              // onMouseLeave={() => setSettingsMenuVisible(false)}
            >
              <i className="fa fa-cog" style={{ fontSize: '24px', color: 'white' }} aria-hidden="true"></i>
              {settingsMenuVisible && (
                <div
                  style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    backgroundColor: '#444',
                    borderRadius: '4px',
                    width: '100px',
                    zIndex: 1,
                    left: '0',
                    top: '100%',
                    marginTop: '4px', // فضای بین آیکن و زیرمنو
                  }}
                >
                  <div style={{ padding: '5px', color: 'white' }}>زیرمنو 1</div>
                  <div style={{ padding: '5px', color: 'white' }}>زیرمنو 2</div>
                </div>
              )}
            </div>

            {/* عنوان وسط */}
            <h1 style={{ margin: '0', flexGrow: 1, textAlign: 'center' }}>صفحه اصلی</h1>

            {/* آیکن منوی همبرگری در سمت راست */}
            <div
              style={{
                cursor: 'pointer',
                position: 'absolute',
                right: '10px',
                display: 'flex',
                alignItems: 'center', // تراز کردن عمودی آیکن
              }}
              onClick={toggleHamburgerMenu}
              // onMouseEnter={() => setHamburgerMenuVisible(true)}
              // onMouseLeave={() => setHamburgerMenuVisible(false)}
            >
              <i className="fa fa-bars" style={{ fontSize: '24px', color: 'white' }} aria-hidden="true"></i>
              {hamburgerMenuVisible && (
                <div
                  style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    backgroundColor: '#444',
                    borderRadius: '4px',
                    width: '100px',
                    zIndex: 1,
                    right: '0',
                    top: '100%',
                    marginTop: '4px', // فضای بین آیکن و زیرمنو
                  }}
                >
                  <div style={{ padding: '5px', color: 'white' }}>گزینه 1</div>
                  <div style={{ padding: '5px', color: 'white' }}>گزینه 2</div>
                </div>
              )}
            </div>
          </header>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
