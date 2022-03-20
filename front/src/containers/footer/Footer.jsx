import React from 'react';
import styled from 'styled-components';
import people from '../../assets/people.png';
import './footer.css';

const Payment = styled.img`
    width: 60%;
    height: 20%;
`;

const Footer = () => (
  <div className="gpt3__footer section__padding">
     <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access in last 24 hours</p>
      </div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h1>AllGra</h1>
        <p>Integrated Business Solution, Kalundu, Lusaka Zambia<br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
    </div>
    <div className="gpt3__footer-links_div2">
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </div>
    <div className="gpt3__footer-copyright">
      <p>Maintained & Created By <a href='https://sibajene.netlify.app/'>Sibajene</a> @2022 AllGra. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
