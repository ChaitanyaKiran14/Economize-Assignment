import React from 'react';
import { GrFormSchedule } from 'react-icons/gr'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import ToggleLists from '../ToggleLists';
import LineGraph from '../LineChart.jsx';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
const Dashboard = () => {
  return (
    <div className="pt-1">
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/** Column-1 */}
        <div className="flex">
          <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
            <img
              src="http://source.unsplash.com/100x100/?avatar"
              className="rounded-full"
              alt="unsplash"
            />
            <div className="absolute right-0 top-0 w-3 h-3 rounded-full bg-blue-400"></div>
          </div>
          <div>
          <div className="pl-4">
            <div className='font-bold text-3xl'>Good Morning Oguz</div>
            <h2 className='text-gray-700 '>Here are you stats for Today, 09 Aug 2024</h2>
            </div>
          </div>
        </div>     {/** Column-1 Completed*/}
        <div className='p-3'></div>
        {/** Column-2*/}
        <div className='flex justify-end pl-12 gap-4 pt-6 space-x-1'>
          <div className="items-center">
            <div className="w-28 pl-3 py-1 border rounded-full flex">
              <span>
                <GrFormSchedule size={25} style={{ color: '#22d3ee' }} />
              </span>
              
              <button>  <span className="font-bold hover:bg-blue-200  items-center">Today</span></button>
             
            </div>
          </div>
          <span className='text-gray-400 items-center pt-2'>Compared</span>
          <div>
            <div className="w-40 pl-3 py-1 border rounded-full flex">
             <button>
             <span className="font-bold items-center flex">
                Previous Period{' '}
                <MdOutlineKeyboardArrowDown
                  size={25}
                  style={{ color: '#22d3ee' }}
                />
              </span>
             </button>
            </div>
          </div>
        </div>  {/** Column-2 Completed*/}
      </div>
       {/** Boxes */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* SubBox-1 */}
  <div className="flex flex-col items-center py-4">
    <div className="text-gray-500">Total Revenue</div>
    <div className="flex items-center">
      <span className="rounded-full border p-2 bg-green-200 text-green-700 font-semibold mr-2">+12.5%</span>
      <span className="font-bold text-3xl">$32,621.72</span>
    </div>
    <div className="text-gray-500">433 Orders</div>
  </div>

  {/* SubBox-2 */}
  <div className="flex flex-col items-center py-4">
    <div className="text-gray-500">Subscribers</div>
    <div className="flex items-center">
      <span className="rounded-full border p-2 bg-green-200 text-green-700 font-semibold mr-2">+32.5%</span>
      <span className="font-bold text-3xl">$484,205</span>
    </div>
    <div className="text-gray-500">$56 Average Order</div>
  </div>

  {/* SubBox-3 */}
  <div className="flex flex-col items-center py-4">
    <div className="text-gray-500">Conversations</div>
    <div className="flex items-center">
      <span className="rounded-full border p-2 bg-red-200 text-red-700 font-semibold mr-2">-3.4%</span>
      <span className="font-bold text-3xl">$552.33</span>
    </div>
    <div className="text-gray-500">5 min Average Response time</div>
  </div>

  {/* SubBox-4 */}
  <div className="flex flex-col items-center py-4">
    <div className="text-gray-500">Popup Conversation Rate</div>
    <div className="flex items-center">
      <span className="rounded-full border p-2 bg-green-200 text-green-700 font-semibold mr-2">+32.5%</span>
      <span className="font-bold text-3xl">25%</span>
    </div>
    <div className="text-gray-500">5% Sale Conversation Rate</div>
  </div>
</div>

        {/** Boxes End */}
       <div>  {/**Graph as Line Chart */}
       <LineGraph />
       </div>
       <div>   {/**Bottom */}
        <ToggleLists/>
       </div>  {/**Bottom End */}
    </div>
  )
}

export default Dashboard