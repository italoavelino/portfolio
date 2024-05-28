import { Link, useLocation } from "react-router-dom";
import ProfileImage from "../../assets/ProfileImage.jpeg"
import { FaGithub as GitHubIcon, FaWhatsapp as WhatsAppIcon, FaLinkedin as LinkedinIcon } from "react-icons/fa";

const pagesNav = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'Projetos',
        path: '/projetos'
    },
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
        <header className="sticky top-0 flex flex-col justify-between w-1/2 py-24 h-screen">
            <div>
                <div className="flex flex-col">
                    <img className="rounded-full border-4 border-slate-400 w-52 h-52 " src={ProfileImage} alt="profile image" />
                    <h1 className="font-bold mt-5 text-5xl text-slate-200 tracking-tight">
                        Italo Avelino
                    </h1>
                    <h2 className="font-bold mt-3 text-xl text-slate-200 tracking-tight">
                        Desenvolvedor Full-Stack
                    </h2>
                    <p className="mt-4 max-w-xs leading-normal">
                        Sou um desenvolvedor especializado em construir aplicações responsivas, pixel-perfect, performáticas e com acessibilidade.
                    </p>
                </div>
                <nav className="mt-16 w-max">
                    <ul>
                        {pagesNav.map(({ label, path }) =>
                            <li>
                                <Link to={path} className="py-3 group flex items-center">
                                    <span className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${location.pathname == path ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`} />
                                    <span className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${location.pathname == path ? 'text-slate-200' : 'text-slate-500'}`}>
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <ul className="flex gap-5 max-w-6">
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