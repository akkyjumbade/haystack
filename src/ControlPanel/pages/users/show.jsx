// import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Page } from "../../components/templates";
import PageHeader from "../../widgets/PageHeader";

export default function create({ user, errors, ...props }) {
   // const { props: { errors  }} = usePage()
   return (
      <Page title={user.name}>
         <Page.Section>
            <PageHeader />
            <>
               {/* This example requires Tailwind CSS v2.0+ */}
               <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                     <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Applicant Information
                     </h3>
                     <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Personal details and application.
                     </p>
                  </div>
                  <div className="border-t border-gray-200">
                     <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Full name</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              Margot Foster
                           </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Application for</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              Backend Developer
                           </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Email address</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              margotfoster@example.com
                           </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">
                              Salary expectation
                           </dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              $120,000
                           </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">About</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                              proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit
                              deserunt qui eu.
                           </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <ul
                                 role="list"
                                 className="border border-gray-200 rounded-md divide-y divide-gray-200"
                              >
                                 <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                       {/* Heroicon name: solid/paper-clip */}
                                       <svg
                                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                       >
                                          <path
                                             fillRule="evenodd"
                                             d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                             clipRule="evenodd"
                                          />
                                       </svg>
                                       <span className="ml-2 flex-1 w-0 truncate">
                                          {" "}
                                          resume_back_end_developer.pdf{" "}
                                       </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                       <a
                                          href="#"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                       >
                                          {" "}
                                          Download{" "}
                                       </a>
                                    </div>
                                 </li>
                                 <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                       {/* Heroicon name: solid/paper-clip */}
                                       <svg
                                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                       >
                                          <path
                                             fillRule="evenodd"
                                             d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                             clipRule="evenodd"
                                          />
                                       </svg>
                                       <span className="ml-2 flex-1 w-0 truncate">
                                          {" "}
                                          coverletter_back_end_developer.pdf{" "}
                                       </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                       <a
                                          href="#"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                       >
                                          {" "}
                                          Download{" "}
                                       </a>
                                    </div>
                                 </li>
                              </ul>
                           </dd>
                        </div>
                     </dl>
                  </div>
               </div>
            </>

         </Page.Section>
      </Page>
   )
}
