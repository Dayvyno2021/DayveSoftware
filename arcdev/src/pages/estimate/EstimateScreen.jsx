import React, { Fragment, useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';
import Lottie from 'react-lottie';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
// import DialogContent from '@mui/material/DialogContent';
// import { theme } from "../../components/ui/Theme";
import airplane from '../../assets/send.svg';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import check from '../../assets/check.svg';
// import send from '../../assets/send.svg'
import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import backArrowDisabled from '../../assets/backArrowDisabled.svg'
import forwardArrowDisabled from '../../assets/forwardArrowDisabled.svg';
import ClearIcon from '@mui/icons-material/Clear';
// import camera from '../../assets/camera.svg'
// import upload from '../../assets/upload.svg'
// import person from '../../assets/person.svg'
// import persons from '../../assets/persons.svg'
// import people from '../../assets/people.svg'
// import info from '../../assets/info.svg'
// import bell from '../../assets/bell.svg'
// import users from '../../assets/users.svg'
// import iphone from '../../assets/iphone.svg'
// import gps from '../../assets/gps.svg'
// import customized from '../../assets/customized.svg'
// import data from '../../assets/data.svg'
// import android from '../../assets/android.svg'
// import globe from '../../assets/globe.svg'
// import biometrics from '../../assets/biometrics.svg';
import { est } from './EstimateUi';
import { defaultQuestions, softwareQuestions, websiteQuestions } from './defaultQuestions';

import estimateAnimation from '../../animations/estimateAnimation/data.json';
import { contact } from '../contactus/contactusUi';
import { sendMessageAction } from '../../actions/emailActions';
import SnackBars from '../../components/SnackBars';
import { SEND_EMAIL_RESET } from '../../constants/emailConstants';

const EstimateScreen = () => {
  const dispatch = useDispatch();
  const sendMessageReducer = useSelector(state => state.sendMessageReducer);
  const {loading, status, error } = sendMessageReducer;

  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  
  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('');

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('');
  
  const [message, setMessage] = useState('');

  const [total, setTotal] = useState(0);

  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([])
  const [customFeatures, setCustomFeatures] = useState("");
  const [users, setUsers] = useState('');
  const [category, setCategory] = useState("");
  const[showEst, setShowEst] = useState(false)
  
  const theme = useTheme();
  // const match = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions.filter(question => question.active);
    const activeIndex = activeQuestion[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...activeQuestion[0], active: false };
    newQuestions[nextIndex].active = true;
    setQuestions(newQuestions)
  }
  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions.filter(question => question.active);
    const activeIndex = activeQuestion[0].id - 1;
    const nextIndex = activeIndex-1;

    newQuestions[activeIndex] = { ...activeQuestion[0], active: false };
    newQuestions[nextIndex].active = true;
    setQuestions(newQuestions)
  }

  const disableNavigationLast = () => {
    const activeQuestion = questions.filter(question => question.active);
    if (activeQuestion[0].id === questions.length) return true;
    return false;
  }
  const disableNavigationFirst = () => {
    const activeQuestion = questions.filter(question => question.active);
    if (activeQuestion[0].id === 1) return true;
    return false;
  }

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions.filter((question) => question.active);
    const newSelected = activeQuestion[0].options[id - 1]
    
    const previouslySelected = activeQuestion[0].options.filter((option) => {
      return option.selected
    })
    

    switch (activeQuestion[0].subtitle) {
      case 'Select one.':
        if (previouslySelected[0]) {
          previouslySelected[0].selected = !previouslySelected[0].selected
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case 'Custom Software Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([])
        setFeatures([])
        setCustomFeatures('')
        setUsers('')
        setCategory('')
        break;
      case 'iOS/Android App Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([])
        setFeatures([])
        setCustomFeatures('')
        setUsers('')
        setCategory('')
        break;
      case 'Website Development':
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        setPlatforms([])
        setFeatures([])
        setCustomFeatures('')
        setUsers('')
        setCategory('')
        break;
      default:
        setQuestions(newQuestions);
        break;
    }
  }

  //Customer send estimate
  const submit = (event) => {
    event.preventDefault();
    dispatch(sendMessageAction({
      name,
      phone,
      email,
      message,
      total,
      service,
      platforms,
      features,
      customFeatures,
      users,
      category
    }));
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
        // valid= /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

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

  const buttonContent = (
    <>
      Place Req.
      <img src={airplane} alt="" style={{marginLeft:'0.5rem'}} />
    </>
  ) 
    
  const disable = () => {
    if (category) {
      return (
        Boolean(!name) || 
        Boolean(!message) || 
        Boolean(emailHelper) || 
        Boolean(phoneHelper)
      )
    } else {
      return (
        Boolean(!name) || 
        Boolean(!message) || 
        Boolean(emailHelper) || 
        Boolean(phoneHelper) ||
        Boolean(!total) ||
        Boolean(!users)
      )
    }
  }

  const disableEst = () => {
    if (questions.length === 2) {
      const valid = questions.filter(question => question.title === "Which type of website are you wanting?")[0]
        .options.filter(option => option.selected)[0];
      
        if (valid) return false;
      } else if (questions.length > 2) {
      const valid1 = questions.filter(question => question.title === "How many users do you expect?")[0]
        .options.filter(option => option.selected)[0];
        
        const valid2 = questions.map(question => question.options.filter(option => option.selected))
        .filter(selections => selections.length > 0)
      
        const valid3 = questions.filter(question => question.title === "Which platforms do you need supported?")[0]
          .options.filter(option => option.selected)[0];
      if (valid1 && valid3 && (valid2.length >= 4)) {
        return false;
      }
    }
    return true;
  }

  const totalEstimate = () => {
    let cost = 0;
    const selections = questions
      .map((question) => question.options
        .filter((option) => option.selected))
      .filter(selected => selected.length > 0);
    
    selections.map((options)=>options.map((option)=>cost += option.cost))
    setTotal(cost)
    // console.log(`Cost==>${cost}\nTOTAL==>${total}`);

    if (questions.length > 2) {
      const usersCost = questions.filter((question) => {
        return  (question.title === "How many users do you expect?") 
      })[0].options.filter(option=>option.selected)[0]
      cost -= usersCost.cost;
      cost *= usersCost.cost;
      setTotal(cost);
      setUsers(usersCost.title)
    }  
  }

  const getPlatforms = () => {
    if (questions.length > 2) {
      const selections = questions.filter(question => question.title === "Which platforms do you need supported?")[0]
        .options.filter(option => option.selected).map(opt => opt.title);
      setPlatforms(selections);
    }
  }
  const getFeatures = () => {
    const newFeatures = [];
    if (questions.length > 2) {
      questions.filter(question => question.title === "Which features do you expect to use?")
        .map(option => option.options.filter(opt => opt.selected))
        .map(option=>option.map(newFeature=>newFeatures.push(newFeature.title)))

      setFeatures(newFeatures);
    }
  }

  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const customF = questions.filter(question => question.title === "What type of custom features do you expect to need?")[0]
        .options.filter(option=>option.selected)[0].title
      setCustomFeatures(customF)
    }
  }

  const customSoftwareSelection = (
    <Grid item container direction='column'>
      <Grid item container direction='row'>
        <Grid item md={1}>
          <img src={check} alt="" width='100%' />
        </Grid>
        <Grid item md={11}>
          <Typography variant='body1' sx={{ fontSize: '1rem', ml: '1rem', mb: '0.8rem' }}>
          <strong>You want{' '} </strong>{service}
          { ` for ${
                  //if only web application is selected...
                  platforms.indexOf("Web Application") > -1 &&
                  platforms.length === 1
                    ? //then finish sentence here
                      "a Web Application."
                    : //otherwise, if web application and another platform is selected...
                    platforms.indexOf("Web Application") > -1 &&
                      platforms.length === 2
                    ? //then finish the sentence here
                      `a Web Application and an ${platforms[1]}.`
                    : //otherwise, if only one platform is selected which isn't web application...
                    platforms.length === 1
                    ? //then finish the sentence here
                      `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                    ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                    : //otherwise if all three are selected...
                    platforms.length === 3
                    ? //then finish the sentence here
                      "a Web Application, an iOS Application, and an Android Application."
                    : null
                  }`}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={1}>
          <img src={check} alt="" width='100%' />
        </Grid>
        <Grid item md={11}>
          <Typography variant='body1' sx={{ fontSize: '1rem', ml: '1rem', mb: '0.8rem' }}>
            <strong>With{' '} </strong>
            {/* if we have features... */}
            {features.length > 0
              ? //...and there's only 1...
                features.length === 1
                  ? //then end the sentence here
                  `${features[0]}.`
                  : //otherwise, if there are two features...
                features.length === 2
                  ? //...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                  : //otherwise, if there are three or more features...
                  features
                //filter out the very last feature...
                .filter(
                  (feature, index) =>
                  index !== features.length - 1
                )
                //and for those features return their name...
                .map((feature, index) => (
                  <span key={index}>{`${feature}, `}</span>
                ))
              : null}
            {features.length > 2
                ? //...and then finally add the last feature with 'and' in front of it
                ` and ${features[features.length - 1]}.`
                : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={1}>
          <img src={check} alt="" width='100%' />
        </Grid>
        <Grid item md={11}>
          <Typography variant='body1' sx={{ fontSize: '1rem', ml: '1rem', mb: '0.8rem' }}>
            <strong>Custom Feature:{' '} </strong>{customFeatures}
          {
            `, and the project will be used by about ${users} users`
            }
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions.filter(question => question.title === "Which type of website are you wanting?")[0]
        .options.filter(option => option.selected)[0].title;
      setCategory(newCategory);
    }
  }

  const websiteSelection = (
    <Grid item container direction='column'>
      <Grid item container>
        <Grid item md={1}>
          <img src={check} alt="" width='100%' />
        </Grid>
        <Grid item md={11}>
          <Typography variant='body1' sx={{ fontSize: '1rem', ml: '1rem', mb: '0.8rem' }}>
            You want
            {
              category === "Basic" ? " a Basic Website." : ` an ${category} Website.`
            }
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )

    useEffect(() => {
      if (status){
        setShowEst(true);
        setName(''); 
        setPhone('');
        setMessage('');
        setEmail('');
        setDialogOpen(false);

        setService([]);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures('');
        setUsers('');
        setCategory('');
        dispatch({type:SEND_EMAIL_RESET})
      }
    }, [dispatch, status])

  return (
    <Box sx={est}>
      {error && <SnackBars message={error} severity="error" />}
      {showEst && <SnackBars message={'Estimate Sent'} severity="success"/>}
      <Grid container sx={est.wrapper}>
        <Grid item md={5} sx={est.estimate}>
          <Typography variant='h2'>Estimate</Typography>
          <Grid item sx={est.lottie1}>
            <Lottie options={defaultOptions} height={200}/>
          </Grid>
        </Grid>

        <Grid item container md={7} direction='column' sx={est.itemsWrapper}>
          {
            questions && questions.filter((questions) => questions.active).map((question, i) => (
              <Fragment key={`Questions${i}`}>
                <Grid item >
                  <Typography variant='h2' align='center'>
                    {question.title}
                  </Typography>
                  <Typography variant='subtitle1' align='center' sx={est.subtitle}>
                    {question.subtitle}
                  </Typography>
                </Grid>
                <Grid item container direction='row' justifyContent='center'>
                  {
                    question.options.map((option, j) => (
                      <Grid container item direction='column' xs={10} sm={3.7} className='items' component={Button}
                      key={`Options${j}`}
                        onClick={() => { handleSelect(option.id) }} 
                        sx={{
                          backgroundColor: option.selected ? theme.palette.common.orange : null,
                          '&:hover': {
                            backgroundColor: option.selected ? theme.palette.common.orange : null,
                          }
                        }}
                      >
                        <Typography variant='h6' align='center'>{option.title} </Typography>
                        <Typography variant='subtitle1' align='center'>{option.subtitle}</Typography>
                        <Grid item>
                          <img src={option.icon} alt="" />
                        </Grid>
                      </Grid>
                      
                    ))
                  }
                </Grid>
                
              </Fragment>
            ))
          }

          <Grid item container direction='row' sx={est.arrows}>
            <IconButton onClick={previousQuestion} disabled={disableNavigationFirst()}>
              <img src={disableNavigationFirst()? backArrowDisabled:backArrow} alt="" />
            </IconButton>
            <IconButton onClick={nextQuestion} disabled={disableNavigationLast()} >
              <img src={disableNavigationLast()? forwardArrowDisabled:forwardArrow} alt="" />
            </IconButton>
          </Grid>
          <Grid item sx={est.estbtn} 
            onClick={() => {
              setDialogOpen(true);
              totalEstimate();
              getPlatforms();
              getFeatures();
              getCustomFeatures();
              getCategory();
            }}>
            <Button variant='contained' disabled={disableEst()}>
              Get Estimate
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Grid container justifyContent='center' sx={{ p: '1rem', pt: '.1rem', display:'relative' }} >
          <Button sx={est.cancel} onClick={()=>setDialogOpen(false)}> 
            <ClearIcon sx={{color:theme.palette.error.main}} />
          </Button>
          <Grid item xs={12}>
            <Typography variant='h2' sx={{ fontSize: '1.8rem', textAlign: 'center', my:'1rem' }}>
              Estimate
            </Typography>
          </Grid>
            <Grid item container direction='column' xs={12} md={6} sx={est.modal} >
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
                    placeholder='Please, tell us more about your project'
                  />
                </div>
              </Box>
              <Typography variant='body1'sx={{my:'1rem', lineHeight:1}}>
                We can create this digital solution for an estimated cost of
                <span style={{ fontFamily: 'Raleway', fontWeight:'700', fontSize:'1.2rem', color: theme.palette.common.orange }}>
                  {' '} &#8358;{(total*610).toLocaleString()}
                </span>
              </Typography>
              <Typography variant='body1' sx={{fontSize:'0.5rem', color:'common.blue'}}>
                Please fill out your details and place your request, we'll get back
                to you on the final price
              </Typography>
            </Grid>
          <Grid item container direction='column' md={6} justifyContent='space-between'>
            
            {
              questions.length>2? customSoftwareSelection : websiteSelection
            }

              <Grid item alignSelf='center' sx={{mt:'0.5rem'}}>
                <Button variant='contained' sx={contact.modalbtn2} onClick={submit}
                  disabled = {disable()}
                > 
                  {
                    loading? (<CircularProgress size={30} />) : (buttonContent)
                  }
                </Button>
                
              </Grid>
            </Grid>
        </Grid>
      </Dialog>
    </Box>
  )
}

export default EstimateScreen