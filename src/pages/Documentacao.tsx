import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package, ShoppingCart, TrendingUp, FileText, Users, Truck, BarChart3, Settings, CheckCircle,
  Box, Home, Code, Database, Zap, Shield, Bell, Search, Layout, Palette, Globe, Key,
  ChevronDown, ChevronRight, Layers, GitBranch, Server, Eye, Upload, ClipboardList, Factory,
  UserPlus, CreditCard, BarChart, PieChart, Calendar, Filter, Copy, Boxes, ArrowLeftRight,
  BookOpen, Target, RefreshCw, Webhook
} from "lucide-react";
import { Link } from "react-router-dom";

/* ─── Tipos ──────────────────────────────────────────── */
interface SectionItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
}

/* ─── Dados de navegação ─────────────────────────────── */
const sections: SectionItem[] = [
  { id: "visao-geral", label: "Visão Geral", icon: <Home className="w-4 h-4" /> },
  { id: "arquitetura", label: "Arquitetura & Stack", icon: <Layers className="w-4 h-4" /> },
  { id: "autenticacao", label: "Autenticação & Permissões", icon: <Shield className="w-4 h-4" /> },
  { id: "layout", label: "Layout & Navegação", icon: <Layout className="w-4 h-4" /> },
  { id: "dashboard", label: "Dashboard", icon: <BarChart3 className="w-4 h-4" /> },
  { id: "comercial", label: "Comercial", icon: <ShoppingCart className="w-4 h-4" />, badge: "5 páginas" },
  { id: "pedido", label: "Pedido (Detalhe)", icon: <FileText className="w-4 h-4" />, badge: "4.300+ linhas" },
  { id: "contabilidade", label: "Contabilidade", icon: <CreditCard className="w-4 h-4" />, badge: "Bling" },
  { id: "producao", label: "Produção", icon: <Factory className="w-4 h-4" />, badge: "Realtime" },
  { id: "logistica", label: "Logística", icon: <Truck className="w-4 h-4" />, badge: "3 páginas" },
  { id: "estoque", label: "Estoque", icon: <Box className="w-4 h-4" /> },
  { id: "leads", label: "Leads", icon: <UserPlus className="w-4 h-4" /> },
  { id: "configuracoes", label: "Configurações", icon: <Settings className="w-4 h-4" />, badge: "5 abas" },
  { id: "notificacoes", label: "Notificações", icon: <Bell className="w-4 h-4" />, badge: "Realtime" },
  { id: "hooks", label: "Hooks Customizados", icon: <Code className="w-4 h-4" /> },
  { id: "supabase", label: "Supabase & Banco de Dados", icon: <Database className="w-4 h-4" /> },
  { id: "edge-functions", label: "Edge Functions", icon: <Zap className="w-4 h-4" />, badge: "4 funções" },
  { id: "webhooks", label: "Webhooks & Integrações", icon: <Webhook className="w-4 h-4" /> },
  { id: "temas", label: "Tema & Cores Dinâmicas", icon: <Palette className="w-4 h-4" /> },
  { id: "tipos", label: "Tipos & Interfaces", icon: <Code className="w-4 h-4" /> },
  { id: "paginas-publicas", label: "Páginas Públicas", icon: <Globe className="w-4 h-4" /> },
];

/* ─── Componente de Seção Colapsável ─────────────────── */
function CollapsibleSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left">
        <span className="font-semibold text-gray-800 dark:text-gray-200">{title}</span>
        {open ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
      </button>
      {open && <div className="p-4 bg-white dark:bg-gray-900 space-y-3">{children}</div>}
    </div>
  );
}

/* ─── Componente de Tabela ───────────────────────────── */
function DocTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            {headers.map((h, i) => <th key={i} className="text-left p-2 border border-gray-200 dark:border-gray-700 font-semibold">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              {row.map((cell, j) => <td key={j} className="p-2 border border-gray-200 dark:border-gray-700">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded-lg overflow-x-auto whitespace-pre-wrap"><code>{children}</code></pre>;
}

function InfoCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Card className="p-4 space-y-2">
      <div className="flex items-center gap-2">
        <div className="p-1.5 bg-blue-100 dark:bg-blue-900/40 rounded-md text-blue-700 dark:text-blue-300">{icon}</div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">{title}</h4>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">{children}</div>
    </Card>
  );
}

/* ═════════════════════════════════════════════════════════
   ═══ COMPONENTE PRINCIPAL ══════════════════════════════
   ═════════════════════════════════════════════════════════ */
export default function Documentacao() {
  const [activeSection, setActiveSection] = useState("visao-geral");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-7 h-7 text-blue-600" />
                Documentação Técnica — ERP Zeelux
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Referência completa de arquitetura, páginas, componentes, hooks, banco de dados e integrações</p>
            </div>
            <Link to="/" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
              <Home className="w-4 h-4" /> Voltar ao sistema
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* ─── Sidebar de navegação ─── */}
        <nav className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-24 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
            <p className="text-xs font-bold uppercase text-gray-400 mb-3 tracking-wider">Seções</p>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeSection === s.id
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {s.icon}
                <span className="flex-1 text-left">{s.label}</span>
                {s.badge && <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{s.badge}</Badge>}
              </button>
            ))}
          </div>
        </nav>

        {/* ─── Conteúdo Principal ─── */}
        <main className="flex-1 min-w-0 space-y-12">

          {/* ═══════════════════════════════════════════════ */}
          {/* VISÃO GERAL */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="visao-geral" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🏗️ Visão Geral do Sistema</h2>
            <p className="text-gray-600 dark:text-gray-400">
              O ERP Zeelux é um sistema completo de gestão de pedidos, produção, logística, estoque e contabilidade.
              Construído com React + TypeScript no frontend e Supabase (PostgreSQL + Auth + Storage + Edge Functions + Realtime) no backend.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoCard title="25 Páginas" icon={<FileText className="w-4 h-4" />}><p>Incluindo Dashboard, Comercial, Pedido, Logística, Produção, Estoque, Leads, Contabilidade, Configurações e mais.</p></InfoCard>
              <InfoCard title="22+ Componentes" icon={<Layers className="w-4 h-4" />}><p>Componentes de layout, modais, formulários, Kanban, shipping, notificações e UI (shadcn/ui).</p></InfoCard>
              <InfoCard title="4 Edge Functions" icon={<Zap className="w-4 h-4" />}><p>Webhooks Yampi (pedido pago, PIX, carrinho abandonado) e cálculo de frete Melhor Envio.</p></InfoCard>
            </div>

            <h3 className="text-lg font-semibold mt-6">Módulos do Sistema</h3>
            <DocTable
              headers={["Módulo", "Páginas", "Descrição"]}
              rows={[
                ["Dashboard", "Dashboard.tsx", "Métricas de vendas, gráficos de plataformas/status, top produtos, taxa de envio"],
                ["Comercial", "Comercial.tsx, PedidosCancelados.tsx, PedidosEnviados.tsx, PedidosRetornados.tsx, NovoPedido.tsx", "Gestão de pedidos com filtros avançados, operações em lote, envio rápido"],
                ["Pedido", "Pedido.tsx", "Detalhe completo do pedido: itens, status, entrega, frete, up-sell, upload de etiquetas"],
                ["Contabilidade", "Contabilidade.tsx, PedidoContabilidade.tsx", "Visualização contábil, integração Bling (pedido + NF-e)"],
                ["Produção", "Producao.tsx", "Kanban de produção com Realtime, itens agrupados por produto/variação"],
                ["Logística", "Logistica.tsx, EnvioPorEtiqueta.tsx", "Bipagem por código de barras, geração de etiquetas, envio por etiqueta manual"],
                ["Estoque", "Estoque.tsx, ListaEmbalagens.tsx, SkuPlataformas.tsx", "CRUD de produtos com variações, embalagens, SKU por plataforma"],
                ["Leads", "Leads.tsx", "Conversão de leads em pedidos, filtros PIX/Carrinho Abandonado"],
                ["Configurações", "Configuracoes.tsx", "Usuários, status, setores, formas de pagamento, empresa (cores/logo)"],
              ]}
            />
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* ARQUITETURA */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="arquitetura" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🧱 Arquitetura & Stack Tecnológico</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard title="Frontend" icon={<Code className="w-4 h-4" />}>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>React 18</strong> + <strong>TypeScript</strong></li>
                  <li><strong>Vite</strong> — bundler e dev server</li>
                  <li><strong>Tailwind CSS</strong> — estilização utility-first</li>
                  <li><strong>shadcn/ui</strong> — componentes UI (Radix UI primitives)</li>
                  <li><strong>React Router v6</strong> — roteamento SPA</li>
                  <li><strong>React Query (TanStack)</strong> — cache e estado do servidor</li>
                  <li><strong>Recharts</strong> — gráficos (BarChart, PieChart)</li>
                  <li><strong>date-fns</strong> — formatação de datas (pt-BR)</li>
                  <li><strong>zod + react-hook-form</strong> — validação de formulários</li>
                  <li><strong>Lucide React + react-icons</strong> — ícones</li>
                  <li><strong>Lottie (DynamicLottie)</strong> — animações de estado vazio</li>
                </ul>
              </InfoCard>

              <InfoCard title="Backend (Supabase)" icon={<Database className="w-4 h-4" />}>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>PostgreSQL</strong> — banco relacional com RLS</li>
                  <li><strong>Supabase Auth</strong> — autenticação com JWT</li>
                  <li><strong>Supabase Storage</strong> — upload de PDFs/imagens (bucket "documentos")</li>
                  <li><strong>Supabase Realtime</strong> — WebSocket para notificações e Kanban</li>
                  <li><strong>Edge Functions (Deno)</strong> — webhooks e APIs externas</li>
                  <li><strong>Views</strong> — vw_clientes_pedidos, itens_pedido_agrupados, vw_itens_logistica, etc.</li>
                  <li><strong>RPCs</strong> — achar_item_por_codigo_bipado, trazer_cliente_info, enviar_informacoes_cliente, set_usuario_permissao</li>
                  <li><strong>Triggers</strong> — atualizar_pedidos_para_logistica, enviar_direto_logistica, handle_updated_at</li>
                </ul>
              </InfoCard>
            </div>

            <h3 className="text-lg font-semibold mt-4">Estrutura de Pastas</h3>
            <CodeBlock>{`src/
├── App.tsx                  # Rotas + Providers (QueryClient, Auth, Notificações, Tooltip)
├── main.tsx                 # Ponto de entrada (createRoot, sem StrictMode)
├── pages/                   # 25 páginas
├── components/
│   ├── layout/              # AppHeader, AppLayout, Sidebars (3), ProtectedRoute, SearchPanel
│   ├── dashboard/           # MetricCard
│   ├── modals/              # ClientEditModal, EditSelectModal
│   ├── notifications/       # NotificacoesDropdown
│   ├── orders/              # KanbanBoard, OrderCard
│   ├── products/            # ProductForm
│   ├── shipping/            # CotacaoFreteModal, Embalagens/Remetentes Manager + Modal
│   └── ui/                  # 50+ componentes shadcn/ui
├── hooks/                   # useAuth, useEmpresaColors, use-mobile, use-toast
├── contexts/                # NotificacoesContext (Realtime)
├── integrations/supabase/   # client.ts (config), types.ts (schema gerado)
├── types/                   # index.ts (interfaces do domínio)
├── lib/                     # utils.ts (cn = clsx + twMerge)
├── data/                    # mockData.ts (dados de teste)
└── assets/                  # Animações Lottie JSON

supabase/
├── functions/               # 4 Edge Functions (Yampi webhooks + frete)
├── migrations/              # 7 migrations SQL
└── config.toml              # Project ID`}</CodeBlock>

            <h3 className="text-lg font-semibold mt-4">Árvore de Providers (App.tsx)</h3>
            <CodeBlock>{`QueryClientProvider
  └── AuthProvider            ← Supabase Auth + permissões
      └── NotificacoesProvider ← Notificações Realtime
          └── TooltipProvider
              └── BrowserRouter
                  └── Routes
                      ├── /auth → Auth (pública)
                      ├── /informacoes-entrega/:id → InformacoesEntrega (pública)
                      └── / → ProtectedRoute > AppLayout
                          ├── /comercial → Comercial
                          ├── /pedido/:id → Pedido
                          ├── /logistica → Logistica
                          ├── /producao → Producao
                          └── ... (15+ rotas protegidas)`}</CodeBlock>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* AUTENTICAÇÃO */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="autenticacao" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🔒 Autenticação & Permissões</h2>
            
            <h3 className="text-lg font-semibold">Hook: useAuth (hooks/useAuth.tsx)</h3>
            <p className="text-gray-600 dark:text-gray-400">Context Provider que encapsula toda a lógica de autenticação com Supabase Auth.</p>
            
            <DocTable
              headers={["Propriedade", "Tipo", "Descrição"]}
              rows={[
                ["user", "User | null", "Usuário autenticado do Supabase Auth"],
                ["profile", "any", "Dados do perfil da view usuarios_completos"],
                ["loading", "boolean", "Carregando estado de autenticação"],
                ["isAuthenticated", "boolean", "Se o usuário está logado"],
                ["isActive", "boolean", "Se a conta do usuário está ativa"],
                ["permissions", "number[]", "Array de IDs de permissões do usuário"],
                ["empresaId", "string | null", "UUID da empresa do usuário"],
                ["hasPermission(id)", "function", "Verifica se o usuário tem a permissão X"],
                ["signIn(email, pwd)", "function", "Login com email e senha"],
                ["signUp(email, pwd, meta)", "function", "Registro com metadata"],
                ["signOut()", "function", "Logout (trata session_not_found graciosamente)"],
                ["deleteUser(userId)", "function", "Exclui usuário (tenta múltiplas APIs)"],
              ]}
            />

            <CollapsibleSection title="Sistema de Permissões">
              <p>As permissões são armazenadas na tabela <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">usuarios_permissoes</code> e carregadas via view <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">group_usuarios_permissoes</code> que retorna um array de IDs (bigint).</p>
              <DocTable
                headers={["ID", "Permissão", "Usado em"]}
                rows={[
                  ["7", "Acessar Configurações", "Configuracoes.tsx"],
                  ["14", "Acessar Embalagens", "EstoqueSidebar.tsx"],
                  ["50", "Acessar Dashboard", "Dashboard.tsx"],
                  ["56", "Navegar à Home", "AppHeader.tsx"],
                  ["17", "Criar produto", "Estoque.tsx"],
                  ["18", "Editar produto", "Estoque.tsx"],
                  ["19", "Criar embalagem", "ListaEmbalagens.tsx"],
                  ["20", "Editar embalagem", "ListaEmbalagens.tsx"],
                  ["21", "Deletar embalagem", "ListaEmbalagens.tsx"],
                  ["22", "Acessar Contabilidade", "Contabilidade.tsx"],
                  ["23", "Acessar Leads", "Leads.tsx"],
                ]}
              />
              <p className="mt-2">A RPC <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">set_usuario_permissao(usuario_id, permissao_id, value)</code> ativa/desativa permissões individualmente. Há também predefinicoes_permissoes e vw_ass_predefinicao_perm_completo para gerenciar conjuntos pré-definidos.</p>
            </CollapsibleSection>

            <CollapsibleSection title="ProtectedRoute (components/layout/ProtectedRoute.tsx)">
              <p>Guard de rota que verifica 3 condições:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>loading</strong> → Mostra spinner</li>
                <li><strong>!isAuthenticated</strong> → Redireciona para /auth</li>
                <li><strong>!isActive</strong> → Mostra tela "Conta Inativa" com card centralizado</li>
                <li><strong>Caso contrário</strong> → Renderiza children (Outlet)</li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* LAYOUT */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="layout" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🧩 Layout & Navegação</h2>

            <h3 className="text-lg font-semibold">AppLayout (components/layout/AppLayout.tsx)</h3>
            <p className="text-gray-600 dark:text-gray-400">Wrapper principal. Renderiza o AppHeader no topo e o Outlet do React Router. Chama useEmpresaColors() para aplicar cores dinâmicas.</p>
            <p className="text-gray-600 dark:text-gray-400">Função getModuleFromPath() mapeia o pathname para o módulo ativo (comercial, logística, produção, etc.).</p>
            
            <h3 className="text-lg font-semibold mt-4">AppHeader (components/layout/AppHeader.tsx)</h3>
            <p className="text-gray-600 dark:text-gray-400">Cabeçalho fixo com gradiente dinâmico da empresa. Contém:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li><strong>Logo da empresa</strong> (carregado do Supabase)</li>
              <li><strong>Navegação horizontal de módulos</strong> — itens dinâmicos carregados de localStorage.setores com listener para atualizações</li>
              <li><strong>Botão de busca</strong> → abre SearchPanel</li>
              <li><strong>NotificacoesDropdown</strong> → sino com badge de contagem</li>
              <li><strong>Menu de perfil</strong> → avatar, nome, email, botão logout</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Sidebars</h3>
            <DocTable
              headers={["Sidebar", "Módulo", "Itens"]}
              rows={[
                ["ComercialSidebar", "Comercial", "Lista de Pedidos, Leads, Cancelados, Enviados, Retornados"],
                ["LogisticaSidebar", "Logística", "Envio de pedidos, Envio por etiqueta, Envio de retornados (dev)"],
                ["EstoqueSidebar", "Estoque", "Lista de Produtos, Lista de Embalagens, SKU Plataformas"],
              ]}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">Todas as sidebars são colapsáveis via hover (16rem → 60rem), com ícones react-icons e item ativo baseado na rota atual.</p>

            <h3 className="text-lg font-semibold mt-4">SearchPanel (components/layout/SearchPanel.tsx)</h3>
            <p className="text-gray-600 dark:text-gray-400">Painel de busca global com debounce de 300ms. Busca em duas fontes:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li><strong>Pedidos</strong> — view vw_clientes_pedidos com filtro OR em id_externo, cliente_nome, contato, CPF, CNPJ (limit 6)</li>
              <li><strong>Leads</strong> — tabela leads com filtro OR em nome, email, contato, CPF (limit 6)</li>
            </ul>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* DASHBOARD */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="dashboard" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">📊 Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-400">Página: Dashboard.tsx (~1068 linhas) — Requer permissão <strong>50</strong></p>

            <h3 className="text-lg font-semibold">Seletor de Período</h3>
            <p className="text-gray-600 dark:text-gray-400">Dual calendar com presets: Hoje, Últimos 7 dias, Últimos 30 dias, Últimos 90 dias, Este Mês, Mês Passado, Este Ano. Usa AbortController para cancelar requests anteriores com debounce.</p>

            <h3 className="text-lg font-semibold mt-3">Métricas (4 cards)</h3>
            <DocTable
              headers={["Card", "Fonte de Dados", "Descrição"]}
              rows={[
                ["Total de Pedidos", "COUNT de pedidos no período", "Quantidade total de pedidos filtrada por data"],
                ["Faturamento", "SUM de valor_total dos pedidos", "Soma dos valores de todos os pedidos no período (R$)"],
                ["Ticket Médio", "Faturamento / Total", "Valor médio por pedido"],
                ["Pedidos Enviados", "COUNT com status ENVIADO", "Quantos pedidos já foram despachados"],
              ]}
            />

            <h3 className="text-lg font-semibold mt-3">Gráficos (Tabs)</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li><strong>Vendas por Plataforma</strong> — BarChart (recharts) com dados agrupados por plataforma</li>
              <li><strong>Envios por Plataforma</strong> — PieChart com distribuição de envios</li>
              <li><strong>Pedidos por Status</strong> — Distribuição por status com cores dinâmicas</li>
              <li><strong>Top 5 Produtos</strong> — Produtos mais vendidos no período</li>
              <li><strong>Taxa de Envio</strong> — Barra de progresso (enviados / total)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">Query Supabase</h3>
            <CodeBlock>{`supabase.from('pedidos')
  .select('id, valor_total, status_id, plataforma_id, criado_em, ...')
  .gte('criado_em', startDate)
  .lte('criado_em', endDate)`}</CodeBlock>

            <h3 className="text-lg font-semibold mt-3">Componente: MetricCard</h3>
            <p className="text-gray-600 dark:text-gray-400">Props: title, value, description, trend (up/down/neutral), trendValue, icon, color (custom/blue/green/orange/red). Cada cor define gradientes de fundo e borda únicos.</p>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* COMERCIAL */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="comercial" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🛒 Comercial</h2>

            <h3 className="text-lg font-semibold">Comercial.tsx (~2786 linhas)</h3>
            <p className="text-gray-600 dark:text-gray-400">Página principal de gestão de pedidos. A mais complexa do módulo com 50+ estados, filtros avançados e operações em lote.</p>

            <CollapsibleSection title="Filtros Avançados">
              <DocTable
                headers={["Filtro", "Tipo", "Descrição"]}
                rows={[
                  ["Busca", "Texto", "Pesquisa em id_externo, cliente_nome, contato, CPF, CNPJ"],
                  ["Status", "Multi-select", "Filtra por um ou mais status de pedido"],
                  ["Plataforma", "Select", "Filtra por plataforma de venda"],
                  ["Responsável", "Select", "Filtra por responsável atribuído"],
                  ["Etiqueta", "Select", "Filtra por tipo de etiqueta de envio"],
                  ["Data", "Date range", "Período de criação do pedido"],
                  ["Urgente", "Toggle", "Apenas pedidos marcados como urgentes"],
                  ["Duplicados", "Toggle", "Apenas pedidos com flag foi_duplicado"],
                ]}
              />
              <p className="mt-2 text-sm">Todos os filtros são persistidos na URL via query params para compartilhamento e navegação.</p>
            </CollapsibleSection>

            <CollapsibleSection title="Operações em Lote">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Alterar Status</strong> — Muda o status de todos os pedidos selecionados</li>
                <li><strong>Alterar Responsável</strong> — Reatribui o responsável em lote</li>
                <li><strong>Alterar Etiqueta</strong> — Muda o tipo de etiqueta de envio</li>
                <li><strong>Envio Rápido</strong> — Verifica saldo ME ≥ R$50, calcula frete mais barato (excluindo transportadoras bloqueadas), gera etiqueta via edge function</li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Badges no Header">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Etiqueta Pendente</strong> — COUNT de pedidos com etiqueta_envio_id = "Pendente" e status ≠ ENVIADO</li>
                <li><strong>Envio Adiado</strong> — COUNT de pedidos com etiqueta_envio_id = "Disponível", status = entrada logística e pedido_liberado = false</li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Duplicação de Pedido">
              <p className="text-sm">Fluxo ao duplicar um pedido:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Incrementa o id_externo adicionando "/2", "/3", etc.</li>
                <li>Clona o cliente com novo link_formulario e formulario_enviado=false</li>
                <li>Clona todos os itens (incluindo dimensões)</li>
                <li>Navega para o novo pedido criado</li>
              </ol>
            </CollapsibleSection>

            <h3 className="text-lg font-semibold mt-4">Páginas Complementares</h3>
            <DocTable
              headers={["Página", "Linhas", "Descrição"]}
              rows={[
                ["NovoPedido.tsx", "~919", "Formulário completo de criação: dados do cliente, carrinho de produtos, pagamento, remetente"],
                ["PedidosCancelados.tsx", "~725", "Pedidos com status CANCELADO. Permite visualizar e duplicar"],
                ["PedidosEnviados.tsx", "~1132", "Pedidos enviados com filtro de data, duplicação e devolução ao remetente"],
                ["PedidosRetornados.tsx", "~370", "Pedidos retornados com dados de reenvio, usa view pedidos_retornados_completos"],
              ]}
            />
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* PEDIDO */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="pedido" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">📄 Pedido (Detalhe)</h2>
            <p className="text-gray-600 dark:text-gray-400">Página: Pedido.tsx — <strong>4.307 linhas</strong> — o maior arquivo do sistema. 70+ estados. Detalhe completo com 5 abas, 10+ modais e sistema de up-sell.</p>

            <CollapsibleSection title="Aba: Resumo" defaultOpen>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Tabela de itens</strong> — produtos agrupados com imagem, nome, variação, quantidade, preço unitário e total</li>
                <li><strong>Botões por item</strong> — UpSell (abre wizard), Manter (marca como "Não aumentado"), Remover (subtrai do valor total)</li>
                <li><strong>Rodapé</strong> — valor total, formas de pagamento com edição inline</li>
                <li><strong>Wizard de adicionar produtos</strong> — 3 etapas: Dados → Pagamento → Valor</li>
                <li><strong>Up-Sell workflow</strong> — seleção de produto → wizard: Dados → Pagamento → Valor ou Aumento Grátis</li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Status">
              <p className="text-sm">Edição inline via modais de seleção (EditSelectModal):</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Status do pedido</li>
                <li>Plataforma</li>
                <li>Tipo de etiqueta de envio</li>
                <li>Responsável</li>
                <li>Toggle urgente (com cor vermelha)</li>
                <li>Observações (textarea com auto-save)</li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Entrega">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Dados do cliente</strong> — Nome, CPF/CNPJ, email, telefone, endereço completo (editável via ClientEditModal)</li>
                <li><strong>CEP e transportadora</strong> — seletores de remetente e embalagem (com managers inline)</li>
                <li><strong>Cálculo de frete</strong> — Botão que abre CotacaoFreteModal → chama edge function calculo-frete-melhorenvio</li>
                <li><strong>Botão ENVIAR O MAIS BARATO</strong> — verifica saldo ME ≥ R$50, seleciona frete mais barato, gera etiqueta</li>
                <li><strong>Botão Imprimir Etiqueta</strong> — quando etiqueta já existe, abre PDF via edge function</li>
                <li><strong>Botão Etiqueta ML</strong> — condicional: só aparece quando plataforma = ML e shipping_id existe</li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Tempo Ganho">
              <p className="text-sm">Calendar date picker para salvar a data de "tempo ganho" no pedido. Botões Save e Clear.</p>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Subir Etiqueta">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Upload multi-arquivo PDF com nomeação customizada (formato: "nome-original-id_externo")</li>
                <li>Inputs editáveis para renomear antes do upload</li>
                <li>Upload para Supabase Storage no bucket "documentos/etiquetas/"</li>
                <li>URLs salvas no campo JSONB etiquetas_uploads do pedido</li>
                <li>Grid de cards (quadradinhos) com preview do nome, botão copiar link e botão excluir (remove do Storage + DB)</li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Sistema de Up-Sell">
              <p className="text-sm">4 status de up-sell na tabela status_upsell:</p>
              <DocTable
                headers={["ID", "Status", "Descrição"]}
                rows={[
                  ["1", "Aguardando aumento", "Item elegível para up-sell, aguardando ação"],
                  ["2", "Não aumentado", "Operador optou por manter o item original"],
                  ["3", "Aumentado", "Item foi substituído por um produto de maior valor"],
                  ["4", "Aumento grátis", "Up-sell concedido sem custo adicional"],
                ]}
              />
              <p className="mt-2 text-sm">Auto-liberação do pedido: quando TODOS os itens com up-sell ativo têm status ≠ "Aguardando", o pedido é automaticamente liberado (pedido_liberado = true).</p>
              <p className="text-sm">3 regras verificadas em checkAutoLiberation() ao salvar qualquer alteração de up-sell.</p>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* CONTABILIDADE */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="contabilidade" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">💰 Contabilidade</h2>

            <h3 className="text-lg font-semibold">Contabilidade.tsx</h3>
            <p className="text-gray-600 dark:text-gray-400">Visualização de pedidos enviados para fins contábeis. Requer permissão <strong>22</strong>. Tabela com busca, colunas: ID, Cliente, Plataforma, Responsável (avatar), Produtos (preview), Valor, Data. Clique navega para PedidoContabilidade.</p>

            <h3 className="text-lg font-semibold mt-4">PedidoContabilidade.tsx (~3341 linhas)</h3>
            <p className="text-gray-600 dark:text-gray-400">Similar ao Pedido.tsx mas com integração <strong>Bling ERP</strong>. 2 botões adicionais no header:</p>

            <CollapsibleSection title="Integração Bling — Fluxo Completo">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>Consultar cliente</strong> — edge function consultar_cliente_bling busca por CPF/CNPJ</li>
                <li><strong>Criar/Editar cliente</strong> — se não existe, criar_cliente_bling; se existe, editar_cliente_bling com dados atualizados</li>
                <li><strong>Preparar itens</strong> — para cada item, busca bling_id da variação ou do produto no banco</li>
                <li><strong>Consultar pedido</strong> — consultar_pedido_bling verifica se já existe (evita duplicidade)</li>
                <li><strong>Criar/Editar pedido</strong> — criar_pedido_bling ou editar_pedido_bling com contato, itens, transporte, observações</li>
                <li><strong>[Opcional] Gerar NF-e</strong> — gerar_nfe_bling cria nota fiscal eletrônica no Bling</li>
              </ol>
            </CollapsibleSection>

            <CollapsibleSection title="Edge Functions Bling">
              <DocTable
                headers={["Função", "Método", "Descrição"]}
                rows={[
                  ["consultar_cliente_bling", "POST", "Busca cliente no Bling por CPF/CNPJ"],
                  ["criar_cliente_bling", "POST", "Cria novo cliente no Bling"],
                  ["editar_cliente_bling", "POST", "Atualiza cliente existente no Bling"],
                  ["consultar_pedido_bling", "POST", "Verifica se pedido já existe no Bling"],
                  ["criar_pedido_bling", "POST", "Cria pedido no Bling"],
                  ["editar_pedido_bling", "POST", "Atualiza pedido existente no Bling"],
                  ["gerar_nfe_bling", "POST", "Gera NF-e no Bling para o pedido"],
                ]}
              />
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* PRODUÇÃO */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="producao" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🏭 Produção</h2>
            <p className="text-gray-600 dark:text-gray-400">Página: Producao.tsx (~680 linhas) — Kanban com Realtime + visualização agregada de itens.</p>

            <h3 className="text-lg font-semibold">Status de Produção</h3>
            <DocTable
              headers={["Status", "Descrição"]}
              rows={[
                ["Produção", "Itens em processo de fabricação"],
                ["Entrada Logística", "Itens produzidos aguardando envio à logística"],
                ["Logística", "Itens prontos para envio"],
              ]}
            />

            <CollapsibleSection title="Tab: Por Status (KanbanBoard)">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Kanban com drag-and-drop nativo HTML</li>
                <li>Colunas por status, cada coluna com busca interna</li>
                <li>OrderCard com border colorida, ID externo clicável (copia), badge urgente, preview de itens</li>
                <li>Drop handler: update otimista do status + persistência no banco</li>
                <li>Quando movido para ENVIADO: seta data_enviado</li>
                <li><strong>Realtime subscriptions</strong> em pedidos e itens_pedido para atualização automática</li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Tab: Itens a serem produzidos">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>3 seções: Produção, Entrada Logística, Logística</li>
                <li>Itens agrupados por produto+variação entre todos os pedidos do status</li>
                <li>Cards com imagem, nome do produto, quantidade total agregada</li>
                <li>Clicável: expande para mostrar breakdown de variações</li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* LOGÍSTICA */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="logistica" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🚚 Logística</h2>

            <h3 className="text-lg font-semibold">Logistica.tsx (~967 linhas)</h3>
            <p className="text-gray-600 dark:text-gray-400">Página principal de envio com bipagem por código de barras.</p>

            <CollapsibleSection title="Fluxo de Bipagem" defaultOpen>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>Escaneamento do código</strong> — input com foco automático. Ao pressionar Enter, chama RPC achar_item_por_codigo_bipado</li>
                <li><strong>Priorização</strong> — a RPC retorna o item com: urgente primeiro → mais antigo → unitário primeiro → maior quantidade → menos itens distintos</li>
                <li><strong>Card do pedido</strong> — mostra header com responsável, plataforma, id_externo + badges dos produtos agrupados (via view itens_pedido_agrupados)</li>
                <li><strong>Verificação por item</strong> — cada item tem input para bipar o código de barras individualmente. Verde = correto, Vermelho = errado</li>
                <li><strong>Todos bipados</strong> — ativa botão "IMPRIMIR ETIQUETA" (ou "Etiqueta Mercado Livre" se plataforma = ML)</li>
                <li><strong>Geração da etiqueta</strong> — verifica saldo ME ≥ R$50 → auto-atribui remetente por plataforma → chama edge function → abre PDF → atualiza status para ENVIADO</li>
              </ol>
            </CollapsibleSection>

            <CollapsibleSection title="Enviar por Pedido">
              <p className="text-sm">Modal que permite buscar um pedido pelo ID ou ID externo sem precisar bipar. Usa maybeSingle() para buscar primeiro por id_externo, depois por id.</p>
            </CollapsibleSection>

            <CollapsibleSection title="View: vw_itens_logistica">
              <p className="text-sm">Grid de cards "Itens a Enviar" — mostra apenas quando nenhum pedido está ativo. Agrupa itens de todos os pedidos em logística por produto/variação com quantidade total.</p>
            </CollapsibleSection>

            <h3 className="text-lg font-semibold mt-4">EnvioPorEtiqueta.tsx (~480 linhas)</h3>
            <p className="text-gray-600 dark:text-gray-400">Fluxo de envio para pedidos com etiquetas manuais (não geradas pelo Melhor Envio).</p>

            <CollapsibleSection title="Fluxo de Envio por Etiqueta">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>Filtro</strong> — lista pedidos com etiquetas_uploads IS NOT NULL e status ≠ ENVIADO</li>
                <li><strong>Modal</strong> — clique no pedido abre modal com 3 etapas:
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li><strong>Bipagem de itens</strong> — valida código de barras de cada item</li>
                    <li><strong>Visualização de etiquetas</strong> — aparece somente após bipar TODOS os itens. Cards (quadradinhos) clicáveis. Cada etiqueta deve ser visualizada</li>
                    <li><strong>Definir como Enviado</strong> — botão ativo somente após TODAS as etiquetas serem visualizadas. Seta resp_envio e data_envio</li>
                  </ul>
                </li>
              </ol>
            </CollapsibleSection>

            <CollapsibleSection title="Auto-atribuição de Remetente">
              <DocTable
                headers={["Plataformas", "Remetente UUID"]}
                rows={[
                  ["3 plataformas especiais (UUIDs específicos)", "3fc6839c-e959-4dc1-a983-f61d557e50ec"],
                  ["Todas as outras", "128a7de7-d649-43e1-8ba3-2b54c3496b14"],
                ]}
              />
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* ESTOQUE */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="estoque" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">📦 Estoque</h2>

            <h3 className="text-lg font-semibold">Estoque.tsx (~548 linhas)</h3>
            <p className="text-gray-600 dark:text-gray-400">Gestão de produtos com CRUD completo. Permissão 17 (criar), 18 (editar).</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>3 cards de métricas: Total de Produtos, Categorias Únicas, Produtos sem Estoque</li>
              <li>Tabela desktop + cards mobile responsivos</li>
              <li>Busca por nome, SKU, categoria</li>
              <li>Paginação server-side</li>
            </ul>

            <CollapsibleSection title="ProductForm (components/products/ProductForm.tsx)">
              <p className="text-sm">Formulário modal para criar/editar produtos. Extremamente completo:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Campos básicos</strong> — nome, SKU (unique), código de barras, preço, unidade, categoria, quantidade, entregue ML, bling_id, img_url</li>
                <li><strong>Dados de Volume</strong> — altura, largura, comprimento, peso (obrigatórios na criação)</li>
                <li><strong>Variações</strong> — checkbox para habilitar. Cada variação: nome, SKU, valor, quantidade, código barras, img_url + dados de volume</li>
                <li><strong>Up-Sell</strong> — modal de seleção multi-produto com grid visual</li>
                <li><strong>Embalagem</strong> — seletor de embalagem + EmbalagensModal inline para criar nova</li>
                <li><strong>Criação</strong> — INSERT em produtos → INSERT em variacoes_produto</li>
                <li><strong>Edição</strong> — UPDATE produto → sync variações (delete removidas, update existentes, insert novas)</li>
                <li><strong>Entregue ML</strong> — upsert em produtos_sku_plataformas</li>
              </ul>
            </CollapsibleSection>

            <h3 className="text-lg font-semibold mt-4">ListaEmbalagens.tsx (~370 linhas)</h3>
            <p className="text-gray-600 dark:text-gray-400">CRUD de embalagens. Permissões 19/20/21. Campos: Nome, Altura, Largura, Comprimento, Peso.</p>

            <h3 className="text-lg font-semibold mt-4">SkuPlataformas.tsx</h3>
            <p className="text-gray-600 dark:text-gray-400">Placeholder — funcionalidade ainda não implementada.</p>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* LEADS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="leads" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">👥 Leads</h2>
            <p className="text-gray-600 dark:text-gray-400">Página: Leads.tsx (~740 linhas) — Requer permissão <strong>23</strong></p>

            <h3 className="text-lg font-semibold">Filtros</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li><strong>Todos</strong> — todos os leads</li>
              <li><strong>Pix</strong> — leads do tipo PIX (com contagem)</li>
              <li><strong>Carrinho Ab.</strong> — leads do tipo carrinho abandonado (com contagem)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">Conversão para Pedido</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Ao clicar no botão "+" de um lead, abre dialog com seleção de pagamento. Fluxo: insere pedido → insere cliente → insere itens → deleta o lead. A plataforma é auto-detectada pelo tipo_de_lead.</p>

            <h3 className="text-lg font-semibold mt-3">Ações por Lead</h3>
            <DocTable
              headers={["Ação", "Descrição"]}
              rows={[
                ["📋 Copiar", "Copia nome do lead para clipboard"],
                ["✏️ Editar", "Abre edição do lead (inline)"],
                ["➕ Criar Pedido", "Converte lead em pedido com dialog de pagamento"],
                ["✅ Check", "Marca lead como aprovado"],
                ["❌ X", "Marca lead como rejeitado"],
              ]}
            />
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* CONFIGURAÇÕES */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="configuracoes" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">⚙️ Configurações</h2>
            <p className="text-gray-600 dark:text-gray-400">Página: Configuracoes.tsx (~2474 linhas) — Requer permissão <strong>7</strong>. 5 abas.</p>

            <CollapsibleSection title="Aba: Usuários">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Criar usuário</strong> — signUp no Auth → upsert no banco → restaura sessão admin</li>
                <li><strong>Editar</strong> — nome, email, acesso (predefinições), foto (drag-and-drop), toggle ativo</li>
                <li><strong>Permissões</strong> — modal com lista paginada de checkboxes, filtro por categoria, RPC set_usuario_permissao</li>
                <li><strong>Excluir</strong> — tenta múltiplas APIs (admin, auth, REST)</li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Status">
              <p className="text-sm">CRUD de status de pedido. Campos: nome, cor (color picker), ordem. Tabela com Editar/Excluir.</p>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Setores">
              <p className="text-sm">Lista de módulos/setores do sistema. <strong>Drag-and-drop</strong> para reordenação. Salva em localStorage.setores com dispatch de custom event "setores-updated" para atualização do header.</p>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Formas de Pagamento">
              <p className="text-sm">CRUD de formas de pagamento agrupadas por nome. Upload de imagem. Tabela com Editar/Excluir.</p>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Preferências">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Dark Mode</strong> — toggle que salva em localStorage + dispatch de custom event</li>
                <li><strong>Minha Empresa</strong> — nome, CNPJ (formatado), cor principal, logo (upload para Storage)</li>
                <li><strong>Paleta de cores</strong> — a cor hex escolhida é convertida para HSL e gera 10 shades (50-950) para light e dark mode, salvas como JSONB no campo cores_hsl</li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* NOTIFICAÇÕES */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="notificacoes" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🔔 Notificações</h2>

            <h3 className="text-lg font-semibold">NotificacoesContext (contexts/NotificacoesContext.tsx)</h3>
            <p className="text-gray-600 dark:text-gray-400">Context Provider com WebSocket Realtime para notificações em tempo real.</p>

            <CollapsibleSection title="Estrutura Completa">
              <DocTable
                headers={["Função", "Descrição"]}
                rows={[
                  ["fetchNotificacoes()", "Busca view_notificacoes filtrada pelo empresa_id, limit 50, desc"],
                  ["marcarComoLida(id)", "Insere em historico_notificacoes com usuario_id"],
                  ["marcarTodasComoLidas()", "Insere batch todos os IDs não lidos"],
                  ["marcarComoConcluida(id)", "Atualiza concluida=true no historico_notificacoes"],
                  ["Realtime Subscription", "Escuta INSERT na tabela notificacoes filtrado por empresa_id"],
                ]}
              />
              <p className="mt-2 text-sm">Quando uma notificação é recebida via Realtime: mostra toast com sonner (card amber com ícone e botão copiar), toca som /notification-sound.mp3.</p>
            </CollapsibleSection>

            <h3 className="text-lg font-semibold mt-4">NotificacoesDropdown (components/notifications/NotificacoesDropdown.tsx)</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>Badge pulsante no sino quando há não-lidas</li>
              <li>Tabs: Não lidas / Lidas, com indicador animado</li>
              <li>Filtros: Todas / Concluídas / Não concluídas</li>
              <li>Timestamps relativos com formatDistanceToNow (pt-BR)</li>
              <li>Click no pedido navega e marca como lida</li>
            </ul>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* HOOKS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="hooks" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🪝 Hooks Customizados</h2>

            <DocTable
              headers={["Hook", "Arquivo", "Descrição"]}
              rows={[
                ["useAuth()", "hooks/useAuth.tsx", "Context de autenticação. Retorna user, profile, permissions, isActive, signIn/signUp/signOut, hasPermission, empresaId"],
                ["useEmpresaColors()", "hooks/useEmpresaColors.tsx", "Carrega cores_hsl da empresa e aplica como variáveis CSS (custom-50 a custom-950). Suporta light/dark mode com listener de toggle"],
                ["useIsMobile()", "hooks/use-mobile.tsx", "Retorna boolean — true se largura < 768px (matchMedia listener)"],
                ["useToast()", "hooks/use-toast.ts", "Sistema de toast global. toast() pode ser chamada standalone. State machine com add/update/dismiss/remove. Limit 1 toast por vez"],
              ]}
            />
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* SUPABASE */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="supabase" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🗄️ Supabase & Banco de Dados</h2>

            <h3 className="text-lg font-semibold">Tabelas Principais</h3>
            <DocTable
              headers={["Tabela", "Descrição", "Relações"]}
              rows={[
                ["pedidos", "Pedidos do sistema", "→ clientes, usuarios, plataformas, status_pedido, tipos_etiqueta"],
                ["clientes", "Dados dos clientes", "→ pedidos (FK)"],
                ["itens_pedido", "Itens de cada pedido", "→ pedidos, produtos, variacoes_produto"],
                ["produtos", "Catálogo de produtos", "→ embalagens (FK)"],
                ["variacoes_produto", "Variações de produtos", "→ produtos (FK)"],
                ["usuarios", "Usuários do sistema", "Auth Supabase"],
                ["plataformas", "Plataformas de venda (Yampi, Shopee, etc.)", "—"],
                ["status_pedido", "Status dos pedidos", "—"],
                ["tipos_etiqueta", "Status de etiquetas", "—"],
                ["embalagens", "Embalagens de envio", "—"],
                ["remetentes", "Remetentes de envio", "—"],
                ["leads", "Leads para conversão", "→ produtos"],
                ["status_upsell", "Status de up-sell (4 valores)", "→ itens_pedido"],
                ["formas_pagamentos", "Formas de pagamento", "—"],
                ["empresas", "Dados da empresa", "Cores HSL, logo"],
                ["notificacoes", "Notificações do sistema", "Realtime"],
                ["historico_notificacoes", "Histórico de leituras", "→ notificacoes, usuarios"],
                ["usuarios_permissoes", "Permissões por usuário", "→ usuarios"],
                ["lista_espera_pix", "Pedidos PIX pendentes", "Limpo por webhook"],
                ["fretes_nao_disponiveis", "Transportadoras ocultas", "→ empresas"],
                ["pedidos_retornados", "Pedidos devolvidos", "→ pedidos"],
                ["produtos_sku_plataformas", "SKU por plataforma (ML)", "→ produtos"],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">Views</h3>
            <DocTable
              headers={["View", "Descrição", "Usada em"]}
              rows={[
                ["vw_clientes_pedidos", "Join pedidos + clientes (dados do cliente no pedido)", "Comercial, PedidosCancelados, PedidosEnviados, SearchPanel"],
                ["itens_pedido_agrupados", "Agrupa itens por produto/variação com soma de quantidades", "Logistica, EnvioPorEtiqueta"],
                ["vw_itens_logistica", "Itens pendentes para logística agregados por produto", "Logistica (cards)"],
                ["usuarios_completos", "Usuários com dados completos", "useAuth, Configurações"],
                ["group_usuarios_permissoes", "Permissões agrupadas por usuário", "useAuth"],
                ["view_notificacoes", "Notificações com status de leitura", "NotificacoesContext"],
                ["pedidos_retornados_completos", "Pedidos retornados com joins completos", "PedidosRetornados"],
                ["vw_ass_predefinicao_perm_completo", "Predefinições de permissões", "Configurações"],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">RPCs (Funções Server-Side)</h3>
            <DocTable
              headers={["RPC", "Parâmetros", "Descrição"]}
              rows={[
                ["achar_item_por_codigo_bipado", "codigo_bipado (text)", "Localiza item na logística por barcode. Prioriza: urgente → mais antigo → unitário → maior qtd"],
                ["trazer_cliente_info", "p_cliente_id (uuid)", "Retorna dados do cliente para formulário de entrega. Retorna 'já preenchido' se formulario_enviado=true"],
                ["enviar_informacoes_cliente", "p_cliente_id + 13 campos", "Atualiza dados de entrega do cliente e marca formulario_enviado=true"],
                ["set_usuario_permissao", "usuario_id, permissao_id, value", "Ativa/desativa uma permissão específica para um usuário"],
                ["increment", "row_id, x", "Incrementa contador de produto (contagem)"],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">Triggers</h3>
            <DocTable
              headers={["Trigger", "Tabela", "Descrição"]}
              rows={[
                ["handle_updated_at", "Todas (9)", "Atualiza automaticamente a coluna atualizado_em"],
                ["atualizar_pedidos_para_logistica", "produtos, variacoes_produto", "Quando estoque aumenta, aloca itens faltantes e move pedidos para logística"],
                ["enviar_direto_logistica", "pedidos", "Quando pedido_liberado=true, muda status para logística automaticamente"],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">Storage</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li><strong>Bucket: documentos</strong> — pasta etiquetas/ para PDFs de etiquetas manuais</li>
              <li><strong>Upload de imagens</strong> — fotos de usuários, logos de empresa, imagens de plataformas e formas de pagamento</li>
              <li><strong>URLs públicas</strong> — geradas via getPublicUrl() e salvas nos registros</li>
            </ul>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* EDGE FUNCTIONS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="edge-functions" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">⚡ Edge Functions (Deno)</h2>

            <CollapsibleSection title="pedido-pago-yampi" defaultOpen>
              <p className="text-sm font-semibold mb-2">Webhook — acionado quando pedido é pago na Yampi</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li><strong>Limpeza PIX</strong> — se pagamento = PIX, deleta de lista_espera_pix</li>
                <li><strong>Verificação Upsell</strong> — se is_upsell=true, busca cliente por CPF e anexa itens ao pedido original</li>
                <li><strong>Forma de pagamento</strong> — detecta tipo (Cartão, Boleto, PIX) da transação</li>
                <li><strong>Embalagem</strong> — para cada item, busca produto → embalagem. Calcula peso total, maiores dimensões</li>
                <li><strong>Remetente</strong> — busca remetente fixo ou usa dados hardcoded</li>
                <li><strong>Cotação Melhor Envio</strong> — chama API para calcular frete mais barato</li>
                <li><strong>Inserções</strong> — INSERT pedidos → INSERT clientes → INSERT itens_pedido (1 por unidade)</li>
              </ol>
              <p className="mt-2 text-sm"><strong>empresa_id</strong> fixo = 1 em todas as inserções.</p>
            </CollapsibleSection>

            <CollapsibleSection title="yampi-pix-aprovado">
              <p className="text-sm">Webhook — quando PIX é aprovado. Remove registro de lista_espera_pix pelo id_yampi. Método: POST only.</p>
            </CollapsibleSection>

            <CollapsibleSection title="yampi-carrinho-ab">
              <p className="text-sm">Webhook — evento cart.reminder (carrinho abandonado). Cria lead na tabela leads para remarketing.</p>
              <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                <li>Ignora se o evento não for cart.reminder</li>
                <li>Ignora se o cliente já tem pedido ativo (consulta vw_clientes_pedidos)</li>
                <li>Ignora se já existe lead do tipo 2 com mesmo CPF ou email</li>
                <li>Busca produto pelo SKU do primeiro item do carrinho</li>
                <li>Insere lead com dados do cliente, endereço, valores, produto e UTM</li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="calculo-frete-melhorenvio">
              <p className="text-sm">Proxy/gateway para a API do Melhor Envio (sandbox). Aceita chaves em português ou inglês. Valida campos obrigatórios e retorna array de cotações.</p>
              <CodeBlock>{`// Request
POST /functions/v1/calculo-frete-melhorenvio
{
  "remetente": { "cep": "01310-100" },
  "destinatario": { "cep": "80010-000" },
  "produtos": [
    { "height": 10, "width": 15, "length": 20, "weight": 0.5, "quantity": 1 }
  ]
}

// Response
[
  { "name": "SEDEX", "price": "25.90", "delivery_time": 3, ... },
  { "name": "PAC", "price": "15.50", "delivery_time": 7, ... }
]`}</CodeBlock>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* WEBHOOKS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="webhooks" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🔗 Webhooks & Integrações Externas</h2>

            <DocTable
              headers={["Integração", "Tipo", "Descrição"]}
              rows={[
                ["Yampi", "Webhook → Edge Function", "Pedido pago, PIX aprovado, Carrinho abandonado"],
                ["Melhor Envio", "API REST", "Cotação de frete, adicionar ao carrinho, processar etiqueta, buscar saldo"],
                ["Mercado Livre", "Edge Function", "Geração de etiqueta ML via gerar-etiqueta-ml"],
                ["Bling ERP", "Edge Functions (7)", "Consultar/criar/editar cliente e pedido, gerar NF-e"],
                ["ViaCEP", "API REST", "Busca de endereço por CEP (em InformacoesEntrega.tsx)"],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">Edge Functions chamadas pelo Frontend</h3>
            <DocTable
              headers={["Função", "Usada em", "Descrição"]}
              rows={[
                ["buscar_saldo_melhor_envio", "Logistica, Comercial, Pedido", "Retorna saldo atual do Melhor Envio"],
                ["calculo-frete-melhorenvio", "CotacaoFreteModal, Pedido", "Cotação de frete com múltiplas transportadoras"],
                ["adic-carrinho-melhorenvio", "CotacaoFreteModal", "Adiciona frete selecionado ao carrinho ME"],
                ["processar_etiqueta_em_envio_de_pedido", "Logistica, Comercial, Pedido", "Gera etiqueta no Melhor Envio"],
                ["processar-etiqueta-melhorenvio", "Pedido", "Processa e retorna PDF da etiqueta (Base64→Blob)"],
                ["gerar-etiqueta-ml", "Logistica, Pedido", "Gera etiqueta do Mercado Livre"],
              ]}
            />
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* TEMAS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="temas" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🎨 Tema & Cores Dinâmicas</h2>

            <h3 className="text-lg font-semibold">useEmpresaColors (hooks/useEmpresaColors.tsx)</h3>
            <p className="text-gray-600 dark:text-gray-400">Sistema de temas dinâmicos que carrega a cor da empresa e gera uma paleta completa.</p>

            <CollapsibleSection title="Como funciona" defaultOpen>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>Busca</strong> — carrega cores_hsl (JSONB) da tabela empresas</li>
                <li><strong>Conversão</strong> — na aba de configurações, a cor hex é convertida para HSL e gera 10 shades (custom-50 a custom-950) para light e dark mode</li>
                <li><strong>Aplicação</strong> — define variáveis CSS no document.documentElement</li>
                <li><strong>Listener</strong> — monitora toggles de dark/light mode e reaplica as cores automaticamente</li>
              </ol>
            </CollapsibleSection>

            <CodeBlock>{`// Variáveis CSS geradas:
--custom-50:  32 31% 98%    // Mais claro
--custom-100: 32 26% 95%
--custom-200: 32 21% 92%
...
--custom-900: 32 80% 15%
--custom-950: 32 90% 8%     // Mais escuro

// Usadas via Tailwind:
bg-custom-100, text-custom-700, border-custom-600, etc.

// Gradiente do header:
var(--gradient-primary)`}</CodeBlock>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* TIPOS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="tipos" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">📝 Tipos & Interfaces</h2>

            <h3 className="text-lg font-semibold">types/index.ts — Interfaces do Domínio</h3>
            <DocTable
              headers={["Interface", "Campos Principais"]}
              rows={[
                ["Usuario", "id, nome, email, papel (admin/operador), avatar, ativo"],
                ["Plataforma", "id, nome, cor, imagemUrl"],
                ["StatusPedido", "id, nome, corHex, ordem"],
                ["Produto", "id, nome, sku, preco, unidade, categoria, imagemUrl, variacoes[]"],
                ["VariacaoProduto", "id, produtoId, atributo, valor, precoMin, qtd, skuVar"],
                ["ItemPedido", "id, pedidoId, produtoId, variacaoId, qtd, precoUnit"],
                ["EtiquetaEnvio", "= StatusPedido (id, nome, corHex, ordem)"],
                ["Pedido", "id, idExterno, clienteNome, contato, responsavelId, plataformaId, statusId, urgente, dataPrevista, observacoes, itens[], etiqueta_ml?, tempo_ganho?"],
                ["DashboardData", "totalPedidos, pedidosHoje, pedidosSemana, pedidosPorStatus/Plataforma, etiquetasEnvio"],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">integrations/supabase/types.ts — Schema Gerado</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Tipos TypeScript gerados automaticamente do schema do Supabase. Define Row, Insert e Update para cada tabela com todas as colunas tipadas.</p>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* PÁGINAS PÚBLICAS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="paginas-publicas" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">🌐 Páginas Públicas</h2>

            <DocTable
              headers={["Página", "Rota", "Descrição"]}
              rows={[
                ["Auth.tsx", "/auth", "Login com email/senha + reset de senha. Branded 'Zeelux ERP'. Validação com zod"],
                ["InformacoesEntrega.tsx", "/informacoes-entrega/:id", "Formulário público (2 etapas) para cliente informar dados de entrega. Validação completa de CPF/CNPJ, busca CEP via ViaCEP"],
                ["Documentacao.tsx", "/documentacao", "Esta página — documentação técnica completa do sistema"],
                ["TermosServico.tsx", "/termos-servico", "Termos de Serviço estáticos — 10 seções jurídicas"],
                ["TermoPrivacidade.tsx", "/politica-privacidade", "Política de Privacidade LGPD — 11 seções, DPO, base legal"],
                ["NotFound.tsx", "/* (catch-all)", "Página 404 com link para retorno"],
              ]}
            />

            <CollapsibleSection title="InformacoesEntrega — Detalhes">
              <p className="text-sm">Formulário público acessado pelo cliente via link único (link_formulario do cliente).</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Step 1</strong> — PF/PJ toggle, Nome, CPF/CNPJ (com validação de dígitos), Email, Telefone</li>
                <li><strong>Step 2</strong> — CEP (busca ViaCEP) → auto-preenche Cidade/UF/Endereço/Bairro, Número, Complemento (max 17), Observação (max 30)</li>
                <li><strong>RPCs</strong> — trazer_cliente_info (carrega dados iniciais) + enviar_informacoes_cliente (salva e marca formulario_enviado=true)</li>
                <li><strong>Validação CPF</strong> — algoritmo completo de dígitos verificadores (11 dígitos)</li>
                <li><strong>Validação CNPJ</strong> — algoritmo completo de dígitos verificadores (14 dígitos)</li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ─── Footer ─── */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400 space-y-2">
            <p>Documentação gerada — ERP Zeelux</p>
            <p>Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
            <div className="flex justify-center gap-4 mt-3">
              <Link to="/termos-servico" className="text-blue-600 hover:underline">Termos de Serviço</Link>
              <Link to="/politica-privacidade" className="text-blue-600 hover:underline">Política de Privacidade</Link>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
