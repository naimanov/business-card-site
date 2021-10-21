import React from 'react';

interface ContactsInfoProps {
  personContacts: any[];
}

function ContactsInfo({ personContacts }: ContactsInfoProps) {
  return (
    <article className='page-container'>
      {personContacts.map((item) => {
        return (
          <div className='contacts-container' key={item.title}>
            <div className='contact-title'>{item.title}:</div>
            <div className='contact-value'>{item.value}</div>
          </div>
        );
      })}
    </article>
  );
}

export default ContactsInfo;
