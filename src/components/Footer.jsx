import LogoWhite from "../images/logo-white.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white text-left">
            <div className="max-w-screen-2xl w-3/4 max-xl:w-11/12 mx-auto">
                <div className="flex justify-between mx-auto my-20 max-md:flex-col max-xs:my-16">
                    <div className="w-2/4 max-md:w-full max-md:mx-auto max-xs:my-10">
                        <img className="w-2/4" src={LogoWhite} alt="Logo White" />
                        <p className="max-w-xs my-8 max-xs:my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibullum a, ultrices quis sem.</p>
                        <div className="flex my-2">
                            <PhoneInTalkIcon />
                            <p className="ml-8">phone: +1-543-123-4567</p>
                        </div>
                        <div className="flex my-2">
                            <MailIcon />
                            <p className="ml-8">example@huddle.com</p>
                        </div>
                        <div className="my-10 max-xs:my-6">
                            <FacebookIcon className="cursor-pointer max-xs:text-xs"/>
                            <InstagramIcon className="mx-6 cursor-pointer max-xs:text-xs max-xs:mx-4"/>
                            <TwitterIcon className="cursor-pointer max-xs:text-xs"/>
                        </div>
                    </div>
                    <div className="w-2/4 max-md:w-full ml-36 max-xl:ml-0">
                        <h3 className="font-poppins text-2xl uppercase max-xs:text-xl">newsletter</h3>
                        <p className="max-w-xs my-8 mb-4 max-xs:my-2">To receive tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address.</p>
                        <form action="">
                            <input className="text-black text-lg rounded-md mr-6 p-2" type="email" name="email" id="email" />
                            <input className="rounded-lg bg-pink-600 hover:bg-pink-400 capitalize p-3 px-10 my-4 cursor-pointer" type="submit" value="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}