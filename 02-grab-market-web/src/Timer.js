import React, { useEffect } from 'react'

function Timer() {
    const [time, setTime] = React.useState(0);
    console.log('컴포넌트 업데이트');
    useEffect(function() {
      setTime(time+1);
    },[]);
  return (
    <div>
        <h3>{time}초</h3>
        <button>Click</button>
    </div>
  )
}

export default Timer