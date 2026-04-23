import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  ShoppingCart,
  TrendingUp,
  FileText,
  Users,
  Truck,
  BarChart3,
  Settings,
  CheckCircle,
  Box,
  Home,
  Code,
  Database,
  Zap,
  Shield,
  Bell,
  Search,
  Layout,
  Palette,
  Globe,
  Key,
  ChevronDown,
  ChevronRight,
  Layers,
  GitBranch,
  Server,
  Eye,
  Upload,
  ClipboardList,
  Factory,
  UserPlus,
  CreditCard,
  BarChart,
  PieChart,
  Calendar,
  Filter,
  Copy,
  Boxes,
  ArrowLeftRight,
  BookOpen,
  Target,
  RefreshCw,
  AlertTriangle,
  Lock,
  Webhook,
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
  {
    id: "visao-geral",
    label: "Visão Geral",
    icon: <Home className="w-4 h-4" />,
  },
  {
    id: "arquitetura",
    label: "Arquitetura & Stack",
    icon: <Layers className="w-4 h-4" />,
  },
  {
    id: "autenticacao",
    label: "Autenticação & Permissões",
    icon: <Shield className="w-4 h-4" />,
  },
  {
    id: "layout",
    label: "Layout & Navegação",
    icon: <Layout className="w-4 h-4" />,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <BarChart3 className="w-4 h-4" />,
  },
  {
    id: "comercial",
    label: "Comercial",
    icon: <ShoppingCart className="w-4 h-4" />,
    badge: "5 páginas",
  },
  {
    id: "pedido",
    label: "Pedido (Detalhe)",
    icon: <FileText className="w-4 h-4" />,
    badge: "4.300+ linhas",
  },
  {
    id: "contabilidade",
    label: "Contabilidade",
    icon: <CreditCard className="w-4 h-4" />,
    badge: "Bling",
  },
  {
    id: "producao",
    label: "Produção",
    icon: <Factory className="w-4 h-4" />,
    badge: "Realtime",
  },
  {
    id: "logistica",
    label: "Logística",
    icon: <Truck className="w-4 h-4" />,
    badge: "3 páginas",
  },
  { id: "estoque", label: "Estoque", icon: <Box className="w-4 h-4" /> },
  { id: "leads", label: "Leads", icon: <UserPlus className="w-4 h-4" /> },
  {
    id: "configuracoes",
    label: "Configurações",
    icon: <Settings className="w-4 h-4" />,
    badge: "5 abas",
  },
  {
    id: "notificacoes",
    label: "Notificações",
    icon: <Bell className="w-4 h-4" />,
    badge: "Realtime",
  },
  {
    id: "hooks",
    label: "Hooks Customizados",
    icon: <Code className="w-4 h-4" />,
  },
  {
    id: "supabase",
    label: "Supabase & Banco de Dados",
    icon: <Database className="w-4 h-4" />,
  },
  {
    id: "edge-functions",
    label: "Edge Functions",
    icon: <Zap className="w-4 h-4" />,
    badge: "4 funções",
  },
  {
    id: "webhooks",
    label: "Webhooks & Integrações",
    icon: <Webhook className="w-4 h-4" />,
  },
  {
    id: "temas",
    label: "Tema & Cores Dinâmicas",
    icon: <Palette className="w-4 h-4" />,
  },
  {
    id: "tipos",
    label: "Tipos & Interfaces",
    icon: <Code className="w-4 h-4" />,
  },
  {
    id: "paginas-publicas",
    label: "Páginas Públicas",
    icon: <Globe className="w-4 h-4" />,
  },
];

/* ─── Componente de Seção Colapsável ─────────────────── */
function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
      >
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </span>
        {open ? (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {open && (
        <div className="p-4 bg-white dark:bg-gray-900 space-y-3">
          {children}
        </div>
      )}
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
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left p-2 border border-gray-200 dark:border-gray-700 font-semibold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="p-2 border border-gray-200 dark:border-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded-lg overflow-x-auto whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  );
}

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card className="p-4 space-y-2">
      <div className="flex items-center gap-2">
        <div className="p-1.5 bg-blue-100 dark:bg-blue-900/40 rounded-md text-blue-700 dark:text-blue-300">
          {icon}
        </div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h4>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
        {children}
      </div>
    </Card>
  );
}

/* ─── Senha de acesso ────────────────────────────────── */
const SENHA_DOCUMENTACAO = "zeelux2026";

/* ═════════════════════════════════════════════════════════
   ═══ COMPONENTE PRINCIPAL ══════════════════════════════
   ═════════════════════════════════════════════════════════ */
export default function Documentacao() {
  const [activeSection, setActiveSection] = useState("visao-geral");
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === SENHA_DOCUMENTACAO) {
      setAutenticado(true);
      setErroSenha(false);
    } else {
      setErroSenha(true);
    }
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="mx-auto w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
              <Lock className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Documentação Técnica
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Digite a senha para acessar a documentação do sistema.
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="senha"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Senha
              </label>
              <input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  setErroSenha(false);
                }}
                placeholder="••••••••"
                autoFocus
                className={`w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors ${
                  erroSenha
                    ? "border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800"
                    : "border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 focus:border-blue-500"
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
              />
              {erroSenha && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Senha incorreta.
                  Tente novamente.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors"
            >
              Acessar Documentação
            </button>
          </form>
          <div className="text-center">
            <Link
              to="/"
              className="text-sm text-blue-600 hover:underline flex items-center justify-center gap-1"
            >
              <Home className="w-3.5 h-3.5" /> Voltar ao sistema
            </Link>
          </div>
        </Card>
      </div>
    );
  }

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
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Referência completa de arquitetura, páginas, componentes, hooks,
                banco de dados e integrações
              </p>
            </div>
            <Link
              to="/"
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
            >
              <Home className="w-4 h-4" /> Voltar ao sistema
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* ─── Sidebar de navegação ─── */}
        <nav className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-24 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
            <p className="text-xs font-bold uppercase text-gray-400 mb-3 tracking-wider">
              Seções
            </p>
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
                {s.badge && (
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-1.5 py-0"
                  >
                    {s.badge}
                  </Badge>
                )}
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
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🏗️ Visão Geral do Sistema
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              O ERP Zeelux é um sistema digital completo para gerenciar todo o
              ciclo de vida dos pedidos da empresa: desde o momento em que o
              cliente faz a compra até o envio do produto. Ele centraliza em um
              só lugar a gestão de pedidos, a produção, o envio (logística), o
              controle de estoque e a parte financeira (contabilidade).
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              A parte visual que o usuário vê (o sistema na tela) foi
              desenvolvida com tecnologias modernas de desenvolvimento web. Já o
              armazenamento de dados, o controle de acesso de usuários e as
              automatizações acontecem em um serviço de banco de dados chamado
              Supabase, que funciona na nuvem — ou seja, todas as informações
              ficam salvas e acessíveis de qualquer lugar com internet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoCard
                title="25 Páginas"
                icon={<FileText className="w-4 h-4" />}
              >
                <p>
                  O sistema conta com 25 telas diferentes, cobrindo todos os
                  módulos: Dashboard (resumo geral), Comercial (pedidos), Pedido
                  (detalhe de cada pedido), Logística (envios), Produção,
                  Estoque, Leads (clientes em potencial), Contabilidade,
                  Configurações e muito mais.
                </p>
              </InfoCard>
              <InfoCard
                title="22+ Componentes"
                icon={<Layers className="w-4 h-4" />}
              >
                <p>
                  Possui mais de 22 blocos de construção reutilizáveis: menus de
                  navegação, janelas pop-up (modais), formulários de
                  preenchimento, quadro de tarefas (Kanban), gerenciamento de
                  envios, avisos e notificações — todos projetados para
                  facilitar o uso do sistema.
                </p>
              </InfoCard>
              <InfoCard
                title="4 Edge Functions"
                icon={<Zap className="w-4 h-4" />}
              >
                <p>
                  Conta com 4 automações na nuvem (chamadas Edge Functions): 3
                  delas recebem avisos automáticos da loja virtual Yampi (quando
                  um pedido é pago, quando um PIX é aprovado e quando um cliente
                  abandona o carrinho) e 1 calcula o frete mais barato pelo
                  serviço Melhor Envio.
                </p>
              </InfoCard>
            </div>

            <h3 className="text-lg font-semibold mt-6">
              Módulos do Sistema \u2014 O que cada parte faz
            </h3>
            <DocTable
              headers={["Módulo", "Arquivo(s)", "Para que serve"]}
              rows={[
                [
                  "Dashboard",
                  "Dashboard.tsx",
                  "Resumo visual das vendas: gráficos, métricas financeiras (faturamento, ticket médio), top produtos e taxa de envio por período",
                ],
                [
                  "Comercial",
                  "Comercial.tsx, PedidosCancelados.tsx, PedidosEnviados.tsx, PedidosRetornados.tsx, NovoPedido.tsx",
                  "Gestão completa dos pedidos: listagem com filtros avançados, ações em lote, envio rápido de etiquetas e criação manual de pedidos",
                ],
                [
                  "Pedido",
                  "Pedido.tsx",
                  "Tela de detalhe de cada pedido: gerenciar itens, status, dados do cliente, frete, etiqueta, up-sell e upload de etiquetas manuais",
                ],
                [
                  "Contabilidade",
                  "Contabilidade.tsx, PedidoContabilidade.tsx",
                  "Visualização contábil dos pedidos e integração com o Bling ERP para emissão de pedidos e Notas Fiscais Eletrônicas (NF-e)",
                ],
                [
                  "Produção",
                  "Producao.tsx",
                  "Quadro Kanban com atualização em tempo real para acompanhar o progresso da produção dos pedidos por etapa",
                ],
                [
                  "Logística",
                  "Logistica.tsx, EnvioPorEtiqueta.tsx",
                  "Central de envios: bipagem de produtos por código de barras, geração automática de etiquetas e envio de pedidos com etiquetas manuais",
                ],
                [
                  "Estoque",
                  "Estoque.tsx, ListaEmbalagens.tsx, SkuPlataformas.tsx",
                  "Cadastro e gerenciamento de produtos (com variações), embalagens de envio e SKUs por plataforma",
                ],
                [
                  "Leads",
                  "Leads.tsx",
                  "Lista de clientes potenciais (PIX pendente ou carrinho abandonado) com possibilidade de convertê-los em pedidos reais",
                ],
                [
                  "Configurações",
                  "Configuracoes.tsx",
                  "Gerenciamento de usuários, permissões, status de pedido, setores, formas de pagamento e identidade visual da empresa (cores e logo)",
                ],
              ]}
            />
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* ARQUITETURA */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="arquitetura" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🧱 Arquitetura & Stack Tecnológico
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard
                title="Frontend (A parte visual)"
                icon={<Code className="w-4 h-4" />}
              >
                <p className="text-sm mb-2">
                  É tudo o que o usuário vê e interage na tela. As tecnologias
                  usadas para construir essa parte são:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>React 18 + TypeScript</strong> — a linguagem e o
                    motor principal que fazem o sistema funcionar no navegador,
                    garantindo que o código seja organizado e livre de erros
                    comuns
                  </li>
                  <li>
                    <strong>Vite</strong> — ferramenta que empacota e executa o
                    sistema durante o desenvolvimento, tornando o processo
                    rápido
                  </li>
                  <li>
                    <strong>Tailwind CSS</strong> — sistema de estilos visuais
                    (cores, tamanhos, espaçamentos) que dá a aparência ao
                    sistema
                  </li>
                  <li>
                    <strong>shadcn/ui</strong> — biblioteca de componentes de
                    interface prontos (botões, caixas de diálogo, menus), usados
                    para garantir uma aparência profissional e consistente
                  </li>
                  <li>
                    <strong>React Router v6</strong> — sistema de navegação que
                    troca as páginas sem precisar recarregar o navegador
                    completamente
                  </li>
                  <li>
                    <strong>React Query (TanStack)</strong> — gerencia o
                    carregamento de dados do servidor, salvando os resultados em
                    memória para evitar buscas desnecessárias
                  </li>
                  <li>
                    <strong>Recharts</strong> — biblioteca de gráficos usada
                    para criar os gráficos de barras e pizza do Dashboard
                  </li>
                  <li>
                    <strong>date-fns</strong> — utilitário para formatar e
                    calcular datas em português do Brasil
                  </li>
                  <li>
                    <strong>zod + react-hook-form</strong> — sistema de
                    validação de formulários que verifica se os campos foram
                    preenchidos corretamente antes de salvar
                  </li>
                  <li>
                    <strong>Lucide React + react-icons</strong> — pacotes de
                    ícones visuais usados por todo o sistema
                  </li>
                  <li>
                    <strong>Lottie (DynamicLottie)</strong> — exibe animações
                    animadas quando uma lista está vazia (estados vazios)
                  </li>
                </ul>
              </InfoCard>

              <InfoCard
                title="Backend (O servidor e banco de dados)"
                icon={<Database className="w-4 h-4" />}
              >
                <p className="text-sm mb-2">
                  É onde todos os dados ficam salvos e as regras de negócio são
                  aplicadas. Tudo roda no serviço Supabase na nuvem:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>PostgreSQL</strong> — o banco de dados relacional
                    onde ficam guardados todos os pedidos, clientes, produtos,
                    usuários etc. Possui RLS (controle de acesso por linha), que
                    significa que cada usuário só vê os dados da sua empresa
                  </li>
                  <li>
                    <strong>Supabase Auth</strong> — o sistema de login e
                    autenticação. Controla quem pode entrar no sistema usando
                    e-mail e senha, gerando um token seguro (JWT) para cada
                    sessão
                  </li>
                  <li>
                    <strong>Supabase Storage</strong> — serviço de armazenamento
                    de arquivos na nuvem. Guarda PDFs de etiquetas, fotos de
                    usuários, logos de empresas etc. (pasta "documentos")
                  </li>
                  <li>
                    <strong>Supabase Realtime</strong> — sistema de atualização
                    em tempo real via conexão WebSocket. Funciona como um canal
                    ao vivo: quando um dado muda no banco, a tela atualiza
                    automaticamente sem precisar recarregar — usado nas
                    notificações e no Kanban de Produção
                  </li>
                  <li>
                    <strong>Edge Functions (Deno)</strong> — pequenos programas
                    que rodam automaticamente em resposta a eventos externos
                    (como chegada de um novo pedido da Yampi) ou fazem chamadas
                    para APIs de terceiros (Melhor Envio, Bling)
                  </li>
                  <li>
                    <strong>Views</strong> — consultas pré-montadas no banco que
                    combinam dados de várias tabelas, como vw_clientes_pedidos
                    (une pedidos com dados do cliente), itens_pedido_agrupados
                    (agrupa itens por produto) e vw_itens_logistica (itens
                    pendentes de envio)
                  </li>
                  <li>
                    <strong>RPCs</strong> — funções especiais executadas
                    diretamente no banco de dados para operações complexas:
                    achar_item_por_codigo_bipado (localiza produto pelo código
                    de barras), trazer_cliente_info (busca dados do cliente),
                    enviar_informacoes_cliente (salva dados de entrega),
                    set_usuario_permissao (ativa ou desativa permissão)
                  </li>
                  <li>
                    <strong>Triggers</strong> — ações automáticas disparadas
                    quando algo muda no banco: atualizar_pedidos_para_logistica
                    (quando estoque aumenta, aloca itens e move pedidos
                    automaticamente), enviar_direto_logistica (quando pedido é
                    liberado, muda status automaticamente), handle_updated_at
                    (registra a data de toda alteração)
                  </li>
                </ul>
              </InfoCard>
            </div>

            <h3 className="text-lg font-semibold mt-4">
              Estrutura de Pastas — Como o projeto está organizado
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Abaixo está o mapa de onde cada parte do sistema está localizada
              dentro do projeto. Cada pasta agrupa arquivos com função parecida:
            </p>
            <CodeBlock>{`src/
├── App.tsx         # Arquivo central que define todas as rotas (endereços de página)
│                   # e configura os módulos globais (autenticação, notificações etc.)
├── main.tsx        # Ponto de entrada: o primeiro arquivo que o navegador executa
├── pages/          # As 25 telas/páginas do sistema (uma pasta por tela)
├── components/
│   ├── layout/     # Estrutura visual fixa: cabeçalho (AppHeader), menu lateral (Sidebars),
│   │               # proteção de rotas (ProtectedRoute), painel de busca (SearchPanel)
│   ├── dashboard/  # Cartão de métricas do Dashboard (MetricCard)
│   ├── modals/     # Janelas pop-up reutilizáveis: editar cliente, editar campo de seleção
│   ├── notifications/ # Sininho com lista de notificações (NotificacoesDropdown)
│   ├── orders/     # Quadro Kanban e cartão de pedido Individual
│   ├── products/   # Formulário completo de criação/edição de produto
│   ├── shipping/   # Modal de cotação de frete, gerenciador de embalagens e remetentes
│   └── ui/         # Mais de 50 componentes visuais prontos (botões, tabelas, menus etc.)
├── hooks/          # Funções reutilizáveis: login (useAuth), cores da empresa (useEmpresaColors),
│                   # detectar mobile (use-mobile), avisos visuais (use-toast)
├── contexts/       # Módulo de notificações em tempo real (NotificacoesContext)
├── integrations/supabase/ # Configuração de conexão com o banco de dados e tipos gerados
├── types/          # Definições dos principais objetos do sistema (Pedido, Produto, Usuário etc.)
├── lib/            # Funções auxiliares simples
├── data/           # Dados de teste para desenvolvimento
└── assets/         # Arquivos de animação (estados de lista vazia)

supabase/
├── functions/      # 4 automatizações na nuvem (webhooks Yampi + cálculo de frete)
├── migrations/     # 7 scripts SQL que criaram e evoluíram o banco de dados
└── config.toml     # Identificação do projeto Supabase`}</CodeBlock>

            <h3 className="text-lg font-semibold mt-4">
              Camadas de Funcionamento do Sistema (App.tsx)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              O sistema funciona como "caixas dentro de caixas": cada camada
              envolve todas as páginas e disponibiliza recursos para elas. O
              diagrama abaixo mostra essa hierarquia, da camada mais externa
              para a mais interna:
            </p>
            <CodeBlock>{`QueryClientProvider       ← Gerencia o cache de dados (evita buscas repetidas no servidor)
  └── AuthProvider        ← Controla login, logout e permissões de cada usuário
      └── NotificacoesProvider  ← Mantém a conexão ao vivo para receber notificações em tempo real
          └── TooltipProvider   ← Habilita os balões de informação (tooltips) em toda a interface
              └── BrowserRouter ← Sistema de navegação entre páginas
                  └── Routes    ← Mapeamento de endereços para cada tela:
                      ├── /auth → Tela de Login (acessível sem estar logado)
                      ├── /informacoes-entrega/:id → Formulário do cliente (acessível sem login)
                      └── / → Área protegida (exige login)
                          ├── /comercial → Lista de Pedidos
                          ├── /pedido/:id → Detalhe de um Pedido específico
                          ├── /logistica → Módulo de Envio / Logística
                          ├── /producao → Quadro Kanban de Produção
                          └── ... (mais de 15 outras telas protegidas)`}</CodeBlock>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* AUTENTICAÇÃO */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="autenticacao" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🔒 Autenticação & Permissões
            </h2>

            <h3 className="text-lg font-semibold">
              Hook: useAuth (hooks/useAuth.tsx)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              O <strong>useAuth</strong> é o módulo central de controle de
              acesso do sistema. Ele gerencia o login, o logout e as permissões
              de todos os usuários. Fica ativo durante toda a sessão e
              disponibiliza as informações do usuário logado para qualquer tela
              do sistema. Abaixo estão os dados e funções que ele oferece:
            </p>

            <DocTable
              headers={["Propriedade", "Tipo", "Descrição"]}
              rows={[
                ["user", "User | null", "Usuário autenticado do Supabase Auth"],
                [
                  "profile",
                  "any",
                  "Dados do perfil da view usuarios_completos",
                ],
                ["loading", "boolean", "Carregando estado de autenticação"],
                ["isAuthenticated", "boolean", "Se o usuário está logado"],
                ["isActive", "boolean", "Se a conta do usuário está ativa"],
                [
                  "permissions",
                  "number[]",
                  "Array de IDs de permissões do usuário",
                ],
                ["empresaId", "string | null", "UUID da empresa do usuário"],
                [
                  "hasPermission(id)",
                  "function",
                  "Verifica se o usuário tem a permissão X",
                ],
                ["signIn(email, pwd)", "function", "Login com email e senha"],
                [
                  "signUp(email, pwd, meta)",
                  "function",
                  "Registro com metadata",
                ],
                [
                  "signOut()",
                  "function",
                  "Logout (trata session_not_found graciosamente)",
                ],
                [
                  "deleteUser(userId)",
                  "function",
                  "Exclui usuário (tenta múltiplas APIs)",
                ],
              ]}
            />

            <CollapsibleSection title="Sistema de Permissões">
              <p>
                As permissões controlam quais partes do sistema cada usuário
                pode acessar. Elas são salvas na tabela{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  usuarios_permissoes
                </code>{" "}
                e carregadas via view{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  group_usuarios_permissoes
                </code>
                , que devolve uma lista de IDs numerados representando cada
                permissão ativa. Cada número corresponde a uma ação ou tela
                específica do sistema:
              </p>
              <DocTable
                headers={["ID", "Permissão", "Onde é utilizada"]}
                rows={[
                  [
                    "7",
                    "Acessar Configurações",
                    "Página de Configurações (Configuracoes.tsx)",
                  ],
                  [
                    "14",
                    "Acessar Embalagens",
                    "Menu lateral do Estoque (EstoqueSidebar.tsx)",
                  ],
                  [
                    "50",
                    "Acessar Dashboard",
                    "Página inicial do Dashboard (Dashboard.tsx)",
                  ],
                  [
                    "56",
                    "Navegar à Home",
                    "Botão de início no cabeçalho (AppHeader.tsx)",
                  ],
                  [
                    "17",
                    "Criar produto",
                    "Botão de novo produto no Estoque (Estoque.tsx)",
                  ],
                  [
                    "18",
                    "Editar produto",
                    "Botão de editar produto no Estoque (Estoque.tsx)",
                  ],
                  [
                    "19",
                    "Criar embalagem",
                    "Botão de nova embalagem (ListaEmbalagens.tsx)",
                  ],
                  [
                    "20",
                    "Editar embalagem",
                    "Botão de editar embalagem (ListaEmbalagens.tsx)",
                  ],
                  [
                    "21",
                    "Deletar embalagem",
                    "Botão de excluir embalagem (ListaEmbalagens.tsx)",
                  ],
                  [
                    "22",
                    "Acessar Contabilidade",
                    "Página de Contabilidade (Contabilidade.tsx)",
                  ],
                  ["23", "Acessar Leads", "Página de Leads (Leads.tsx)"],
                ]}
              />
              <p className="mt-2">
                A função do banco{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  set_usuario_permissao(usuario_id, permissao_id, value)
                </code>{" "}
                ativa ou desativa uma permissão específica para um usuário — sem
                precisar mexer diretamente no banco. Também existem{" "}
                <strong>predefinicoes_permissoes</strong>: conjuntos
                pré-configurados de permissões que podem ser aplicados com um
                clique a um novo usuário (como "operador padrão" ou
                "administrador").
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="ProtectedRoute — Proteção de Telas (components/layout/ProtectedRoute.tsx)">
              <p>
                Este componente funciona como uma{" "}
                <strong>portaria virtual</strong>: antes de mostrar qualquer
                página protegida, ele verifica 3 condições em ordem:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Carregando (loading = true)</strong> → Exibe um
                  spinner de carregamento enquanto verifica a sessão do usuário
                </li>
                <li>
                  <strong>Não está logado (!isAuthenticated)</strong> →
                  Redireciona automaticamente para a tela de login (/auth)
                </li>
                <li>
                  <strong>Conta inativa (!isActive)</strong> → Exibe uma tela
                  centralizada informando que a conta está inativa e não permite
                  acessar o sistema
                </li>
                <li>
                  <strong>Tudo certo</strong> → Exibe normalmente a página
                  solicitada
                </li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* LAYOUT */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="layout" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🧩 Layout & Navegação
            </h2>

            <h3 className="text-lg font-semibold">
              AppLayout (components/layout/AppLayout.tsx)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              O <strong>AppLayout</strong> é a estrutura visual que envolve
              todas as páginas protegidas. Ele renderiza o cabeçalho fixo no
              topo e, abaixo dele, o conteúdo da tela atual. Também chama a
              função <strong>useEmpresaColors()</strong> para aplicar as cores
              personalizadas da empresa assim que o sistema é carregado.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Internamente, a função{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                getModuleFromPath()
              </code>{" "}
              detecta em qual módulo o usuário está (comercial, logística,
              produção etc.) com base no endereço da página atual, para que o
              menu possa destacar o item ativo corretamente.
            </p>

            <h3 className="text-lg font-semibold mt-4">
              AppHeader (components/layout/AppHeader.tsx)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              O cabeçalho fixo que aparece no topo de todas as páginas. Usa um
              gradiente de cores personalizado conforme as configurações da
              empresa. Contém os seguintes elementos:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                <strong>Logo da empresa</strong> — imagem carregada da nuvem
                (Supabase Storage), exibida no canto esquerdo
              </li>
              <li>
                <strong>Menu de navegação horizontal</strong> — os módulos
                disponíveis para o usuário (ex.: Comercial, Logística, Estoque).
                Os itens são carregados dinamicamente e podem ser reordenados
                nas Configurações
              </li>
              <li>
                <strong>Botão de busca</strong> — abre o painel de busca global
                para encontrar pedidos e leads rapidamente
              </li>
              <li>
                <strong>Sino de Notificações</strong> — botão com contador que
                abre a lista de notificações recentes
              </li>
              <li>
                <strong>Menu de perfil</strong> — exibe o avatar, nome e e-mail
                do usuário logado, com opção de logout
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Sidebars</h3>
            <DocTable
              headers={["Menu Lateral", "Módulo", "Seções Disponíveis"]}
              rows={[
                [
                  "ComercialSidebar",
                  "Comercial",
                  "Lista de Pedidos, Leads (clientes em potencial), Cancelados, Enviados, Retornados",
                ],
                [
                  "LogisticaSidebar",
                  "Logística",
                  "Envio de pedidos (bipação), Envio por etiqueta manual, Envio de retornados (em desenvolvimento)",
                ],
                [
                  "EstoqueSidebar",
                  "Estoque",
                  "Lista de Produtos, Lista de Embalagens, SKU por Plataforma",
                ],
              ]}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Todos os menus laterais podem ser recolhidos (passando o mouse,
              eles expandem de um estado estreito para largo). Usam ícones
              visuais para cada item e destacam automaticamente o item da página
              atual.
            </p>

            <h3 className="text-lg font-semibold mt-4">
              SearchPanel — Busca Global (components/layout/SearchPanel.tsx)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Painel de busca global que aparece ao clicar no botão de lupa no
              cabeçalho. Utiliza um atraso de 300ms (debounce) para esperar o
              usuário terminar de digitar antes de pesquisar, evitando buscas
              desnecessárias a cada tecla pressionada. Busca simultaneamente em
              duas fontes de dados:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                <strong>Pedidos</strong> — pesquisa na view vw_clientes_pedidos
                por ID externo, nome do cliente, telefone, CPF ou CNPJ (até 6
                resultados)
              </li>
              <li>
                <strong>Leads</strong> — pesquisa na tabela leads por nome,
                e-mail, telefone ou CPF (até 6 resultados)
              </li>
            </ul>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* DASHBOARD */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="dashboard" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              📊 Dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Página principal de resumo do sistema (Dashboard.tsx).{" "}
              <strong>Requer permissão 50</strong> para ser acessada. É a
              primeira tela que o usuário vê ao entrar no sistema e mostra um
              resumo completo das vendas e envios no período selecionado.
            </p>

            <h3 className="text-lg font-semibold">Seletor de Período</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Calendário duplo que permite escolher um intervalo de datas para
              filtrar todos os dados do Dashboard. Possui atalhos rápidos: Hoje,
              Últimos 7 dias, Últimos 30 dias, Últimos 90 dias, Este Mês, Mês
              Passado, Este Ano. Quando o usuário muda o período, o sistema
              cancela automaticamente qualquer busca anterior em andamento
              (AbortController) e inicia uma nova busca com o período correto —
              evitando que resultados antigos aparecem misturados com os novos.
            </p>

            <h3 className="text-lg font-semibold mt-3">Métricas (4 cards)</h3>
            <DocTable
              headers={["Cartão", "De onde vem o dado", "O que mostra"]}
              rows={[
                [
                  "Total de Pedidos",
                  "Contagem de pedidos no período selecionado",
                  "A quantidade total de pedidos realizados no intervalo de datas escolhido",
                ],
                [
                  "Faturamento",
                  "Soma dos valores totais de todos os pedidos",
                  "O valor em reais (R$) de tudo que foi vendido no período",
                ],
                [
                  "Ticket Médio",
                  "Faturamento dividido pelo número de pedidos",
                  "O valor médio gasto por pedido (quanto cada cliente gasta em média)",
                ],
                [
                  "Pedidos Enviados",
                  "Contagem de pedidos com status ENVIADO",
                  "Quantos pedidos já foram despachados para o cliente no período",
                ],
              ]}
            />

            <h3 className="text-lg font-semibold mt-3">Gráficos (Abas)</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                <strong>Vendas por Plataforma</strong> — gráfico de barras
                mostrando a quantidade de pedidos agrupados por plataforma de
                venda (ex.: Yampi, Shopee, Mercado Livre)
              </li>
              <li>
                <strong>Envios por Plataforma</strong> — gráfico de pizza
                mostrando a distribuição percentual dos envios por plataforma
              </li>
              <li>
                <strong>Pedidos por Status</strong> — distribuição dos pedidos
                de acordo com cada status (Produção, Logística, Enviado etc.),
                com cores dinâmicas por status
              </li>
              <li>
                <strong>Top 5 Produtos</strong> — lista dos 5 produtos mais
                vendidos no período selecionado
              </li>
              <li>
                <strong>Taxa de Envio</strong> — barra de progresso visual
                mostrando a porcentagem de pedidos já enviados em relação ao
                total
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">
              Consulta ao Banco de Dados
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Os dados do Dashboard são buscados diretamente da tabela de
              pedidos, filtrando pela data de criação dentro do período
              escolhido:
            </p>
            <CodeBlock>{`supabase.from('pedidos')
  .select('id, valor_total, status_id, plataforma_id, criado_em, ...')
  .gte('criado_em', startDate)
  .lte('criado_em', endDate)`}</CodeBlock>

            <h3 className="text-lg font-semibold mt-3">
              Componente: MetricCard — Cartões de Métrica
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Cada cartão de métrica aceita as seguintes configurações: título
              (title), valor exibido (value), descrição complementar
              (description), seta de tendência indicando se o valor
              subiu/desceu/ficou estável (trend: up/down/neutral), percentual da
              variação (trendValue), ícone ilustrativo (icon) e a cor do cartão
              (color: custom/blue/green/orange/red). Cada cor define gradientes
              de fundo e bordas únicos para facilitar a identificação visual
              rápida.
            </p>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* COMERCIAL */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="comercial" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🛒 Comercial
            </h2>

            <h3 className="text-lg font-semibold">
              Comercial.tsx — Gestão de Pedidos
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              É a página central do módulo comercial — onde todos os pedidos da
              empresa são listados, filtrados e gerenciados. É o arquivo mais
              complexo do sistema, com múltiplos filtros, seleção de vários
              pedidos ao mesmo tempo e operações em lote (alterar
              status/responsável de vinte pedidos de uma só vez, por exemplo).
            </p>

            <CollapsibleSection title="Filtros Avançados">
              <DocTable
                headers={["Filtro", "Tipo", "O que faz"]}
                rows={[
                  [
                    "Busca",
                    "Campo de texto",
                    "Pesquisa o pedido pelo código externo, nome do cliente, telefone, CPF ou CNPJ",
                  ],
                  [
                    "Status",
                    "Seleção múltipla",
                    "Filtra pedidos que estão em um ou mais status específicos (ex.: só ver pedidos em Produção)",
                  ],
                  [
                    "Plataforma",
                    "Seleção única",
                    "Filtra apenas pedidos de uma plataforma específica (ex.: Shopee)",
                  ],
                  [
                    "Responsável",
                    "Seleção única",
                    "Filtra pedidos atribuídos a um colaborador específico",
                  ],
                  [
                    "Etiqueta",
                    "Seleção única",
                    "Filtra pedidos pelo tipo de etiqueta de envio selecionada",
                  ],
                  [
                    "Data",
                    "Intervalo de datas",
                    "Período de criação do pedido (data inicial e final)",
                  ],
                  [
                    "Urgente",
                    "Liga/desliga",
                    "Quando ativado, mostra apenas pedidos marcados como urgentes",
                  ],
                  [
                    "Duplicados",
                    "Liga/desliga",
                    'Quando ativado, mostra apenas pedidos com a marca de "foi duplicado"',
                  ],
                ]}
              />
              <p className="mt-2 text-sm">
                Todos os filtros ficam salvos na URL da página, permitindo
                compartilhar a busca com outro usuário ou voltar ao mesmo filtro
                usar o botão Voltar do navegador.
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="Operações em Lote">
              <p className="text-sm">
                Ao selecionar múltiplos pedidos na lista, as seguintes ações
                ficam disponíveis para todos ao mesmo tempo:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Alterar Status</strong> — Muda o status de todos os
                  pedidos selecionados de uma só vez
                </li>
                <li>
                  <strong>Alterar Responsável</strong> — Reatribui todos os
                  pedidos selecionados para outro colaborador
                </li>
                <li>
                  <strong>Alterar Etiqueta</strong> — Muda o tipo de etiqueta de
                  envio de todos os selecionados
                </li>
                <li>
                  <strong>Envio Rápido</strong> — Verifica automaticamente se há
                  saldo suficiente no Melhor Envio (mínimo R$50), calcula o
                  frete mais barato para cada pedido (excluindo transportadoras
                  que a empresa bloqueou) e gera as etiquetas automaticamente
                  via integração com o Melhor Envio
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Badges de Alerta no Cabeçalho">
              <p className="text-sm">
                O cabeçalho da página exibe contadores automáticos que chamam
                atenção para situações que precisam de ação:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Etiqueta Pendente</strong> — mostra quantos pedidos
                  ainda não têm etiqueta de envio definida (etiqueta =
                  "Pendente" e ainda não foram enviados). Esses pedidos precisam
                  ter uma etiqueta gerada ou selecionada
                </li>
                <li>
                  <strong>Envio Adiado</strong> — mostra quantos pedidos estão
                  com etiqueta disponível mas foram adiados pelo operador
                  (etiqueta = "Disponível", pedido_liberado = false). São
                  pedidos prontos para envio mas temporariamente em espera
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Duplicação de Pedido">
              <p className="text-sm">
                Quando um operador duplica um pedido (por exemplo, para dividir
                em duas entregas), o sistema segue este fluxo automático:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>
                  Cria um novo código externo adicionando sufixo "/2", "/3",
                  etc. ao código original
                </li>
                <li>
                  Cria um novo cliente com um novo link de formulário de entrega
                  (formulario_enviado=false, pois o cliente precisa preencher
                  novamente)
                </li>
                <li>
                  Copia todos os itens do pedido original para o novo pedido
                  (incluindo dimensões do produto)
                </li>
                <li>Redireciona automaticamente para o novo pedido criado</li>
              </ol>
            </CollapsibleSection>

            <h3 className="text-lg font-semibold mt-4">
              Páginas Complementares
            </h3>
            <DocTable
              headers={["Página", "Tamanho", "O que faz"]}
              rows={[
                [
                  "NovoPedido.tsx",
                  "~919 linhas",
                  "Formulário completo para criar um pedido manualmente: dados do cliente, produtos no carrinho, forma de pagamento e remetente de envio",
                ],
                [
                  "PedidosCancelados.tsx",
                  "~725 linhas",
                  "Lista todos os pedidos cancelados. Permite apenas visualizar ou duplicar um pedido cancelado para reabri-lo",
                ],
                [
                  "PedidosEnviados.tsx",
                  "~1132 linhas",
                  'Lista pedidos já enviados com filtro de data. Permite duplicar ou marcar como "devolução ao remetente"',
                ],
                [
                  "PedidosRetornados.tsx",
                  "~370 linhas",
                  "Lista pedidos que foram devolvidos ao remetente, com dados completos de reenvio",
                ],
              ]}
            />
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* PEDIDO */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="pedido" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              📄 Pedido (Detalhe)
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Página de detalhe completo de um pedido (Pedido.tsx). É o arquivo
              mais extenso do sistema e exibe todas as informações de um pedido
              específico organizado em 5 abas. Permite editar praticamente tudo:
              status, dados do cliente, itens, frete, etiqueta, entre outros.
              Contém mais de 10 janelas pop-up (modais) e um sistema de up-sell
              para aumentar o valor do pedido.
            </p>

            <CollapsibleSection title="Aba: Resumo" defaultOpen>
              <p className="text-sm">
                Exibe a lista de produtos do pedido com a possibilidade de
                gerenciar cada item:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Tabela de itens</strong> — cada produto aparece com
                  imagem, nome, variação (ex.: tamanho P, cor azul), quantidade,
                  preço unitário e valor total do item
                </li>
                <li>
                  <strong>Botões por item</strong> — UpSell (abre assistente
                  para oferecer produto melhor), Manter (marca o item como \"não
                  será trocado\"), Remover (tira o item e desconta o valor do
                  total)
                </li>
                <li>
                  <strong>Rodapé financeiro</strong> — valor total do pedido e
                  formas de pagamento com possibilidade de edição direta
                </li>
                <li>
                  <strong>Assistente de adicionar produtos</strong> — fluxo
                  guiado em 3 etapas para adicionar manualmente um produto ao
                  pedido: Dados → Pagamento → Valor
                </li>
                <li>
                  <strong>Fluxo de Up-Sell</strong> — ao clicar no botão UpSell
                  de um item, abre um assistente para selecionar um produto
                  substituto de maior valor: Dados → Pagamento → Valor ou
                  Aumento Grátis
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Status">
              <p className="text-sm">
                Permite editar as informações de classificação do pedido. Cada
                campo abre uma janela pop-up de seleção ao clicar:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Status do pedido</strong> — em qual etapa o pedido se
                  encontra (Produção, Logística, Enviado etc.)
                </li>
                <li>
                  <strong>Plataforma</strong> — em qual loja o pedido foi feito
                  (Yampi, Shopee, Mercado Livre etc.)
                </li>
                <li>
                  <strong>Tipo de etiqueta de envio</strong> — como o pedido
                  será enviado (Melhor Envio, etiqueta manual etc.)
                </li>
                <li>
                  <strong>Responsável</strong> — qual colaborador está cuidando
                  do pedido
                </li>
                <li>
                  <strong>Urgente</strong> — botão para marcar/desmarcar o
                  pedido como urgente (fica destacado em vermelho)
                </li>
                <li>
                  <strong>Observações</strong> — campo de texto livre para
                  anotações internas (salva automaticamente ao digitar)
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Entrega">
              <p className="text-sm">
                Gerencia todas as informações de envio físico do pedido:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Dados do cliente</strong> — nome, CPF/CNPJ, e-mail,
                  telefone e endereço completo. Clicando em \"Editar\" abre uma
                  janela para alterar os dados do cliente
                </li>
                <li>
                  <strong>Remetente e embalagem</strong> — seletores para
                  escolher de qual endereço o produto será enviado e em qual
                  embalagem ele será colocado (com gerenciadores inline para
                  criar novos registros)
                </li>
                <li>
                  <strong>Cálculo de frete</strong> — botão que abre uma janela
                  de cotação de frete, consultando o Melhor Envio para listar as
                  opções de transportadoras com preços e prazos
                </li>
                <li>
                  <strong>Botão \"ENVIAR O MAIS BARATO\"</strong> — verifica se
                  há saldo no Melhor Envio (≥ R$50), seleciona automaticamente a
                  opção mais barata e gera a etiqueta sem precisar abrir a
                  cotação
                </li>
                <li>
                  <strong>Botão Imprimir Etiqueta</strong> — quando a etiqueta
                  já foi gerada, abre o PDF diretamente no navegador para
                  impressão
                </li>
                <li>
                  <strong>Botão Etiqueta ML</strong> — aparece apenas quando a
                  plataforma é Mercado Livre e o pedido tem um código de envio
                  do ML (shipping_id)
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Tempo Ganho">
              <p className="text-sm">
                Aba com um calendário para registrar a data em que foi \"ganho
                tempo\" neste pedido (um indicador interno de performance da
                equipe). Os botões Salvar e Limpar permitem definir ou apagar
                essa data.
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Subir Etiqueta">
              <p className="text-sm">
                Aba para enviar manualmente arquivos de etiqueta PDF para o
                pedido (quando a etiqueta não foi gerada pelo Melhor Envio
                automaticamente). Funcionalidades:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Seleção de múltiplos arquivos PDF de uma vez</li>
                <li>
                  Cada arquivo pode ter o nome personalizado antes do envio (o
                  sistema sugere um nome no formato:
                  \"nome-original-código-do-pedido\")
                </li>
                <li>
                  Campos editáveis para renomear cada arquivo antes de enviar
                </li>
                <li>
                  Os arquivos são enviados para o armazenamento em nuvem do
                  Supabase (pasta documentos/etiquetas/)
                </li>
                <li>
                  Os links dos arquivos ficam salvos no pedido em lista JSONB no
                  campo etiquetas_uploads
                </li>
                <li>
                  Após o envio, aparece uma grade de quadradinhos com o nome de
                  cada etiqueta, botão para copiar o link e botão para excluir
                  (remove tanto do armazenamento quanto do pedido)
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Sistema de Up-Sell">
              <p className="text-sm">
                O Up-Sell permite oferecer ao cliente um produto melhor ou de
                maior valor do que o original. Cada item do pedido pode ter um
                dos seguintes estados:
              </p>
              <DocTable
                headers={["ID", "Status", "Significado"]}
                rows={[
                  [
                    "1",
                    "Aguardando aumento",
                    "O item pode receber up-sell, mas o operador ainda não tomou nenhuma decisão",
                  ],
                  [
                    "2",
                    "Não aumentado",
                    "O operador decidiu manter o item original sem trocar",
                  ],
                  [
                    "3",
                    "Aumentado",
                    "O item foi substituído por um produto de maior valor, confirmado pelo cliente",
                  ],
                  [
                    "4",
                    "Aumento grátis",
                    "O item foi substituído por um produto melhor, mas sem cobrança adicional ao cliente",
                  ],
                ]}
              />
              <p className="mt-2 text-sm">
                <strong>Liberação automática do pedido:</strong> quando TODOS os
                itens com up-sell ativo sairem do estado \"Aguardando aumento\"
                (seja aumentado, mantido ou aumento grátis), o pedido é marcado
                automaticamente como liberado (pedido_liberado = true) — o que
                dispara o trigger que move o pedido para a fila de logística.
                Essa verificação é feita automaticamente toda vez que o operador
                salva uma alteração de up-sell.
              </p>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* CONTABILIDADE */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="contabilidade" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              💰 Contabilidade
            </h2>

            <h3 className="text-lg font-semibold">Contabilidade.tsx</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tela de visualização de pedidos já enviados para fins de controle
              financeiro e fiscal. Acessível apenas para usuários com{" "}
              <strong>permissão 22</strong>. Exibe uma tabela com busca e as
              seguintes colunas: ID do pedido, nome do cliente, plataforma de
              venda, responsável (com foto), pré-visualização dos produtos,
              valor total e data. Clicar em um pedido abre a página de detalhe
              contabil (PedidoContabilidade).
            </p>

            <h3 className="text-lg font-semibold mt-4">
              PedidoContabilidade.tsx
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Versão da tela de detalhe do pedido voltada para uso contábil e
              fiscal. Similar ao Pedido.tsx, mas com dois botões adicionais no
              cabeçalho para <strong>integração com o Bling ERP</strong>{" "}
              (sistema de gestão financeira/fiscal):
            </p>

            <CollapsibleSection title="Integração com o Bling ERP — Fluxo Completo">
              <p className="text-sm">
                O Bling é um sistema externo de gestão financeira e fiscal
                (emissão de notas fiscais, controle de clientes etc.). A
                integração acontece em até 6 etapas nesta ordem:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  <strong>Consultar cliente</strong> — busca no Bling se o
                  cliente do pedido já existe, pesquisando pelo CPF ou CNPJ
                </li>
                <li>
                  <strong>Criar ou atualizar cliente</strong> — se o cliente não
                  existir no Bling, ele é criado; se já existir, seus dados são
                  atualizados
                </li>
                <li>
                  <strong>Preparar produtos</strong> — para cada item do pedido,
                  o sistema busca o código interno do Bling (bling_id) salvo no
                  cadastro do produto ou variação
                </li>
                <li>
                  <strong>Consultar pedido</strong> — verifica se o pedido já
                  foi enviado ao Bling anteriormente (para evitar envios
                  duplicados)
                </li>
                <li>
                  <strong>Criar ou atualizar pedido</strong> — envia o pedido
                  completo ao Bling (cliente, itens, transporte, observações) ou
                  atualiza o existente
                </li>
                <li>
                  <strong>[Opcional] Gerar NF-e</strong> — após o pedido estar
                  no Bling, é possível emitir a Nota Fiscal Eletrônica (NF-e)
                  com um clique
                </li>
              </ol>
            </CollapsibleSection>

            <CollapsibleSection title="Funções do Bling (Automatizações na Nuvem)">
              <DocTable
                headers={["Função", "Método", "O que faz"]}
                rows={[
                  [
                    "consultar_cliente_bling",
                    "POST",
                    "Busca um cliente cadastrado no Bling usando CPF ou CNPJ",
                  ],
                  [
                    "criar_cliente_bling",
                    "POST",
                    "Cria um novo cliente no sistema Bling com os dados do pedido",
                  ],
                  [
                    "editar_cliente_bling",
                    "POST",
                    "Atualiza os dados de um cliente já existente no Bling",
                  ],
                  [
                    "consultar_pedido_bling",
                    "POST",
                    "Verifica se já existe um pedido com esse código no Bling (evita duplicações)",
                  ],
                  [
                    "criar_pedido_bling",
                    "POST",
                    "Envia o pedido completo para o Bling pela primeira vez",
                  ],
                  [
                    "editar_pedido_bling",
                    "POST",
                    "Atualiza um pedido já existente no Bling com novas informações",
                  ],
                  [
                    "gerar_nfe_bling",
                    "POST",
                    "Solicita a emissão da Nota Fiscal Eletrônica (NF-e) no Bling para o pedido",
                  ],
                ]}
              />
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* PRODUÇÃO */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="producao" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🏭 Produção
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Página: Producao.tsx. Exibe o quadro Kanban de produção com
              atualização em tempo real (Realtime) e uma aba de visualização
              agregada de todos os itens que precisam ser produzidos.
            </p>

            <h3 className="text-lg font-semibold">Etapas de Produção</h3>
            <DocTable
              headers={["Status", "Significado"]}
              rows={[
                [
                  "Produção",
                  "Os itens do pedido ainda estão sendo fabricados/preparados",
                ],
                [
                  "Entrada Logística",
                  "Os itens já foram produzidos e estão aguardando transferência para o setor de envio",
                ],
                [
                  "Logística",
                  "Os itens chegaram ao setor de envio e estão prontos para despacho",
                ],
              ]}
            />

            <CollapsibleSection title="Aba: Por Status (Quadro Kanban)">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  Quadro visual com colunas por etapa de produção. Cada coluna
                  tem barra de busca interna
                </li>
                <li>
                  Cartões de pedido com borda colorida, código externo clicável
                  (copia para a área de transferência), selo de urgente e lista
                  resumida dos itens
                </li>
                <li>
                  Arrastar e soltar um cartão de uma coluna para outra muda o
                  status do pedido automaticamente (salvo no banco)
                </li>
                <li>
                  Quando um pedido é movido para ENVIADO, a data de envio é
                  registrada automaticamente
                </li>
                <li>
                  <strong>Atualização em tempo real</strong> — o quadro se
                  atualiza sozinho quando qualquer outro usuário move um pedido,
                  sem precisar recarregar a página
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Itens a serem produzidos">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  Dividida em 3 seções de acordo com as etapas: Produção,
                  Entrada Logística e Logística
                </li>
                <li>
                  Em vez de mostrar pedidos individuais, mostra os{" "}
                  <strong>produtos agrupados</strong> com a{" "}
                  <strong>quantidade total</strong> de peças a produzir (somando
                  todos os pedidos do mesmo status)
                </li>
                <li>
                  Cada produto exibe imagem, nome e quantidade total agregada de
                  todas as encomendas
                </li>
                <li>
                  Ao clicar em um produto, expande para mostrar o detalhamento
                  por variação (ex.: quanto há de cada tamanho/cor)
                </li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* LOGÍSTICA */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="logistica" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🚚 Logística
            </h2>

            <h3 className="text-lg font-semibold">
              Logistica.tsx — Central de Envios
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Página principal do setor de envio. O operador logaísta trabalha
              aqui para despachar os pedidos: ele escaneia os códigos de barras
              dos produtos com um leitor, confirma que os itens corretos estão
              na caixa e gera a etiqueta de envio automaticamente.
            </p>

            <CollapsibleSection
              title="Fluxo de Bipação (Envio de Pedidos)"
              defaultOpen
            >
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  <strong>Escanear código</strong> — o operador aponta o leitor
                  de código de barras para um produto. Ao confirmar com Enter, o
                  sistema busca automaticamente a qual pedido aquele produto
                  pertence
                </li>
                <li>
                  <strong>Priorização inteligente</strong> — o sistema escolhe o
                  pedido mais prioritário seguindo esta ordem: pedidos urgentes
                  primeiro → pedido mais antigo → pedido com menos itens → maior
                  quantidade do mesmo produto
                </li>
                <li>
                  <strong>Cartão do pedido</strong> — após identificar o pedido,
                  exibe um cartão com: responsável, plataforma, código do pedido
                  e lista dos produtos agrupados com imagens
                </li>
                <li>
                  <strong>Confirmação por item</strong> — cada produto do pedido
                  precisa ter seu código de barras bipado individualmente. O
                  item fica <span style={{ color: "green" }}>verde</span> quando
                  correto e <span style={{ color: "red" }}>vermelho</span>{" "}
                  quando o código não bate
                </li>
                <li>
                  <strong>Todos bipados</strong> — assim que todos os itens
                  forem confirmados, o botão de gerar etiqueta fica ativo
                  (\"IMPRIMIR ETIQUETA\" ou \"Etiqueta Mercado Livre\" para
                  pedidos do ML)
                </li>
                <li>
                  <strong>Geração da etiqueta</strong> — verifica saldo no
                  Melhor Envio (≥ R$50) → seleciona automaticamente o remetente
                  adequado para a plataforma do pedido → gera a etiqueta via
                  integração → abre o PDF para impressão → atualiza o status do
                  pedido para ENVIADO
                </li>
              </ol>
            </CollapsibleSection>

            <CollapsibleSection title="Enviar por Pedido">
              <p className="text-sm">
                Modal alternativo que permite ao operador iniciar o processo de
                envio buscando um pedido pelo código (código externo ou ID
                interno), sem precisar bipar primeiro. Útil quando o leitor de
                código de barras não está disponível ou quando o produto não tem
                código de barras.
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="Painel de Itens a Enviar (view: vw_itens_logistica)">
              <p className="text-sm">
                Quando nenhum pedido está sendo processado no momento, a tela
                exibe automaticamente um painel de cards mostrando todos os
                produtos que ainda precisam ser enviados. Os itens são agrupados
                por produto/variação, mostrando a quantidade total somada de
                todos os pedidos pendentes na logística. Isso permite que o
                operador saiba de antemão quantas peças de cada produto precisam
                ser preparadas.
              </p>
            </CollapsibleSection>

            <h3 className="text-lg font-semibold mt-4">
              EnvioPorEtiqueta.tsx — Envio com Etiquetas Manuais
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Página para enviar pedidos que usam etiquetas manuais (etiquetas
              que foram enviadas em PDF pelo vendedor ou geradas externamente,
              não pelo Melhor Envio). Usada quando a etiqueta já foi preparada e
              precisa apenas ser impressa e os itens conferidos.
            </p>

            <CollapsibleSection title="Fluxo de Envio por Etiqueta Manual">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  <strong>Filtro automático</strong> — a página mostra apenas
                  pedidos que já têm etiquetas enviadas em PDF
                  (etiquetas_uploads não vazio) e ainda não foram marcados como
                  ENVIADO
                </li>
                <li>
                  <strong>Modal de três etapas</strong> — ao clicar em um
                  pedido, abre uma janela com as seguintes etapas obrigatórias
                  em ordem:
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>
                      <strong>1ª Etapa — Bipação de itens</strong> — o operador
                      confirma os códigos de barras de cada item do pedido,
                      garantindo que os produtos corretos estão sendo embalados
                    </li>
                    <li>
                      <strong>2ª Etapa — Visualização das etiquetas</strong> —
                      só aparece após bipar TODOS os itens. Exibe os
                      quadradinhos das etiquetas em PDF. Cada etiqueta deve ser
                      aberta/visualizada antes de prosseguir
                    </li>
                    <li>
                      <strong>3ª Etapa — Marcar como Enviado</strong> — o botão
                      só fica ativo após TODAS as etiquetas terem sido
                      visualizadas. Ao confirmar, registra o responsável pelo
                      envio e a data/hora exatos
                    </li>
                  </ul>
                </li>
              </ol>
            </CollapsibleSection>

            <CollapsibleSection title="Atribuição Automática de Remetente">
              <p className="text-sm">
                O sistema define automaticamente qual remetente (endereço de
                saída) usar dependendo da plataforma do pedido. Isso evita que o
                operador precise selecionar manualmente a cada envio:
              </p>
              <DocTable
                headers={["Plataformas", "Remetente Utilizado"]}
                rows={[
                  [
                    "3 plataformas especiais (configuradas internamente com UUIDs específicos)",
                    "Remetente: 3fc6839c-e959-4dc1-a983-f61d557e50ec",
                  ],
                  [
                    "Todas as outras plataformas",
                    "Remetente: 128a7de7-d649-43e1-8ba3-2b54c3496b14",
                  ],
                ]}
              />
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* ESTOQUE */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="estoque" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              📦 Estoque
            </h2>

            <h3 className="text-lg font-semibold">
              Estoque.tsx — Gestão de Produtos
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Página de catálogo de produtos com criação, visualização, edição e
              exclusão de registros. Requer <strong>permissão 17</strong> para
              criar produtos e <strong>permissão 18</strong> para editar.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                3 cartões de resumo no topo: Total de Produtos cadastrados,
                Categorias Únicas existentes e Produtos sem Estoque (quantidade
                = 0)
              </li>
              <li>
                Tabela para visualização em computador e cards para visualização
                em celular (layout responsivo automático)
              </li>
              <li>
                Busca por nome do produto, SKU (código interno) ou categoria
              </li>
              <li>
                Carregamento de páginas no servidor (paginação server-side),
                evitando lentidão com muitos produtos
              </li>
            </ul>

            <CollapsibleSection title="ProductForm — Formulário de Produto (components/products/ProductForm.tsx)">
              <p className="text-sm">
                Janela pop-up completa para criar ou editar um produto. Cobre
                todos os dados necessários:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Dados básicos</strong> — nome do produto, SKU único
                  (código interno), código de barras, preço, unidade de medida,
                  categoria, quantidade em estoque, se é entregue pelo Mercado
                  Livre, código no Bling (bling_id) e URL da imagem
                </li>
                <li>
                  <strong>Dimensões e peso</strong> — altura, largura,
                  comprimento e peso (obrigatórios na criação, pois são usados
                  no cálculo de frete)
                </li>
                <li>
                  <strong>Variações</strong> — ao ativar o checkbox de
                  variações, o produto pode ter múltiplas versões (ex.: tamanhos
                  P/M/G, cores). Cada variação tem: nome, SKU próprio, preço,
                  quantidade, código de barras, imagem e dimensões individuais
                </li>
                <li>
                  <strong>Up-Sell</strong> — janela de seleção de quais produtos
                  podem ser sugeridos como upgrade para este produto (grade
                  visual de seleção múltipla)
                </li>
                <li>
                  <strong>Embalagem</strong> — seletor para vincular uma
                  embalagem ao produto, com opção de criar uma nova embalagem
                  diretamente na janela
                </li>
                <li>
                  <strong>Ao criar</strong> — insere o produto no banco e em
                  seguida insere todas as variações
                </li>
                <li>
                  <strong>Ao editar</strong> — atualiza o produto e sincroniza
                  as variações: remove as excluídas, atualiza as existentes e
                  adiciona as novas
                </li>
                <li>
                  <strong>Entregue pelo ML</strong> — salva o SKU do produto
                  para a plataforma Mercado Livre na tabela de SKU por
                  plataforma
                </li>
              </ul>
            </CollapsibleSection>

            <h3 className="text-lg font-semibold mt-4">
              ListaEmbalagens.tsx — Gestão de Embalagens
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Página de cadastro e gestão das embalagens usadas nos envios.
              Requer permissões 19 (criar), 20 (editar) e 21 (deletar). Os
              campos de cada embalagem são: Nome, Altura, Largura, Comprimento e
              Peso — dados essenciais para o cálculo de frete.
            </p>

            <h3 className="text-lg font-semibold mt-4">SkuPlataformas.tsx</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Página reservada para futura funcionalidade de gestão de SKU por
              plataforma de venda. <strong>Ainda não implementada</strong> —
              exibe apenas uma tela vazia no momento.
            </p>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* LEADS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="leads" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              👥 Leads
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Página de gestão de leads (Leads.tsx).{" "}
              <strong>Requer permissão 23</strong>. Um lead é um cliente
              potencial que demonstrou interesse (por PIX pendente ou carrinho
              abandonado) mas ainda não finalizou a compra. O objetivo desta
              tela é converter esses leads em pedidos reais.
            </p>

            <h3 className="text-lg font-semibold">Abas de Filtro</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                <strong>Todos</strong> — exibe todos os leads independente do
                tipo de origem
              </li>
              <li>
                <strong>Pix</strong> — mostra apenas leads gerados por clientes
                que iniciaram um pagamento PIX mas não concluíram (com contagem
                atualizada)
              </li>
              <li>
                <strong>Carrinho Ab.</strong> — mostra apenas leads gerados por
                clientes que adicionaram produtos ao carrinho mas não compraram
                (com contagem atualizada)
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-3">
              Converter Lead em Pedido
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Ao clicar no botão "+" de um lead, abre uma janela para confirmar
              a forma de pagamento. O fluxo automático em seguida: insere o
              pedido no banco → insere o cliente com todos seus dados → insere
              os itens do carrinho → exclui o lead (pois virou pedido). A
              plataforma de venda é detectada automaticamente com base no tipo
              de lead (PIX ou Carrinho Abandonado).
            </p>

            <h3 className="text-lg font-semibold mt-3">Ações por Lead</h3>
            <DocTable
              headers={["Ação", "Descrição"]}
              rows={[
                ["📋 Copiar", "Copia nome do lead para clipboard"],
                ["✏️ Editar", "Abre edição do lead (inline)"],
                [
                  "➕ Criar Pedido",
                  "Converte lead em pedido com dialog de pagamento",
                ],
                ["✅ Check", "Marca lead como aprovado"],
                ["❌ X", "Marca lead como rejeitado"],
              ]}
            />
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* CONFIGURAÇÕES */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="configuracoes" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              ⚙️ Configurações
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Página de configurações gerais do sistema (Configuracoes.tsx).{" "}
              <strong>Requer permissão 7</strong>. Organizada em 5 abas de
              acordo com o que pode ser configurado:
            </p>

            <CollapsibleSection title="Aba: Usuários">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Criar usuário</strong> — registra o novo usuário no
                  sistema de autenticação (Auth) e no banco. A sessão do
                  administrador é restaurada automaticamente após a criação
                </li>
                <li>
                  <strong>Editar</strong> — permite alterar: nome, e-mail, tipo
                  de acesso (predefinido de permissões), foto de perfil
                  (arrastar e soltar) e ativar/desativar a conta
                </li>
                <li>
                  <strong>Permissões individuais</strong> — janela com lista
                  paginada de checkboxes para ativar/desativar cada permissão
                  individualmente, com filtro por categoria de permissão
                </li>
                <li>
                  <strong>Excluir</strong> — remove o usuário permanentemente
                  (tenta múltiplos métodos para garantir a exclusão completa)
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Status">
              <p className="text-sm">
                Gerenciamento dos status de pedido. Permite criar, editar e
                excluir status personalizados. Campos de cada status: nome, cor
                (abre um seletor visual de cor) e ordem de exibição na lista.
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Setores">
              <p className="text-sm">
                Lista e ordenação dos módulos do sistema que aparecem no menu de
                navegação do cabeçalho. É possível arrastar e soltar para
                reordenar os setores conforme preferência da equipe. A nova
                ordem fica salva localmente no navegador e o cabeçalho é
                atualizado automaticamente sem precisar recarregar a página.
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Formas de Pagamento">
              <p className="text-sm">
                Gerenciamento das formas de pagamento aceitas pela empresa.
                Allows criar, editar e excluir com possibilidade de enviar uma
                imagem (logo/ícone) para cada forma de pagamento. Os itens são
                agrupados por nome na listagem.
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="Aba: Preferências">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Modo Escuro</strong> — alterna entre tema claro e
                  escuro. A preferência é salva no navegador e mantida entre
                  sessões
                </li>
                <li>
                  <strong>Minha Empresa</strong> — configurações da empresa:
                  nome, CNPJ (formatado automaticamente), cor principal da
                  identidade visual e logo (enviada para a nuvem)
                </li>
                <li>
                  <strong>Paleta de cores personalizada</strong> — ao escolher
                  uma cor hex (ex.: #7c3aed), o sistema converte automaticamente
                  para o formato HSL e gera 10 tonalidades diferentes (do mais
                  claro ao mais escuro: 50 a 950), tanto para o modo claro
                  quanto para o escuro. Essas tonalidades ficam salvas no banco
                  e são aplicadas como variáveis de cor em todo o sistema
                </li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* NOTIFICAÇÕES */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="notificacoes" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🔔 Notificações
            </h2>

            <h3 className="text-lg font-semibold">
              NotificacoesContext (contexts/NotificacoesContext.tsx)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Módulo central que gerencia as notificações do sistema em tempo
              real. Mantém uma conexão ativa com o banco de dados — assim que
              uma nova notificação é inserida, todos os usuários da empresa
              recebem automaticamente sem precisar recarregar a página.
            </p>

            <CollapsibleSection title="Estrutura Completa das Funções de Notificação">
              <DocTable
                headers={["Função", "O que faz"]}
                rows={[
                  [
                    "fetchNotificacoes()",
                    "Busca as últimas 50 notificações da empresa, ordenadas da mais recente para a mais antiga",
                  ],
                  [
                    "marcarComoLida(id)",
                    "Registra que o usuário atual leu aquela notificação específica",
                  ],
                  [
                    "marcarTodasComoLidas()",
                    "Marca todas as notificações não lidas como lidas de uma só vez",
                  ],
                  [
                    "marcarComoConcluida(id)",
                    "Marca uma notificação como concluída (além de lida, indica que a ação foi tomada)",
                  ],
                  [
                    "Realtime Subscription",
                    "Conexão ativa que escuta novos registros na tabela de notificações da empresa em tempo real",
                  ],
                ]}
              />
              <p className="mt-2 text-sm">
                Quando chega uma nova notificação pela conexão em tempo real: o
                sistema exibe um aviso visual (toast de cor amarela com ícone e
                botão para copiar) e toca um som de notificação
                (/notification-sound.mp3).
              </p>
            </CollapsibleSection>

            <h3 className="text-lg font-semibold mt-4">
              NotificacoesDropdown — Painel do Sininho
              (components/notifications/NotificacoesDropdown.tsx)
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                O ícone do sininho no cabeçalho mostra um círculo pulsante
                quando há notificações não lidas
              </li>
              <li>
                Abas: <strong>Não lidas</strong> e <strong>Lidas</strong>, com
                indicador animado mostrando qual está ativa
              </li>
              <li>
                Filtros dentro das abas: Todas / Concluídas / Não concluídas
              </li>
              <li>
                Exibe quanto tempo atrás cada notificação foi enviada (ex.: \"há
                3 minutos\", \"há 2 horas\")
              </li>
              <li>
                Clicar em uma notificação que tem pedido vinculado navega para a
                tela do pedido e marca automaticamente como lida
              </li>
            </ul>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* HOOKS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="hooks" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🪝 Hooks Customizados
            </h2>

            <DocTable
              headers={["Hook", "Arquivo", "Para que serve"]}
              rows={[
                [
                  "useAuth()",
                  "hooks/useAuth.tsx",
                  "Módulo de autenticação. Disponibiliza: usuário logado, dados do perfil, lista de permissões, se a conta está ativa, funções de login/cadastro/logout e verificação de permissão específica e o código da empresa",
                ],
                [
                  "useEmpresaColors()",
                  "hooks/useEmpresaColors.tsx",
                  "Carrega a paleta de cores personalizada da empresa e a aplica como variáveis globais de estilo (CSS). Suporta modo claro e escuro automaticamente e monitora alterações de tema",
                ],
                [
                  "useIsMobile()",
                  "hooks/use-mobile.tsx",
                  "Retorna verdadeiro se a tela do usuário tiver menos de 768px de largura (celular). Usado para adaptar o layout automaticamente",
                ],
                [
                  "useToast()",
                  "hooks/use-toast.ts",
                  "Sistema global de avisos visuais (toast messages). A função toast() pode ser chamada de qualquer parte do sistema. Exibe no máximo 1 aviso por vez, gerenciando criacao, atualizacao e remoção automaticamente",
                ],
              ]}
            />
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* SUPABASE */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="supabase" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🗄️ Supabase & Banco de Dados
            </h2>

            <h3 className="text-lg font-semibold">
              Tabelas Principais — Onde cada informação fica guardada
            </h3>
            <DocTable
              headers={[
                "Tabela",
                "O que guarda",
                "Relações com outras tabelas",
              ]}
              rows={[
                [
                  "pedidos",
                  "Todos os pedidos do sistema com seus dados principais",
                  "Relaciona com: clientes, usuários, plataformas, status e tipos de etiqueta",
                ],
                [
                  "clientes",
                  "Dados dos clientes (nome, CPF, endereço etc.)",
                  "Cada cliente pertence a um pedido",
                ],
                [
                  "itens_pedido",
                  "Os produtos de cada pedido (o que foi comprado)",
                  "Relaciona com: pedidos, produtos e variações de produto",
                ],
                [
                  "produtos",
                  "Catálogo de produtos cadast rados",
                  "Pode ter embalagem vinculada",
                ],
                [
                  "variacoes_produto",
                  "Variações dos produtos (ex.: tamanhos, cores)",
                  "Cada variação pertence a um produto",
                ],
                [
                  "usuarios",
                  "Usuários do sistema",
                  "Integrado com o sistema de autenticação",
                ],
                [
                  "plataformas",
                  "Plataformas de venda cadastradas (Yampi, Shopee etc.)",
                  "—",
                ],
                ["status_pedido", "Status disponíveis para os pedidos", "—"],
                [
                  "tipos_etiqueta",
                  "Tipos de etiqueta de envio disponíveis",
                  "—",
                ],
                ["embalagens", "Embalagens cadastradas com dimensões", "—"],
                ["remetentes", "Endereços de remetente para envio", "—"],
                [
                  "leads",
                  "Clientes potenciais ainda não convertidos em pedido",
                  "Pode ter produtos do carrinho vinculados",
                ],
                [
                  "status_upsell",
                  "4 estados possíveis para o processo de up-sell",
                  "Relaciona com itens de pedido",
                ],
                ["formas_pagamentos", "Formas de pagamento aceitas", "—"],
                [
                  "empresas",
                  "Dados da empresa (nome, logo, cores)",
                  "Inclui a paleta de cores em formato JSON",
                ],
                [
                  "notificacoes",
                  "Notificações geradas pelo sistema",
                  "Recebidas em tempo real",
                ],
                [
                  "historico_notificacoes",
                  "Registro de quem leu quais notificações",
                  "Relaciona com notificações e usuários",
                ],
                [
                  "usuarios_permissoes",
                  "Permissões de acesso de cada usuário",
                  "Relaciona com usuários",
                ],
                [
                  "lista_espera_pix",
                  "Pedidos aguardando confirmação de pagamento PIX",
                  "Limpo automaticamente pelo webhook ao confirmar",
                ],
                [
                  "fretes_nao_disponiveis",
                  "Transportadoras que estão bloqueadas/ocultas",
                  "Relaciona com empresa",
                ],
                [
                  "pedidos_retornados",
                  "Pedidos devolvidos ao remetente",
                  "Relaciona com pedidos",
                ],
                [
                  "produtos_sku_plataformas",
                  "Código SKU de cada produto por plataforma (usado no ML)",
                  "Relaciona com produtos",
                ],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">
              Views — Consultas Pré-montadas
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Views são consultas complexas já configuradas no banco que
              combinam várias tabelas, simplificando a busca de dados no
              sistema:
            </p>
            <DocTable
              headers={["View", "O que combina/retorna", "Usada em"]}
              rows={[
                [
                  "vw_clientes_pedidos",
                  "Une dados dos pedidos com os dados dos clientes em uma única consulta",
                  "Comercial, PedidosCancelados, PedidosEnviados, Busca Global",
                ],
                [
                  "itens_pedido_agrupados",
                  "Agrupa os itens de pedido pelo produto/variação, somando as quantidades",
                  "Logística, EnvioPorEtiqueta",
                ],
                [
                  "vw_itens_logistica",
                  "Lista todos os itens pendentes de envio agregados por produto, mostrando a quantidade total",
                  "Logística (painel de cards)",
                ],
                [
                  "usuarios_completos",
                  "Dados completos dos usuários com informações de perfil",
                  "useAuth, Configurações",
                ],
                [
                  "group_usuarios_permissoes",
                  "Lista de permissões agrupadas por usuário",
                  "useAuth",
                ],
                [
                  "view_notificacoes",
                  "Notificações com informações sobre quem já as leu",
                  "NotificacoesContext",
                ],
                [
                  "pedidos_retornados_completos",
                  "Pedidos devolvidos com todos os joins necessários",
                  "PedidosRetornados",
                ],
                [
                  "vw_ass_predefinicao_perm_completo",
                  "Conjuntos de permissões pré-definidos com todos os detalhes",
                  "Configurações",
                ],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">
              RPCs — Funções Especiais do Banco
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              RPCs são funções que rodam diretamente no banco de dados para
              operações mais complexas que não seriam possíveis com uma busca
              simples:
            </p>
            <DocTable
              headers={["Função (RPC)", "Parâmetros recebidos", "O que faz"]}
              rows={[
                [
                  "achar_item_por_codigo_bipado",
                  "codigo_bipado (texto)",
                  "Encontra na fila de logística o pedido correto para aquele código de barras. Ordena por: urgente primeiro → mais antigo → menos itens → maior quantidade do m esmo produto",
                ],
                [
                  "trazer_cliente_info",
                  "p_cliente_id (UUID)",
                  'Busca os dados de entrega do cliente para pré-preencher o formulário. Retorna "já preenchido" se o cliente já enviou as informações antes',
                ],
                [
                  "enviar_informacoes_cliente",
                  "p_cliente_id + 13 campos de endereço",
                  "Salva todos os dados de entrega do cliente e marca o formulário como enviado (formulario_enviado=true), impedindo que seja preenchido novamente",
                ],
                [
                  "set_usuario_permissao",
                  "usuario_id, permissao_id, value (true/false)",
                  "Ativa ou desativa uma permissão específica para um usuário sem precisar mexer diretamente na tabela",
                ],
                [
                  "increment",
                  "row_id, x",
                  "Incrementa o contador de quantidade de um produto (usado para controlar estoque)",
                ],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">
              Triggers — Ações Automáticas do Banco
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Triggers são regras que o banco executa automaticamente quando
              algo muda, sem precisar de ação manual:
            </p>
            <DocTable
              headers={[
                "Trigger",
                "Em qual tabela",
                "O que faz automaticamente",
              ]}
              rows={[
                [
                  "handle_updated_at",
                  "9 tabelas diferentes",
                  "Sempre que qualquer registro é atualizado, registra automaticamente a data e hora da alteração no campo atualizado_em",
                ],
                [
                  "atualizar_pedidos_para_logistica",
                  "produtos, variacoes_produto",
                  "Quando o estoque de um produto aumenta, o sistema aloca automaticamente os itens de pedidos que estavam aguardando esse produto e move esses pedidos para a fila de logística",
                ],
                [
                  "enviar_direto_logistica",
                  "pedidos",
                  "Quando um pedido é marcado como liberado (pedido_liberado=true), o sistema automaticamente muda seu status para logística, colocando-o na fila de envio",
                ],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">
              Storage — Armazenamento de Arquivos na Nuvem
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                <strong>Pasta documentos/etiquetas/</strong> — armazena os PDFs
                de etiquetas manuais enviados pelos operadores na aba \"Subir
                Etiqueta\" do pedido
              </li>
              <li>
                <strong>Imagens diversas</strong> — fotos de perfil dos
                usuários, logo da empresa, imagens de plataformas e ícones de
                formas de pagamento
              </li>
              <li>
                <strong>URLs públicas</strong> — todos os arquivos recebem um
                link público de acesso (gerado pelo getPublicUrl()) que fica
                salvo diretamente no registro correspondente no banco
              </li>
            </ul>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* EDGE FUNCTIONS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="edge-functions" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              ⚡ Edge Functions (Deno)
            </h2>

            <CollapsibleSection
              title="pedido-pago-yampi — Pedido pago na loja"
              defaultOpen
            >
              <p className="text-sm font-semibold mb-2">
                Automatização acionada automaticamente quando um pedido é pago
                na plataforma Yampi. Não precisa de nenhuma ação manual — tudo
                acontece em sequência:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>
                  <strong>Limpeza do PIX</strong> — se o pagamento foi via PIX,
                  remove o registro da lista de espera de PIX (já foi pago)
                </li>
                <li>
                  <strong>Verificação de Up-Sell</strong> — se o pedido é uma
                  compra adicional (up-sell), busca o pedido original pelo CPF
                  do cliente e adiciona os novos itens a ele
                </li>
                <li>
                  <strong>Forma de pagamento</strong> — identifica como o
                  cliente pagou (Cartão de crédito, Boleto ou PIX) com base nos
                  dados da transação
                </li>
                <li>
                  <strong>Embalagem adequada</strong> — para cada item, busca o
                  produto e sua embalagem cadastrada. Calcula o peso total e as
                  maiores dimensões para o cálculo de frete
                </li>
                <li>
                  <strong>Remetente</strong> — busca no banco qual o endereço de
                  remetente usar (ou utiliza o endereço fixo padrão)
                </li>
                <li>
                  <strong>Cotação de frete</strong> — consulta a API do Melhor
                  Envio para calcular o frete mais barato até o endereço do
                  cliente
                </li>
                <li>
                  <strong>Registro completo</strong> — insere o pedido, o
                  cliente e todos os itens no banco de dados (um registro por
                  unidade de produto)
                </li>
              </ol>
              <p className="mt-2 text-sm">
                O código da empresa é fixo (empresa_id = 1) em todas as
                inserções realizadas por esta função.
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="yampi-pix-aprovado — PIX confirmado">
              <p className="text-sm">
                Automatização acionada quando a Yampi confirma que um pagamento
                PIX foi aprovado. Remove o registro correspondente da lista de
                espera de PIX (lista_espera_pix) usando o código interno da
                Yampi (id_yampi). Aceita apenas requisições do tipo POST.
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="yampi-carrinho-ab — Carrinho abandonado">
              <p className="text-sm">
                Automatização acionada quando um cliente adiciona produtos ao
                carrinho na Yampi mas não finaliza a compra. Cria um lead para
                que a equipe comercial possa fazer o acompanhamento.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                <li>
                  Ignora o evento se não for do tipo \"lembrete de carrinho\"
                  (cart.reminder)
                </li>
                <li>
                  Ignora se o cliente já possui um pedido ativo no sistema (não
                  cria lead duplicado)
                </li>
                <li>
                  Ignora se já existe um lead do mesmo tipo (carrinho
                  abandonado) com o mesmo CPF ou e-mail
                </li>
                <li>
                  Busca o produto no banco pelo SKU do primeiro item do carrinho
                  abandonado
                </li>
                <li>
                  Cria o lead com os dados do cliente, endereço, valores,
                  produto e informações de marketing (UTM)
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="calculo-frete-melhorenvio — Cotação de Frete">
              <p className="text-sm">
                Intermediário entre o sistema e a API do Melhor Envio. Recebe os
                dados do remetente, destinatário e produtos, valida os campos
                obrigatórios e devolve uma lista de opções de transportadoras
                com preços e prazos. Aceita os nomes dos campos tanto em
                português quanto em inglês.
              </p>
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
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🔗 Webhooks & Integrações Externas
            </h2>

            <DocTable
              headers={["Integração", "Como funciona", "O que faz"]}
              rows={[
                [
                  "Yampi",
                  "A Yampi envia avisos automáticos (webhooks) para as Edge Functions",
                  "Pedido pago, PIX aprovado, Carrinho abandonado",
                ],
                [
                  "Melhor Envio",
                  "API REST chamada diretamente pelo sistema",
                  "Cotação de frete, adicionar ao carrinho, processar etiqueta, verificar saldo",
                ],
                [
                  "Mercado Livre",
                  "Edge Function chamada quando pedido é do ML",
                  "Geração da etiqueta de envio do próprio ML",
                ],
                [
                  "Bling ERP",
                  "7 Edge Functions chamadas na tela de Contabilidade",
                  "Consultar/criar/editar cliente e pedido no Bling, emitir NF-e",
                ],
                [
                  "ViaCEP",
                  "API REST pública de consulta de CEP",
                  "Preenche automaticamente cidade, estado, endereço e bairro ao digitar o CEP no formulário público do cliente",
                ],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">
              Funções na Nuvem Chamadas Pelo Sistema (Frontend)
            </h3>
            <DocTable
              headers={["Função", "Usada em", "O que faz"]}
              rows={[
                [
                  "buscar_saldo_melhor_envio",
                  "Logística, Comercial, Pedido",
                  "Consulta e retorna o saldo disponível na conta do Melhor Envio",
                ],
                [
                  "calculo-frete-melhorenvio",
                  "Modal de cotação de frete, Pedido",
                  "Retorna lista de opções de transportadoras com preços e prazos",
                ],
                [
                  "adic-carrinho-melhorenvio",
                  "Modal de cotação de frete",
                  "Adiciona a opção de frete escolhida ao carrinho do Melhor Envio",
                ],
                [
                  "processar_etiqueta_em_envio_de_pedido",
                  "Logística, Comercial, Pedido",
                  "Finaliza a geração da etiqueta no Melhor Envio e atualiza o pedido",
                ],
                [
                  "processar-etiqueta-melhorenvio",
                  "Pedido",
                  "Processa a etiqueta e retorna o PDF para impressão (converte de Base64 para arquivo binário)",
                ],
                [
                  "gerar-etiqueta-ml",
                  "Logística, Pedido",
                  "Gera a etiqueta de envio diretamente pelo sistema do Mercado Livre",
                ],
              ]}
            />
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* TEMAS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="temas" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🎨 Tema & Cores Dinâmicas
            </h2>

            <h3 className="text-lg font-semibold">
              useEmpresaColors (hooks/useEmpresaColors.tsx)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sistema de temas dinâmicos que carrega as cores da empresa e
              aplica em todo o sistema visualmente. Cada empresa pode ter uma
              cor principal única que é propagada para botões, gradientes,
              bordas e outros elementos da interface.
            </p>

            <CollapsibleSection
              title="Como funciona o sistema de cores"
              defaultOpen
            >
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  <strong>Carregamento</strong> — ao iniciar o sistema, busca o
                  campo cores_hsl (em formato JSON) da tabela de empresas no
                  banco
                </li>
                <li>
                  <strong>Conversão e geração</strong> — na aba de
                  Configurações, quando o usuário escolhe uma cor hex (ex:
                  #7c3aed), o sistema converte para o formato HSL e gera
                  automaticamente 10 tonalidades (custom-50 até custom-950), das
                  mais claras às mais escuras, tanto para modo claro quanto para
                  modo escuro
                </li>
                <li>
                  <strong>Aplicação global</strong> — as cores são definidas
                  como variáveis CSS no elemento raíz da página
                  (document.documentElement), tornando-as disponíveis para toda
                  a interface automaticamente
                </li>
                <li>
                  <strong>Modo claro/escuro</strong> — monitora quando o usuário
                  alterna entre modo claro e escuro e reaplicar as cores
                  corretas para cada modo automaticamente
                </li>
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
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              📝 Tipos & Interfaces
            </h2>

            <h3 className="text-lg font-semibold">
              types/index.ts — Estrutura dos Objetos do Sistema
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Define a estrutura de dados de cada entidade principal do sistema
              — ou seja, quais campos cada objeto tem e quais são seus tipos.
              Isso garante que todos os arquivos do sistema trabalhem com dados
              no formato correto:
            </p>
            <DocTable
              headers={["Interface", "Campos Principais"]}
              rows={[
                [
                  "Usuario",
                  "id (identificador), nome, email, papel (admin ou operador), foto (avatar), ativo (se conta está ativa)",
                ],
                [
                  "Plataforma",
                  "id, nome da plataforma, cor visual, URL da imagem",
                ],
                [
                  "StatusPedido",
                  "id, nome do status, cor em hexadecimal, posicão na ordenação",
                ],
                [
                  "Produto",
                  "id, nome, código SKU, preço, unidade, categoria, URL da imagem, lista de variações",
                ],
                [
                  "VariacaoProduto",
                  "id, código do produto pai, nome do atributo, valor, preço mínimo, quantidade em estoque, SKU da variação",
                ],
                [
                  "ItemPedido",
                  "id, código do pedido, código do produto, código da variação, quantidade, preço unitário",
                ],
                [
                  "EtiquetaEnvio",
                  "mesma estrutura do StatusPedido (id, nome, cor, ordem)",
                ],
                [
                  "Pedido",
                  "id, código externo, nome do cliente, contato, código do responsável, plataforma, status, se é urgente, data prevista, observações, lista de itens, dados do ML e tempo ganho",
                ],
                [
                  "DashboardData",
                  "totais de pedidos, pedidos de hoje e da semana, agrupamentos por status e por plataforma, dados de etiquetas",
                ],
              ]}
            />

            <h3 className="text-lg font-semibold mt-4">
              integrations/supabase/types.ts — Tipos Gerados Automaticamente
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Arquivo gerado automaticamente pela ferramenta do Supabase a
              partir do schema real do banco de dados. Contém a definição
              completa de cada tabela com três versões: Row (como o dado chega
              do banco), Insert (como deve ser enviado ao criar) e Update (como
              deve ser enviado ao editar). Garante que o código não aceite dados
              no formato errado em nenhuma operação.
            </p>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* PÁGINAS PÚBLICAS */}
          {/* ═══════════════════════════════════════════════ */}
          <section id="paginas-publicas" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-3 dark:border-gray-700">
              🌐 Páginas Públicas
            </h2>

            <DocTable
              headers={["Página", "Endereço", "O que faz"]}
              rows={[
                [
                  "Auth.tsx",
                  "/auth",
                  "Tela de login com e-mail e senha, com opção de redefinir senha. Visual personalizado da Zeelux ERP. Os campos são validados antes de enviar",
                ],
                [
                  "InformacoesEntrega.tsx",
                  "/informacoes-entrega/:id",
                  "Formulário público acessado pelo cliente via link único para preencher seus dados de entrega. Não requer login",
                ],
                [
                  "Documentacao.tsx",
                  "/documentacao",
                  "Esta mesma página — documentação técnica completa do sistema",
                ],
                [
                  "TermosServico.tsx",
                  "/termos-servico",
                  "Documento estático com os Termos de Serviço da plataforma (10 seções jurídicas)",
                ],
                [
                  "TermoPrivacidade.tsx",
                  "/politica-privacidade",
                  "Política de Privacidade conforme a LGPD, com 11 seções, informações do DPO (Encarregado de Dados) e base legal",
                ],
                [
                  "NotFound.tsx",
                  "/* (qualquer endereço não encontrado)",
                  "Página de erro 404, exibida quando o usuário tenta acessar um endereço que não existe. Tem link para voltar ao início",
                ],
              ]}
            />

            <CollapsibleSection title="InformacoesEntrega — Formulário Público do Cliente">
              <p className="text-sm">
                Página acessada pelo cliente via link único enviado pela equipe
                (salvo no campo link_formulario do cliente). Não requer login.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Etapa 1</strong> — Seleção de tipo de pessoa (Física
                  ou Jurídica), nome completo, CPF ou CNPJ (com validação
                  completa dos dígitos verificadores), e-mail e telefone
                </li>
                <li>
                  <strong>Etapa 2</strong> — CEP (ao digitar, busca
                  automaticamente endereço na API do ViaCEP e preenche cidade,
                  estado, bairro e logradouro). Também solicita: número,
                  complemento (máx. 17 caracteres) e observação (máx. 30
                  caracteres)
                </li>
                <li>
                  <strong>Pré-preenchimento</strong> — ao abrir, carrega os
                  dados já cadastrados do cliente (se houver) para facilitar a
                  correção. Após enviar, o formulário é bloqueado
                  (formulario_enviado=true) para evitar alterações indevidas
                </li>
                <li>
                  <strong>Validação de CPF</strong> — algoritmo completo de
                  verificação dos dígitos verificadores (11 dígitos)
                </li>
                <li>
                  <strong>Validação de CNPJ</strong> — algoritmo completo de
                  verificação dos dígitos verificadores (14 dígitos)
                </li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ─── Footer ─── */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400 space-y-2">
            <p>Documentação gerada — ERP Zeelux</p>
            <p>
              Última atualização:{" "}
              {new Date().toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <Link
                to="/termos-servico"
                className="text-blue-600 hover:underline"
              >
                Termos de Serviço
              </Link>
              <Link
                to="/politica-privacidade"
                className="text-blue-600 hover:underline"
              >
                Política de Privacidade
              </Link>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
