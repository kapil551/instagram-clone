// import Image component
import Image from "next/image";

function Header() {
    return (
        <div>
            <h2> I am a header</h2>

            {/* Left Section of the Header */}
            <div>

                {/* Image */}
                <Image
                    src="https://links.papareact.com/ocw"
                    layout="fill"
                />
                
            </div>

            {/* Middle Section of the Header */}

            {/* Right Section of the Header */}
        </div>
    )
}

export default Header;
