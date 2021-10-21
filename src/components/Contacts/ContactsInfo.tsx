import React from 'react';

interface ContactsInfoProps {
  personContacts: any[];
}

function ContactsInfo({ personContacts }: ContactsInfoProps) {
  return (
    <div className='page-container'>
      {personContacts.map((item) => {
        return (
          <div className='contacts-container'>
            <div className='contact-title'>{item.title}:</div>
            <div className='contact-value'>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactsInfo;
