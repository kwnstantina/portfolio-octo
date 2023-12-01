import './hoverEffect.scss';
import {Children, cloneElement, ReactNode, useEffect, useRef} from 'react';

const HoverEffect = ({ children }) => {
    const cursorRef = useRef(null) as any;

    useEffect(() => {
        const links = document.querySelectorAll('.hover-item');
        const cursor = cursorRef.current;

        const animateIt = function (e) {};

        const editCursor = (e: Event) => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
        };

        links.forEach(b => b.addEventListener('mousemove', animateIt));
        links.forEach(b => b.addEventListener('mouseleave', animateIt));
        window.addEventListener('mousemove', editCursor);

        return () => {
            links.forEach(b => b.removeEventListener('mousemove', animateIt));
            links.forEach(b => b.removeEventListener('mouseleave', animateIt));
            window.removeEventListener('mousemove', editCursor);
        };
    }, []);

    return (
        <div >
            {Children.map(children, child=> {
                return cloneElement(child as ReactNode, { className: 'hover-item' });
            })}
            <div ref={cursorRef} className='cursor'></div>
        </div>
    );
};

export default HoverEffect;
