'use client'

import React from 'react'


const experiences = [
    {
        title: "Garo turbinų ПТ-27/29-2,9/0,6 montavimas",
        date: "2021-02-15",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Garo turbinų TA3 „Siemens“ montavimas",
        date: "2021-03-10",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Garo turbinų P-8-29/0,7 ir generatoriaus montavimas",
        date: "2021-04-05",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Šilumos katilo ТП-101 pagalbinės įrangos montavimas, vamzdynų montavimas",
        date: "2021-05-20",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Pagalbinės įrangos montavimas, Ø500 mm vamzdynų montavimas",
        date: "2021-06-15",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Kolonos LK2 „Plokščių“ modernizavimas, purkštukų keitimas",
        date: "2021-07-30",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "GP-3 šilumokaičių paruošimas patikrai, indų ir vamzdynų priežiūra",
        date: "2021-09-12",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "12 MW garo turbinos montavimas",
        date: "2021-10-08",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "LK-1 S-100 sklendės su elektros pavara montavimas",
        date: "2021-11-22",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Pakrovimo stoties metalinių konstrukcijų gamyba",
        date: "2022-01-14",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Formalino agregato konstrukcijos „Ištekėjimo“ linijos vamzdynų ir įrangos montavimo darbai",
        date: "2022-02-25",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "GR-1, LK-1 S-200 HV mechaninė priežiūra šaltuoju laikotarpiu",
        date: "2022-03-18",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Priežiūros darbai šaltuoju laikotarpiu (3 metų sutartis)",
        date: "2022-04-12",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "6x20000 m³ talpų lengvųjų naftos produktų saugyklų gamyba",
        date: "2022-05-30",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Garo ir vandens įrangos priežiūros darbai (3 metų sutartis)",
        date: "2022-07-05",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Vandens šildymo katilo PTVM-100 Nr. 2 dujų, suslėgto oro, garo ir mazuto vamzdynų montavimo darbai",
        date: "2022-08-22",
        image: "/photos/placeholder.jpg"
    },
    {
        title: "Pastatų ir aptvėrimų techninė priežiūra ir palaikymo darbai (12 mėnesių sutartis)",
        date: "2022-10-10",
        image: "/photos/placeholder.jpg"
    },
]

export default function PatirtisSection() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Flex container via inline style, other styles via Tailwind */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '4vw',
                        paddingLeft: '7vw',
                    }}
                >
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            // Tailwind for card styling; inline flex-basis for two per row
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
                            style={{
                                flex: '0 0 calc((100% - 4vw) / 2)',
                                maxWidth: 'calc((100% - 4vw) / 2)',
                            }}
                        >
                            {/* Image */}
                            <div
                                className="h-40 w-full bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(${exp.image})`,
                                    WebkitMaskImage: 'linear-gradient(to bottom, white 50%, transparent 100%)',
                                    maskImage: 'linear-gradient(to bottom, white 50%, transparent 100%)',
                                }}
                            />
                            {/* Content with padding */}
                            <div className="p-4">
                                <time className="text-xs text-gray-500 mb-2 block">
                                    {new Date(exp.date).toLocaleDateString('lt-LT', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </time>
                                <h3
                                    className="text-[3vw] text-gray-800 leading-snug text-left whitespace-normal break-words"
                                    style={{ fontWeight: 'normal' }}
                                >
                                    {exp.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
