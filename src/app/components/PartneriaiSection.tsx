'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

export const KlientaiIrPartneriai: React.FC = () => {
    const partners: { name: string; imageSrc: string; imageAlt?: string }[] = [
        { name: 'AB “Achema”, Jonava', imageSrc: '/photos/partneriu/achema.png', imageAlt: 'Achema logo' },
        { name: 'AB Orlen Lithuania', imageSrc: '/photos/partneriu/orlen.jpg', imageAlt: 'Orlen Lithuania logo' },
        { name: 'Enefit', imageSrc: '/photos/partneriu/enefit.jpg', imageAlt: 'Enefit logo' },
        { name: 'Klaipėdos nafta', imageSrc: '/photos/partneriu/klaipedos-nafta.jpg', imageAlt: 'Klaipėdos nafta logo' },
        { name: 'Vilniaus šilumos tinklai', imageSrc: '/photos/partneriu/vilniussil.jpg', imageAlt: 'Vilniaus šilumos tinklai logo' },
        { name: 'Axis Technologies', imageSrc: '/photos/partneriu/axis.png', imageAlt: 'Axis Technologies logo' },
        { name: 'Lietuvos energijos gamyba', imageSrc: '/photos/partneriu/lietuvos-energija.png', imageAlt: 'Lietuvos energijos gamyba logo' },
        { name: 'Lietuvos Geležinkeliai', imageSrc: '/photos/partneriu/ltgel.jpg', imageAlt: 'Lietuvos Geležinkeliai logo' },
    ]

    const containerRef = useRef<HTMLDivElement | null>(null)
    const [isDragging, setIsDragging] = useState(false)
    const dragState = useRef({ startX: 0, scrollLeft: 0 })
    const singleWidthRef = useRef(0)

    useEffect(() => {
        const cont = containerRef.current
        if (!cont) return

        const calculateWidth = () => {
            const total = cont.scrollWidth
            const single = total / 3
            singleWidthRef.current = single
            cont.scrollLeft = single
        }

        calculateWidth()
        window.addEventListener('resize', calculateWidth)
        return () => window.removeEventListener('resize', calculateWidth)
    }, [partners.length])

    useEffect(() => {
        const cont = containerRef.current
        if (!cont) return

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return
            e.preventDefault()
            const dx = e.clientX - dragState.current.startX
            let newScroll = dragState.current.scrollLeft - dx
            const single = singleWidthRef.current
            if (newScroll < single * 0.5) {
                newScroll += single
                dragState.current.scrollLeft += single
            } else if (newScroll > single * 1.5) {
                newScroll -= single
                dragState.current.scrollLeft -= single
            }
            cont.scrollLeft = newScroll
        }

        const handleMouseUp = () => {
            if (isDragging) setIsDragging(false)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging])

    useEffect(() => {
        const cont = containerRef.current
        if (!cont) return

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return
            e.preventDefault()
            const touch = e.touches[0]
            const dx = touch.clientX - dragState.current.startX
            let newScroll = dragState.current.scrollLeft - dx
            const single = singleWidthRef.current
            if (newScroll < single * 0.5) {
                newScroll += single
                dragState.current.scrollLeft += single
            } else if (newScroll > single * 1.5) {
                newScroll -= single
                dragState.current.scrollLeft -= single
            }
            cont.scrollLeft = newScroll
        }
        const handleTouchEnd = () => {
            if (isDragging) setIsDragging(false)
        }

        document.addEventListener('touchmove', handleTouchMove, { passive: false })
        document.addEventListener('touchend', handleTouchEnd)
        return () => {
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleTouchEnd)
        }
    }, [isDragging])

    const handleMouseDown = (e: React.MouseEvent) => {
        const cont = containerRef.current
        if (!cont) return
        setIsDragging(true)
        dragState.current.startX = e.clientX
        dragState.current.scrollLeft = cont.scrollLeft
    }
    const handleTouchStart = (e: React.TouchEvent) => {
        const cont = containerRef.current
        if (!cont) return
        setIsDragging(true)
        const touch = e.touches[0]
        dragState.current.startX = touch.clientX
        dragState.current.scrollLeft = cont.scrollLeft
    }

    const items = [...partners, ...partners, ...partners]

    return (
        <>
            <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: '2rem',
                    overflowX: 'auto',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    padding: '1rem 0',
                    userSelect: 'none', // netraukiam teksto
                }}
                className="scrollbar-none"
            >
                {items.map((partner, idx) => (
                    <div
                        key={idx}
                        className="relative bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer flex-shrink-0"
                        style={{
                            width: '20rem',
                            height: '50vh',
                            minHeight: '200px',
                            maxHeight: '600px',
                        }}
                    >
                        {/* Image be pointer events */}
                        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                            <Image
                                src={partner.imageSrc}
                                alt={partner.imageAlt ?? partner.name}
                                fill
                                draggable={false}
                                onDragStart={(e) => e.preventDefault()}
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    userSelect: 'none',
                                    pointerEvents: 'none',
                                }}
                            />
                        </div>
                        {/* Overlay pavadinimas taip pat be pointer events */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-0.5rem',
                                left: '-0.5rem',
                                backgroundColor: '#e7e7e7',
                                padding: '0.25rem 0.5rem',
                                borderBottomRightRadius: '2rem',
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                        >
                            <p className="text-sm whitespace-normal break-words" style={{ color: '#000' }}>
                                {partner.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </>
    )
}
