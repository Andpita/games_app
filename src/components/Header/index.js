import React from 'react';
import { Nav } from './styled';
import {
  FaHome,
  FaDog,
  FaPhotoVideo,
  FaTrophy,
  FaSpaceShuttle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function handleClickSpace(e) {
  window.location.href = 'https://dog.andpita.net';
}

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
      <Link to="/" onClick={handleClickSpace}>
        <FaSpaceShuttle size={30} />
      </Link>
      <Link to="/score">
        <FaTrophy size={28} color="gold" />
      </Link>
    </Nav>
  );
}
