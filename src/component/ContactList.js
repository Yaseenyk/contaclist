import React, { useEffect, useState } from 'react'
import styles from './Contactlist.module.css';
const ContactList = () => {
    const[contactList,setContactList]=useState([]);
    useEffect(()=>{
        async function fetchData() {
            try{
                const response = await fetch(' https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setContactList(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData();  
    },[]);

    console.log(contactList)
  return (
    <div className={styles['Contact-container']}>
        <div className={styles['grid-container']}>
      {
        contactList.map((contact)=>{
            return(
                <div className={styles['list-container']}>
                <h2>Contact List</h2>
                <span>Name : {contact.name}</span>
                <span>Usename : {contact.username}</span>
                <span>Phone : {contact.phone}</span>
                <span>website : {contact.website}</span>
            </div>
                )
            
        })

      }
      </div>
    </div>
  )
}

export default ContactList;
