// File: src/app/layout.tsx
import './globals.css'
import '@/app/css/layout.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'ERM CENTRAS',
    description: 'Elevate Your Digital Presence',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header className="header">
                    <nav className="nav">
                        <Link href="/" className="logo-link">
                            <Image src="/EMRC-1.svg" alt="ERMC logo" width={200} height={100}/>
                        </Link>
                        <ul className="menu">
                            {['Home', 'Services', 'About', 'Contact'].map((label) => (
                                <li key={label}>
                                    <Link
                                        href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                                        className="menu-link"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>

                <main className="main">
                    {children}
                </main>

                <footer className="footer">
                    <div className="footer-inner">
                        <p>© {new Date().getFullYear()} ERM CENTRAS. All rights reserved.</p>
                    </div>
                </footer>
            </body>
        </html>
    )
}
