import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/nav-bar"

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <html class="dark bg-darkbackg">
      <SEO title="Rigel - Learn Something New Every Day" />
      <div class="bg-darkbackg h-full sm:h-screen">
        {/* <div class=" h-full mx-auto">  */}
        <div class="pb-8 h-full sm:pb-16 md:pb-20 lg:w-1/2"> {/*lg:pb-28 xl:pb-32*/}
          {/* <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-darkbackg transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon class="" points="50,0 100,0 50,100 0,100" />
            </svg> */}

            <Navbar />
            
            <main class="flex-col flex justify-center mx-auto h-full px-4 sm:px-6 pt-8 lg:pl-20">
              <div class="md:text-center lg:text-left lg:w-full">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl py-3">
                  {/* <span class="font-sans block xl:inline"> How much time do you spend on Social Media? </span> */}
                  {/* <span class="font-sans block xl:inline"> In the time you spend on Social Media you could read 200 books </span> */}
                  <span class="font-sans block xl:inline"> How much time do you spend on Social Media? </span>
                  {/* <span class="font-sans block text-indigo-600 xl:inline">online business</span> */}
                </h1>
                <p class="font-sans mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  In a year, as much time as you'd spend <b>reading 200 books</b>!
                  <br />
                  <br />What if you could <b>nurture your mind</b> or <b>interests</b> instead?
                  <br />
                  {/* <br />We've designed <b>Rigel</b> to collect <b>articles, videos & podcasts</b> from the most renowned sources about <b>cultural topics</b>.
                  <br /> */}
                  <br /><b>Rigel</b> collects articles, videos and podcasts about History, Science, Technology and more topics to easily access them <b>whenever you want</b>.
                  {/* <br />Just take your time to enjoy them: Rigel is not about News and its content <b>does not become old overnight</b>. */}
              </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">

                    <a target='_blank' href="https://apps.apple.com/it/app/rigel/id1521924790" class="font-sans w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary md:py-4 md:text-lg md:px-10">
                      <img style={{ height: 25, margin: 0, padding: 0, marginRight: 10 }} class="" src={require('../assets/icons/apple-white.png')} />
                      <p style={{ margin: 0, padding: 0 }} class="">iOS</p>
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.rigel" class="font-sans w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary md:py-4 md:text-lg md:px-10">
                      <img style={{ height: 25, margin: 0, padding: 0, marginRight: 10 }} class="" src={require('../assets/icons/android-white.png')} />
                      <p style={{ margin: 0, padding: 0 }} class="">Android</p>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="w-full object-contain sm:h-72 md:h-full lg:w-full lg:h-full" src={require("../assets/icons/rigelapphome.png")} alt="" />
        </div>
    </html>
  )
}

export default IndexPage
