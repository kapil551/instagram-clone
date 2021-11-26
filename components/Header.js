// import Image component
import Image from "next/image";

function Header() {
    return (
        <div>
            {/* Header Parent Container */}
           <div>

               {/* Left Section of the Header */}
               {/* 
                    We need to make the parent div's position as "relative" so that the child image is positiond w.r.t to it's immediate
                    "relatively" positioned parent div.
                */}
               <div className="relative w-24 h-24">

                    {/* Image */}
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />

                </div>

                {/* Middle Section of the Header */}

                {/* Right Section of the Header */}
                            
           </div>
            
        </div>
    )
}

export default Header;
