import { theme } from "../../components/ui/Theme";

export const est={

  estimate:{
    pt: '0rem',
    '& h2':{
      mb:'5rem'
    },
    [theme.breakpoints.down('md')]:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  lottie1:{
    width: '70%',
    [theme.breakpoints.down('md')]:{
      display: 'flex',
      justifyContent: 'center'
    }
  },

  wrapper:{
    p: '2rem 3rem',
    [theme.breakpoints.down('md')]:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]:{
      p: '1rem'
    }
  },
  itemsWrapper:{
    // backgroundColor:'yellow',
    '& h2':{
      fontSize: '1.8rem',
      pt: '0.5rem',
      lineHeight: 1,

    }
  },
  subtitle: {
    mb:'5rem',
    [theme.breakpoints.down('sm')]:{
      mb: '1rem'
    }
  },
  '& .items':{
    alignItems: 'center',
    justifyContent: 'flex-start',
    m: '0.3rem',
    // '&:hover': {
    //   backgroundColor: 'secondary.main'
    // },
    '& *': {
      textTransform: 'none'
    },
    '& img':{
      width: '80%',
      height: '6rem',
      [theme.breakpoints.down('sm')]:{
        mt: '0.2rem'
      }
    },
    '&>h6':{
      fontSize:'0.9rem'
    },
    [theme.breakpoints.down('sm')]:{
      pb: '1.5rem'
    }
  },

  arrows: {
    // backgroundColor: 'yellow',
    m: '0 auto',
    mt: '5rem',
    width:'50%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      transform: 'translateY(-25rem)',
      width: '100%'
    }
  },

  estbtn: {
    position: 'relative',
    pt:'3rem',
    '&>button':{
      ...theme.typography.estimate,
      textTransform:'capitalize',
      backgroundColor: theme.palette.common.orange,
      display: 'block',
      m: '0 auto',
      borderRadius: 50,
      '&:hover':{
        backgroundColor: 'secondary.dark'
      }
    },
    [theme.breakpoints.down('sm')]:{
      transform: 'translateY(-8rem)'
    }
  },
  modal: {
    pr:'2rem',
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
      fontSize: '0.8rem'
    },
    '& h2':{
      fontSize: '1.8rem'
    },
    '& img': {
      ml: '0.5rem'
    }
  },
  cancel: {
    position: 'absolute',
    right: '-0.8rem',
    top: '0rem',
  }
}
