import React, { useRef } from 'react';

const UncontrolledForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    ref={nameRef}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    ref={emailRef}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UncontrolledForm;