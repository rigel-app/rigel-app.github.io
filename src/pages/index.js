import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <html class="dark">
      <div class="relative bg-white dark:bg-darkbackg overflow-hidden w-screen h-screen">
        <div class="max-w-7xl h-full mx-auto">
          <div class="relative z-10 pb-8 h-full sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-darkbackg transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon class="" points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div class="flex items-center justify-between w-full md:w-auto">
                    <a style={{ height: 75 }} href="#">
                      {/* <span class="sr-only">Workflow</span> */}
                      <img style={{ height: 75 }} class="h-8 w-auto sm:h-10" src="https://rigelapp.com/rigel-resources.github.io/icons/rigel.svg?&sanitize=true" />
                    </a>
                    <div class="-mr-2 flex items-center md:hidden">
                      <button type="button" onClick={() => setShowModal(!showModal)} class="bg-white dark:bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" id="main-menu" aria-haspopup="true">
                        <span class="font-sans sr-only">Open main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a target='_blank' href="https://apps.apple.com/it/app/rigel/id1521924790" class="font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary">iOS</a>

                  <a target='_blank' href="https://play.google.com/store/apps/details?id=com.rigel" class="font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary">Android</a>

                  <a target='_blank' href="mailto:info.rigelapp@gmail.com" class="font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary">Contact Us</a>

                  {/* <a href="#" class="font-sans font-medium text-gray-500 hover:text-gray-900">Company</a>

              <a href="#" class="font-sans font-medium text-indigo-600 hover:text-indigo-500">Log in</a> */}
                </div>
              </nav>
            </div>

            <div class={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${showModal ? 'show' : 'hidden'} md:hidden`}>
              <div class="rounded-lg shadow-md bg-white dark:bg-darkbackg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-2 pt-1 flex items-center justify-between">
                  <div>
                    <img style={{ height: 75 }} class="h-8 w-auto" src="https://rigelapp.com/rigel-resources.github.io/icons/rigel.svg?&sanitize=true" alt="" />
                  </div>
                  <div class="-mr-2">
                    <button type="button" onClick={() => setShowModal(!showModal)} class="bg-white dark:bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                      <span class="font-sans sr-only">Close main menu</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                  <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                    <a target='_blank' href="https://apps.apple.com/it/app/rigel/id1521924790" class="font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary" role="menuitem">iOS</a>

                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.rigel" class="font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary" role="menuitem">Android</a>

                    <a target='_blank' href="mailto:info.rigelapp@gmail.com" class="font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary" role="menuitem">Contact Us</a>

                    {/* <a href="#" class="font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Company</a> */}
                  </div>
                  {/* <div role="none">
                <a href="#" class="font-sans block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
                  Log in
              </a>
              </div> */}
                </div>
              </div>
            </div>

            <main class="flex-col justify-items-start mx-auto max-w-7xl px-4 sm:px-6 lg:mt-10 lg:pl-20">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl py-3">
                  <span class="font-sans block xl:inline">Discover New Things with Rigel </span>
                  {/* <span class="font-sans block text-indigo-600 xl:inline">online business</span> */}
                </h1>
                <p class="font-sans mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <b>Rigel</b> collects <b>cultural articles</b> and <b>videos</b> from the most renown sources in the world.
                {/* <br />Everything accessible from a single app. */}
                  <br />
                  <br />We do the <b>search</b>.
                <br />We do the <b>validation.</b>
                  <br />We do the <b>provisioning</b>.
                <br />You just <b>enjoy</b> it.
          </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">

                    <a target='_blank' href="https://apps.apple.com/it/app/rigel/id1521924790" class="font-sans w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary md:py-4 md:text-lg md:px-10">
                      <img style={{ height: 25, margin: 0, padding: 0, marginRight: 10 }} class="" src={require('../assets/icons/apple-white.png')} />
                      <p style={{ margin: 0, padding: 0 }} class="">Rigel for iOS</p>
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.rigel" class="font-sans w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary md:py-4 md:text-lg md:px-10">
                      <img style={{ height: 25, margin: 0, padding: 0, marginRight: 10 }} class="" src={require('../assets/icons/android-white.png')} />
                      <p style={{ margin: 0, padding: 0 }} class="">Rigel for Android</p>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full" src={require("../images/rigelapphome.png")} alt="" />
        </div>
      </div>
    </html>
  )
}

export default IndexPage
