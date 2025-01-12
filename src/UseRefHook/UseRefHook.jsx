import React, { useRef } from 'react'
import '../index.css'

const UseRefHook = () => {

    const name = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (event) =>{
        event.preventDefault();

        console.log(name.current.value)
        console.log(password.current.value)
    }

    return (
        <div className='useRef'>
            <h1>useRef Hook in React</h1>
            <hr />
            <div className="card">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type='text' id='name' placeholder='Enter your name' autoCapitalize='off' ref={name} />
                    <br />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input type='password' id='password' placeholder='Enter your password' autoCapitalize='off' ref={password} />
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UseRefHook
