import React from 'react';
import { Nav } from './styled';
import {
  FaHome,
  FaDog,
  FaPhotoVideo,
  FaTrophy,
  FaSpaceShuttle,
  FaShieldAlt,
  FaRocket,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={30} color="black" />
      </Link>
      <Link to="/dog">
        <FaDog size={30} />
      </Link>
      <Link to="/memoria">
        <FaPhotoVideo size={30} />
      </Link>
      <Link to="/space">
        <FaRocket size={28} />
      </Link>
      <Link to="/">
        <FaShieldAlt size={28} color="lightgreen" />
      </Link>
      <Link to="/score">
        <FaTrophy size={28} color="gold" />
      </Link>
    </Nav>
  );
}
