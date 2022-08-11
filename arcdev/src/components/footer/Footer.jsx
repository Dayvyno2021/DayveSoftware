import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { sxFooter } from './FooterUi';



const Footer = ({value, setValue}) => {

  return (
    <Box sx={sxFooter}>
        <Grid container  sx={sxFooter.coverGrid}>
          <Grid container item md={2} sm={2} xs={3} alignItems='flex-end' className='firstGrid'>
            &copy; Dayve, 2022
          </Grid>

          <Grid container direction='row' item md={8} sm={10} sx={sxFooter.mainGrid} className='mainGrid'>
            <Grid container item direction='column' md={2} sm={1} xs={12}>
              <Grid item component={Link} to='/' 
                onClick = {()=>setValue(0)}
              >
                Home
              </Grid>
            </Grid>

            <Grid container item direction='column' md={3} sm={4} xs={6} rowSpacing={{md:2, sm:2}} >
              <Grid item component={Link} to='/services' 
                onClick = {()=>setValue(1)}
              >
                Services
              </Grid>
              <Grid item component={Link} to='/customsoftware' >Custom Software Development</Grid>
              <Grid item component={Link} to='/mobileapps'>iOS/Android App Development</Grid>
              <Grid item component={Link} to='/websites'>Website Development</Grid>
            </Grid>

            <Grid container item direction='column' md={3} sm={3} xs={6} rowSpacing={{md:2, sm:2}} >
              <Grid item component={Link} to='/revolution' value={2} selected={value===2}>The Revolution</Grid>
              <Grid item component={Link} to='/revolution'>Vision</Grid>
              <Grid item component={Link} to='/revolution'>Technology</Grid>
              <Grid item component={Link} to='/revolution'>Process</Grid>
            </Grid>

            <Grid container item direction='column' md={2} sm={2} xs={6} rowSpacing={{md:2, sm:2}}>
              <Grid item component={Link} to='/about'>About Us</Grid>
              <Grid item component={Link} to='/about'>History</Grid>
              <Grid item component={Link} to='/about'>Team</Grid>
            </Grid>

            <Grid container item direction='column' md={2} sm={2} xs={6}>
              <Grid item component={Link} to='/contact'>Contact Us</Grid>
              <Grid item component='a' sx={{display:{md:'none', sm: 'inline-block'}}}
                href='https://github.com/Dayvyno2021' target='_blank'
              >
                <GitHubIcon sx={{ color: 'common.blueWhite'}} fontSize='small' /> 
              </Grid>
              <Grid item component='a' sx={{display:{md:'none', sm: 'inline-block'}}}
                href='https://www.linkedin.com/in/david-okafor-58b947a3/' target='_blank'
              >
                <LinkedInIcon sx={{ color: 'common.blueWhite'}} fontSize="small"/> 
              </Grid>
            </Grid>
          </Grid>

          <Grid container item md={2} xs={9} sx={sxFooter.icons}
            
          >
            <Grid item md={6} xs={6} container sx={sxFooter.git} component='a'
              href='https://github.com/Dayvyno2021' target='_blank'
            >
              <GitHubIcon sx={{ color: 'common.blueWhite'}} fontSize="large"/>
            </Grid>
            <Grid item md={6} xs={6} container sx={sxFooter.linkedin} component='a'
              href='https://www.linkedin.com/in/david-okafor-58b947a3/' target='_blank'
            >
              <LinkedInIcon sx={{ color: 'common.blueWhite'}} fontSize="large"/>
            </Grid>
          </Grid>
        </Grid>
    </Box>

  )
}

export default Footer