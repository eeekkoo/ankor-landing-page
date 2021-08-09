import React, { useState } from 'react';
import { Button, Input, useToasts } from '@geist-ui/react';
import { EnvelopeIcon } from '@modulz/radix-icons';
import { supabase } from '../utils/supabase';

function valid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const JoinWaitlist = () => {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [toasts, setToast] = useToasts();

  return (
    <>
      <Input
        status={`${emailError ? 'error' : 'default'}`}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        icon={<EnvelopeIcon color={'#666'} />}
        size="large"
        placeholder="Email"
      />
      <Button
        onClick={async () => {
          if (!valid(email)) {
            return setToast({ text: 'Please use a valid email address', type: 'error' });
          }
          if (email) {
            setEmailError(false);
            const { data, error } = await supabase.from('users').insert([{ email, from: 'Ankor' }], { upsert: true });
            if (error) {
              return setToast({ text: error.message, type: 'error' });
            }
            if (data) {
              setEmail('');
              return setToast({ text: 'Succesfully joined waitlist! 🎉', type: 'success' });
            }
          } else {
            setEmailError(true);
            return setToast({ text: 'Email is required!', type: 'error' });
          }
        }}
        style={{ marginLeft: '10px' }}
        size="large"
        type="success"
      >
        Join waitlist
      </Button>
    </>
  );
};
