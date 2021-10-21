import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ContactsInfo from './ContactsInfo';

function Contacts() {
  const personContacts = useTypedSelector(
    (state) => state.personReducer.person_contacts
  );
  return <ContactsInfo personContacts={personContacts} />;
}

export default Contacts;
