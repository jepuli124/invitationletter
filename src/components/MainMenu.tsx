import { animate, createScope, stagger, type Scope } from 'animejs';
import React, { useEffect, useRef, useState } from 'react'
import Sparkles from './Sparkles';
import useSound from 'use-sound';

interface incomingParams{}

const MainMenu: React.FC<incomingParams> = () => {
    const AnimRefPoint = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope>(null);
    const [particleSpawn, setParticleSpawn] = useState<boolean>(false)
    const [playNoor] = useSound('./noor.mp3');
    const [playPhone] = useSound('./phone.mp3');
    const [playWide] = useSound('./wide.mp3');
    const [playWow] = useSound('./wow.mp3');
    const [playSnowy] = useSound('./snowy.mp3', {
        onend: () => menuMusic.current = false
    })
    const menuMusic = useRef<boolean>(false)
    
    useEffect(() => {
    
    scope.current = createScope({ root: AnimRefPoint }).add( self => {
        if(!self){ return }
        const cards = Array.from(
            AnimRefPoint.current?.querySelectorAll<HTMLElement>('[data-menu-card]') ?? []
        );

        if(cards.length === 0){
            return;
        }

        animate(cards, {
            opacity: [{ from: 0, to: 1 }],
            y: [{ from: 32, to: 0 }],
            scale: [{ from: 0.94, to: 1 }],
            rotateX: [{ from: '8deg', to: '0deg' }],
            duration: 900,
            delay: stagger(130, { start: 120 }),
            ease: 'outExpo'
        });

        cards.forEach((card) => {
            const onEnter = () => {
                animate(card, {
                    y: -6,
                    scale: 1.02,
                    boxShadow: '0 16px 35px rgba(113, 66, 255, 0.35)',
                    duration: 260,
                    ease: 'outQuad'
                });
            };

            const onLeave = () => {
                animate(card, {
                    y: 0,
                    scale: 1,
                    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)',
                    duration: 260,
                    ease: 'outQuad'
                });
            };

            const onClick = () => {
                animate(card, {
                    scale: [
                        { to: 0.96, duration: 90, ease: 'inQuad' },
                        { to: 1.02, duration: 120, ease: 'outQuad' },
                        { to: 1, duration: 100, ease: 'outQuad' }
                    ]
                });
            };

            card.addEventListener('mouseenter', onEnter);
            card.addEventListener('mouseleave', onLeave);
            card.addEventListener('click', onClick);

            self.add('cleanup-' + card.dataset.menuCard, () => {
                card.removeEventListener('mouseenter', onEnter);
                card.removeEventListener('mouseleave', onLeave);
                card.removeEventListener('click', onClick);
            });
        });
    });
    
    return () => {
        if(scope.current){ 
            scope.current.revert() 
        }
    }
    }, []);
    
    //Remember to add ref={AnimRefPoint} to 
    //Some div to set where the animation can happen.

    return (
    <div ref={AnimRefPoint} style={{ width: '100%', maxWidth: '980px', margin: '0 auto' }} onClick={() => {
            if(!menuMusic.current){
                menuMusic.current = true
                playSnowy()
            }
        }
        }>
        <h2 style={{
            marginBottom: '18px',
            letterSpacing: '0.02em',
            textAlign: 'center',
            textShadow: '0 2px 12px rgba(113, 66, 255, 0.35)'
        }}>
            Party Intelligence Hub
        </h2>
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(220px, 1fr))',
            gap: '16px',
            alignItems: 'stretch'
        }}>
            <section data-menu-card="arrival" style={cardStyle} onClick={() => playNoor()}>
                <h3 style={titleStyle}>🕓Arrival🕗</h3>
                <p style={textStyle}>Doors are open exactly at 16:00, no sooner or later. Miss it and you will be late. Ring a short pulse once, dramatic entrance expected.</p>
            </section>
            <div onClick={() => {
                setParticleSpawn(true)
                playWow()
                }}>
                <section data-menu-card="dress" style={cardStyle}>
                    <h3 style={titleStyle}>👗Dress Code👔</h3>
                    <p style={textStyle}>Stylish, Formal, The best you have. If it sparkles, even better.</p>
                    
                </section>
            </div>
            
            <section data-menu-card="plan" style={cardStyle} onClick={() => playWide()}>
                <h3 style={titleStyle}>🌃 Evening Plan 🌆</h3>
                <p style={textStyle}>Games, food, drinks, music and time to just chill together. </p>
                <p style={textStyle}>Questions, allergies or special needs? Tell me about it.</p>
            </section>
            <section data-menu-card="status" style={cardStyle} onClick={() => playPhone()}>
                <h3 style={titleStyle}>💧Cancellation Check🌊</h3>
                <p style={textStyle}>Event status: absolutely totally without a doubt happening.</p>
                <p style={textStyle}>Backup plan status: PANIC.</p>
            </section>
        </div>
        <Sparkles spawnParticles={particleSpawn} particleTime={500} particleCount={40} onSpawnParticles={() => {setParticleSpawn(false)}}></Sparkles>
        
    </div>
    )
}

const cardStyle: React.CSSProperties = {
    background: 'linear-gradient(145deg, rgba(28, 28, 40, 0.96), rgba(22, 22, 32, 0.92))',
    border: '1px solid rgba(176, 152, 255, 0.28)',
    borderRadius: '18px',
    padding: '18px 18px 16px',
    textAlign: 'left',
    color: '#e9e8ff',
    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(6px)',
    minHeight: '170px',
    transformStyle: 'preserve-3d',
    cursor: 'pointer'
};

const titleStyle: React.CSSProperties = {
    margin: '0 0 10px',
    color: '#c9b9ff',
    letterSpacing: '0.03em'
};

const textStyle: React.CSSProperties = {
    margin: '0 0 8px',
    lineHeight: 1.45,
    color: 'rgba(236, 234, 255, 0.96)'
};

export default MainMenu