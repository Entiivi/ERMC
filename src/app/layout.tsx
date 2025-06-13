// File: src/app/layout.tsx
'use client'
import './globals.css'
import '@/app/css/layout.css'
import Link from 'next/link'
import Image from 'next/image'
import DottedBackground from '@/app/components/dottedbackground'
import { useEffect } from 'react';



const menuItems = [
    { label: 'APIE MUS', id: 'apie-mus' },
    { label: 'PASLAUGOS', id: 'musu-paslaugos' },
    { label: 'PATIRTIS', id: 'patirtis' },
    { label: 'PARTNERIAI', id: 'partneriai' },
    { label: 'KARJERA', id: 'karjera' },
    { label: 'KONTAKTAI', id: 'kontaktai' },
];




export default function RootLayout({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        const header = document.querySelector('header');
        if (!header) return;
        const updateHeaderHeight = () => {
            const h = header.getBoundingClientRect().height;
            document.documentElement.style.setProperty('--header-height-px', `${h}px`);
        };
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);
        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, []);

    return (
        <html lang="en">
            <body>
                <DottedBackground spacing={20} dotColor="#000000" />
                <header className="header" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                    <nav className="nav">
                        <Link href="/" className="logo-link">
                            <Image src="/EMRC-1.svg" alt="ERMC logo" width={200} height={100} />
                        </Link>
                        <ul className="menu">
                            {menuItems.map(({ label, id }) => (
                                <li key={id}>
                                    <Link href={`#${id}`} scroll={true} className="menu-link">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
                {/* main turi padding-top, kad pradžia nebūtų po headeriu */}
                <main className="main" style={{ paddingTop: 'var(--header-height-px)' }}>
                    {children}
                </main>
            </body>
        </html>
    )
}

