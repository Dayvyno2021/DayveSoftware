import {theme} from '../../components/ui/Theme';

export const sxFooter = {
  background: 'linear-gradient(120deg, black 20%, #0B72B9 10%, #0B72B9 70%)',
  // zIndex: theme.zIndex.modal+1100,
  position: 'relative',
  minHeight: '10rem',
  width: '100%',
  pt: '1rem',

  coverGrid:{
    height:'100%',
    color:'common.blueWhite'
  },
  mainGrid:{
    display:{xs:'none', md:'flex', sm:'flex'},
    fontSize: '.8rem', 
    // backgroundColor: 'red',
    p: '0.5rem 0rem',
    [theme.breakpoints.down('md')]:{
      fontSize: '0.7rem'
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: '0.6rem'
    },
    // [theme.breakpoints.down('sm')]:{
    //   fontSize: '0.5rem'
    // }
  },
  '& .firstGrid':{
    fontSize: '.7rem', 
    padding: '.3rem 2rem',
    [theme.breakpoints.down('md')]:{
      padding: '0.3rem 0.5rem'
    }
  },

  '& .MuiGrid-item':{
    color: 'common.blueWhite',
    textDecoration: 'none',
  },
  icons:{
    display: { 
      md:'flex' ,sm: 'none', xs:'flex'
    },
  },
  git:{
    p: '0.3rem',
    // backgroundColor: 'yellow',
    [theme.breakpoints.up('md')]:{
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    [theme.breakpoints.down('sm')]:{
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },

  },
  linkedin:{
    p: '0.3rem',
    [theme.breakpoints.up('md')]:{
      alignItems: 'flex-end'
    },
    [theme.breakpoints.down('sm')]:{
      alignItems: 'flex-end'
    },
  }

}
