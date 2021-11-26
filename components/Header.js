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
} from "@heroicons/react/outline";

function Header() {
    return (
        <div>
            {/* Header Parent Container */}
           <div className="border-2 border-black flex justify-between max-w-6xl">

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
                <div className="border-2 border-green-500">

                    {/* Search Icon */}
                    {/* 
                        add icons using heroicons:

                            https://heroicons.com/

                            https://github.com/tailwindlabs/heroicons
                    */}
                    <div>
                        {/* import the search icon from heroicon */}
                        <SearchIcon className="h-5 w-5 text-gray-500 border-2 border-black" />
                    </div>
                   
                   {/* Search Bar */}
                   <input type="text" placeholder="Search..." className="border-2 border-black"/>

                </div>

                {/* Right Section of the Header */}
                <div className="border-2 border-pink-500">
                    <h2>Right Section Header</h2>
                </div>
                            
           </div>
            
        </div>
    )
}

export default Header;
