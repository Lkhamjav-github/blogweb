import React from 'react'
import { Twitter } from './Twitter'
import { Facebook } from './Facebook'
import { Ig } from './Ig'
import { Linked } from './Linked'
import { Logo } from './Logo'
export const Footer = () => {
    return (
        <div className='bg-[#E8E8EA] flex justify-center items-center'>
            <div className='w-3/4 lg:w-[1216px] flex justify-center  flex-col'>
                <div className='flex'>
                    <div>
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <h4><b>Email :</b> info@jstemplate.net</h4>
                        <h4><b>Phone :</b> +976 88997766</h4>
                    </div>
                    <div>
                        <a href="">Home</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                    </div>
                    <div className='icons'>
                        <Facebook />
                        <Twitter />
                        <Ig />
                        <Linked />
                    </div>
                </div>
                <hr />
                <div className='flex'>
                    <Logo />
                    <div>
                        <h5>Meta<b>Blog</b></h5>
                        <p>© All Rights Reserved.</p>
                    </div>
                    <h6>Terms of Use</h6>
                    <hr />
                    <h6>Privacy policy</h6>
                    <hr />
                    <h6>Cookie policy</h6>
                </div>
            </div>
        </div>
    )
}
