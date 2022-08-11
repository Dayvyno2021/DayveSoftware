import { theme } from '../ui/Theme';
export const sx={
  height: '4rem',
  // zIndex: theme.zIndex.modal+1,
  [theme.breakpoints.down('md')]:{
    height:'3.5rem'
  },
  [theme.breakpoints.down('xs')]:{
    height:'3rem'
  },
  '& .MuiToolbar-gutters':{
    p: 0
  },
  '& img': {
    height: '4rem',
    position: 'absolute',
    left: '0',
    top: '0',
    [theme.breakpoints.down('md')]:{
      height:'3.5rem',
    },
    [theme.breakpoints.down('xs')]:{
      height:'3rem',
    },
  },

  tabStyle: {
    ml: 'auto',
    '& button': {
      color: 'buttonText'
    },
 
    '& a': {
      ...theme.typography.tab,
      color: 'common.blueWhite'
    },
    '& a.Mui-selected':{
      color: 'secondary'
    }
  },
  
  buttonStyle: {
    ...theme.typography.estimate,
    borderRadius:'50px',
    mx: '20px',
    color: 'white',
    width: '140px',
    transition: 'all 1s'
  },
  btStyle :{
    backgroundColor: 'transparent',
    p: 0,
    height: '100%',
  }, 
  menu:{
    ...theme.typography.tab,
    backgroundBlendMode: 'screen',
    '& ul': {
      borderRadius: '0px',
      backgroundColor: theme.palette.common.blue,
      color: 'common.blueWhite'
    },
  },
  menuItem: {
    color: 'common.blueWhite',
    '&.Mui-selected':{
      color: 'secondary.main'
    }
  },
  icomoonicon:{
    fill: 'whitesmoke',
    marginLeft: 'auto',
  },
  drawerStyle: {
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.common.blue,
      width: '50vw',
      top:'3.5rem',
      [theme.breakpoints.down('sm')]:{
        width: '60vw'
      }
    },
    '& ul':{
      ...theme.typography.tab,
      color: theme.palette.common.blueWhite,
    },
    '& .Mui-selected':{
      color: 'secondary.main'
    }
  }

}