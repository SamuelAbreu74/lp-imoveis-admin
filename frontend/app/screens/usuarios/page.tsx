"use client";

import { useState } from "react";

// Tipo estrito para simular nossos dados de usuários do sistema
interface Usuario {
    id: number;
    nome: string;
    email: string;
    cargo: string;
    departamento: string;
    status: "Ativo" | "Inativo" | "Pendente";
    avatarInicial: string;
}

const usuariosIniciais: Usuario[] = [
    { id: 1, nome: "Carlos Eduardo Valdo", email: "carlos@valdoimoveis.com.br", cargo: "Diretor Executivo", departamento: "Diretoria", status: "Ativo", avatarInicial: "CV" },
    { id: 2, nome: "Ana Beatriz Rocha", email: "ana.rocha@valdoimoveis.com.br", cargo: "Gerente de Marketing", departamento: "Marketing", status: "Ativo", avatarInicial: "AR" },
    { id: 3, nome: "Mateus Fonseca", email: "mateus.f@valdoimoveis.com.br", cargo: "Corretor Senior", departamento: "Vendas", status: "Ativo", avatarInicial: "MF" },
    { id: 4, nome: "Juliana Souza", email: "juliana.marketing@gmail.com", cargo: "Social Media (Freelancer)", departamento: "Marketing", status: "Pendente", avatarInicial: "JS" },
    { id: 5, nome: "Ricardo Alves", email: "ricardo.suporte@outlook.com", cargo: "Suporte Técnico", departamento: "TI", status: "Inativo", avatarInicial: "RA" },
];

export default function Usuarios() {
    const [usuarios] = useState<Usuario[]>(usuariosIniciais);
    const [busca, setBusca] = useState("");

    // Filtro de busca simples por nome ou e-mail
    const usuariosFiltrados = usuarios.filter(
        (u) =>
            u.nome.toLowerCase().includes(busca.toLowerCase()) ||
            u.email.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto user-screen-scope animate-fade-in">
            {/* Topo da Página */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Controle de Usuários
                    </h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Gerencie quem tem acesso às configurações e leads da sua landing page.
                    </p>
                </div>

                {/* Botão de Ação  */}
                <button className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-4 py-2.5 rounded-lg shadow-sm cursor-pointer transition-colors shrink-0">
                    <span className="mr-2 text-base">+</span> Convidar Usuário
                </button>
            </div>

            {/* Cards de Métricas Rápidas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center font-semibold">
                        👥
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Total de Membros</p>
                        <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{usuarios.length}</h4>
                    </div>
                </div>

                <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center font-semibold">
                        ●
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Acessos Ativos</p>
                        <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                            {usuarios.filter((u) => u.status === "Ativo").length}
                        </h4>
                    </div>
                </div>

                <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center font-semibold">
                        ⌛
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Convites Pendentes</p>
                        <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                            {usuarios.filter((u) => u.status === "Pendente").length}
                        </h4>
                    </div>
                </div>
            </div>

            {/* Tabela e Filtros */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">

                {/* Barra de Busca Superior */}
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center">
                    <div className="relative w-full max-w-md">
                        <span className="absolute inset-y-0 left-3 flex items-center text-zinc-400 text-sm pointer-events-none select-none">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="Buscar por nome ou e-mail..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        />
                    </div>
                </div>

                {/* Tabela de Dados */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">
                                <th className="p-4">Usuário</th>
                                <th className="p-4">Cargo / Função</th>
                                <th className="p-4">Departamento</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-zinc-700 dark:text-zinc-300">
                            {usuariosFiltrados.length > 0 ? (
                                usuariosFiltrados.map((usuario) => (
                                    <tr
                                        key={usuario.id}
                                        className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors group"
                                    >
                                        {/* Coluna do Perfil */}
                                        <td className="p-4 flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 border border-zinc-200 dark:border-zinc-600 flex items-center justify-center font-semibold text-xs text-zinc-700 dark:text-zinc-200 uppercase tracking-wider">
                                                {usuario.avatarInicial}
                                            </div>
                                            <div className="flex flex-col min-w-0">
                                                <span className="font-medium text-zinc-900 dark:text-white truncate">
                                                    {usuario.nome}
                                                </span>
                                                <span className="text-xs text-zinc-400 dark:text-zinc-500 truncate">
                                                    {usuario.email}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Coluna Cargo */}
                                        <td className="p-4 align-middle">
                                            <span className="text-zinc-900 dark:text-zinc-300 font-medium">
                                                {usuario.cargo}
                                            </span>
                                        </td>

                                        {/* Coluna Departamento */}
                                        <td className="p-4 align-middle text-zinc-500 dark:text-zinc-400">
                                            {usuario.departamento}
                                        </td>

                                        {/* Coluna Status */}
                                        <td className="p-4 align-middle">
                                            {usuario.status === "Ativo" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 rounded-full">
                                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></span>
                                                    Ativo
                                                </span>
                                            )}
                                            {usuario.status === "Pendente" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 rounded-full">
                                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span>
                                                    Pendente
                                                </span>
                                            )}
                                            {usuario.status === "Inativo" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 rounded-full">
                                                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mr-1.5"></span>
                                                    Inativo
                                                </span>
                                            )}
                                        </td>

                                        {/* Coluna Ações */}
                                        <td className="p-4 text-center align-middle">
                                            <div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    className="p-1.5 text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                                                    title="Editar permissões"
                                                >
                                                    ✏️
                                                </button>
                                                <button
                                                    className="p-1.5 text-zinc-500 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                                                    title="Revogar acesso"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-zinc-400 dark:text-zinc-500">
                                        Nenhum usuário encontrado correspondente à pesquisa.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}