import Image from 'next/image';
import React, { useState } from 'react'
import iconHtml from '../public/assets/htmlIcon.svg';

const ScoreModal = ({ showModal , closeModal , updateStats }) => {

    const [rank , setRank] = useState('');
    const [score , setScore] = useState('');
    const [percentile, setPercentile] = useState('');

    const [error, setError] = useState({
        score: '',
        percentile: '',
      });


    const handleSubmit = (e) => {
        e.preventDefault();

        if (score < 0 || score > 15) {
            setError((prev) => ({ ...prev, score: 'Score must be between 0 and 15' }));
            return;
          } else {
            setError((prev) => ({ ...prev, score: '' }));
          }
      
          // Validate percentile (between 0 and 99)
          if (percentile < 0 || percentile > 99) {
            setError((prev) => ({ ...prev, percentile: 'Percentile must be between 0 and 99' }));
            return;
          } else {
            setError((prev) => ({ ...prev, percentile: '' }));
          }

        updateStats({ rank , score , percentile });
        closeModal();

    }

    if(!showModal) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md my-5 w-[400px] md:w-[500px] ">
            <div className='title flex justify-between items-center my-2 mb-5'>
                <h1 className='font-bold text-2xl'>Update scores</h1>
                <div className='image'>
                    <Image  src={iconHtml} width={30} height={30} alt='iconHtml' />
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className='flex justify-between items-center w-full'>
                <div className='label flex flex-row items-center gap-2'>
                <div className=" bg-blue-950 text-white text-sm font-bold w-3 h-3 rounded-full flex items-center justify-center p-3">1</div>
                <label className="block text-gray-700">Update your <span className='font-bold'>Rank</span></label>
                </div>
                <input
                  type="text"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  className="border p-2 h-9 text-sm rounded w-[100px] md:w-[150px] border-blue-500 "
                />
              </div>

                <div className='flex justify-between items-center w-full'>
            <div className='label flex flex-row items-center gap-2'>
            <div className=" bg-blue-950 text-white text-sm font-bold w-3 h-3 rounded-full flex items-center justify-center p-3">3</div>
            
            <label className="block text-gray-700">Update your <span className='font-bold'>Percentile</span></label>
            </div>
            <div>
            <input
              type="text"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className="border p-2 h-9 text-sm rounded w-[100px] md:w-[150px] border-blue-500"
            />
            {error.percentile && <p className="text-red-500 text-sm">{error.percentile}</p>}
            </div>

          </div>

              <div className='flex justify-between items-center w-full'>
                <div className='label flex flex-row items-center gap-2'>
                <div className=" bg-blue-950 text-white text-sm font-bold w-3 h-3 rounded-full flex items-center justify-center p-3">2</div>
                
            <label className="block text-gray-700">Update your <span className='font-bold'>Score</span></label>
            </div>
            <div >
            <input
              type="text"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="border p-2 h-9 text-sm rounded w-[100px] md:w-[150px] border-blue-500 "
            />
            {error.score && <p className="text-red-500 text-sm">{error.score}</p>}
            </div>
          </div>
          

        
          
          <div className="flex justify-end mt-5">
            <button type="button" onClick={closeModal} className="mr-2 px-4 py-2 border-2 border-blue-950 bg-transparent text-sm rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-950 hover:bg-blue-500 text-sm text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );



        
 
}

export default ScoreModal
