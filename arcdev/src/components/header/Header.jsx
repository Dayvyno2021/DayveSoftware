import React, {useState, useEffect, Fragment} from 'react';
import {Link, useLocation} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../assets/logo.svg'
// import { theme } from '../ui/Theme';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {sx} from './HeaderUi';
import MenuIcon from '@mui/icons-material/Menu';

function ElevationScroll(props) {
  const { children} = props;

  //Scroll trigger
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0 //time it takes for scroll trigger, default=100
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const menuOptions = [
  {name: 'Services', linkTo:'/services', aI:1, sI:0},
  {name: 'Custom Software Development', linkTo:'/customsoftware', aI:1, sI:1},
  {name: 'iOS/Android App Development', linkTo: '/mobileapps', aI:1, sI:2},
  {name: 'Website Development', linkTo: '/websites', aI:1, sI:3}
]

const Header = (props) => {
  const location = useLocation();
  const {value, setValue, anchorIndex, setAnchorIndex} = props

  //Handles Media queries for screen size that is below 900px
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));//minimum of 'md'(900)

  //Handles the selection/highlight of a tab and also in the drawer
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Handles the selection/highlight of an item in the menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl); //Converts the anchorEl to a boolean.

  const selectAnchor = (event, ind)=>{
    setAnchorIndex(ind); //Gives the menuItem and anchorIndex value
    setAnchorEl(null); //Triggers the menu to close
  }
  
  //Triggers the menu to open
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Triggers the menu to close
  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(()=>{

    switch (location.pathname){
      case '/':
        if (value !==0) setValue(0); setAnchorIndex(5);
        break;
      case '/revolution':
        if (value !==2) setValue(2); setAnchorIndex(5);
        break;
      case '/about':
        if (value !==3) setValue(3); setAnchorIndex(5);
        break;
      case '/contact':
        if (value !==4) setValue(4); setAnchorIndex(5);
        break;
      case '/estimate':
        if (value !==5) setValue(5); setAnchorIndex(5);
        break;
      case '/services':
        if (anchorIndex !==0){
          setValue(1); setAnchorIndex(0);
        }
        break;
      case '/customsoftware':
        if (anchorIndex !== 1){
          setValue(1); setAnchorIndex(1);
        }
        break;
      case '/mobileapps':
        if (anchorIndex !== 2){
          setValue(1);
          setAnchorIndex(2);
        }
        break;
      case '/websites': 
      if (anchorIndex !==3){
        setValue(1); setAnchorIndex(3)
      }
      break;
      default:
        break;
    }
    
  },[location, value, anchorIndex, setValue, setAnchorIndex])

  const tabs = (
    <>
    <Tabs value={value} 
      onChange={handleChange} aria-label="basic tabs example" 
      textColor="secondary" indicatorColor="primary" sx={sx.tabStyle} 
    >
      <Tab label="Home" to="/" component={Link}  />
      <Tab label="Services" to="/services" component={Link}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
      />
      <Tab label="The Revolution" to="/revolution" component={Link}  />
      <Tab label="About Us" to="/about" component={Link}  />
      <Tab label="Contact Us" to="/contact" component={Link}  />
      <Tab label="" sx={{display:'none'}} />
    </Tabs>
    <Button variant='contained' color="secondary" sx={sx.buttonStyle} component={Link} to='/estimate' >
      Free Estimate
    </Button>
    <Menu
      id="basic-menu"
      sx={sx.menu}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      onMouseLeave={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
          onMouseLeave: handleClose
      }}
    >{
      menuOptions.map((option, i)=>(
        <MenuItem key={`O${i}`} sx={sx.menuItem} onClick={(e)=>{selectAnchor(e, i); setValue(1)}}
          component={Link} to={option.linkTo}
          selected={i===anchorIndex}
        >
          {option.name}
        </MenuItem>
      ))
    }
    </Menu>
    </>
  )
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerMenu = (
    <Fragment >
      <Button sx={sx.icomoonicon} onClick={()=>setDrawerOpen(!drawerOpen)}>
        <MenuIcon sx={{color:'white'}} fontSize='large' />
      </Button>
      <SwipeableDrawer sx={sx.drawerStyle}
        disableBackdropTransition={!iOS} disableDiscovery={iOS}
        anchor={'left'}
        open={drawerOpen}
        onClose={()=>setDrawerOpen(false)}
        onOpen={()=>setDrawerOpen(true)}
      >
        <List onClick={()=>setDrawerOpen(false)} onKeyDown={()=>setDrawerOpen(false)}
        // Adding value={value} value=1 up to 5 for each item we have selected
        value={value} 
        onChange={handleChange}
        >
          {/* Adding value=1 to 5 to each child also worked */}
          <ListItem divider></ListItem>
          <ListItem selected={value===0}  component={Link} to='/' button >Home</ListItem>
          <ListItem selected={value===1}  component={Link} to='/services' button >Services</ListItem>
          <ListItem selected={value===2}  component={Link} to='/revolution' button >The Revolution</ListItem>
          <ListItem selected={value===3}  component={Link} to='/about' button >About Us</ListItem>
          <ListItem selected={value===4}  component={Link} to='/contact' button >Contact Us</ListItem>
          <ListItem sx={{backgroundColor: 'secondary.main', color: 'white',
          ...theme.typography.tab
          }}
            component={Link} to='/estimate' button >
            Free Estimate
          </ListItem>
          <ListItem divider></ListItem>
        </List>
      </SwipeableDrawer>
    </Fragment>
  )

  return (
    <React.Fragment>
      <CssBaseline/>
      <ElevationScroll {...props} >
        <Box sx={{flexGrow: 1}} >
          <AppBar sx={sx}>
            <Toolbar>
              <Button component = {Link} to='/' sx={sx.btStyle} disableRipple>
                <img src={logo} alt=""  />
              </Button>
              {
              matches? 
              drawerMenu
              : 
              tabs
              }
            </Toolbar>
          </AppBar>
        </Box>
      </ElevationScroll>
      <Toolbar/>
    </React.Fragment>
  )
}

export default Header