import { createTheme} from '@mui/material/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const blueWhite = '#CCCCFF';
const arcGrey = '#868686'

export const theme = createTheme({
  palette : {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      blueWhite: blueWhite
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'capitalize',
      fontWeight: 700,
      fontSize: '1rem'
    },
    estimate: {  
      fontSize: '1rem',
      fontFamily: 'Pacifico',
      textTransform: 'lowercase',
      fontStyle: 'italic'
    },
    h2:{
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: '1.5'
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue
    },
    h4:{
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: arcBlue,
      fontWeight: 700,
    },
    h6:{
      fontWeight: 500,
      fontFamily:'Raleway',
      color: arcBlue
    },
    subtitle1:{
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey
    },
    subtitle2:{
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white'
    },
    learnMore: {
      borderWidth: '2px',
      textTransform: 'none',
      height: '2.8rem',
      width: '150px',
      borderRadius: 50,
      transition: '0.3s'
    },
    body1: {
      fontSize: '1.2rem',
      color: arcGrey,
      fontWeight: 300
    },
  },
  components: {
    MuiInputBase:{
      styleOverrides:{
        root: {
          color: arcBlue,
          fontSize: '1rem'
        },
      }
    },
    MuiInput:{
      styleOverrides:{
        root:{
          fontSize: '1rem'
        },
        underline:{
          "&&&:before":{
            borderBottom: `2px solid ${arcBlue}`,
          },
          // "&&:after":{
          //   borderBottom: `2.3px solid ${arcBlue}`,
          // },
        },
      }
    },
    MuiInputLabel:{
      styleOverrides:{
        root:{
          color: arcBlue,
          fontSize: '1rem'
        }
      }
    }
  }

});
