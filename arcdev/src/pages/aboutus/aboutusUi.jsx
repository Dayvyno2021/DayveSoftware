import { theme } from '../../components/ui/Theme';

export const abt ={
  [theme.breakpoints.down('md')]:{
    '& p':{fontSize: '1rem'},
    '& h2': {
      fontSize: '1.8rem',
      textAlign: 'center'
    },
    '& h4': {
      fontSize: '1rem',
      textAlign: 'center'
    }
  },
  aboutus: {
    p: '1rem 7rem',
    [theme.breakpoints.down('md')]:{
      p: '1rem 1rem',
    }
  },
  history:{
    fontWeight:'700', 
    fontStyle: 'italic',
    [theme.breakpoints.down('md')]:{
      textAlign: 'center'
    }
  },
  aboutus1:{
    m: '3rem 5rem',
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize : '1.5rem',
    lineHeight: '1.4',
    [theme.breakpoints.down('md')]:{
      m: '2rem 0rem',
    }
  },
  aboutus3:{
    justifyContent: 'center', 
    alignItems: 'center',
    '&>img':{
      width: '80%'
    }
  },
  team:{
    // backgroundColor: 'red',
    minHeight: '35rem',
    p: '0 1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    [theme.breakpoints.down('md')]:{
      gridTemplateRows: 'repeat(3, minContent)',
    },
    [theme.breakpoints.up('md')]:{
      gridTemplateRows: 'repeat(12, 1fr)',
    }
  },
  team1:{
    // backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    gridColumn: '1/-1',
    height: 'minContent',
    [theme.breakpoints.up('md')]:{
      gridColumn: '5/9',
      gridRow: '1/9',
    },
    display: 'flex',
    '& p':{
      fontSize: '0.9rem',
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.blue,
      fontWeight:'700'
    },
    p: '0.5rem',
    
    '& img':{
      width: '15rem',
      height: '15rem',
      borderRadius: '50%'
    }
  },
  team2:{
    // backgroundColor: 'blue',
    gridColumn: '1/-1',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]:{
      alignItems: 'center',
      mt: '1.5rem'
    },
    [theme.breakpoints.up('md')]:{
      gridRow: '6/-1',
      gridColumn: '1/5',
    },
    '& img':{
      width: '18rem',
      height: '18rem',
      [theme.breakpoints.up('md')]:{
        width: '18rem',
        height: '18rem'
      },
      [theme.breakpoints.up('lg')]:{
        width: '25rem',
        height: '25rem'
      }
    }
  },

  team3: {
    // backgroundColor: 'red',
    gridColumn: '1/-1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.down('md')]:{
      alignItems: 'center',
      mt: '2rem',
      mb: '2rem'
    },
    [theme.breakpoints.up('md')]:{
      gridColumn: '9/-1',
      gridRow: '6/-1',
    },
    '& img':{
      width: '18rem',
      height: '18rem',
      [theme.breakpoints.up('md')]:{
        width: '18rem',
        height: '18rem'
      },
      [theme.breakpoints.up('lg')]:{
        width: '25rem',
        height: '25rem'
      }
    }
  }
}