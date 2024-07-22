import  './hoverEffect.scss';
import { Children, cloneElement, useEffect, useRef } from 'react';

const HoverEffect = ({ children }: any) => {
    const cursorRef = useRef<any>(null);

    const updateCursorPosition = (e: MouseEvent) => {
        const cursor = document.querySelector('.cursor') as any;
        if (!cursor) return;
    
        // Get mouse coordinates
        const mouseX = e.clientX;
        const mouseY = e.clientY;
    
        // Adjust these values if necessary to account for any offsets
        // For example, if scaling causes the cursor to appear offset from the pointer
        const offsetX = 0;
        const offsetY = 0;
    
        // Update cursor position
        cursor.style.left = `${mouseX + offsetX}px`;
        cursor.style.top = `${mouseY + offsetY}px`;
    };

    useEffect(() => {
        const links = document.querySelectorAll('.hover-item');
        const cursor = cursorRef.current;

        const animateIt = (e: MouseEvent) => {
            if (e.type === 'mousemove') {
                cursor.style.transform = 'scale(1.5)';
                // if (e.target) {
                //     (e.target as HTMLElement).style.transform = 'scale(1.1)'; // Scale up the hovered element
                //     (e.target as HTMLElement).style.transition = 'transform 0.3s ease'; // Smooth transition for scaling
              //  }
            } else if (e.type === 'mouseleave') {
                cursor.style.transform = 'scale(0.9)';
                // if (e.target) {
                //     (e.target as HTMLElement).style.transform = 'scale(0.9)'; // Scale down the element back to normal
                // }
            }
        };

        const editCursor = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
        };

        links.forEach((b:any) => {
            b.addEventListener('mousemove', animateIt);
            b.addEventListener('mouseleave', animateIt);
        });
        window.addEventListener('mousemove', editCursor);
        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            links.forEach((b:any) => {
                b.removeEventListener('mousemove', animateIt);
                b.removeEventListener('mouseleave', animateIt);
            });
            window.removeEventListener('mousemove', editCursor);
            window.addEventListener('mousemove', updateCursorPosition);
        };
    }, [cursorRef]);

    return (
        <div className='hover-item'>
            <div ref={cursorRef} className='cursor'></div>
            {Children.map(children, child => {
                return cloneElement(child as React.ReactElement);
            })}
        </div>
    );
};

export default HoverEffect;