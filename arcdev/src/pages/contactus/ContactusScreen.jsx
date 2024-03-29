import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CallToAction from '../../components/callToAction/CallToAction';
import TextField from '@mui/material/TextField';
import {contact} from './contactusUi';
// import SendIcon from '@mui/icons-material/Send';
import airplane from '../../assets/send.svg';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {useDispatch, useSelector} from 'react-redux';
import { sendMessageAction } from '../../actions/emailActions';
import CircularProgress from '@mui/material/CircularProgress';
import { SEND_EMAIL_RESET } from '../../constants/emailConstants';
import SnackBars from '../../components/SnackBars';


const ContactusScreen = () => {
  const dispatch = useDispatch();
  const sendMessageReducer = useSelector(state=>state.sendMessageReducer)
  const {loading, status, error} = sendMessageReducer;

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  
  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('');

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('');
  
  const [message, setMessage] = useState('')

  const [open, setOpen] = useState(false);

  const[showAlert, setShowAlert] = useState(false)
  
  const submit = (event) => {
    event.preventDefault();
    dispatch(sendMessageAction({name, phone, email, message}));
  }

  const validate = (event) => {
    let valid;
    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);

        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

        if (valid){
          setEmailHelper('')
        } else{
          setEmailHelper('invalid email')
        }
        break;
      case 'phone':
        setPhone(event.target.value);
        valid= /^\+([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3,7})$/.test(event.target.value);

        if (valid){
          setPhoneHelper('')
        } else{
          setPhoneHelper('invalid phone number')
        }
        break;
    
      default:
        break;
    }
  }

  const disable = () =>{
    return (
      Boolean(!name) || 
      Boolean(!message) || 
      Boolean(emailHelper) || 
      Boolean(phoneHelper)
      )
  }

  const buttonContent = (
      <>
        {match? "Send Msg":"Send Message"}
        <img src={airplane} alt="" />
      </>
    ) 
    
    useEffect(() => {
      if (status){
        setShowAlert(true);
        setName(''); 
        setPhone('');
        setMessage('');
        setEmail('');
        setOpen(false);
        dispatch({type:SEND_EMAIL_RESET})
      }
    }, [dispatch, status])
    

  return (
    <Box sx={contact}>
      {error && <SnackBars message={error} severity="error"/>}
      {showAlert && <SnackBars message={'Message Sent'} severity="success"/>}
      <Grid container direction='row' sx={contact.formContainer}>

        <Grid item container direction='column' xs={12} md={4} sx={contact.form1}>
          <Grid item container direction='column' sx={contact.top}>
            <Typography variant='h2' sx={{lineHeight:'1', fontSize:'1.8rem' }}>
              Contact Us
            </Typography>
            <Typography variant='body1' paragraph >We're waiting</Typography>
            <Typography variant='body1' >
              <CallIcon fontSize='small'/> {' '} 
              <a href="tel:07069230276">(+234) 706-923-0276</a>
            </Typography>
            <Typography variant='body1' sx={{transform: 'translateY(-7px)'}}>
              <EmailIcon fontSize='small'/> {' '} 
              <a href="mailto:dayvyno@gmail.com">dayvyno@gmail.com</a> 
            </Typography>
          </Grid>
          <Box component='form' sx={contact.form2}>
            <div>
              <TextField required variant='standard' sx={{width:'100%'}} label='Name:' 
                type='text' id='name' placeholder='John Doe'  value= {name}
                onChange={e=>setName(e.target.value)}

              />
              <TextField variant='standard' sx={{width:'100%'}} label='Mobile No:' 
                type='text' id ='phone' placeholder='+234 7011 1221 11'  value= {phone}
                onChange={validate} error={Boolean(phoneHelper)}
                helperText={phoneHelper}
              />
              <TextField variant='standard'
                sx={{width:'100%', mb:'3rem'}} label='Email:' type='email' id='email'
                value={email} 
                error={Boolean(emailHelper)}
                onChange={validate} helperText={emailHelper}
              />
              <TextField
                id="multiline" color='primary' focused
                multiline rows={4} sx={{width:'100%', fontSize: '0.6rem'}}
                value={message} onChange={(e)=>setMessage(e.target.value)}
                placeholder='Hello! I have an idea i would love to share with you'
              />
              <Button variant='contained' sx={contact.send} 
                onClick={(e)=>{setOpen(true)}}
                disabled = {disable()}
              > 
                Send Message <img src={airplane} alt="" />
              </Button>
              
            </div>


          </Box>
        </Grid>

        <Dialog onClose={()=>setOpen(false)} open={open} sx={contact.modalContainer} scroll='paper'>
          <DialogContent sx={{height: '100vh'}}>
          <DialogTitle align='center' variant='h2' sx={{lineHeight:'1', fontSize:'1.8rem' }}>
            Confirm Message
          </DialogTitle>
          <Grid item container direction='column' xs={12} md={12} sx={contact.modal}>
            <Box component='form' sx={contact.modal2}>
              <div>
                <TextField required variant='standard' sx={{width:'100%'}} label='Name:' 
                  type='text' id='name' placeholder='John Doe'  value= {name}
                  onChange={e=>setName(e.target.value)}

                />
                <TextField variant='standard' sx={{width:'100%'}} label='Mobile No:' 
                  type='text' id ='phone' placeholder='+234 7011 1221 11'  value= {phone}
                  onChange={validate} error={Boolean(phoneHelper)}
                  helperText={phoneHelper}
                />
                <TextField variant='standard'
                  sx={{width:'100%', mb:'3rem'}} label='Email:' type='email' id='email'
                  value={email} 
                  error={Boolean(emailHelper)}
                  onChange={validate} helperText={emailHelper}
                />
                <TextField
                  id="multiline" color='primary' focused
                  multiline rows={3} sx={{width:'100%', fontSize: '0.6rem'}}
                  value={message} onChange={(e)=>setMessage(e.target.value)}
                  placeholder='Hello! I have an idea i would love to share with you'
                />
                <Grid item container justifyContent='space-between' sx={{mt:'2rem'}}>
                  <Button variant='contained' sx={contact.modalbtn1}
                    onClick={()=>setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant='contained' sx={contact.modalbtn2} onClick={submit}
                    disabled = {disable()}
                  > 
                    {
                      loading? (<CircularProgress size={30} />) : (buttonContent)
                    }
                  </Button>
                  
                </Grid>
              </div>
            </Box>
          </Grid>
          </DialogContent>
        </Dialog>
        <Grid item xs={12} md={8}>
          <CallToAction/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContactusScreen