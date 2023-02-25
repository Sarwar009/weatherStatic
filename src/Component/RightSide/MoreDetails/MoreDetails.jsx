import React from 'react'
import { SiRainmeter } from 'react-icons/si'
import { FiWind, FiThermometer, FiUmbrella } from 'react-icons/fi'
import { BiCloudLightRain, BiSun } from 'react-icons/bi'
import './MoreDetails.css'


export default function MoreDetails() {
    return (
        <div className='moreDetails'>
            <div className='moreDetails_header'>
                <h4>More details of today's weather</h4>
            </div>

            <div className='moreDetails_content'>

                <div className='moreDetails_content_card'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>Humidity</h4>
                        <span>
                            <SiRainmeter style={{
                                background: 'rgb(53, 159, 221)', color: 'white', padding: '3px', borderRadius: '10px'
                            }} />
                        </span>
                    </div>

                    <div style={{ textAlign: 'center' }}>82% bad</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '40px' }}>
                            <h6>good</h6>
                            <div className='line good'></div>
                        </div>
                        <div style={{ width: '40px' }}>
                            <h6>normal</h6>
                            <div className='line normal'></div>
                        </div>
                        <div style={{ width: '40px' }}>
                            <h6>bad</h6>
                            <div className='line bad'></div>
                        </div>
                    </div>
                </div>

                <div className='moreDetails_content_card'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>Wind</h4>
                        <span>
                            <FiWind style={{
                                background: 'rgb(53, 159, 221)', color: 'white', padding: '3px', borderRadius: '10px'
                            }} />
                        </span>
                    </div>

                    <div style={{ textAlign: 'center' }}>8 km/h</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '40px' }}>
                            <h6>good</h6>
                            <div className='line good'></div>
                        </div>
                        <div style={{ width: '40px' }}>
                            <h6>normal</h6>
                            <div className='line normal'></div>
                        </div>
                        <div style={{ width: '40px' }}>
                            <h6>bad</h6>
                            <div className='line bad'></div>
                        </div>
                    </div>
                </div>

                <div className='moreDetails_content_card'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>precipitation</h4>
                        <span>
                            <BiCloudLightRain style={{
                                background: 'rgb(53, 159, 221)', color: 'white', padding: '3px', borderRadius: '10px'
                            }} />
                        </span>
                    </div>

                    <div style={{ textAlign: 'center' }}>1.4 cm</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                        <div style={{ width: '12px' }}>
                            <h6>0</h6>
                            <div className='line good'></div>
                        </div>
                        <div style={{ width: '12px' }}>
                            <h6>10</h6>
                            <div className='line seventy'></div>
                        </div>
                        <div style={{ width: '12px' }}>
                            <h6>20</h6>
                            <div className='line'></div>
                        </div>
                        <div style={{ width: '12px' }}>
                            <h6>30</h6>
                            <div className='line'></div>
                        </div>
                        <div style={{ width: '12px' }}>
                            <h6>40</h6>
                            <div className='line'></div>
                        </div>
                        <div style={{ width: '12px' }}>
                            <h6>50</h6>
                            <div className='line'></div>
                        </div>
                        <div style={{ width: '12px' }}>
                            <h6>60</h6>
                            <div className='line'></div>
                        </div>
                        <div style={{ width: '12px' }}>
                            <h6>70</h6>
                            <div className='line'></div>
                        </div>
                        <div style={{ width: '12px' }}>
                            <h6>80</h6>
                            <div className='line'></div>
                        </div>
                        <div style={{ width: '12px' }}>
                            <h6>90</h6>
                            <div className='line'></div>
                        </div>

                    </div>
                </div>

            </div>



            <div className='moreDetails_content'>

                <div className='moreDetails_content_card'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>UV index</h4>
                        <span>
                            <BiSun style={{
                                background: 'rgb(53, 159, 221)', color: 'white', padding: '3px', borderRadius: '10px'
                            }} />
                        </span>
                    </div>

                    <div style={{ textAlign: 'center' }}>4 medium</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '25px' }}>
                            <h6><span>0-2</span></h6>
                            <div className='line good'></div>
                        </div>
                        <div style={{ width: '25px' }}>
                            <h6>3-5</h6>
                            <div className='line seventy'></div>
                        </div>
                        <div style={{ width: '25px' }}>
                            <h6>6-7</h6>
                            <div className='line'></div>
                        </div>
                        <div style={{ width: '25px' }}>
                            <h6>8-10</h6>
                            <div className='line'></div>
                        </div>
                        <div style={{ width: '25px' }}>
                            <h6>11+</h6>
                            <div className='line'></div>
                        </div>
                    </div>
                </div>

                <div className='moreDetails_content_card'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>Feels like </h4>
                        <span>
                            <FiThermometer style={{
                                background: 'rgb(53, 159, 221)', color: 'white', padding: '3px', borderRadius: '10px'
                            }} />
                        </span>
                    </div>

                    <div style={{ textAlign: 'center' }}>30°</div>

                    <div style={{
                        display: 'flex', justifyContent: 'space-between'
                    }}>
                        <div style={{ width: '100%' }}>
                            <h6 style={
                                {
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }
                            }>
                                <span>0°</span>
                                <span>25°</span>
                                <span>50°</span>
                            </h6>
                            <div className='line seventy'></div>
                        </div>
                    </div>
                </div>

                <div className='moreDetails_content_card'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>Chance of rain</h4>
                        <span>
                            <FiUmbrella style={{
                                background: 'rgb(53, 159, 221)', color: 'white', padding: '3px', borderRadius: '10px'
                            }} />
                        </span>
                    </div>

                    <div style={{ textAlign: 'center' }}>42%</div>

                    <div style={{
                        display: 'flex', justifyContent: 'space-between'
                    }}>

                        <div style={{ width: '100%' }}>
                            <h6 style={
                                {
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }
                            }>
                                <span>0%</span>
                                <span>25%</span>
                                <span>50%</span>
                                <span>75%</span>
                                <span>100%</span>
                            </h6>
                            <div className='line forty'></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
