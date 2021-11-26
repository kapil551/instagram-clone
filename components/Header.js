// import Image component
import Image from "next/image";

// import all required icons from heroicons
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    PlusIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <div>
            {/* Header Parent Container */}
           <div className="border-2 border-black flex justify-between max-w-6xl items-center mx-5 lg:mx-auto">

               {/* Left Section of the Header */}
               {/* 
                    We need to make the parent div's position as "relative" so that the child image is positiond w.r.t to it's immediate
                    "relatively" positioned parent div.
                */}
                {/*
                    Responsive styling using tailwindcss:
                    
                        - Always remember that the default styling that you do using tailwindcss is always for "mobile view".
                        - We add breakpoints for responsive behavior for larger screens only.
                    
                    Adding responsive behavior to the image of the left section of header:

                        - I want to hide the image by defalt for "mobile view" and want to show the image only for width >= 1024px
                        
                 */}
               <div className="relative w-24 h-24 border-2 border-red-500 hidden lg:inline-grid cursor-pointer">

                    {/* Image */}
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />

                </div>

                {/* Image Icon */}
                {/* 
                    Responsive styling using tailwindcss:
                    
                        - Always remember that the default styling that you do using tailwindcss is always for "mobile view".
                        - We add breakpoints for responsive behavior for larger screens only.
                    
                    Adding responsive behavior to the "image icon" of the left section of header 

                        - I want to show the "image icon" by defalt for "mobile view" and want to hide the image only for width >= 1024px
                */}
                <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">

                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit="contain"
                    />

                </div>

                {/* Middle Section of the Header - Search Bar */}
                <div className="max-w-xs">
                    <div className="border-2 border-green-500 relative mt-1 p-3 rounded-md">

                        {/* Search Icon */}
                        {/* 
                            add icons using heroicons:

                                https://heroicons.com/

                                https://github.com/tailwindlabs/heroicons
                        */}
                        {/* Styling the search icon */}
                        <div className="border-2 border-black absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            {/* import the search icon from heroicon */}
                            <SearchIcon className="h-5 w-5 text-gray-500 border-2 border-black" />
                        </div>
                    
                    {/* Search Bar */}
                    <input type="text" placeholder="Search..." className="border-2 border-gray-300 rounded-md bg-gray-50 block w-full pl-10 sm:text-sm
                                                                                focus:ring-black focus:border-black"/>

                    </div>
                </div>

                {/* Right Section of the Header */}
                <div className="border-2 border-pink-500 flex items-center justify-end space-x-4">
                   
                   <HomeIcon className="hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                   {/* 
                        Responsive styling using tailwindcss:
                    
                        - Always remember that the default styling that you do using tailwindcss is always for "mobile view".
                        - We add breakpoints for responsive behavior for larger screens only.
                    
                        Adding responsive behavior to the "menuIcon" of the right section of header 

                        - I want to show the "menuIcon" by defalt for "mobile view" and want to hide the "menuIcon" for width >= 768px
                   */}
                   <MenuIcon className="h-6 cursor-pointer md:hidden" />

                   {/* 
                        Responsive styling using tailwindcss:
                    
                        - Always remember that the default styling that you do using tailwindcss is always for "mobile view".
                        - We add breakpoints for responsive behavior for larger screens only.
                    
                        Adding responsive behavior to the all other icons of the right section of header 

                        - I want to hide all other icons by default for "mobile view" and want to show them for width >= 
                   */}
                    <PaperAirplaneIcon className="hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                    <PlusCircleIcon className="hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                    <UserGroupIcon className="hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                    <HeartIcon className="hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />

                    {/* profile picture */}
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" 
                        alt="profile pic"
                        className="border-2 border-black h-10 rounded-full cursor-pointer"
                    />
            
                </div>
                            
           </div>
            
        </div>
    )
}

export default Header;
