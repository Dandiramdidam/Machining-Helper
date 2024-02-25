import { useState } from 'react';

const threadsData = {
  metric: [
    { thread: "M 1x0.25", drill: "0.75 mm" },
    { thread: "M 1.1x0.25", drill: "0.85 mm" },    
    { thread: "M 1.2x0.25", drill: "0.95 mm" },
    { thread: "M 1.4x0.3", drill: "1.1 mm" },
    { thread: "M 1.6x0.35", drill: "1.25 mm" },
    { thread: "M 1.7x0.35", drill: "1.3 mm" },
    { thread: "M 1.8x0.35", drill: "1.45 mm" },
    { thread: "M 2x0.4", drill: "1.6 mm" },
    { thread: "M 2.2x0.45", drill: "1.75 mm" },
    { thread: "M 2.3x0.4", drill: "1.9 mm" },
    { thread: "M 2.5x0.45", drill: "2.05 mm" },
    { thread: "M 2.6x0.45", drill: "2.1 mm" },
    { thread: "M 3x0.5", drill: "2.5 mm" },
    { thread: "M 3.5x0.6", drill: "2.9 mm" },
    { thread: "M 4x0.7", drill: "3.3 mm" },
    { thread: "M 4.5x0.75", drill: "3.8 mm" },
    { thread: "M 5x0.8", drill: "4.2 mm" },
    { thread: "M 6x1", drill: "5 mm" },
    { thread: "M 7x1", drill: "6 mm" },
    { thread: "M 8x1.25", drill: "6.8 mm" },
    { thread: "M 9x1.25", drill: "7.8 mm" },
    { thread: "M 10x1.5", drill: "8.5 mm" },
    { thread: "M 11x1.5", drill: "9.5 mm" },
    { thread: "M 12x1.75", drill: "10.2 mm" },
    { thread: "M 14x2", drill: "12 mm" },
    { thread: "M 16x2", drill: "14 mm" },
    { thread: "M 18x2.5", drill: "15.5 mm" },
    { thread: "M 20x2.5", drill: "17.5 mm" },
    { thread: "M 22x2.5", drill: "19.5 mm" },
    { thread: "M 24x3", drill: "21 mm" },
    { thread: "M 27x3", drill: "24 mm" },
    { thread: "M 30x3.5", drill: "26.5 mm" },
    { thread: "M 33x3.5", drill: "29.5 mm" },
    { thread: "M 36x4", drill: "32 mm" },
    { thread: "M 39x4", drill: "35 mm" },
    { thread: "M 42x4.5", drill: "37.5 mm" },
    { thread: "M 45x4.5", drill: "40.5 mm" },
    { thread: "M 48x5", drill: "43 mm" },
    { thread: "M 52x5", drill: "47 mm" },
    { thread: "M 56x5.5", drill: "50.5 mm" },
    { thread: "M 60x5.5", drill: "54.5 mm" },
    { thread: "M 64x6", drill: "58 mm" },
    { thread: "M 68x6", drill: "62 mm" },
  ],
  fineMetric: [
    { thread: "M 3x0.35", drill: "2.65 mm" },
    { thread: "M 4x0.5", drill: "3.5 mm" },
    { thread: "M 5x0.5", drill: "4.5 mm" },
    { thread: "M 6x0.75", drill: "5.2 mm" },
    { thread: "M 7x0.75", drill: "6.2 mm" },
    { thread: "M 8x0.75", drill: "7.2 mm" },
    { thread: "M 8x1", drill: "7 mm" },
    { thread: "M 9x1", drill: "8 mm" },
    { thread: "M 10x0.75", drill: "9.2 mm" },
    { thread: "M 10x1", drill: "9 mm" },
    { thread: "M 10x1.25", drill: "8.8 mm" },
    { thread: "M 12x1", drill: "11 mm" },
    { thread: "M 12x1.25", drill: "10.8 mm" },
    { thread: "M 12x1.5", drill: "10.5 mm" },
    { thread: "M 14x1.5", drill: "14 mm" },
    { thread: "M 15x1.5", drill: "13.5 mm" },
    { thread: "M 16x1", drill: "15 mm" },
    { thread: "M 16x1.5", drill: "14.5 mm" },
    { thread: "M 18x2", drill: "16 mm" },
    { thread: "M 20x1.5", drill: "18.5 mm" },
    { thread: "M 20x2", drill: "18 mm" },
    { thread: "M 22x1.5", drill: "20,5 mm" },
    { thread: "M 22x2", drill: "20 mm" },
    { thread: "M 24x1", drill: "23 mm" },
    { thread: "M 24x1.5", drill: "22.5 mm" },
    { thread: "M 24x2", drill: "22 mm" },
    { thread: "M 26x1.5", drill: "24.5 mm" },
    { thread: "M 27x1.5", drill: "25.5 mm" },
    { thread: "M 27x2", drill: "25 mm" },
    { thread: "M 28x1.5", drill: "26.5 mm" },
    { thread: "M 30x2", drill: "28 mm" },
  ],
  pipe: [
    { thread: "G 1/16", drill: "6.8 mm" },
    { thread: "G 1/8", drill: "8.8 mm" },
    { thread: "G 1/4", drill: "11.8 mm" },
    { thread: "G 3/8", drill: "15.25 mm" },
    { thread: "G 1/2", drill: "19 mm" },
    { thread: "G 5/8", drill: "21 mm" },
    { thread: "G 3/4", drill: "24.5 mm" },
    { thread: "G 7/8", drill: "28.25 mm" },
    { thread: "G 1", drill: "30.75 mm" },
    { thread: "G 1 1/8", drill: "35.5 mm" },
    { thread: "G 1 1/4", drill: "39.5 mm" },
    { thread: "G 1 3/8", drill: "42 mm" },
    { thread: "G 1 1/2", drill: "45.25 mm" },
    { thread: "G 1 5/8", drill: "49.5 mm" },
    { thread: "G 1 3/4", drill: "51 mm" },
    { thread: "G 2", drill: "57 mm" },
  ],
};

const Threads = ({ language }) => {

  const [selectedCategory, setSelectedCategory] = useState('metric');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const selectedThreads = threadsData[selectedCategory];

  return (
    <div className='whole'>
      <div className='headline'>
        {language === 'pl' ? 'Rozmiar otworu pod gwint' : 'Hole sizes for threads'}
      </div>
      <div className='tbuttons'>
        <button className='tbutton' onClick={() => handleSelectCategory('metric')}>M</button>
        <button className='tbutton' onClick={() => handleSelectCategory('fineMetric')}>MF</button>
        <button className='tbutton' onClick={() => handleSelectCategory('pipe')}>G</button>
      </div>
      <div className='divtable'>
        <table className='table'>
          <thead>
            <tr>
              <th>{language === 'pl' ? 'Gwint' : 'Thread'}</th>
              <th>{language === 'pl' ? 'Wiertło' : 'Drill'}</th>
            </tr>
          </thead>
          <tbody>
            {selectedThreads.map((thread, index) => (
              <tr key={index}>
                <td>{thread.thread}</td>
                <td>{thread.drill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Threads;
