import React, { useState } from 'react'
import { Col , Row , Alert } from 'react-bootstrap'

export type NewsletterStatus = {
  onValidated : Function,
  status : string | undefined, 
  message : string | undefined,
}

export const Newsletter = (NewsletterStatus : NewsletterStatus) => {
  const [email, setEmail] = useState('');
  const handleSubmit = async () => {
    // e.preventDefault();
    email && 
    email.indexOf("@") > -1 &&
    NewsletterStatus.onValidated({
      EMAIL : email,
    })
  }
  return (
    <Col lg={12}>
      <div className='newsletter-bx'>
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subcribe to our Newsletter</h3>
            {NewsletterStatus.status === 'sending' && <Alert >Sending ...</Alert>}
            {NewsletterStatus.status === 'error' && <Alert variant='danger'>{NewsletterStatus.message}</Alert>}
            {NewsletterStatus.status === 'success' && <Alert variant='success'>{NewsletterStatus.message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className='new-email-bx'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                <button type='submit'>Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
