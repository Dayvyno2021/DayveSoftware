import { theme } from '../../components/ui/Theme';

export const contact = {
  top:{
    '& p':{color: 'common.blue'}
  },

  formContainer:{
    // p: '2rem 4rem'
  },

  form1: {
    p: '1rem 4rem',
    [theme.breakpoints.down('sm')]:{
      p: '2rem'
    },
    '& a': {
      position: 'relative',
      display: 'inline-block',
      transform: 'translateY(-5px)',
      textDecoration: 'none',
      color: 'common.blue'
    },
    '& p':{
      fontSize: '1rem'
    },
    '& h2':{
      fontSize: '1.8rem'
    },
  },
  form2:{
    mt: '1rem'
  },
  send:{
    backgroundColor: 'common.orange',
    borderRadius: 30,
    display: 'block',
    m: '1rem auto',
    p: '0.5rem',
    textTransform: 'capitalize',
    fontFamily: 'Pacifico',
    height: '2.5rem',
    width: '10rem',
    '&:hover':{
      backgroundColor: theme.palette.secondary.dark,
    },
    '&:active':{
      height: '2.5rem',
      width: '10rem',
    }
  },


  modal:{
    p: '2rem',
    [theme.breakpoints.down('sm')]:{
      p: '0rem'
    },
    '& a': {
      position: 'relative',
      display: 'inline-block',
      transform: 'translateY(-5px)',
      textDecoration: 'none',
      color: 'common.blue'
    },
    '& p':{
      fontSize: '1rem'
    },
    '& h2':{
      fontSize: '1.8rem'
    },
    '& img': {
      ml: '0.5rem'
    }
  },
  modal2:{
    mt: '0rem'
  },
  modalbtn1:{
    height: '2.5rem',
    width: '10rem',
    borderRadius: 30,
    backgroundColor: 'common.blue',
    [theme.breakpoints.down('sm')]:{
      width: '5rem',
    }

  },
  modalbtn2:{
    backgroundColor: 'common.orange',
    borderRadius: 30,
    display: 'block',
    p: '0.5rem',
    textTransform: 'capitalize',
    fontFamily: 'Pacifico',
    height: '2.5rem',
    width: '10rem',
    '&:hover':{
      backgroundColor: theme.palette.secondary.dark,
    },
    '&:active':{
      height: '2.5rem',
      width: '10rem',
    },
    [theme.breakpoints.down('sm')]:{
      width: '7rem',
    }
  }

}
