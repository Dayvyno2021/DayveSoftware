import { theme } from '../../components/ui/Theme';

export const rev = {
  // backgroundColor: 'blue',

  [theme.breakpoints.down('md')]:{
    '& p':{fontSize: '80%'},
  },
  // pageContainer:{
  // },
  visionContainer:{
    p: '2rem 5rem',
    [theme.breakpoints.down('md')]:{
      p: '1rem 2rem',
    },
    // alignContent: 'center',
    '&>h2':{
      fontFamily: 'Pacifico',
      pb: '2rem'
    }
  },
  visionImage: {
    // backgroundColor: 'red',
    [theme.breakpoints.down('md')]:{
      display: 'flex',
      justifyContent: 'center',
      pb: '1rem'
    },
    '&>img':{
      width: '95%',
      objectFit: 'contain',
      [theme.breakpoints.down('md')]:{
        width: '80%',
        display: 'block',
      }
    }
  },
  visionText:{
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      '& p':{
        textAlign: 'center'
      }
    }
  },
  consultContainer:{
    // minHeight: '90vh',
    '& h4':{
      pb: '2rem'
    },
    [theme.breakpoints.down('md')]:{
      // p: '1rem 2rem',
    },
  },
  consult2: {
    backgroundColor: '#B3B3B3',
    p: '2rem 5rem',
    [theme.breakpoints.down('md')]:{
      p: '1rem 2rem'
    },

    '& p':{
      color: '#fff'
    }
  },
  consultImage: {
    pl: '5rem',
    display: 'flex',
    justifyContent: 'center',
    '&>img':{
      width: '70%'
    },
    [theme.breakpoints.down('md')]:{
      pl : '2rem'
    },
    [theme.breakpoints.down('sm')]:{
      pl : 0
    }
  },
  
  mockup2: {
    backgroundColor: '#FF7373',
    p: '7rem 5rem',
    [theme.breakpoints.down('md')]:{
      p: '1rem 2rem'
    },

    '& p':{
      color: '#fff'
    }
  },
  review2: {
    backgroundColor: '#39B54A',
    p: '7rem 5rem',
    [theme.breakpoints.down('md')]:{
      p: '1rem 2rem'
    },

    '& p':{
      color: '#fff'
    }
  },
  reviewImage: {
    pl: '3rem',
    display: 'flex',
    justifyContent: 'center',
    '&>img':{
      width: '50%'
    },
    [theme.breakpoints.down('md')]:{
      pl : '2rem'
    },
    [theme.breakpoints.down('sm')]:{
      pl : 0
    }
  },
  design2: {
    backgroundColor: '#A67C52',
    p: '10rem 5rem',
    [theme.breakpoints.down('md')]:{
      p: '5rem 2rem'
    },

    '& p':{
      color: '#fff'
    }
  },
  build2: {
    backgroundColor: '#FBB03B',
    p: '2rem 5rem',
    [theme.breakpoints.down('md')]:{
      p: '1rem 2rem'
    },

    '& p':{
      color: '#fff'
    }
  },
  launch2: {
    backgroundColor: '#C1272D',
    p: '7rem 5rem',
    [theme.breakpoints.down('md')]:{
      p: '5rem 2rem'
    },

    '& p':{
      color: '#fff'
    }
  },
  launchImage: {
    // backgroundColor:'green',
    pl: '3rem',
    display: 'flex',
    justifyContent: 'center',
    '&>img':{
      width: '50%',
      height: '30rem',
      [theme.breakpoints.down('sm')]:{
        m: '1rem auto',
        width: '80%',
        height: '20rem'
      }
    },
    [theme.breakpoints.down('md')]:{
      pl : '2rem',
    },
    [theme.breakpoints.down('sm')]:{
      pl : 0,
      display: 'flex',
      m: '0 auto',
      
    }
  },
  maintain2: {
    backgroundColor: '#8E45CE',
    p: '2rem 5rem',
    [theme.breakpoints.down('md')]:{
      p: '1rem 2rem'
    },

    '& p':{
      color: '#fff'
    }
  },
  iterate2: {
    backgroundColor: '#29ABE2',
    p: '7rem 5rem',
    [theme.breakpoints.down('md')]:{
      p: '5rem 2rem'
    },

    '& p':{
      color: '#fff'
    }
  },
}