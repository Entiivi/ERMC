'use client'

import React from 'react'

export const KarjeraSection = () => {
    const responsibilities = [
        {
            title: 'Darbų organizavimas ir kontrolė',
            items: [
                'Vadovavimas statybos darbų vykdymui objekte pagal projektą, grafiką ir techninius reikalavimus',
                'Darbo jėgos ir mechanizmų paskirstymas objekte',
                'Statybos darbų eigos koordinavimas, užtikrinant nuoseklumą tarp įvairių darbų etapų',
            ],
        },
        {
            title: 'Kokybės ir terminų užtikrinimas',
            items: [
                'Statybos darbų vykdymas laikantis kokybės standartų, projektinių sprendinių ir techninių reglamentų',
                'Terminų kontrolė ir priemonių ėmimasis, jei kyla vėlavimo rizika',
                'Atliekamų darbų dokumentavimas (aktai, žurnalai ir kt.)',
            ],
        },
        {
            title: 'Darbo sauga ir aplinkosauga',
            items: [
                'Darbų saugos reikalavimų užtikrinimas objekte',
                'Rizikų vertinimas ir prevencinių veiksmų taikymas',
                'Atsakomybė už tvarką ir švarą statybvietėje',
            ],
        },
        {
            title: 'Bendradarbiavimas ir komunikacija',
            items: [
                'Bendravimas su projektuotojais, užsakovais, subrangovais ir technine priežiūra',
                'Reikalingos informacijos ir techninių sprendimų derinimas',
                'Komandos koordinavimas, darbuotojų instruktavimas ir motyvavimas',
            ],
        },
        {
            title: 'Medžiagų ir resursų valdymas',
            items: [
                'Statybinių medžiagų planavimas',
                'Tiekimo proceso derinimas ir medžiagų kokybės tikrinimas',
                'Sandėliavimo ir medžiagų apskaitos priežiūra',
            ],
        },
    ]

    return (
        <section className="flex justify-center px-4 py-8">
            <div className="w-full max-w-2xl">
                <p className="mb-4 text-center">
                    Šiuo metu aktyviai ieškome prie komandos prisijungiant darbų vadovą.
                </p>
                <h4 className="text-xl font-semibold mb-2 text-center">
                    Darbų vadovo atsakomybės
                </h4>
                <ol className="list-decimal list-inside space-y-6">
                    {responsibilities.map((resp, idx) => (
                        <li key={idx}>
                            <strong>{resp.title}:</strong>
                            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                {resp.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
