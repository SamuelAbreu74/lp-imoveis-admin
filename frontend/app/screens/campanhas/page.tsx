"use client";

import { useState } from "react";

// Tipagem corrigida com foco em Campanhas do Mercado Imobiliário
interface CampanhaImobiliaria {
    id: number;
    nome: string;
    tipo: "Lançamento" | "Prontos" | "Liquidação" | "Sazonal";
    imoveisVinculados: number;
    vgvTotal: number; // Valor Geral de Vendas planejado/disponível
    metaVendas: string; // Ex: "12/20 unidades"
    status: "Ativa" | "Concluída" | "Planejada";
    periodo: string;
}

const campanhasImobiliariasIniciais: CampanhaImobiliaria[] = [
    { id: 1, nome: "Feirão Minha Casa Minha Vida 2026", tipo: "Liquidação", imoveisVinculados: 45, vgvTotal: 12500000, metaVendas: "18 / 30 un", status: "Ativa", periodo: "01/05 a 30/06" },
    { id: 2, nome: "Lançamento Reserva Meireles Alto Padrão", tipo: "Lançamento", imoveisVinculados: 1, vgvTotal: 42000000, metaVendas: "5 / 12 un", status: "Ativa", periodo: "15/04 a 15/07" },
    { id: 3, nome: "Especial Pronto para Morar - Sul", tipo: "Prontos", imoveisVinculados: 14, vgvTotal: 8900000, metaVendas: "14 / 14 un", status: "Concluída", periodo: "01/01 a 31/03" },
    { id: 4, nome: "Campanha de Inverno - Casas de Praia", tipo: "Sazonal", imoveisVinculados: 8, vgvTotal: 16400000, metaVendas: "0 / 5 un", status: "Planejada", periodo: "01/07 a 31/08" },
];

export default function Campanhas() {
    const [campanhas] = useState<CampanhaImobiliaria[]>(campanhasImobiliariasIniciais);
    const [busca, setBusca] = useState("");

    const campanhasFiltradas = campanhas.filter((c) =>
        c.nome.toLowerCase().includes(busca.toLowerCase()) ||
        c.tipo.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto campaigns-real-estate-scope animate-fade-in">

            {/* Cabeçalho da Página */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Campanhas de Imóveis
                    </h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Agrupe seus imóveis em ações comerciais, feirões ou lançamentos específicos para a Landing Page.
                    </p>
                </div>

                <button className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-4 py-2.5 rounded-lg shadow-sm cursor-pointer transition-colors shrink-0">
                    <span className="mr-2 text-base">+</span> Nova Campanha
                </button>
            </div>

            {/* Grid de Visão Geral Comercial */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Campanhas em Andamento</p>
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                        {campanhas.filter(c => c.status === "Ativa").length} Ativas
                    </h4>
                </div>
                <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">VGV Total sob Campanhas</p>
                    <h4 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                        {campanhas.reduce((acc, c) => acc + c.vgvTotal, 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}
                    </h4>
                </div>
                <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Total de Imóveis Engajados</p>
                    <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                        {campanhas.reduce((acc, c) => acc + c.imoveisVinculados, 0)} Propriedades
                    </h4>
                </div>
            </div>

            {/* Tabela de Campanhas */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">

                {/* Input de Busca */}
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <div className="relative w-full max-w-md">
                        <span className="absolute inset-y-0 left-3 flex items-center text-zinc-400 text-sm pointer-events-none select-none">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="Buscar por nome da campanha imobiliária..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        />
                    </div>
                </div>

                {/* Tabela */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">
                                <th className="p-4">Nome da Campanha</th>
                                <th className="p-4">Estratégia</th>
                                <th className="p-4 text-center">Imóveis</th>
                                <th className="p-4">VGV da Ação</th>
                                <th className="p-4">Meta de Vendas</th>
                                <th className="p-4">Período</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-zinc-700 dark:text-zinc-300">
                            {campanhasFiltradas.length > 0 ? (
                                campanhasFiltradas.map((campanha) => (
                                    <tr key={campanha.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors group">

                                        {/* Nome Comercial */}
                                        <td className="p-4 font-semibold text-zinc-900 dark:text-white align-middle">
                                            {campanha.nome}
                                        </td>

                                        {/* Tipo / Estratégia */}
                                        <td className="p-4 align-middle">
                                            <span className="px-2 py-1 text-xs font-medium rounded bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                                                {campanha.tipo}
                                            </span>
                                        </td>

                                        {/* Quantidade de Imóveis Vinculados */}
                                        <td className="p-4 align-middle text-center font-medium text-zinc-900 dark:text-zinc-100">
                                            {campanha.imoveisVinculados}
                                        </td>

                                        {/* VGV */}
                                        <td className="p-4 align-middle font-medium text-zinc-900 dark:text-zinc-300">
                                            {campanha.vgvTotal.toLocaleString("pt-BR", {
                                                style: "currency",
                                                currency: "BRL",
                                                maximumFractionDigits: 0
                                            })}
                                        </td>

                                        {/* Progresso / Meta */}
                                        <td className="p-4 align-middle font-mono text-xs text-zinc-600 dark:text-zinc-400 font-bold">
                                            {campanha.metaVendas}
                                        </td>

                                        {/* Duração */}
                                        <td className="p-4 align-middle text-xs text-zinc-500 dark:text-zinc-400">
                                            {campanha.periodo}
                                        </td>

                                        {/* Status */}
                                        <td className="p-4 align-middle">
                                            {campanha.status === "Ativa" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400 rounded-full">
                                                    ● Ativa
                                                </span>
                                            )}
                                            {campanha.status === "Concluída" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400 rounded-full">
                                                    ✓ Finalizada
                                                </span>
                                            )}
                                            {campanha.status === "Planejada" && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400 rounded-full">
                                                    ⏱ Planejada
                                                </span>
                                            )}
                                        </td>

                                        {/* Ações */}
                                        <td className="p-4 text-center align-middle">
                                            <div className="flex items-center justify-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    className="p-1.5 text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                                                    title="Vincular/Desvincular Imóveis"
                                                >
                                                    🏢
                                                </button>
                                                <button
                                                    className="p-1.5 text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                                                    title="Editar Detalhes"
                                                >
                                                    ✏️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8} className="p-12 text-center text-zinc-400 dark:text-zinc-500">
                                        Nenhuma campanha imobiliária encontrada.
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