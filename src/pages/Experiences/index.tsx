import { useState } from "react";

type ExperienceType = {
    companyName: string,
    office: string,
    period: string,
    description: string,
    skills?: string[]
}

const experiences = [
    {
        companyName: 'Grupo Boticario',
        office: 'Desenvolvedor de Software',
        period: '2022 - Atualmente',
        description: 'No Grupo Boticário, um dos maiores players no mercado de beleza, atuo no marketplace Beleza na Web, integrando a squad dedicada a criar e aprimorar soluções focadas na experiência do consumidor final e do vendedor no pós-venda. Minha responsabilidade é desenvolver soluções que proporcionem uma experiência única, rápida e transparente para ambos, garantindo a satisfação e a fidelidade dos nossos clientes. Com um enfoque em inovação e qualidade, contribuo para que o marketplace ofereça um serviço eficiente e de alto padrão, alinhado com os valores e a reputação do Grupo Boticário.',
        skills: ['JavaScript', 'TypeScript', 'React', 'HTML & CSS', 'Next.js', 'Node.js', 'GraphQL', 'Design System', 'Micro Frontends']
    },
    {
        companyName: 'ArcelorMittal',
        office: 'Trainee',
        period: '2020 - 2022',
        description: 'Trabalhei na oficina mecânica do laminador, a última etapa do processo siderúrgico, onde a qualidade do trabalho é crucial. Fui responsável pelos componentes do laminador que entram em contato direto com a matéria-prima. Minhas principais atividades incluíam controle, manutenção, ajuste, calibragem e montagem dessas peças, assegurando que operassem de maneira eficiente e com a máxima precisão. A experiência exigia um alto padrão de atenção aos detalhes e compromisso com a qualidade, garantindo a integridade do processo de produção e a excelência dos produtos finais.',
    },
    {
        companyName: 'Contecnica',
        office: 'Programador de maquinas CNC',
        period: '2020 - 2020',
        description: 'Realizava a leitura e interpretação de desenhos técnicos para projetar, implementar e manter programas destinados à operação dessas máquinas. Meu trabalho envolvia a otimização e melhoria contínua dos sistemas e processos de usinagem, com foco principal em apoiar a segurança, reduzir os custos operacionais e aumentar a produtividade. Além disso, acompanhava de perto os processos e monitorava as máquinas em produção para garantir a eficiência e a precisão das operações.',
    },
]

const Experiences = () => {
    const [experienceSelected, setExperienceSelected] = useState<ExperienceType>(experiences[0])

    let topAnimation: string = '0';
    topAnimation = `${experiences.findIndex(({ companyName }) => companyName == experienceSelected.companyName) * 44}px`

    return (
        <>
            <h1 className="font-bold mt-5 text-5xl text-slate-200 tracking-tight">Experiências</h1>
            <div className="mt-10 flex items-start gap-4">
                <div>
                    <ul className="w-max relative">
                        <div className={`w-1 h-11 absolute -left-px bg-teal-300 rounded-full`} style={{ top: topAnimation, transition: 'all .3s ease 0s' }} />
                        {
                            experiences.map((experience) => (
                                <li className="flex">
                                    <button
                                        className={`px-5 py-3 text-sm font-bold tracking-widest border-l-2 border-slate-400 w-full text-start hover:bg-teal-400/10 hover:text-teal-300 ${experienceSelected.companyName == experience.companyName ? 'bg-teal-400/10 text-teal-300' : ''}`}
                                        onClick={() => {
                                            setExperienceSelected(experience)
                                        }}
                                    >
                                        {experience.companyName}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="ml-7 flex flex-col">
                    <h2 className="text-xl text-slate-200">{experienceSelected.office} · {experienceSelected.companyName}</h2>
                    <p className="mt-4">{experienceSelected.period}</p>
                    <p className="mt-4">{experienceSelected.description}</p>
                    <ul className="flex mt-2 flex-wrap">
                        {experienceSelected?.skills?.map((skill) => (
                            <li className="mt-2 mr-1.5 px-3 py-1 text-xs font-medium leading-5 text-teal-300 bg-teal-400/10 rounded-full">{skill}</li>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Experiences;