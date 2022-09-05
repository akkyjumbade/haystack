import Link from "next/link";
import React from "react";
import Template from "../../Template";
import { getCategoryFile, getCategoryFiles } from "../../utils/categories";
import { getActivePosts, getPostFiles } from "../../utils/posts";
import { getSettings } from "../../utils/settings";

function PostsGrid({ posts, category }) {
   return (
      <>
         <section name="blog-component">
            <div className="container">
               <div className="py-xl-4 py-lg-4 py-md-2 py-sm-2">
                  <p className="h1 font-weight-normal text-uppercase blog-listing-page-main-heading">
                  {category?.title}
                  </p>
               </div>
               <div className="row mt-3">
                  {posts?.map(cat => (
                     <div key={cat.slug} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                        <div className="blog-listing-page-img">
                           {/* <Image src={FeaturedImg} /> */}
                           {/* {JSON.stringify({ cat })} */}
                           <img src={cat.image_url} className="w-full img-responsive" />
                        </div>
                        <h3 className="blog-listing-page-heading my-sm-2 my-1">
                           {cat.title}
                        </h3>
                        <p className="blog-listing-page-read-more font-weight-normal">
                           <Link href={`/post/${cat.slug}`}>Read more &gt;&gt;</Link>
                        </p>
                     </div>
                  ))}

               </div>
               {/* <div className="d-flex justify-content-ceenter align-items-center my-3">
                  <button id="load-more-btn" className="btn btn-primary m-auto">
                     Load More
                  </button>
               </div> */}
            </div>
         </section>
      </>
   );
}


function BlogCategory({ posts, category }) {
   return (
      <>
         <Template>
            {/* <h1>{category?.title}</h1> */}
            <PostsGrid posts={posts} category={category} />
         </Template>
      </>
   );
}

export async function getStaticPaths() {
   // const slugs = paths
   let slugs = getCategoryFiles()
   slugs = slugs?.map(slg => {
      return {
         params: { 'category-slug': slg.slug }
      }
   })
   console.log({ slugs })

   return {
     paths: slugs,
     fallback: true,
   }
}

export async function getStaticProps(context) {
   const categorySlug = context.params['category-slug'];
   const category = getCategoryFile(context.params['category-slug'])
   let allPosts = getActivePosts()
   const posts = allPosts?.filter(postItem => {
      return postItem.category?.includes(categorySlug)
   })
   console.log({ posts })
   return {
      props: {
         posts,
         category
      }
   }
}



export default BlogCategory;