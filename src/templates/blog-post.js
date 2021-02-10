import React, { useState, useRef, useEffect } from "react"
import { graphql } from "gatsby"
import Navbar from "../components/nav-bar"

export default function BlogPost({ data }) {
  const [showModal, setShowModal] = useState(false)
  const post = data.markdownRemark


  const prevScrollY = useRef(0);

  const [scrollTop, setScrollTop] = useState(0)
  const [hideNav, setHideNav] = useState(false)
  
  const calculateScroll = () => {
    if (prevScrollY.current.scrollTop >= scrollTop && !hideNav && prevScrollY.current.scrollTop > 200) {
      // console.log("DOWN",prevScrollY.current.scrollTop)
      setHideNav(true)
    } else if (prevScrollY.current.scrollTop < scrollTop && hideNav) {
      // console.log("UP",prevScrollY.current.scrollTop)
      setHideNav(false)
    }
    setScrollTop(prevScrollY.current.scrollTop)
  }

  return (

    <html class="dark">

      <div class="relative bg-white dark:bg-darkbackg overflow-y-auto w-screen h-full lg:h-screen">
        <div class=" h-full mx-auto"> {/*max-w-7xl*/}
          <div class="relative z-10 pb-8 h-full sm:pb-16 md:pb-20 lg:w-1/2 bg-opacity-0"> {/*lg:pb-28 xl:pb-32*/}
            {/* <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-darkbackg transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon class="" points="50,0 100,0 50,100 0,100" />
      </svg> */}
            <Navbar hideNav={hideNav}/>
            
            <div ref={prevScrollY} onScroll={calculateScroll} class="bg-darkbackg overflow-y-auto w-screen h-screen flex justify-center mt-6 px-5">
              <div class="flex items-center justify-start flex-col w-full md:w-2/5 lg:w-6/12 ">

                <h1 class="font-sans m-0 mt-8 text-primary self-start ">{post.frontmatter.title}</h1>
                <p class="font-sans mt-1 text-gray-300 self-start text-sm">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
                <div class="font-sans mt-6 text-gray-400 self-start text-lg" dangerouslySetInnerHTML={{ __html: post.html }} />

              </div>
            </div>

          </div>
        </div>
      </div>

    </html>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`