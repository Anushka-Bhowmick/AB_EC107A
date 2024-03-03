import React, { useState } from "react";
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../assets/logo.png";

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleClickOutside = () => {
        setIsNavOpen(false);
    };

    return (
        <Container state={isNavOpen ? 1 : 0}>
            <div className="brand">
                <img src={Logo} alt="logo" />
            </div>
            <div className="toggle">
                {isNavOpen ? (
                    <MdClose onClick={() => setIsNavOpen(false)} />
                ) : (
                    <GiHamburgerMenu
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsNavOpen(true);
                        }}
                    />
                )}
            </div>
            <div className={`links ${isNavOpen ? "show" : ""}`}>
                <ul>
                    <li>
                        <a href="#services">Home</a>
                    </li>
                    <li>
                        <a href="#destination">Booking</a>
                    </li>
                    <li>
                        <a href="#offer">Offers</a>
                    </li>
                    <li>
                        <a href="#tour">Exclusive spots</a>
                    </li>
                </ul>
            </div>
            <div className="account-info">
                <div className="account">
                    <BsPerson />
                    <span>My Account</span>
                </div>
                <div className="search">
                    <IoSearchOutline />
                </div>
            </div>
        </Container>
    );
}

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    .brand {
        img {
            width: 100px;
            height: auto;
            cursor: pointer;
        }
    }
    .toggle {
        display: none;
        @media (max-width: 768px) {
            display: block;
        }
    }
    .links {
        ul {
            display: flex;
            gap: 3rem;
            list-style-type: none;
            li {
                a {
                    text-decoration: none;
                    color: black;
                    font-weight: 500;
                    font-size: 16px;
                    cursor: pointer;
                    position: relative;
                    transition: color 0.3s ease;
                    &:hover {
                        color: #ff6b6b;
                    }
                    &::after {
                        content: "";
                        position: absolute;
                        bottom: -2px;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background-color: #ff6b6b; 
                        transform: scaleX(0);
                        transition: transform 0.3s ease;
                    }
                    &:hover::after {
                        transform: scaleX(1);
                    }
                }
            }
        }
    }
    .account-info {
        display: flex;
        gap: 2rem;
        .account {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            span {
                font-size: 16px;
                font-weight: 500;
            }
        }
        .search {
            cursor: pointer;
        }
    }
`;
