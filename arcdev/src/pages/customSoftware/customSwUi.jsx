import { theme } from '../../components/ui/Theme';

export const cs = {
  mb: '2rem',
  pt: '2rem',
  [theme.breakpoints.down('md')]:{
    pt: 0
  },
  '& .MuiTypography-body1':{
    [theme.breakpoints.down('md')]:{
      fontSize: '1rem'
    }
  },
  main: {
    [theme.breakpoints.down('sm')]:{
      p: '0 1rem'
    }
  },
  arrowLeft:{
    mt: '7px',
  },
  arrowRight:{
    mt: '7px',
  },
  savePanel:{
    mt: '5rem',
    [theme.breakpoints.down('sm')]: {
      mt:'2rem',
      '&>*':{
        mb:'3rem'
      }
    }
  },
  customHead:{
    pl:'1rem',
    '& p':{
      [theme.breakpoints.down('md')]: {
        textAlign:'center'
      }
    },
  },
  custom:{
    fontSize: '2.1rem',
    [theme.breakpoints.down('md')]:{
      fontSize: '1.8rem',
      textAlign: 'center'
    }
  },
  digital:{
    mt: '5rem', 
    pl:'3rem',
    pr: '3rem',
    [theme.breakpoints.down('md')]:{
      p: '2rem 2rem'
    },
    [theme.breakpoints.down('sm')]:{
      p: '2rem 1rem'
    }
  },
  roots: {
    mb:'2rem', 
    mt: '10rem',
    [theme.breakpoints.down('md')]: {
      mt:'2rem'
    }
  },
  animate:{
    mt: '10rem', 
    pl:'3rem',
    pr: '3rem',
    [theme.breakpoints.down('md')]:{
      p: '2rem 2rem'
    },
    [theme.breakpoints.down('sm')]:{
      p: '2rem 1rem'
    }
  },
  '& .csLottie':{
    display: 'inline-block',
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  scale:{
    [theme.breakpoints.down('md')]:{
      justifyContent:'center'
    }
  },
  scaleHead:{
    [theme.breakpoints.down('md')]:{
      textAlign:'center'
    }
  },
  animat:{
    [theme.breakpoints.down('md')]:{
      justifyContent:'center'
    }
  },
  animateHead:{
    [theme.breakpoints.down('md')]:{
      textAlign:'center'
    }
  },
  pContainer: {
    // backgroundColor: 'blue',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left'
    }
  }
}