import Link from 'next/link';

export function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-white border-r border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 flex flex-col justify-between p-5 complex-sidebar-scope">
            <div className="flex flex-col gap-8">
                <div className="px-2 py-1">
                    <h1 className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                        LP Imóveis
                    </h1>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Painel de Controle</p>
                </div>

                {/* Menu de Navegação */}
                <nav className="flex flex-col gap-1">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-700 bg-zinc-100 dark:text-zinc-200 dark:bg-zinc-800 transition-colors"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/screens/imoveis"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200 transition-colors"
                    >
                        Imóveis
                    </Link>

                    <Link
                        href="/screens/campanhas"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200 transition-colors"
                    >
                        Campanhas
                    </Link>

                    <Link
                        href="/screens/usuarios"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200 transition-colors"
                    >
                        Usuários
                    </Link>
                </nav>
            </div>

            {/* Rodapé da Sidebar */}
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 flex items-center gap-3 px-2">
                <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold text-sm">
                    AD
                </div>
                <div className="flex flex-col min-w-0">
                    {/* LEMBRAR DE TIRAR ESSES DADOS MOCKADOS AQUI */}
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">Administrador</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">admin@valdoimoveis.com.br</span>
                </div>
            </div>
        </aside>
    );
}