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
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl py-3">

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




      <div class="py-12 bg-darkbg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white font-sans sm:text-3xl">
              Why Rigel?
      </p>
            {/* <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Obsidian gives you
      </p> */}
          </div>

          <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
</svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-white font-sans">
                    Not YANA (Yet Another News Aggregator)
            </dt>
                  <dd class="mt-2 text-sm text-gray-300 font-sans md:w-10/12">
                    Does not include volatile news, only informative content that can be read whenever you want
            </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-collection-play" viewBox="0 0 16 16">
                      <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
                      <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
                    </svg>

                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-white font-sans">
                    Multimedia
            </dt>
                  <dd class="mt-2 text-sm text-gray-300 font-sans md:w-10/12">
                    Offers content in the form of articles, videos and podcasts (in the near future), you decide how to consume it
            </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-white font-sans">
                    Modern
            </dt>
                  <dd class="mt-2 text-sm text-gray-300 font-sans md:w-10/12">
                    We are working to integrate GPT-3 with Rigel in order to i) generate summaries for long articles to make them more “accessible” and ii) smart categorize content
            </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-white font-sans">
                    Curated
            </dt>
                  <dd class="mt-2 text-sm text-gray-300 font-sans md:w-10/12">
                    Each source is cherry-picked and validated, we just don't throws things in to increase volume
            </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </html>
  )
}

export default IndexPage
