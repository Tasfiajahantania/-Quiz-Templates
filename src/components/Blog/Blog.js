import React from 'react';

const Blog = () => {
    return (
        <div className='m-3'>
           <h1 className='text-4xl font-bold m-6 underline'>Coder's Blogs House!</h1>
            <article className='border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg'>
                <h1 className='text-2xl font-bold mb-4 text-gray-900'>1. What is the purpose of react router?</h1>
                <p className='text-lg font-medium'>React Router is a standard library for routing in React.
                    It enables the navigation among views of various components in a React Application, allows changing the browser URL,
                    and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works.
                    The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
            </article>
            <article className='border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg'>
                <h1 className='text-2xl font-bold mb-4 text-gray-900'>2.How does context api work?</h1>
                <p className='text-lg font-medium'>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around.
                    This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                    Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </article>
             <article className='border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg'>
                     <h1 className='text-2xl font-bold mb-4 text-gray-900'>3. What is useRef React?</h1>
                <p>
                    Essentially, useRef is like a “box” that can hold a mutable value in its .
                    current property. You might be familiar with refs primarily as a way to access the DOM.
                    If you pass a ref object to React with , React will set its .
                    current property to the corresponding DOM node whenever that node changes.
                </p>
                </article>
        </div>
    );
};

export default Blog;