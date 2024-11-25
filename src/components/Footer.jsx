import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-[#202124] absolute bottom-0 w-screen">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <a href="#" className="hover:underline">
                        Notes™
                    </a>
                    . All Rights Reserved.
                    <div className="text-gray-500 text-sm">
                    This is created by
                    <span className="text-blue-500"> Naimur Rahman</span>

                </div>
                </span>
                
            </div>
        </footer>
    );
};

export default Footer;
