// import Image component
import Image from "next/image";

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
               <div className="relative w-24 h-24 border-2 border-red-500 hidden lg:inline-grid">

                    {/* Image */}
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />

                </div>

                {/* Middle Section of the Header */}
                <div className="border-2 border-green-500">
                    <h2>Middle Section of Header</h2>
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
