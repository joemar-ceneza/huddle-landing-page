import ResponsiveWebsite from "../images/screen-mockups.svg";
import IconCommunities from "../images/icon-communities.svg";
import IconMessages from "../images/icon-messages.svg";
import GrowTogether from "../images/illustration-grow-together.svg";
import FlowingConversation from "../images/illustration-flowing-conversation.svg";
import YourUsers from "../images/illustration-your-users.svg";
import { TypeAnimation } from "react-type-animation";
import AnimatedNumbers from "react-animated-numbers";
import { useState } from "react";
import React from "react";

export default function HuddlePage() {
    const [num, setNum] = React.useState(1403);
    const [num2, setNum2] = React.useState(2773);
    return (
        <section className="max-w-screen-2xl w-3/4 mx-auto max-xl:w-11/12">
            <h2 className="font-poppins text-5xl text-gray-800 mt-24 py-4 max-xs:text-xl max-xs:mt-10">
                <TypeAnimation
                sequence={[
                    'Build the Community your Fans will Love', 1000,
                    '', 1000,
                    'Build the Community your Fans will Love', 1000,
                ]}
                speed={50}
                repeat={Infinity}
                />
            </h2>
            <p className="max-w-md flex justify-center mx-auto my-4 text-center text-gray-700">
                Huddle re-images the way we build communities. 
                You have a voice, but so does your audience. 
                Create connections with your users as you engage in genuine discussion.
            </p>
            <button className="w-72 bg-pink-500 hover:bg-pink-400 rounded-full text-white my-6 p-4 shadow-lg max-xs:w-40 max-xs:p-4">Get Started For Free</button>
            <img className="max-w-full mx-auto my-24 max-xs:my-4" src={ResponsiveWebsite} alt="Responsive Website"/>
            <div className="w-9/12 flex justify-between mx-auto my-72 max-lg:w-5/6 max-md:flex-col max-xs:my-10">
                <div className="max-md:mx-auto max-lg:my-10 max-md:text-center max-xs:my-4">
                    <img src={IconCommunities} alt="Icon Communities" />
                    <h1 className="text-8xl text-gray-800 font-bold max-xs:text-5xl">
                        <AnimatedNumbers
                            includeComma
                            animateToNumber={num}
                            configs={(number, index) => {
                                return { 
                                    mass: 1, tension: 230 * (index + 1), friction: 100 
                                };
                            }}
                        />
                    </h1>
                    <p className="font-medium capitalize text-gray-500 my-4">communities formed</p>
                </div>
                <div className="max-md:mx-auto max-lg:my-10 max-md:text-center max-xs:my-4">
                    <img src={IconMessages} alt="Icon Messages" />
                    <h1 className="text-8xl text-gray-800 font-bold max-xs:text-5xl">
                        <AnimatedNumbers
                            includeComma
                            animateToNumber={num2}
                            configs={(number, index) => {
                                return { 
                                    mass: 1, tension: 230 * (index + 1), friction: 100 
                                };
                            }}
                        />
                    </h1>
                    <p className="font-medium capitalize text-gray-500 my-4">messages sent</p>
                </div>
            </div>
            <div className="my-28">
                <div className="flex justify-center items-center mx-auto my-72 max-md:flex-col max-xs:my-20">
                    <div className="w-2/4 text-left mr-28 max-xl:mr-4 max-md:w-full max-md:mr-0 max-md:text-center">
                        <h1 className="font-poppins font-black text-4xl capitalize text-gray-800 max-xs:text-xl">grow together</h1>
                        <p className="max-w-md my-4 text-gray-700 max-md:max-w-full">Generate meaningful discussion with your audience and build a strong, loyal community.
                        Think of the insighful conversations you miss out on with a feedback form.</p>
                    </div>
                    <img className="w-1/2" src={GrowTogether} alt="Grow Together" />
                </div>
                <div className="flex justify-center items-center mx-auto my-72 max-md:flex-col-reverse max-xs:my-20">
                    <img className="w-1/2" src={FlowingConversation} alt="Flowing Conversation" />
                    <div className="w-2/4 max-md:w-full text-left ml-28 max-md:ml-0 max-xl:ml-4 max-md:text-center">
                        <h1 className="font-poppins font-black text-4xl capitalize text-gray-800 max-xs:text-xl">flowing conversations</h1>
                        <p className="max-w-md max-md:max-w-full my-4 text-gray-700">You wouldn't paginate a conversation in real life, so why do it online?
                        Our threads have just-in-time loading for a more natural flow.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mx-auto my-72 max-md:flex-col max-xs:my-20">
                    <div className="w-2/4 text-left mr-28 max-xl:mr-4 max-md:w-full max-md:mr-0 max-md:text-center">
                        <h1 className="font-poppins font-black text-4xl capitalize text-gray-800 max-xs:text-xl">your users</h1>
                        <p className="max-w-md max-md:max-w-full my-4 text-gray-700">It takes no time at all to integrate Huddle with your app's authentication
                        solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                    </div>
                    <img className="w-1/2" src={YourUsers} alt="Your Users" />
                </div>
            </div>
        
            <div className="my-56">
                <h2 className="text-5xl font-bold capitalize my-4 max-xs:text-xl">ready to build your community?</h2>
                <button className="w-72 bg-pink-500 hover:bg-pink-400 rounded-full text-white my-6 p-4 shadow-lg max-xs:w-40 max-xs:p-4">Get Started For Free</button>
            </div>
        </section>
    );
}