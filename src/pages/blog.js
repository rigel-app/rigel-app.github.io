import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Navbar from "../components/nav-bar"

export default function Blog({ data }) {
  const [showModal, setShowModal] = useState(false)
  const { posts } = data.blog

  return (
    <html class="dark bg-darkbackg">
      <div class="bg-white dark:bg-darkbackg h-full">
        {/* <div class=" h-full mx-auto">  */}
        {/* <div class="pb-8 h-full sm:pb-16 md:pb-20 "> */}
          {/* <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-darkbackg transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon class="" points="50,0 100,0 50,100 0,100" />
            </svg> */}

          <Navbar />

          <div class="bg-white dark:bg-darkbackg w-screen h-screen flex justify-center mt-6">
            <div class="flex items-center justify-start flex-col w-full md:w-2/3 px-6 lg:px-40 md:px-40">
              <h1 class="font-sans mt-3 text-gray-300 self-start">Rigel's Blog</h1>

              {posts.map(post => (
                <article class="w-full h-full" key={post.id}>
                  <a class="m-0" href={post.fields.slug}>
                    <h3 class="font-sans m-0 mt-3 text-primary self-start">{post.frontmatter.title}</h3>
                  </a>
                  <p class="font-sans mt-1 text-gray-300 self-start text-sm">
                    {post.frontmatter.date}
                  </p>
                </article>
              ))}
            </div>
          </div>

        </div>
      {/* </div> */}

    </html>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`




