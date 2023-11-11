'use client'
import "../styles/header.scss";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="hed flex mx-auto bg-gray-600 items-center">
                <div className="head_logo">
                    <Image src={"/images/logo/Logo.png"} alt={"truyen"} width={100}
                           height={100} className="rounded"/>
                </div>
                <div className="flex head_middle items-center ml-52">
                    <div className="flex head_search mx-0.5 bg-amber-50 rounded">
                        <input type="text" className="" placeholder="Tim Truyen"/>
                        <button><Image src={'/images/logo/btn_search.png'} alt={"search"}
                                       width={30} height={30}
                        />

                        </button>
                    </div>

                    <div className="flex head_light_mes ml-7">
                        <div className="mr-3.5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.7em" viewBox="0 0 384 512">
                                <path
                                    d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"/>
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.7em" viewBox="0 0 512 512">
                                <path
                                    d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"/>
                            </svg>
                        </div>
                    </div>

                </div>

                <div className="hover-container">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-3 border border-gray-700 hover:border-transparent rounded">
                        hi,guest
                    </button>
                    <ul className=" px-3 options">
                        <li>Profile</li>
                        <li >Cart</li>
                        <li >Log out</li>
                    </ul>
                </div>
            </div>
        </>
    )
}