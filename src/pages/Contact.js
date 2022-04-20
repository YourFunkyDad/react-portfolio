import React from 'react';
import contactCard from './images/contactCard.jpeg';

function Contact() {
  return <div class='contact'>
      <h1>Jacob Allred</h1>
    <img src={contactCard} alt='Contact' class='contactPic'/>
    <h2>AllredJ@protonmail.com</h2>
    <p>Thank you for visiting my react portfolio. Feel free to reach out at the email above, or explore some of my socials below.</p>
    <a href="https://www.facebook.com/JakeAllredSizzleDizzle/"><i class="fa fa-facebook"></i>
    <a href="https://www.instagram.com/slim.jakey/"><i class="fa fa-instagram"></i></a>
    <a href="https://open.spotify.com/playlist/59QBpzADuZzETNVIGRi0Qp?si=f6dbe24edada46d9"><i class="fa fa-spotify"></i></a>
      <a href="https://www.github.com/YourFunkyDad"><i class="fa fa-github"></i></a><br/></a><br/>
  </div>;
}
export default Contact;
