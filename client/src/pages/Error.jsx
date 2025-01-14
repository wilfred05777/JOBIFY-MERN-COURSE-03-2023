import React from 'react'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  // const error = useRouteError();
  // // console.log(error);

  // if(error.status === 404) {
  //   return (
  //     <Wrapper className='full-page'>
  //       <div>
  //         <img src={img} alt='not-found' />
  //         <h3>Ohh! page not found</h3>
  //         <p>We can't seem to find the page you're looking for</p>
  //         <Link to={'/dashboard'}>back home</Link>
  //       </div>
  //     </Wrapper>
  //   )
  // }

  return (
    <Wrapper className='full-page'>

      <div>
        <img src={img} alt='not-found' />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to={'/'}>back home</Link>
      </div>

      {/* <div>
        Something went wrong
      </div> */}
    </Wrapper>
  )
}

export default Error
