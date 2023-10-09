import React from 'react';
import styled from "styled-components";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom'; // Import Link for routing
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';
import { FaGraduationCap } from "react-icons/fa";

const Navbar = ({ name, image, gradYear, numCourses, major }) => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();

  return (
    <NavbarWrapper className="bg-white flex">
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to="/" className='navbar-brand text-uppercase ls-1 fw-8'>
            Smart <span>Moodle</span>
          </Link>

          <div className='navbar-user-profile'>
            <Link to="/user-profile"> {/* Add a Link to the UserProfile page */}
              <img src={process.env.PUBLIC_URL + '/assets/images/aws_1.jpg'} alt={name} />
            </Link>
          </div>

          <div className='navbar-btns flex'>
            <Link to="/cart" className='cart-btn'>
              <FaGraduationCap />
              <span className='item-count-badge'>{total_items}</span>
            </Link>
            <button type="button" className='sidebar-open-btn' onClick={() => openSidebar()}>
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
height: 80px;
box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

.navbar-brand{
  font-size: 23px;
  span{
    color: var(--clr-orange);
  }
}
.cart-btn{
  margin-right: 18px;
  font-size: 23px;
  position: relative;
  .item-count-badge{
    background-color: var(--clr-orange);
    position: absolute;
    right: -10px;
    top: -10px;
    font-size: 12px;
    font-weight: 700;
    display: block;
    width: 23px;
    height: 23px;
    color: var(--clr-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.sidebar-open-btn{
  transition: all 300ms ease-in-out;
  &:hover{
    opacity: 0.7;
  }
  
  .navbar-user-profile img {
    width: 30px; /* Adjust the size of the image as needed */
    height: 30px; /* Adjust the size of the image as needed */
    border-radius: 50%; /* Make it round */
    cursor: pointer; /* Add cursor pointer on hover */
  }
`;

export default Navbar;