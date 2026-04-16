import React, { useEffect, useRef } from 'react'
import {animate, createScope, splitText, stagger, type Scope} from 'animejs'

interface incomingParams{
    givenText: string,
    done?: () => void 
}

const AppearingAndDisappearingText: React.FC<incomingParams> = ({givenText = "", done = () => {},}) => {
    
    const AnimRefPoint = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope>(null);
    
    useEffect(() => {
    
    scope.current = createScope({ root: AnimRefPoint }).add( self => {
        if(!self){ return }
        const { chars } = splitText('p', { words: false, chars: true });

        animate(chars, {
        // Property keyframes
        scale: [
            { from: 0, to: 1, ease: 'out(1.6)', duration: 1200, delay: 400  },
            { to: 1, ease: 'out(1.6)', duration: 800, delay: 60 * chars.length  },
            { to: 0, ease: 'out(1.6)', duration: 800, delay: 700 + 50 * chars.length }
        ],
        opacity: [
            { from: 0, to: 1, ease: 'inOutCirc', duration: 1600 },
            { to: 0.95, ease: 'outBounce', duration: 800, delay: 60 * chars.length },
            { to: 0.0, ease: 'outBounce', duration: 800, delay: 800 },
        ],
        // Property specific parameters
        rotate: {
            from: '-1turn',
            delay: 300
        },
        delay: stagger(50),
        ease: 'inOutCirc',
        loop: false,
        onComplete: () => done()
        });
    });
    
    return () => {
        if(scope.current){ scope.current.revert() }
    }
    }, []);
    
    //Remember to add ref={AnimRefPoint} to 
    //Some div to set where the animation can happen.
    return (
    <div ref={AnimRefPoint}>
        <p >{givenText}</p>
    </div>
    )
}

export default AppearingAndDisappearingText