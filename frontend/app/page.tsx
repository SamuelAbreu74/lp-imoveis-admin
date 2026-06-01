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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="p-2 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 rounded-lg text-lg size-10">
              <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
            </svg>

          </div>
          <div className="mt-4">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">124</h3>
            <p className="text-xs text-emerald-600 font-medium mt-1">↑ 12 novos este mês</p>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Leads Gerados</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="p-2 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 rounded-lg text-lg size-10">
              <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
            </svg>

          </div>
          <div className="mt-4">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">482</h3>
            <p className="text-xs text-emerald-600 font-medium mt-1">↑ 8% em relação a semana passada</p>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Campanhas Ativas</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="p-2 bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 rounded-lg text-lg size-10">
              <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
            </svg>

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