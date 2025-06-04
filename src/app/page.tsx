// File: src/app/pages/Main.tsx
import '@/app/css/page.css'
import Image from 'next/image'
import ImageTextCard from '@/app/components/ImageTextCard'

export default function HomePage() {
    const sections = [
        { title: 'Welcome to EMRC' },
        { title: 'APIE MUS' },
        { title: 'MŪSŲ PASLAUGOS' },
    ]

    return (
        <>
            <div className="MainDiv">
                {/* Hero */}
                <section className="hero">
                    <Image
                        src="/hero3.png"            /* place your image in public/hero.jpg */
                        alt="Hero background"
                        fill                       /* makes the image cover the parent */
                        priority
                        quality={100}
                        sizes="(min-width: 1024px) 100vw, 100vw"
                    />
                </section>

                {/* Cards */}
                <section className="section-container">
                    {sections.map(({ title }) => (
                        <div key={title} className="card-container">
                            <h2 className="card-heading">{title}</h2>
                            <div className="card-box">
                                <div style={{ fontFamily: "Moonhouse", fontSize: '2rem' }}>
                                    The quick brown fox jumps over the lazy dog
                                </div>

                                <ImageTextCard
                                    imageSrc="/example-image.jpg"
                                    imageAlt="Example description"
                                    className="max-w-4xl mx-auto"
                                >
                                    <h2>Our Engineering Services</h2>
                                    <p>
                                        ERM CENTRAS provides end-to-end engineering solutions, deploying bespoke
                                        technologies for industrial clients. We handle everything from project
                                        planning and installation to ongoing maintenance.
                                    </p>
                                </ImageTextCard>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </>
    )
}
