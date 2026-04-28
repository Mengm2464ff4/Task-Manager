// import React, { useEffect, useState } from 'react';

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);

//   useEffect(() => {
//     const updatePosition = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => setIsClicking(true);
//     const handleMouseUp = () => setIsClicking(false);

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);

//     window.addEventListener('mousemove', updatePosition);
//     window.addEventListener('mousedown', handleMouseDown);
//     window.addEventListener('mouseup', handleMouseUp);

//     const interactiveElements = document.querySelectorAll('button, a, input, .task-card');
//     interactiveElements.forEach(el => {
//       el.addEventListener('mouseenter', handleMouseEnter);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//       window.removeEventListener('mousedown', handleMouseDown);
//       window.removeEventListener('mouseup', handleMouseUp);
//       interactiveElements.forEach(el => {
//         el.removeEventListener('mouseenter', handleMouseEnter);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="fixed pointer-events-none z-50 hidden md:block"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transform: 'translate(-50%, -50%)',
//         }}
//       >
//         <div
//           className={`rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mix-blend-difference transition-all duration-100 ${
//             isClicking ? 'w-6 h-6' : isHovering ? 'w-12 h-12' : 'w-8 h-8'
//           } opacity-50`}
//         />
//       </div>
//       <div
//         className="fixed pointer-events-none z-50 hidden md:block"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transform: 'translate(-50%, -50%)',
//           transition: 'width 0.2s, height 0.2s',
//         }}
//       >
//         <div
//           className={`rounded-full border-2 border-purple-500 transition-all duration-150 ${
//             isClicking ? 'w-2 h-2' : isHovering ? 'w-20 h-20' : 'w-4 h-4'
//           }`}
//         />
//       </div>
//     </>
//   );
// };

// export default CustomCursor;