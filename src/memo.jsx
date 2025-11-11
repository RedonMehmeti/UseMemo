import React, { useState, useMemo, useEffect } from 'react';

function UseMemovsUseEffect(){
    const [count, setCount] = useState(0);
    const [text, setName] = useState('');

    // useMemo
    const doubled = useMemo(() => {
        console.log('useMemo is calculating doubled count ');
        return count * 2;
    }, [count]);

    // useEffect
    useEffect(() => {
        console.log('useEffect is running (count changed)');
    }, [count]);

    return (
        <>
        <div>
            <h2>Count: {count}</h2>
            <p>Count: {doubled}</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>

             <br></br>

             <input
             placeholder='Type something...'
             value={text}
             onChange={(e) => setName(e.target.value)}
             />
           
        </div>
        </>
    );
}

export default UseMemovsUseEffect;