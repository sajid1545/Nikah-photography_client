#### App Title ---

## Nikah Photography

## Live Site

(https://assignment-11-cf2b9.firebaseapp.com/ “Nikah Photography”)

#

1. This is a personal photography service app. In this app users can check out my services and add review
2. In this app My services and Add review pages are protected, unless user is signed in, they can't view the content or use the functionalities of those pages.
3. In this app user can sign in by Google and by using email. User must register first with email and password if he/she wish to sign in using email.
4. While login in or registering user will be given an **Access token** which will expire within one day.After expiration user must login again to see content of My reviews page.
5. In this app if user is logged in, user can add services from add services page , and give review of the services from service details page.

6. Signed in user can see there profile picture in the top right corner of the navbar. While registering user can add a profile picture and update its name.
7. User can check all the reviews users have give from My reviews page. Users can delete or update the the review text, user picture and user name.
8. The services in service is sorted in descending order, latest added service will appear first
9. In home page only 3 services are shown, which is also sorted in descending order.
10. In service details page the reviews ar sorted in descending order, this sorting is done by comparing the timestamp.
11. In order to write a review you must login first, without login all other reviews will be visible but review form won't be visible until you login.
12. Only 6 services can be seen in a page (because of pagination)

#

## Packages and Technologies used (Client Side)

1. Tailwind CSS , daisyui (Tailwind component library)
2. React router dom to route through components
3. React (JS library)
4. react-icons --> used as it is easier to work with
5. react-loader-spinner --> more fancier than normal ones and easily customizable
6. firebase-authentication ---> firebase allows users to register or login to the app
7. react-awesome-slider ---> for a fancy slider
8. react-toastify -->to show a toast (success / error)
9. react-helmet-async --> to make the page title dynamic and different for every pages
10. react-photo-view --> to preview an image
11. AOS LIBRARY --> for animation
12. react-scroll-to-top ---> scroll to the top of the page

#

## Packages and Technologies used (Server Side)

1. Nodemon --> to monitor changes while updating
2. Express js (Node js framework)
3. Cors --> supports data transfer between servers
4. Colors --> to see the output in different colors in console
5. jsonwebtoken --> to securing information sharing between server and client
6. dotenv --> to separate secrets from my code
