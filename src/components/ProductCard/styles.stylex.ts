import * as stylex from '@stylexjs/stylex';

const growAnimation = stylex.keyframes({
  '0%': { width: '0%' },
  '100%': { width: '100%' },
});


export default stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 378,
    height: 832,
    backgroundColor: 'white',
    color: 'black',
    ':hover': {
      boxShadow: '4px 4px 16px rgba(216, 216, 216, 0.74)',
      transitionProperty: 'transform',
      transitionDuration: '0.1s',
      transitionTimingFunction: 'ease-in-out',
      transform: 'scale(1.02)'
    }
  },
  highlightContainer: {
    position: 'relative',
    top: 0,
    height: '4px',
    width: '100%',
    overflow: 'hidden',
    animationName: growAnimation,
    animationDuration: '0.5s',
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'forwards', // Keeps the final state
    backgroundColor: 'black', // fallback if color isn't passed
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 293,
    backgroundImage: `url('https://res.cloudinary.com/drip-shutter-images/image/upload/v1743878187/duncan-shop/allison-saeng-ecwIyHRmThI-unsplash_z86qdd.jpg')`, // Default Product Image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: 86,
  },
  productImg: {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: 'auto',
    zIndex: 1,
  },
  body: {
    textAlign: 'start',
    padding: 24,
    paddingTop: 40,
    flexGrow: 1, // Ensures body covers the remaining space
  },
  title: {
    fontSize: 32,
    fontWeight: 500,
  },
  description: {
    fontSize: 20,
    fontWeight: 300,
  },
  keywords:{
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    alignItems: 'center',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    height: 'fit',
    gap: 24,
    paddingBottom: 32,
  }
});