export const fadeIn = (duration = 0.3, delay = 0) => ({
    visible: {
        opacity: 1,
        transition: {
            duration,
            ease: 'easeInOut',
            delay
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration,
            ease: 'easeInOut',
            delay
        }
    }
})

export const fadeTop = (duration = 0.3, delay = 0) => ({
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration,
            ease: 'easeInOut',
            delay
        }
    },
    hidden: {
        opacity: 0,
        y: '-30%',
        transition: {
            duration,
            ease: 'easeInOut',
            delay
        }
    }
})

export const fadeBottom = (duration = 0.3, delay = 0, opacity = 1) => ({
    visible: {
        opacity,
        y: 0,
        transition: {
            duration,
            ease: 'easeInOut',
            delay
        }
    },
    hidden: {
        opacity: 0,
        y: '30%',
        transition: {
            duration,
            ease: 'easeInOut',
            delay
        }
    }
})

export const scaleDown = (duration = 1.5) => ({
    visible: {
        scale: 1, 
        rotate: 0,
        transition: {
            duration
            // ease: 'easeInOut'
        },
    },
    hidden: {
        scale: 6,
        rotate: 3600,
        transition: {
            duration
            // ease: 'easeInOut'
        }
    }
})

export const fadeLeft = (duration = 0.3, delay = 0) => ({
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration,
            ease: 'easeInOut',
            delay
        }
    },
    hidden: {
        opacity: 0,
        x: '15%',
        transition: {
            duration,
            ease: 'easeInOut',
            delay
        }
    }
})

export const fadeRight = (duration = 0.3, delay = 0) => ({
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration,
            ease: 'easeInOut',
            delay
        }
    },
    hidden: {
        opacity: 0,
        x: '-15%',
        transition: {
            duration,
            ease: 'easeInOut',
            delay
        }
    }
})