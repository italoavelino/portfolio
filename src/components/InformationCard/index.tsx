import ProfileImage from "../../assets/ProfileImage.jpeg"
import { FaGithub as GitHubIcon, FaWhatsapp as WhatsAppIcon, FaLinkedin as LinkedinIcon } from "react-icons/fa";

const InformationCard = () => {
    return (
        <div className="flex flex-col items-center">
            <img className="rounded-full w-52 h-52 " src={ProfileImage} alt="profile image" />
            <h1 className="font-sans font-extralight mt-5 uppercase text-4xl text-slate-500 tracking-widest">
                Italo Avelino
            </h1>
            <p className="font-sans font-extralight mt-3 uppercase text-base text-slate-500 tracking-widest">
                Desenvolvedor Full-Stack
            </p>
            <div className="flex mt-3 gap-6">
                <a href="https://www.linkedin.com/in/italoavelino" target="_blank">
                    <LinkedinIcon size={55} />
                </a>
                <a href="https://github.com/italoavelino" target="_blank">
                    <GitHubIcon size={55} />
                </a>
                <a href="http://wa.me/5531991144118" target="_blank">
                    <WhatsAppIcon size={55} />
                </a>
            </div>
        </div>
    );
}

export default InformationCard;