import { theme } from '../../components/ui/Theme';

export const ios = {
  integration:{
    p: '5rem 5rem',
    [theme.breakpoints.down('md')]: {
      p: '3rem 2rem',
      '& p':{fontSize: '1rem'},
      '& h2':{fontSize: '1.8rem'},
    }
  },
  integration2: {
    width: '100%',
    height: '100%',
    paddingLeft: '2rem',
    paddingRight: '2rem'
  },
  integration1: {

  }, 
  integration3: {
    textAlign: 'right'
  }, 

  icons:{
    p: '2rem 1rem',
    [theme.breakpoints.down('md')]:{
      p: '2rem 0.5rem'
    },
    '& h4':{
      textAlign: 'center',
    },

    '&>*:not(:last-child)':{
      mb: '3rem'
    }
  },
  icons2: {

    // [theme.breakpoints.down('md')]:{
    //   mb: '2rem'
    // },

    '&>img': {
      maxWidth: '29rem',
      maxHeight: '12rem',
      pt: '3rem',

      [theme.breakpoints.down('lg')]:{
        pt: '2rem',
        width: '17rem',
        height: '15rem'
      },

      [theme.breakpoints.down('md')]:{
        pt: '0'
      }
    }
  }
}