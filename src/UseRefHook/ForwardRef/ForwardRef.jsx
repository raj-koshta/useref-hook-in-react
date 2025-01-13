import React, { forwardRef, useId, useRef } from 'react'

const ForwardRef = () => {

    const name = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (event) => {
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
                    {/* <BeforeReactV19Input label="Name : " type="text" ref={name} /> */}
                    <AfterReactV19Input label="Name : " type="text" ref={name} />
                    <br />
                    <br />
                    {/* <BeforeReactV19Input label="Password : " type="password" ref={password} /> */}
                    <AfterReactV19Input label="Password : " type="password" ref={password} />
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ForwardRef

// BeforeReactV19Input-------------

// const BeforeReactV19Input = forwardRef((props, ref) => {
//     const id = useId();
//     return (
//         <div>
//             <label htmlFor={id}>{props.label}</label>
//             <input type='text' ref={ref} />
//         </div>
//     );
// });

// AfterReactV19Input-------------

const AfterReactV19Input = (({label, ref, type}) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} ref={ref} />
        </div>
    );
});