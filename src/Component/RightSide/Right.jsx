import React from 'react'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { BsCloudRain, BsSun } from 'react-icons/bs';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';
import './Right.css'
import MoreDetails from './MoreDetails/MoreDetails';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

export default function Right() {

  const data = {
    labels: ['23%', '29%', '58%', '75%', '33%', '20%', '73%', "49%"],
    datasets: [{
      data: [2, 2.5, 3, 4, 2.7, 1.8, 3.1, 2.8],
      pointBorderColor: 'transparent',
      backgroundColor: 'transparent',
      pointBorderWidth: 4,
    }]
  }

  const options = {
    plugin: {
      legend: false
    },
    scales: {
      x: {
        grid: {
          display: true
        }
      },
      y: {
        min: 0,
        max: 10,
        display: false
      },
    }
  }

  return (
    <div className='rightDiv'>
      <div className='right_top'>

        <div className='r_header'>
          <div className='r_t_left'>
            <h3>Welcome back Isabela!</h3>
            <p>Check out today's weather information</p>
          </div>
          <div className='r_t_right'>
            <p style={{cursor: 'pointer'}}>•••</p>
            <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80' style={{cursor: 'pointer'}} />
          </div>
        </div>

        <div className='r_content'>

          <div className='r_c_top'>
            <div><h4>Upcoming hours</h4></div>
            <div style={{ display: 'flex' }}>
              <h6 style={{ margin: '0px 5px' }}>Rain precipitation<span><IoIosArrowDown /></span></h6>
              <h6>Next days<span><IoIosArrowForward /></span></h6>
            </div>
          </div>

          <div className='main_content'>
            <div style={{
              display: 'flex', justifyContent: 'space-between', paddingBottom: '10px'
            }}>
              <div>
                <p>Now</p>
                <span><BsSun /></span>
                <h5>27°</h5>
              </div>
              <div>
                <p>11:00</p>
                <span><BsSun /></span>
                <h5>28°</h5>
              </div>
              <div>
                <p>12:00</p>
                <span><BsCloudRain /></span>
                <h5>28°</h5>
              </div>
              <div>
                <p>13:00</p>
                <span><BsCloudRain /></span>
                <h5>29°</h5>
              </div>
              <div>
                <p>14:00</p>
                <span><BsSun /></span>
                <h5>30°</h5>
              </div>
              <div>
                <p>15:00</p>
                <span><BsCloudRain /></span>
                <h5>29°</h5>
              </div><div>
                <p>16:00</p>
                <span><BsCloudRain /></span>
                <h5>29°</h5>
              </div>
              <div>
                <p>17:00</p>
                <span><BsSun /></span>
                <h5>28°</h5>
              </div>
            </div>
            <div style={{width: '100%'}}>
              <Line data={data} options={options}></Line>
            </div>
          </div>
        </div>

      </div>

      <div className='right_bottom'>
        <MoreDetails />
      </div>
    </div>
  )
}
