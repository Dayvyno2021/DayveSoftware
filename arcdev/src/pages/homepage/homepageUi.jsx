import { theme } from '../../components/ui/Theme';
import revolutionBg from '../../assets/repeatingBackground.svg';
import infobg from '../../assets/infoBackground.svg'

export const homepage = {
  minHeight: '75vh',
  main:{
    [theme.breakpoints.down('sm')]:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '1rem',

      '&>*:last-Child':{
        marginTop: '3rem'
      }
    },
  },
  typo1:{
    marginBottom: '2rem',
    fontFamily: 'Raleway',
    [theme.breakpoints.down('md')]:{
      fontSize: '1.5rem',
      marginBottom: '2rem'
    }
  },
  estimate:{
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]:{
      display: 'flex',
      alignItems: 'center',
    },
    '& Button':{
      ...theme.typography.estimate,
      backgroundColor: 'secondary.main',
      borderRadius: '3rem',
      height: '2.8rem',
      width: 145,
      marginRight: '1rem',
      transition: 'all 1s',
      '&:hover':{
        backgroundColor: 'secondary.dark',
      },

      [theme.breakpoints.down('md')]:{
        marginRight: '0.2rem',
        width: '135px',
        fontSize: '0.8rem'
      },
      [theme.breakpoints.down('sm')]:{
        width: '135px',
        fontSize: '0.8rem'
      }
    }
  },
  learn: {
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]:{
      display: 'flex',
      alignItems: 'center',
    },
    '& Button':{
      ...theme.typography.learnMore,
      borderColor: 'primary.dark',
      color: 'primary.dark',
      marginLeft: '1rem',
      borderRadius: 50,
      transition: 'all 1s',
      [theme.breakpoints.down('md')]:{
        marginLeft: '0.2rem',
        width: '145px',
        fontSize: '0.8rem'
      },
      [theme.breakpoints.down('sm')]:{
        width: '145px',
        fontSize: '0.8rem',
      }
    },
  },
  buttons:{
    [theme.breakpoints.down('sm')]:{
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  },
  '.specialText':{
    fontFamily: 'Pacifico',
    color: 'orange'
  },
  services:{
    [theme.breakpoints.down('sm')]:{
      mx: '0.5rem'
    },

    '&>*:first-of-type':{
      [theme.breakpoints.down('sm')]:{
        justifyContent:'center',
        mx: '0.5rem'
      }
    }
  },
  servicesButton:{
    ...theme.typography.learnMore,
    borderColor: 'primary.dark',
    color: 'primary.dark',
    marginTop: '1rem'
  },
  '& .MuiTypography-root': {
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.3rem'
    }
  },
  website: {
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        textAlign:'center'
      }
    }
  },
  typos1: {
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem'
    }
  },
  typos2: {
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem'
    }
  },
  '& .customImage': {
    maxWidth: '13rem',
    [theme.breakpoints.down('md')]: {
      maxWidth: '9rem'
  },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '9rem',
      marginTop: '1rem'
    }
  },
  emptyGrid:{
    display: {lg:'inline-block', md: 'inline-block', sm: 'inline-block', sx:'none'},
    order: {lg: -1, md:-1}
  },

  revolutionBg: {
    backgroundImage: `url(${revolutionBg})`,
    position: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '40rem',
    width: '100%',
    border: `1px ${theme.palette.grey[200]} solid`,
    [theme.breakpoints.up('md')]:{
      p:'5rem'
    },
    [theme.breakpoints.down('md')]:{
      p:'3rem'
    },
    [theme.breakpoints.down('sm')]:{
      p:'1rem'
    }
  },
  revolutionCard: {
    boxShadow: theme.shadows[10],
    borderRadious: 15,
    padding: '5rem',

    [theme.breakpoints.down('md')]:{
      p:'3rem'
    },
    [theme.breakpoints.down('sm')]:{
      p:'0.3rem'
    }
  },
  information: {
    backgroundImage: `url(${infobg})`,
    position: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '40rem',
    width: '100%',
    alignContent: 'center',
    [theme.breakpoints.down('md')]:{
      // '& *':{
      //   fontSize: '1.1rem'
      // }
    },


    '&>*:first-of-type':{
      pl: '5rem',
      [theme.breakpoints.down('md')]:{
        pl: '3rem',
      },
      [theme.breakpoints.down('sm')]:{
        alignContent: 'center',
        alignItems: 'center',
        pl: '0rem'
      },

      '&>*:last-child':{
        ...theme.typography.learnMore,
        borderColor: 'white',
        color: 'white',
        borderRadius: 50,
        transition: 'all 0.3s',
        px: '0.2rem',
        width: 'max-content',
        opacity: '0.7',
        '&:hover':{
          opacity: '1',
          transform: 'translateY(-1px)'
        }
      }
    },

    '&>*:last-child':{
      pr: '5rem',
      alignItems: 'flex-end',
      [theme.breakpoints.down('md')]:{
        pr: '3rem'
      },
      [theme.breakpoints.down('sm')]:{
        alignContent: 'center',
        alignItems: 'center',
        pr: '0rem'
      },

      '&>*:last-child':{
        ...theme.typography.learnMore,
        // alignSelf: 'center',
        borderColor: 'white',
        color: 'white',
        borderRadius: 50,
        transition: 'all 0.3s',
        px: '0.2rem',
        width: 'max-content',
        opacity: '0.7',
        '&:hover':{
          opacity: '1',
          transform: 'translateY(-1px)'
        }
      }
    }

  }

}