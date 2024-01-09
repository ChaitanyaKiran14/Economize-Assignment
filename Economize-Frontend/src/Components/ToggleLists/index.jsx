import React from 'react';
import { RiShoppingCartFill } from 'react-icons/ri';
import GaugeChart from 'react-gauge-chart';

const ToggleLists = () => {
  return (
    <div className="pl-8 pt-4 p-8">
      <div className="flex space-x-6">
        <button><span className='no-underline px-8   hover:bg-blue-200  hover:underline-offset-1 hover:cursor-pointer'>Automations</span></button>
        <button><span className='px-8 hover:underline-offset-1  hover:bg-blue-200  hover:cursor-pointer'>Compaigns</span></button>
        <button><span className='px-8 hover:underline-offset-1  hover:bg-blue-200  hover:cursor-pointer'>Segments</span></button>
        
        
        <div className="items-center pl-4">
          <div className="w-28 pl-3 py-1 border rounded-full bg-blue-200">
            <span className="font-bold items-center ">Last Month</span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 pt-4'>
      <div className='pl-10 shadow-x-1'>
            <div className="items-center">
              <div className='flex space-x-2'>
                  <span className="px-2 py-2 border rounded-full pt-2">
                  <RiShoppingCartFill size={25} style={{color:"gray"}}/>
                  </span>
               <div className='flex justify-between'>
                  <span className="font-bold items-center text-blue-500 pt-2">Abandoned Cart-7 Days</span>
                  <div className='pl-40'>
                    <span className='pl-40 font-bold'>$5,221</span>
               </div>
               </div>
              </div>
              </div>
                <div className="items-center">
              <div className='flex space-x-2'>
                  <span className="px-2 py-2 border rounded-full pt-2">
                  <RiShoppingCartFill size={20} style={{color:"gray"}}/>
                  </span>
               <div className='flex justify-between'>
                  <span className="font-bold items-center text-blue-500 pt-2">Abandoned Cart 15 min</span>
                  <div className='pl-40'>
                    <span className='pl-40 font-bold'>$5,228</span>
               </div>
               </div>
              </div>
              </div>
                <div className="items-center">
              <div className='flex space-x-2'>
                  <span className="px-2 py-2 border rounded-full pt-2">
                  <RiShoppingCartFill size={25} style={{color:"gray"}}/>
                  </span>
               <div className='flex justify-between'>
                  <span className="font-bold items-center text-blue-500 pt-2">Abandoned Cart 3 Days</span>
                  <div className='pl-40'>
                    <span className='pl-40 font-bold'>$5,226</span>
               </div>
               </div>
              </div>
              </div>
               <div className="items-center">
              <div className='flex space-x-2'>
                  <span className="px-2 py-2 border rounded-full pt-2">
                  <RiShoppingCartFill size={25} style={{color:"gray"}}/>
                  </span>
               <div className='flex justify-between'>
                  <span className="font-bold items-center text-blue-500 pt-2">Abandoned Cart 2 Days</span>
                  <div className='pl-40'>
                    <span className='pl-40 font-bold'>$5,226</span>
               </div>
               </div>
              </div>
              </div>
            </div>
        
        <div className='pl-8'>
          
          <div className='text-blue-500 font-bold mb-2'>Level 5</div>
          <div className='mb-2'>+$32,050 in the last month</div>
          <div className='flex justify-center'>
            <GaugeChart
              id="gauge-chart"
              percent={0.8} 
              textColor="#000000"
              needleColor="#1E90FF" 
              needleBaseColor="#1E90FF" 
              fontSize="16px"
              colors={["#1E90FF", "#E0E0E0"]} 
              hideText 
              arcsLength={[0.8, 0.2]} 
              arcPadding={0.02} 
              cornerRadius={0.2} 
              style={{ width: '500px', height: '500px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleLists;
