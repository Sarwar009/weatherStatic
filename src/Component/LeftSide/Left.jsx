import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { BsCircleFill, BsToggleOn, BsToggleOff, BsSun } from 'react-icons/bs';
import { FaWindowMinimize } from 'react-icons/fa';
import { CiLocationArrow1 } from 'react-icons/ci';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import React from 'react'
import './Left.css'

export default function Left() {

    const [toggle, setToggle] = useState(false)

    const clicked = () => {
        return setToggle(!toggle)
    };

    return (
        <div className='leftDiv'>
            <div className='left_header'>

                <FontAwesomeIcon className='faPlusIcon' icon={faPlus} />

                <div className='head_middle'>
                    <FaWindowMinimize className='dash'/>
                    <BsCircleFill className='circle'/>
                    <BsCircleFill className='circle'/>
                </div>

                <div className='head_right'>
                    <p>°C</p>
                    <div onClick={clicked}>
                        {
                            toggle ? <BsToggleOn className='toggleIcon'/> : <BsToggleOff className='toggleIcon'/>
                        }
                    </div>
                    <p>°F</p>
                </div>
            </div>

            <div className='left_content'>
                <div className='content_header'>
                    <div className='c_h_left'>
                        <h3><span><CiLocationArrow1 /> </span> New York, USA</h3>
                        <p>Today 28 Sept</p>
                    </div>
                    <div className='c_h_right'>
                        <p><span></span> 07:19</p>
                        <p><span></span> 19:32</p>
                    </div>
                </div>

                <div className='content_main'>
                        <div className='weather_pre'><IoIosArrowBack /></div>
                        {
                            toggle ? <div className='weather'>81<span>°</span></div> : <div className='weather'>27<span>°</span></div>
                        }
                        <div className='weather_next'><IoIosArrowForward /></div>
                </div>
                <div className='sunny'>
                    <h5><BsSun className='sunny_icon'/> Sunny</h5>
                </div>
            </div>

        </div>
    )
}
