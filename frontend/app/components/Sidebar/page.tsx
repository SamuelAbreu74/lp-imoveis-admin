"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- HEROICONS SVG COMPONENTIZADOS ---
// Ícones de Dashboard (Home)
const DashboardOutline = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
</svg>
    ;
const DashboardSolid = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
</svg>
    ;

// Ícones de Imóveis (Building Office)
const ImoveisOutline = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
</svg>
    ;
const ImoveisSolid = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
</svg>
    ;

// Ícones de Campanhas (Megaphone)
const CampanhasOutline = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
</svg>
    ;
const CampanhasSolid = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
</svg>
    ;

// Ícones de Usuários (Users)
const UsuariosOutline = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>;
const UsuariosSolid = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
</svg>;


// --- CONFIGURAÇÃO DAS ROTAS DO MENU ---
const menuItems = [
    {
        name: "Dashboard",
        href: "/",
        OutlineIcon: DashboardOutline,
        SolidIcon: DashboardSolid,
    },
    {
        name: "Imóveis",
        href: "/screens/imoveis",
        OutlineIcon: ImoveisOutline,
        SolidIcon: ImoveisSolid,
    },
    {
        name: "Campanhas",
        href: "/screens/campanhas",
        OutlineIcon: CampanhasOutline,
        SolidIcon: CampanhasSolid,
    },
    {
        name: "Usuários",
        href: "/screens/usuarios",
        OutlineIcon: UsuariosOutline,
        SolidIcon: UsuariosSolid,
    },
];


export function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(true);
    const pathname = usePathname();

    return (
        <aside
            className={`h-screen bg-white border-r border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 flex flex-col justify-between p-4 transition-all duration-300 ease-in-out relative sidebar-component-scope
        ${isExpanded ? "w-64" : "w-20"}`}
        >
            {/* Botão de Controle */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute -right-3 top-7 w-6 h-6 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full flex items-center justify-center text-xs cursor-pointer shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors z-50 text-zinc-500 dark:text-zinc-400"
                title={isExpanded ? "Recolher menu" : "Expandir menu"}
            >
                {isExpanded ? "❮" : "❯"}
            </button>

            {/* Topo: Logo */}
            <div className="flex flex-col gap-8">
                <div className={`px-2 py-1 transition-all duration-300 flex items-center gap-3 ${isExpanded ? "flex-row" : "flex-col"}`}>
                    {/* Ícone da Logo SVG */}
                    <div className="w-9 h-9 bg-linear-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>

                    </div>

                    {/* Texto da Marca (Oculta quando colapsado) */}
                    {isExpanded ? (
                        <div className="flex flex-col min-w-0 leading-none">
                            <h1 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white whitespace-nowrap">
                                LP <span className="text-indigo-600 dark:text-indigo-400">Imóveis</span>
                            </h1>
                            <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-semibold tracking-wider uppercase mt-0.5">Admin Hub</p>
                        </div>
                    ) : null}
                </div>

                {/* Menu de Navegação Dinâmico */}
                <nav className="flex flex-col gap-1">
                    {menuItems.map((item) => {
                        // Verifica se este item específico está selecionado/ativo
                        const isActive = pathname === item.href;

                        // Escolhe dinamicamente qual versão do ícone usar
                        const Icon = isActive ? item.SolidIcon : item.OutlineIcon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${isExpanded ? "justify-start" : "justify-center"}
                  ${isActive
                                        ? "text-indigo-600 bg-indigo-50/60 dark:text-indigo-400 dark:bg-indigo-950/30"
                                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200"
                                    }`}
                                title={item.name}
                            >
                                {/* Ícone Heroicon renderizado condicionalmente com base no estado isActive */}
                                <div className={`shrink-0 transition-transform duration-200 ${isActive ? "scale-105" : "scale-100"}`}>
                                    <Icon />
                                </div>


                                {/* Texto do menu */}
                                {isExpanded && (
                                    <span className="transition-opacity duration-200 truncate">
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Rodapé da Sidebar: Usuário */}
            <div className={`border-t border-zinc-200 dark:border-zinc-800 pt-4 flex items-center gap-3 px-1
        ${isExpanded ? "justify-start" : "justify-center"}`}>
                <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm shrink-0 shadow-sm">
                    AD
                </div>
                {isExpanded && (
                    <div className="flex flex-col min-w-0 transition-opacity duration-200">
                        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">Administrador</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">admin@valdoimoveis.com.br</span>
                    </div>
                )}
            </div>
        </aside>
    );
}