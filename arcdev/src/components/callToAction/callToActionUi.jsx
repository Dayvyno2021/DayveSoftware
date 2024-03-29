import { theme } from '../ui/Theme';
import bg1 from '../../assets/background.jpg';
import mobileBg from '../../assets/mobileBackground.jpg';

export const cta = {
  // mb: '4rem',
  // [theme.breakpoints.down('sm')]:{
  //   mb: '2rem',
  // },
  backgroundImage: `url(${bg1})`,
  position: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '40rem',
  width: '100%',
  pl:'5rem',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    backgroundImage: `url(${mobileBg})`,
    pl: '2rem'
  },
  [theme.breakpoints.down('sm')]: {
    backgroundImage: `url(${mobileBg})`,
    pl: '0rem',
    alignItems: 'center',
    textAlign: 'center',

  },
  estimate:{
    ...theme.typography.estimate,
    borderRadius: '50px',
    height: '4.5rem',
    width: '12.8rem',
    textTransform: 'capitalize',
    backgroundColor: theme.palette.secondary.main,
    fontSize: '1.5rem',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-100%)',
    right: '5rem',
    transition: 'background-color 0.5s',
    '&:hover':{
      backgroundColor: theme.palette.secondary.dark
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
      right: '2rem',
      height: '3.5rem',
      width: '10rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      left: '50%',
      top: '70%',
      transform: 'translate(-50%, -50%)'
    },
  },
  action1: {
    [theme.breakpoints.down('sm')]:{
      transform: 'translateY(-5rem)'
    }
  },
  action2: {
    [theme.breakpoints.down('sm')]:{
      transform: 'translateY(-5rem)'
    }
  }
}
