"use client";

import { useState } from "react";

interface Imovel {
    id: string;
    titulo: string;
    localizacao: string;
    preco: number;
    tipo: "Casa" | "Apartamento" | "Terreno";
    status: "Ativo" | "Inativo" | "Destaque";
    cliques: number;
    imagemPlaceholder: string;
}

const imoveisIniciais: Imovel[] = [
    { id: "VLD-001", titulo: "Apartamento Splendor Resident", localizacao: "Meireles, Fortaleza - CE", preco: 850000, tipo: "Apartamento", status: "Destaque", cliques: 1240, imagemPlaceholder: "🏢" },
    { id: "VLD-002", titulo: "Casa em Condomínio Fechado", localizacao: "Eusébio - CE", preco: 1450000, tipo: "Casa", status: "Ativo", cliques: 845, imagemPlaceholder: "🏡" },
    { id: "VLD-003", titulo: "Cobertura Duplex com Vista Mar", localizacao: "Beira Mar, Fortaleza - CE", preco: 3200000, tipo: "Apartamento", status: "Ativo", cliques: 2105, imagemPlaceholder: "🏙️" },
    { id: "VLD-004", titulo: "Loteamento Jardins Premium", localizacao: "Aquiraz - CE", preco: 280000, tipo: "Terreno", status: "Inativo", cliques: 142, imagemPlaceholder: "🌱" },
    { id: "VLD-005", titulo: "Casa Duplex Minimalista", localizacao: "Cidade dos Funcionários, Fortaleza - CE", preco: 720000, tipo: "Casa", status: "Ativo", cliques: 612, imagemPlaceholder: "🏠" },
];

export default function Imoveis() {
    const [imoveis] = useState<Imovel[]>(imoveisIniciais);
    const [busca, setBusca] = useState("");
    const [filtroTipo, setFiltroTipo] = useState<string>("Todos");

    // Lógica de filtragem 
    const imoveisFiltrados = imoveis.filter((imovel) => {
        const correspondeBusca =
            imovel.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            imovel.id.toLowerCase().includes(busca.toLowerCase()) ||
            imovel.localizacao.toLowerCase().includes(busca.toLowerCase());

        const correspondeTipo = filtroTipo === "Todos" || imovel.tipo === filtroTipo;

        return correspondeBusca && correspondeTipo;
    });

    return (
        <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto property-screen-scope animate-fade-in">

            {/* Cabeçalho */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Gerenciamento de Imóveis
                    </h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Cadastre, edite e monitore os imóveis em exibição na sua Landing Page.
                    </p>
                </div>

                <button className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-4 py-2.5 rounded-lg shadow-sm cursor-pointer transition-colors shrink-0">
                    <span className="mr-2 text-base">+</span> Novo Imóvel
                </button>
            </div>

            {/* Grid de Controle e Filtros */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">

                {/* Barra de Ferramentas */}
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col sm:flex-row gap-3 justify-between items-center">

                    {/* Input de Busca */}
                    <div className="relative w-full sm:max-w-md">
                        <span className="absolute inset-y-0 left-3 flex items-center text-zinc-400 text-sm pointer-events-none select-none">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="Buscar por título, ref ou bairro..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        />
                    </div>

                    {/* Filtro por Tipo */}
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider whitespace-nowrap hidden sm:inline">
                            Filtrar por:
                        </span>
                        <select
                            value={filtroTipo}
                            onChange={(e) => setFiltroTipo(e.target.value)}
                            className="w-full sm:w-44 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        >
                            <option value="Todos">Todos os tipos</option>
                            <option value="Casa">Casas</option>
                            <option value="Apartamento">Apartamentos</option>
                            <option value="Terreno">Terrenos</option>
                        </select>
                    </div>
                </div>

                {/* Tabela de Imóveis */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">
                                <th className="p-4 w-24">Ref</th>
                                <th className="p-4">Imóvel</th>
                                <th className="p-4">Preço</th>
                                <th className="p-4">Performance</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-zinc-700 dark:text-zinc-300">
                            {imoveisFiltrados.length > 0 ? (
                                imoveisFiltrados.map((imovel) => (
                                    <tr
                                        key={imovel.id}
                                        className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors group"
                                    >
                                        {/* Código de Referência */}
                                        <td className="p-4 font-mono text-xs text-zinc-400 dark:text-zinc-500 font-bold align-middle">
                                            {imovel.id}
                                        </td>

                                        {/* Detalhes do Imóvel */}
                                        <td className="p-4 flex items-center gap-3.5">
                                            <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xl shrink-0 shadow-inner">
                                                {imovel.imagemPlaceholder}
                                            </div>
                                            <div className="flex flex-col min-w-0">
                                                <span className="font-semibold text-zinc-900 dark:text-white truncate">
                                                    {imovel.titulo}
                                                </span>
                                                <span className="text-xs text-zinc-400 dark:text-zinc-500 truncate flex items-center gap-1">
                                                    📍 {imovel.localizacao}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Preço Formatado em Real */}
                                        <td className="p-4 align-middle font-medium text-zinc-900 dark:text-zinc-100">
                                            {imovel.preco.toLocaleString("pt-BR", {
                                                style: "currency",
                                                currency: "BRL",
                                            })}
                                        </td>

                                        {/* Performance de Cliques na LP */}
                                        <td className="p-4 align-middle">
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                                                    {imovel.cliques.toLocaleString("pt-BR")}
                                                </span>
                                                <span className="text-[11px] text-zinc-400 dark:text-zinc-500 -mt-0.5">
                                                    cliques no botão
                                                </span>
                                            </div>
                                        </td>

                                        {/* Badge de Status */}
                                        <td className="p-4 align-middle">
                                            {imovel.status === "Destaque" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 rounded-full border border-indigo-100 dark:border-indigo-900/50">
                                                    ⭐ Destaque
                                                </span>
                                            )}
                                            {imovel.status === "Ativo" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 rounded-full">
                                                    ● Ativo
                                                </span>
                                            )}
                                            {imovel.status === "Inativo" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 rounded-full">
                                                    ○ Pausado
                                                </span>
                                            )}
                                        </td>

                                        {/* Botões de Ações Rápidas */}
                                        <td className="p-4 text-center align-middle">
                                            <div className="flex items-center justify-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    className="p-1.5 text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                                                    title="Editar Imóvel"
                                                >
                                                    ✏️
                                                </button>
                                                <button
                                                    className="p-1.5 text-zinc-500 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                                                    title={imovel.status === "Inativo" ? "Ativar na LP" : "Pausar na LP"}
                                                >
                                                    👁️
                                                </button>
                                                <button
                                                    className="p-1.5 text-zinc-500 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                                                    title="Excluir Permanentemente"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="p-12 text-center text-zinc-400 dark:text-zinc-500">
                                        Nenhum imóvel encontrado nesta categoria ou busca.
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