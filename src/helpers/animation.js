

export const animation = () => {
  const animations = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'flip-left', 'flip-right', 'zoom-in-up', 'zoom-in-down', 'zoom-out'];
  const aleatorio = animations[Math.floor(Math.random() * animations.length)];
  
  return aleatorio;
}
