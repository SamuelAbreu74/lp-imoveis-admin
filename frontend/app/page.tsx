export default function Home() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto dashboard-content-scope">
      {/* Header da Página */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Dashboard</h1>
        <p className="text-md text-zinc-500 dark:text-zinc-400">Bem-vindo de volta <strong>Valdo</strong>! Aqui está o resumo da sua landing page.</p>
      </div>

      {/* Grid de Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total de Imóveis</span>
            <span className="p-2 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 rounded-lg text-lg">🏢</span>
          </div>
          <div className="mt-4">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">124</h3>
            <p className="text-xs text-emerald-600 font-medium mt-1">↑ 12 novos este mês</p>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Leads Gerados</span>
            <span className="p-2 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 rounded-lg text-lg">⚡</span>
          </div>
          <div className="mt-4">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">482</h3>
            <p className="text-xs text-emerald-600 font-medium mt-1">↑ 8% em relação a semana passada</p>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Campanhas Ativas</span>
            <span className="p-2 bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 rounded-lg text-lg">📢</span>
          </div>
          <div className="mt-4">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">3</h3>
            <p className="text-xs text-zinc-500 font-medium mt-1">Rodando no Google & Meta</p>
          </div>
        </div>
      </div>

      {/* Seção Inferior: Tabela de Últimos Leads/Imóveis */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
          <h2 className="font-semibold text-zinc-900 dark:text-white">Contatos Recentes da Landing Page</h2>
          <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Ver todos</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-4">Nome</th>
                <th className="p-4">Interesse</th>
                <th className="p-4">Data</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-zinc-700 dark:text-zinc-300">
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                <td className="p-4 font-medium text-zinc-900 dark:text-white">João Silva</td>
                <td className="p-4">Apartamento Splendor - Ref #104</td>
                <td className="p-4 text-zinc-500 dark:text-zinc-400">Hoje, 14:32</td>
                <td className="p-4 text-right"><span className="px-2.5 py-1 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400 rounded-full">Pendente</span></td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                <td className="p-4 font-medium text-zinc-900 dark:text-white">Maria Oliveira</td>
                <td className="p-4">Casa de Condomínio - Ref #88</td>
                <td className="p-4 text-zinc-500 dark:text-zinc-400">Ontem, 18:15</td>
                <td className="p-4 text-right"><span className="px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 rounded-full">Atendido</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}