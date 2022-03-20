/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './header.css';

const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	height: 170px;
`;

const ButtonWrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	left: 0;
	top: 0;
`;
const HeroButton = styled(motion.button)`
	position: absolute;
	width: 250px;
	margin-right: -4rem;
	padding: 15px 20px;
	bottom: calc(100vh - 100px);
	right: 50%;
	transform: translate(50%);
	font-weight: 700;
	font-size: 0.688rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	border-radius: 25px;
	border: none;
	background-color: orange;
	color: #5238b1;
	cursor: pointer;
	transition: all 0.4s ease-in;

	&.corner {
		position: fixed;
		bottom: 3rem;
		right: 6rem;
		width: 64px;
		height: 64px;
		padding: 10px;
		background-color: red;
		border-radius: 50%;
	}

	&:hover {
		box-shadow: 0 0 9px 9px #5238b1;
		transition: box-shadow 0.3s ease-in;
	}
`;

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
		if (!showModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		setShowModal(!showModal);
	};

  const { ref, inView } = useInView({
		rootMargin: '-100px',
	});

	useEffect(() => {
		console.log(inView);
	}, [inView]);

  return(
      <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h5 className="gradient__text">Graduation! </h5>
      <h2 className="gradient__text">
        Our Services
      </h2>
      <p>Experience the full graduation rush and get ready from head to toe, with our stress-free, graduation hire services.</p>
      <ul className="gradient__text">
        <li>Gowning</li>
        <li>Graduation Photography</li>
      </ul>
		       
      		       <ButtonContainer ref={ref}>
						<ButtonWrapper>
							<Link to="/email">
							<HeroButton onClick={toggleModal} className={inView ? '' : 'corner'}>
							
								{inView ? (
									<> Chat with us</>
								) : (
									<FiMail color="orange" size="2rem" />
								)}
							</HeroButton>
							</Link>
						</ButtonWrapper>
					</ButtonContainer>
    </div>

    <div className="gpt3__header-image">
      <img src="https://res.cloudinary.com/ecotuulecloud/image/upload/v1646903840/ecotuule/Kinggjj__-removebg_fi8q79.png" />
    </div>
  </div>
  )
}

export default Header;
