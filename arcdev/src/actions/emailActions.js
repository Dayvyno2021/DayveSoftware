import axios from 'axios';

import { SEND_EMAIL_FAIL, SEND_EMAIL_REQUEST, SEND_EMAIL_SUCCESS } from "../constants/emailConstants"

export const sendMessageAction = (infos) => async(dispatch)=>{
  try {
    dispatch({type: SEND_EMAIL_REQUEST})

    const config = {
      headers:{
        "Content-Type": "application/json",
      }
    }

    const {data} = await axios.post('/api/email/send', infos, config);

    dispatch({
      type: SEND_EMAIL_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    dispatch({
      type: SEND_EMAIL_FAIL,
      payload: error.response && error.response.data.message?
        error.response.data.message: error.response
    })
  }
}