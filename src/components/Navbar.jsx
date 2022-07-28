
const Navbar = () => {
    return ( 
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-4">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="pl-4">
               <p class="text-lg font-medium text-white">Jassan's Page</p>
            </div>
            <div class="pr-9 absolute right-0 float-right flex space-x-6 justify-end items-center">
                <a href="https://www.linkedin.com/in/jassan-wirth/"><img src="/linkedin-icon.png" width="50" height="50"/></a>
                <a href="https://github.com/jassanw"><img src="/github-logo.png" width="40" height="40"/></a>
            </div>
        </div>
    </nav>
    )

}
 
export default Navbar;