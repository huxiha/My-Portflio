export const routeAnimation = {
    initial: {
        opacity:0,
    },
    animation: {
        opacity: 1,
        transition: {
            delay:0.1,
            duration:0.2,
        },
       
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.1,
            ease: "easeInOut",
        }
    }
}

export const fadeInOut = {
    initial : {
        opacity:0,
        y: 50,
    },
    animation: {
        opacity:1,
        y: 0,
        transition: {
            duration: 0.2
        }
    }
}

export const stagger = {
    initial: {

    },
    animation: {
        transition: {
            staggerChildren: 0.1,
        }
    }
}