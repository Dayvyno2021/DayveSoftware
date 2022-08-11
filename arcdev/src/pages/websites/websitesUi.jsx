import { theme } from '../../components/ui/Theme';

export const webs = {
  analyticsContainer:{
    p: '3rem 5rem',
    [theme.breakpoints.down('md')]:{
      p:'3rem 1rem'
    }
  },
  analytics:{
    // backgroundColor:'red'
  },

  analytics1:{
    [theme.breakpoints.down('sm')]:{
      alignContent: 'center'
    },
    '& img':{
      width: '100%',
      objectFit: 'cover',
      [theme.breakpoints.down('sm')]:{
        width: '80%',
      }
    },
    '& h4':{
      pl:'2.8rem',
      [theme.breakpoints.down('sm')]:{
        pl: '0',
        textAlign: 'center'
      }
    }
  },
  analytics2:{
    pl: '1rem'
  },
  ecommerceContainer:{
    display: 'flex',
    justifyContent: 'flex-end',
    p: '3rem 5rem',
    [theme.breakpoints.down('md')]:{
      p:'3rem 1rem'
    },
  },
  ecommerce1:{
    [theme.breakpoints.down('sm')]:{
      alignContent: 'center'
    },
    '& img':{
      width: '100%',
      objectFit: 'cover',
      [theme.breakpoints.down('sm')]:{
        width: '80%',
      }
    },
    '& h4':{
      textAlign: 'center',
      [theme.breakpoints.down('sm')]:{
        pl: '0',
        textAlign: 'center'
      }
    }
  },
  outreachContainer:{
    p: '3rem 5rem',
    [theme.breakpoints.down('md')]:{
      p:'3rem 1rem'
    },
  },
  seoContainer:{
    display: 'flex',
    justifyContent: 'flex-end',
    p: '3rem 5rem',
    mb: '5rem',
    [theme.breakpoints.down('lg')]:{
      p:'3rem 1rem',
      mb: '0',
    },
  },
}