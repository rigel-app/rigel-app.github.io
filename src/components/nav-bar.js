import React, { useState, useEffect, useRef } from "react"

const NavBar = ({hideNav=false}) => {
    const [showModal, setShowModal] = useState(false)
    const [showSocialModal, setShowSocialModal] = useState(false)
    const container = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!container.current.contains(event.target)) {
                if (!showSocialModal) return;
                setShowSocialModal(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => window.removeEventListener('click', handleOutsideClick);
    }, [showSocialModal, container]);

    return (<>
        <div hidden={hideNav} class="relative pt-6 px-4 sm:px-6 lg:px-16 ">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start " aria-label="Global">
                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0 ">
                    <div class="flex items-center justify-end w-full md:w-auto">
                        <a class="hidden sm:flex " style={{ height: 75 }} href="/">
                            <img style={{ height: 75 }} class="h-8 w-auto sm:h-10" src={require('../assets/icons/rigel-icon.png')} />
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
                <div class="hidden md:flex md:ml-10 ">

                    <a target='_blank' href="https://apps.apple.com/it/app/rigel/id1521924790" class="font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary pr-5">iOS</a>

                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.rigel" class="font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary pr-5">Android</a>


                    <a href="/blog" class="font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary pr-5">Blog</a>

                    {/* <div ref={container}> */}
                    <a ref={container} onClick={() => setShowSocialModal(!showSocialModal)}
                        class="font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary">Contacts
                            {showSocialModal
                            ? <div class="origin-top-right absolute mt-2 rounded-md shadow-lg bg-darkbackg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <div class="py-1">
                                    <a target='_blank' href="mailto:info.rigelapp@gmail.com" class="font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100" role="menuitem">Email</a>
                                    <a target='_blank' href="https://www.instagram.com/rigelapp/" class="font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100" role="menuitem">Instagram</a>
                                    <a target='_blank' href="https://twitter.com/AppRigel" class="font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100" role="menuitem">Twitter</a>
                                    <a target='_blank' href="https://www.facebook.com/rigelapp/" class="font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100" role="menuitem">Facebook</a>
                                </div>
                            </div>
                            : undefined}
                    </a>


                    {/* </div> */}



                    {/* <a onClick={() => setShowSocialModal(true)} class="font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary pr-5">Solutions</a> */}
                    {/* <button onClick={() => setShowSocialModal(!showSocialModal)} type="button" class="font-sans inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-gray-900 dark:text-white" id="options-menu" aria-haspopup="true" aria-expanded="true">
                        Contact Us
                    </button> */}

                </div>
            </nav>

        </div>


        <div class={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${showModal ? 'show' : 'hidden'} md:hidden`}>
            <div class="rounded-lg shadow-md bg-white dark:bg-darkbackg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-2 pt-4 flex items-center justify-end">
                    {/* <div>
                        <img style={{ height: 75 }} class="h-8 w-auto" src={require('../assets/icons/rigel-icon.png')} alt="" />
                    </div> */}
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
                    <div class="px-2 pb-3 space-y-1" role="none">

                        <a href="/" class="font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary" role="menuitem">Rigel</a>

                        <a target='_blank' href="https://apps.apple.com/it/app/rigel/id1521924790" class="font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary" role="menuitem">iOS</a>

                        <a target='_blank' href="https://play.google.com/store/apps/details?id=com.rigel" class="font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary" role="menuitem">Android</a>

                        <a href="/blog" class="font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary" role="menuitem">Blog</a>

                        <a ref={container} onClick={() => setShowSocialModal(!showSocialModal)} class="font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary" role="menuitem">Contacts
                        {showSocialModal
                                ? <div class="origin-top-right absolute mt-2 rounded-md shadow-lg bg-darkbackg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div class="py-1">
                                        <a target='_blank' href="mailto:info.rigelapp@gmail.com" class="font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100" role="menuitem">Email</a>
                                        <a target='_blank' href="https://www.instagram.com/rigelapp/" class="font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100" role="menuitem">Instagram</a>
                                        <a target='_blank' href="https://twitter.com/AppRigel" class="font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100" role="menuitem">Twitter</a>
                                        <a target='_blank' href="https://www.facebook.com/rigelapp/" class="font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100" role="menuitem">Facebook</a>
                                    </div>
                                </div>
                                : undefined}
                        </a>



                    </div>
                    {/* <div role="none">
                <a href="#" class="font-sans block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
                  Log in
              </a>
              </div> */}
                </div>
            </div>
        </div>

    </>)
}


export default NavBar
