import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Newsletter , NewsletterStatus} from '../Newsletter/Newsletter'

const ContactEmailBox = () => {
  return (
    <div>Hello</div>
  )
  //   const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMp_ID} `
  // return (
  //   <><MailchimpSubscribe
  //     url = {postUrl}
  //     render = {(NewsletterStatus : NewsletterStatus) =>(
  //       <Newsletter
  //       status={NewsletterStatus.status}
  //       message={NewsletterStatus.message}
  //       onValidated={FormData => subscribe(FormData)}></Newsletter>
  //     )}
  //   /></>
  // )
}

export default ContactEmailBox