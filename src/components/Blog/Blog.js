import React from 'react';

import 'animate.css';
import './Blog.css'


const Blog = () => {
  return (
    <section className="my-10 px-10">
      <h2 className="text-center text-primary font-bold text-6xl mb-20">Welcome</h2>
      <div>
        <div className="ans text-secondary">
          <h2 className="text-primary text-3xl mb-3">
            1.how will you improve the performance of a react application?
          </h2>
          <p className='text-white text-xl mt-2 mb-3'>1.Keeping component state local where necessary.</p>
          <p className='text-white text-xl mt-2 mb-3'>2.Memoizing React components to prevent unnecessary re-renders.</p>
          <p className='text-white text-xl mt-2 mb-3'>3.Code-splitting in React using dynamic import()</p>
          <p className='text-white text-xl mt-2 mb-3'>4.Windowing or list virtualization in React.</p>
          <p className='text-white text-xl mt-2 mb-3'>5.Lazy loading images in React.</p>
        </div>
      </div>
      <div>
        <div className="ans text-[#fff]">
          <h2 className="text-primary text-3xl mb-3">
            2.What are the different ways to manage a state in a React
            application?
          </h2>
          <div>
            <h2 className="font-bold text-white text-xl">Local state</h2>
            <p className='text-white text-xl mt-2 mb-3'>
              Local state is perhaps the easiest kind of state to manage in
              React, considering there are so many tools built into the core
              React library for managing it. useState is the first tool you
              should reach for to manage state in your components. It can take
              accept any valid data value, including primitive and object
              values. Additionally, its setter function can be passed down to
              other components as a callback function (without needing
              optimizations like useCallback).
            </p>
          </div>
          <div>
            <h2 className="text-primary text-3xl mb-3">Global state</h2>
            <p className='text-white text-xl mt-2 mb-3'>
              You will reach a point in your application where patterns like
              “lifting state up” and passing callbacks down to update your state
              from components lead to lots and lots of props. What do you do if
              you want to update a component’s state from basically anywhere in
              your app? You turn it into global state. To manage it, however,
              you should opt for a third-party solution. Many developers are
              inclined to use built-in React features like the Context API to
              manage their state.
            </p>
          </div>
        </div>
        <div className="ans text-[#fff]">
          <h2 className="text-primary text-3xl mb-3">
            3.How does prototypical inheritance work?
          </h2>
          <div>
            <p className='text-white text-xl mt-2 mb-3'>
              prototypical inheritance refers to the ability to access object
              properties from another object. We use a JavaScript prototype to
              add new properties and methods to an existing object constructor.
              We can then essentially tell our JS code to inherit properties
              from a prototype. Prototypical inheritance allows us to reuse the
              properties or methods from one JavaScript object to another
              through a reference pointer function.
            </p>
          </div>
        </div>
        <div className="ans text-[#fff]">
          <h2 className="text-primary text-3xl mb-3">
            4.Why you do not set the state directly in React.?
          </h2>
          <div>
            <p className='text-white text-xl mt-2 mb-3'>
              In React, whenever a component is rendering either in theMounting
              phase or in Updating Phase, it always renders all the components
              that are in its tree. Stateless functional component is a
              component that has no state or constructor or any lifecycle hooks
              and are fully controlled by their parents. They only render a
              react component.
            </p>
          </div>
        </div>
        <div className="ans text-[#fff]">
          <h2 className="text-primary text-3xl mb-3">
            5.What is a unit test? Why should write unit tests??
          </h2>
          <div>
            <p className='text-white text-xl mt-2 mb-3'>
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff. The main objective
              of unit testing is to isolate written code to test and determine
              if it works as intended. Unit testing involves only those
              characteristics that are vital to the performance of the unit
              under test. This encourages developers to modify the source code
              without immediate concerns about how such changes might affect the
              functioning of other units or the program as a whole. Once all of
              the units in a program have been found to be working in the most
              efficient and error-free manner possible, larger components of the
              program can be evaluated by means of integration testing. Unit
              tests should be performed frequently, and can be done manually or
              can be automated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;