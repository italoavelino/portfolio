import { Link, useLocation } from "react-router-dom";
import ProfileImage from "../../assets/ProfileImage.jpeg"
import { FaGithub as GitHubIcon, FaWhatsapp as WhatsAppIcon, FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

const pagesNav = [
    {
        label: 'Sobre mim',
        to: '/'
    },
    {
        label: 'Experiências',
        to: '/experiencias'
    }
]

const socialMedia = [
    {
        link: 'https://www.linkedin.com/in/italoavelino',
        icon: LinkedinIcon
    },
    {
        link: "https://github.com/italoavelino",
        icon: GitHubIcon
    },
    {
        link: "http://wa.me/5531991144118",
        icon: WhatsAppIcon
    }
]

const Header = () => {
    const location = useLocation()

    return (
        <header className="lg:sticky lg:top-0 flex flex-col justify-between lg:w-1/2 pt-5 lg:py-24 lg:h-screen max-h-screen">
            <nav className="flex lg:hidden justify-between">
                <img className="w-16" src="./icon.png" alt="logo" />
                <button onClick={() => console.log('foi')}>
                    <LuMenu width={64} size={64} />
                </button>
            </nav>
            <div>
                <div className="flex flex-col">
                    <img className="hidden lg:block rounded-full border-4 border-slate-400 w-52 h-52 " src={ProfileImage} alt="profile image" />
                    <h1 className="font-bold mt-10 text-5xl text-slate-200 tracking-tight">
                        Italo Avelino
                    </h1>
                    <h2 className="font-bold mt-3 text-xl text-slate-200 tracking-tight">
                        Desenvolvedor Full-Stack
                    </h2>
                    <p className="mt-4 max-w-xs leading-normal">
                        Sou um desenvolvedor especializado em construir aplicações responsivas, pixel-perfect, performáticas e com acessibilidade.
                    </p>
                </div>
                <nav className="mt-16 w-max hidden lg:block">
                    <ul>
                        {
                            pagesNav.map(({ label, to }) =>
                                <li>
                                    <Link to={to} className="py-3 group flex items-center">
                                        <span className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${location.pathname == to ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`} />
                                        <span className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${location.pathname == to ? 'text-slate-200' : 'text-slate-500'}`}>
                                            {label}
                                        </span>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
            <ul className="flex gap-5 mt-16 max-w-6">
                {socialMedia.map(({ link, icon: Icon }) =>
                    <li>
                        <a href={link} target="_blank">
                            <Icon size={30} />
                        </a>
                    </li>
                )}
            </ul>
        </header>
    );
}

export default Header;