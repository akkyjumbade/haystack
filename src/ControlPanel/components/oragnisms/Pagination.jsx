// import { InertiaLink } from "@inertiajs/inertia-react"
// import { route } from "../../utils"

export default function Pagination({ pagination }) {
   console.log({ pagination })
   return (
      // <div className="flex items-center gap-3">
      //    <InertiaLink href={pagination.prev_page_url} >Prev</InertiaLink>
      //    <InertiaLink href={pagination.next_page_url} >Next</InertiaLink>
      // </div>
      <>
         <div className=" flex items-center justify-between ">
            <div className="flex-1 flex justify-between sm:hidden">
               <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
               >
                  Previous
               </a>
               <a
                  href="#"
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
               >
                  Next
               </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
               <div>
                  <p className="text-sm text-gray-700 flex gap-1">
                     Showing
                     {/* space */}
                     <span className="font-medium">1</span>
                     {/* space */}
                     to
                     {/* space */}
                     <span className="font-medium">10</span>
                     {/* space */}
                     of
                     {/* space */}
                     <span className="font-medium">97</span>
                     {/* space */}
                     results
                  </p>
               </div>
               <div>
                  <nav
                     className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                     aria-label="Pagination"
                  >
                     <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                     >
                        <span className="sr-only">Previous</span>
                        <svg
                           className="h-5 w-5"
                           x-description="Heroicon name: solid/chevron-left"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           aria-hidden="true"
                        >
                           <path
                              fillRule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </a>
                     {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                     <a
                        href="#"
                        aria-current="page"
                        className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                     >
                        1
                     </a>
                     <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                     >
                        2
                     </a>
                     <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                     >
                        3
                     </a>
                     <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                        ...
                     </span>
                     <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                     >
                        8
                     </a>
                     <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                     >
                        9
                     </a>
                     <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                     >
                        10
                     </a>
                     <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                     >
                        <span className="sr-only">Next</span>
                        <svg
                           className="h-5 w-5"
                           x-description="Heroicon name: solid/chevron-right"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           aria-hidden="true"
                        >
                           <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </a>
                  </nav>
               </div>
            </div>
         </div>

      </>
   )
}
