export const fadeIn = (direction, delay) => {
    return {
        hidden:{
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,

        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
        
    }

   
}


export const trans = () => {

    
const transition = {
    delay: 0.2
  }
  
  
  const container = {
    
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

}
