import React from 'react';

const Blogs = () => {
	return (
		<div className='md:mt-0  mt-[300px]'>
			<div className="space-y-4 max-w-[1300px] mx-auto my-10 ">
				{/* Question - 1 */}
				<details className="group border-l-8 border-purple-700 bg-gray-50 p-6">
					<summary className="flex cursor-pointer items-center justify-between">
						<h2 className="text-lg font-medium text-gray-900">Difference between SQL and NoSQL</h2>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Since SQL has been around for more than 40 years, it is well-known, well-researched, and
						frequently utilized. It's safe and adaptable, and it works especially well for
						challenging problems. A greater amount of attention must be made to organize and
						comprehend the data before it is used because SQL limits the user to working within a
						preset tabular schema. NoSQL databases' dynamic schemata enable representation of
						different structures, frequently side by side, enabling more flexibility. Less planning
						is required, there is more flexibility when adding new properties or fields, and
						different database syntax options are available.The programming language used to
						communicate with relational databases is called SQL. (Relational databases represent
						data as rows and tables of records connected by logical linkages.) NoSQL DBMs are a
						subset of non-relational DBMs that often do not employ SQL.
					</p>
				</details>

				{/* Question - 2 */}

				<details className="group border-l-8 border-purple-700 bg-gray-50 p-6">
					<summary className="flex cursor-pointer items-center justify-between">
						<h2 className="text-lg font-medium text-gray-900">
							What is JWT, and how does it work?
						</h2>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						An open standard (RFC 7519) called JSON Web Token (JWT) is used to safely transport data
						between parties in the form of JSON objects. It is small, readable, and digitally signed
						by the Identity Provider using a private key or a public key pair (IdP). As a result,
						the token's legitimacy and integrity can be confirmed by other parties. Using JWT serves
						to assure data authenticity rather than to conceal data. JWT is not encrypted; it is
						signed and encoded. JWT is a stateless, token-based authentication method. Since the
						session is client-side based and stateless, the server does not entirely rely on a
						datastore (database) to store session data.
					</p>
				</details>

				{/* Question - 3 */}
				<details className="group border-l-8 border-purple-700 bg-gray-50 p-6">
					<summary className="flex cursor-pointer items-center justify-between">
						<h2 className="text-lg font-medium text-gray-900">
							What is the difference between javascript and NodeJS?
						</h2>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						JavaScript is a cross-platform, interpreted, and lightweight client-side scripting
						language. It is present in HTML and Java. On the other hand, Node.js is a server-side
						programming language that is built on V8. It is therefore employed to develop
						network-centric applications. It is a networked system designed for real-time
						applications that require a lot of data. It is evident from a comparison between node js
						vs python that node js will always be the better choice. To access any operating system,
						a certain non-blocking technique is necessary. In JavaScript, there are just a few
						crucial objects, and they are all OS-specific. Contrarily, any JavaScript programming
						can now run non-blocking software operations using Node.js. There are no OS-specific
						constants in it. Companies are able to read and write to the hard drive thanks to
						Node.js' strong link with the system files.
					</p>
				</details>

				{/* Question - 4 */}
				<details className="group border-l-8 border-purple-700 bg-gray-50 p-6">
					<summary className="flex cursor-pointer items-center justify-between">
						<h2 className="text-lg font-medium text-gray-900">
							How does NodeJS handle multiple requests at the same time?
						</h2>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						The EventLoop, an infinite loop that accepts and processes requests, and the EventQueue,
						which queues incoming client requests, are both used by the NodeJS server. The EventLoop
						is a single-threaded listener for the EventQueue, which handles incoming requests in
						accordance with the FIFO principle. When a new request is received, NodeJS first
						determines whether blocking IO operations are necessary. If not, the EventLoop handles
						the request and sends the response right back to the client. If the answer is yes, the
						thread management receives the request and, using an algorithm, chooses an idle thread
						from the pool to carry out the request. The thread returns the response to the EventLoop
						after completing the request processing activity, and the EventLoop then sends the
						response to the client.
					</p>
				</details>
			</div>
		</div>
	);
};

export default Blogs;
