import ProfileImage from "../../assets/ProfileImage.jpeg"
import { FaGithub as GitHubIcon, FaWhatsapp as WhatsAppIcon, FaLinkedin as LinkedinIcon } from "react-icons/fa";

const Header = () => {
    return (
        <header className="sticky top-0 flex flex-col justify-between w-1/2 pt-24 pb-24 h-screen">
            <div className="flex flex-col">
                <img className="rounded-full border-4 border-slate-400 w-52 h-52 " src={ProfileImage} alt="profile image" />
                <h1 className="font-bold mt-5 text-5xl text-slate-200 tracking-tight">
                    Italo Avelino
                </h1>
                <h2 className="font-bold mt-3 text-xl text-slate-200 tracking-tight">
                    Desenvolvedor Full-Stack
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I build pixel-perfect, engaging, and accessible digital experiences.
                </p>
            </div>
            <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/italoavelino" target="_blank">
                    <LinkedinIcon size={30} />
                </a>
                <a href="https://github.com/italoavelino" target="_blank">
                    <GitHubIcon size={30} />
                </a>
                <a href="http://wa.me/5531991144118" target="_blank">
                    <WhatsAppIcon size={30} />
                </a>
            </div>
        </header>
    );
}

export default Header;