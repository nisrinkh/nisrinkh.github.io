import { useEffect } from 'react';

export const useEyeFollow = () => {
  useEffect(() => {
    const eyeball = (event: MouseEvent) => {
      let eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        const htmlEye = eye as HTMLElement;
        let x = htmlEye.getBoundingClientRect().left + htmlEye.clientWidth / 2;
        let y = htmlEye.getBoundingClientRect().top + htmlEye.clientHeight / 2;
        
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        htmlEye.style.transform = `rotate(${rotate}deg)`; 
      });
    };

    document.addEventListener("mousemove", eyeball);
    return () => document.removeEventListener("mousemove", eyeball);
  }, []);
};