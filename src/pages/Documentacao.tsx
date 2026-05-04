import { useState, useEffect, useRef } from "react";
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
  History,
  BellRing,
  Route,
  ServerCog,
  Component,
  Tags,
  BarChart2,
  Smartphone,
  Package2,
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
    badge: "7 funções",
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
  {
    id: "dashboard-comercial",
    label: "Dashboard Comercial",
    icon: <BarChart2 className="w-4 h-4" />,
    badge: "Métricas",
  },
  {
    id: "historico",
    label: "Histórico de Movimentações",
    icon: <History className="w-4 h-4" />,
  },
  {
    id: "push-notifications",
    label: "Web Push (PWA)",
    icon: <Smartphone className="w-4 h-4" />,
    badge: "PWA",
  },
  {
    id: "tipos-lead",
    label: "Tipos de Lead",
    icon: <Tags className="w-4 h-4" />,
  },
  {
    id: "componentes",
    label: "Componentes Reutilizáveis",
    icon: <Component className="w-4 h-4" />,
  },
  {
    id: "rotas",
    label: "Rotas do Sistema",
    icon: <Route className="w-4 h-4" />,
  },
  {
    id: "deploy",
    label: "Deploy & Configuração",
    icon: <ServerCog className="w-4 h-4" />,
  },
];

/* ─── Índice de Busca ────────────────────────────────── */
interface SearchEntry {
  id: string;
  label: string;
  description: string;
  keywords: string;
}

const searchIndex: SearchEntry[] = [
  {
    id: "visao-geral",
    label: "Visão Geral",
    description: "O que é o ERP Zeelux, seus módulos e como funciona",
    keywords:
      "erp zeelux sistema digital completo ciclo vida pedidos empresa compra envio produto centraliza gestão produção logística estoque financeiro contabilidade react typescript supabase nuvem módulos dashboard comercial leads configurações 25 páginas componentes edge functions webhooks overview introdução o que é resumo geral",
  },
  {
    id: "arquitetura",
    label: "Arquitetura & Stack",
    description: "Tecnologias usadas, estrutura de pastas e camadas do sistema",
    keywords:
      "arquitetura stack tecnologia react 18 typescript vite tailwind css shadcn ui react router react query tanstack recharts date-fns zod react-hook-form lucide lottie postgresql supabase auth storage realtime edge functions deno views rpcs triggers estrutura pastas componentes hooks contexts integrations types lib data assets frontend backend camadas app",
  },
  {
    id: "autenticacao",
    label: "Autenticação & Permissões",
    description: "Login, logout, permissões de acesso e proteção de rotas",
    keywords:
      "autenticacao autenticação permissões login logout usuario useAuth hook signup signin signout protected route proteção rotas acesso controle sessão jwt token perfil empresa id empresa permissao hasPermission deleteUser credenciais senha email isAuthenticated isActive loading permissoes predefinicoes set_usuario_permissao group_usuarios_permissoes",
  },
  {
    id: "layout",
    label: "Layout & Navegação",
    description: "Cabeçalho, menus laterais, busca global e estrutura visual",
    keywords:
      "layout navegação cabeçalho header AppHeader AppLayout sidebar menu lateral ComercialSidebar LogisticaSidebar EstoqueSidebar busca global SearchPanel lupa notificações sino perfil logo empresa gradiente módulos responsivo recolher expandir getModuleFromPath debounce 300ms vw_clientes_pedidos leads barra pesquisa",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Resumo de vendas, métricas, gráficos e top produtos",
    keywords:
      "dashboard resumo vendas métricas gráficos top produtos faturamento ticket médio pedidos enviados período seletor data atalhos hoje últimos 7 dias 30 dias 90 dias este mês mês passado este ano abortcontroller vendas plataforma envios pizza barras status taxa envio MetricCard cartão tendência recharts permissão 50",
  },
  {
    id: "comercial",
    label: "Comercial",
    description: "Gestão de pedidos, filtros avançados e operações em lote",
    keywords:
      "comercial pedidos gestão filtros avançados operações lote alterar status responsável etiqueta envio rápido melhor envio saldo badges alerta etiqueta pendente envio adiado duplicação pedido novo pedido cancelados enviados retornados plataforma urgente data url compartilhar busca cpf cnpj telefone NovoPedido PedidosCancelados PedidosEnviados PedidosRetornados",
  },
  {
    id: "pedido",
    label: "Pedido (Detalhe)",
    description: "Tela de detalhe do pedido com abas, up-sell e etiquetas",
    keywords:
      "pedido detalhe aba resumo status entrega tempo ganho subir etiqueta itens tabela botões upsell up-sell manter remover rodapé financeiro formas pagamento adicionar produto fluxo guiado etapas dados pagamento valor status plataforma etiqueta responsável urgente observações dados cliente endereço remetente embalagem cálculo frete enviar mais barato imprimir etiqueta mercado livre upload pdf subir etiqueta armazenamento jsonb etiquetas_uploads aumentado não aumentado aguardando aumento grátis liberação automática trigger pedido_liberado",
  },
  {
    id: "contabilidade",
    label: "Contabilidade",
    description: "Visualização contábil e integração completa com o Bling ERP",
    keywords:
      "contabilidade bling erp pedido contabil nota fiscal nfe nf-e emissão cliente consultar criar editar atualizar pedido bling consultar criar editar gerar nfe permissão 22 visualização contábil fiscal integração api edge functions pré-visualização produtos valor total data plataforma responsável PedidoContabilidade consultar_cliente criar_cliente editar_cliente consultar_pedido criar_pedido editar_pedido gerar_nfe",
  },
  {
    id: "producao",
    label: "Produção",
    description: "Quadro Kanban de produção com atualização em tempo real",
    keywords:
      "produção kanban quadro tempo real realtime arrastar soltar drag drop status etapas produção entrada logística logistica cartões pedidos urgente código externo colunas busca interna atualização automática websocket enviado data envio itens produzir variações quantidades agregadas Producao",
  },
  {
    id: "logistica",
    label: "Logística",
    description: "Bipação de produtos, geração de etiquetas e envio de pedidos",
    keywords:
      "logística logistica envio bipação bipe código barras leitor scanner priorização urgente antigo etiqueta melhor envio saldo remetente plataforma mercado livre pdf imprimir painel itens enviar vw_itens_logistica envio etiqueta manual EnvioPorEtiqueta etapas bipação visualização marcar enviado responsável atribuição automática remetente achar_item_por_codigo_bipado",
  },
  {
    id: "estoque",
    label: "Estoque",
    description: "Cadastro de produtos, variações, embalagens e SKUs",
    keywords:
      "estoque produtos variações embalagens sku plataformas catálogo criação edição exclusão permissão 17 18 19 20 21 ProductForm formulário dados básicos dimensões peso altura largura comprimento variações checkbox upsell embalagem mercado livre bling_id código barras paginação server-side categorias sem estoque ListaEmbalagens SkuPlataformas",
  },
  {
    id: "leads",
    label: "Leads",
    description: "Gestão de clientes potenciais e conversão em pedidos",
    keywords:
      "leads clientes potenciais pix pendente carrinho abandonado converter pedido permissão 23 abas filtro todos pix carrinho abandono yampi fluxo automático inserir cliente itens excluir lead plataforma forma pagamento ações copiar editar criar pedido check aprovado rejeitado",
  },
  {
    id: "configuracoes",
    label: "Configurações",
    description: "Usuários, status, setores, pagamentos e preferências visuais",
    keywords:
      "configurações usuários status setores formas pagamento preferências permissão 7 criar usuário editar permissões individuais excluir foto arrastar soltar checkboxes predefinicoes status nome cor ordem drag drop reordenar setores módulos menu cabeçalho formas pagamento logo ícone modo escuro dark mode minha empresa cnpj cor principal paleta hsl tonalidades variáveis css",
  },
  {
    id: "notificacoes",
    label: "Notificações",
    description: "Notificações em tempo real com sino e painel de leitura",
    keywords:
      "notificações tempo real realtime sininho bell sino dropdown painel não lidas lidas concluídas filtros fetch marcar lida concluída todas websocket conexão ativa som notificação toast amarelo empresa usuário histórico 50 notificações tempo atrás navegar pedido automático NotificacoesContext NotificacoesDropdown",
  },
  {
    id: "hooks",
    label: "Hooks Customizados",
    description: "useAuth, useEmpresaColors, useIsMobile e useToast",
    keywords:
      "hooks customizados useAuth useEmpresaColors useIsMobile use-mobile useToast toast messages avisos visuais autenticação cores empresa celular mobile 768px layout adaptativo gerenciar reutilizáveis funções",
  },
  {
    id: "supabase",
    label: "Supabase & Banco de Dados",
    description: "Tabelas, views, RPCs, triggers e storage do banco de dados",
    keywords:
      "supabase banco dados postgresql tabelas views rpcs triggers storage pedidos clientes itens_pedido produtos variacoes_produto usuarios plataformas status_pedido tipos_etiqueta embalagens remetentes leads status_upsell formas_pagamentos empresas notificacoes historico_notificacoes usuarios_permissoes lista_espera_pix fretes_nao_disponiveis pedidos_retornados produtos_sku_plataformas vw_clientes_pedidos itens_pedido_agrupados vw_itens_logistica usuarios_completos group_usuarios_permissoes view_notificacoes pedidos_retornados_completos vw_ass_predefinicao_perm_completo achar_item_por_codigo_bipado trazer_cliente_info enviar_informacoes_cliente set_usuario_permissao increment handle_updated_at atualizar_pedidos_para_logistica enviar_direto_logistica rls controle acesso urls públicas",
  },
  {
    id: "edge-functions",
    label: "Edge Functions",
    description: "Webhooks Yampi, PIX, carrinho abandonado e cálculo de frete",
    keywords:
      "edge functions deno webhooks yampi pedido pago pix aprovado carrinho abandonado calculo frete melhor envio limpeza pix verificação upsell forma pagamento embalagem remetente cotação registro pedido cliente itens empresa_id 1 cart reminder lead duplicado sku remetente api calculo-frete-melhorenvio request response post pedido-pago-yampi yampi-pix-aprovado yampi-carrinho-ab",
  },
  {
    id: "webhooks",
    label: "Webhooks & Integrações",
    description: "Integrações com Yampi, Melhor Envio, ML, Bling e ViaCEP",
    keywords:
      "webhooks integrações yampi melhor envio mercado livre bling viacep api rest cotação frete carrinho etiqueta saldo buscar_saldo_melhor_envio calculo-frete adic-carrinho processar_etiqueta processar-etiqueta-melhorenvio gerar-etiqueta-ml nota fiscal nfe base64 pdf binário",
  },
  {
    id: "temas",
    label: "Tema & Cores Dinâmicas",
    description: "Paleta personalizada da empresa com suporte a modo escuro",
    keywords:
      "tema cores dinâmicas useEmpresaColors hsl hex tonalidades custom-50 custom-100 custom-200 custom-950 variáveis css document.documentElement modo escuro dark light claro empresa gradiente header botões bordas configurações personalizar identidade visual",
  },
  {
    id: "tipos",
    label: "Tipos & Interfaces",
    description: "Interfaces TypeScript dos objetos principais do sistema",
    keywords:
      "tipos interfaces typescript types Usuario Plataforma StatusPedido Produto VariacaoProduto ItemPedido EtiquetaEnvio Pedido DashboardData Row Insert Update schema banco gerado automático integrations supabase types.ts estrutura objetos campos",
  },
  {
    id: "paginas-publicas",
    label: "Páginas Públicas",
    description:
      "Login, formulário do cliente, termos e política de privacidade",
    keywords:
      "páginas públicas auth login senha redefinir informacoes entrega formulário cliente link único sem login cpf cnpj validação dígitos verificadores viacep cep endereço complemento observação formulario_enviado documentacao termos serviço política privacidade lgpd dpo not found 404 erros InformacoesEntrega",
  },
  {
    id: "dashboard-comercial",
    label: "Dashboard Comercial",
    description:
      "Dashboard dedicado à equipe comercial com métricas de PIX, TypeBot, upsell Yampi e conversão por responsável",
    keywords:
      "dashboard comercial pix leads métricas typebot yampi upsell conversão responsável ticket médio faturamento gráficos recharts área linha barra pizza taxa recuperação incremento período comparativo",
  },
  {
    id: "historico",
    label: "Histórico de Movimentações",
    description:
      "Registro auditável de todas as alterações feitas em pedidos, com filtros e busca por usuário ou data",
    keywords:
      "histórico movimentações auditoria log alterações pedidos registrar buscar historicoMovimentacoes.ts historico_movimentacoes tabela userId filtros data paginação limite offset",
  },
  {
    id: "push-notifications",
    label: "Web Push (PWA)",
    description:
      "Notificações push via Web Push API — service worker, VAPID, permissão do browser e tabela push_subscriptions",
    keywords:
      "push notifications web push pwa service worker vapid VITE_VAPID_PUBLIC_KEY sw.js push_subscriptions subscribe unsubscribe permissão browser PushManager usePushNotifications",
  },
  {
    id: "tipos-lead",
    label: "Tipos de Lead",
    description:
      "Gerenciamento de categorias de lead (TypeBot, manual) com imagem, integração via id_type",
    keywords:
      "tipos de lead tipo_de_lead typebot id_type imagem foto supabase storage TiposDeLead.tsx nome badge comercial sidebar",
  },
  {
    id: "componentes",
    label: "Componentes Reutilizáveis",
    description:
      "Visão geral dos componentes compartilhados: layout, modais, shipping, orders, notifications, dashboard",
    keywords:
      "componentes reutilizáveis AppLayout AppHeader AppNavigation ProtectedRoute SearchPanel KanbanBoard CotacaoFreteModal EmbalagensManager RemetentesManager ClientEditModal EditSelectModal modals shipping orders layout",
  },
  {
    id: "rotas",
    label: "Rotas do Sistema",
    description:
      "Mapa completo de todas as rotas do sistema — protegidas, públicas e páginas de erro",
    keywords:
      "rotas routes react router dom App.tsx protegidas públicas autenticação ProtectedRoute path URL dashboard pedido logistica estoque producao comercial configuracoes documentacao",
  },
  {
    id: "deploy",
    label: "Deploy & Configuração",
    description:
      "Deploy via Vercel, variáveis de ambiente necessárias, estrutura de build com Vite e configuração do Supabase",
    keywords:
      "deploy vercel vite build variáveis ambiente env VITE_SUPABASE_URL VITE_SUPABASE_ANON_KEY VITE_VAPID_PUBLIC_KEY rewrites spa package.json bun supabase config.toml",
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
    <div
      className={`rounded-xl overflow-hidden transition-all duration-200 ${
        open
          ? "border-2 border-[hsl(var(--custom-300))] dark:border-[hsl(var(--custom-700))] shadow-md"
          : "border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-800))] shadow-sm"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${
          open
            ? "bg-gradient-to-r from-[hsl(var(--custom-100))] to-[hsl(var(--custom-50))] dark:from-[hsl(var(--custom-800))]/50 dark:to-[hsl(var(--custom-900))]/60"
            : "bg-[hsl(var(--custom-50))] dark:bg-[hsl(var(--custom-900))]/40 hover:bg-[hsl(var(--custom-100))] dark:hover:bg-[hsl(var(--custom-800))]/40"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-1 h-5 rounded-full transition-colors ${
              open
                ? "bg-[hsl(var(--custom-500))]"
                : "bg-[hsl(var(--custom-300))] dark:bg-[hsl(var(--custom-600))]"
            }`}
          />
          <span
            className={`font-semibold text-sm ${
              open
                ? "text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))]"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {title}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 text-[hsl(var(--custom-500))] dark:text-[hsl(var(--custom-400))] ${
            open ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>
      {open && (
        <div className="px-5 py-4 bg-white dark:bg-gray-900/80 space-y-3 border-t border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/50">
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── Componente de Tabela ───────────────────────────── */
function DocTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/60 shadow-sm">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-[hsl(var(--custom-100))] to-[hsl(var(--custom-50))] dark:from-[hsl(var(--custom-800))]/60 dark:to-[hsl(var(--custom-900))]/50">
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 font-semibold text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-200))] border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/60 text-xs uppercase tracking-wide"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`transition-colors hover:bg-[hsl(var(--custom-50))] dark:hover:bg-[hsl(var(--custom-900))]/40 ${
                i % 2 === 1
                  ? "bg-[hsl(var(--custom-50))]/60 dark:bg-white/[0.02]"
                  : "bg-white dark:bg-transparent"
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 border-b border-[hsl(var(--custom-100))] dark:border-[hsl(var(--custom-800))]/40 ${
                    j === 0
                      ? "font-medium text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))]"
                      : "text-gray-600 dark:text-gray-400"
                  } ${i === rows.length - 1 ? "border-b-0" : ""}`}
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
    <div className="rounded-xl overflow-hidden shadow-md border border-gray-700/50">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#1a1a2e] border-b border-gray-700/50">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-gray-500 font-mono">code</span>
      </div>
      <pre className="bg-[#0d1117] text-green-400 text-xs px-5 py-4 overflow-x-auto whitespace-pre-wrap leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
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
    <div className="relative rounded-xl border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/60 bg-white dark:bg-gray-900/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      {/* Top accent gradient strip */}
      <div className="h-0.5 bg-gradient-to-r from-[hsl(var(--custom-400))] via-[hsl(var(--custom-500))] to-[hsl(var(--custom-600))]" />
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-[hsl(var(--custom-100))] to-[hsl(var(--custom-200))] dark:from-[hsl(var(--custom-800))]/60 dark:to-[hsl(var(--custom-900))]/60 rounded-lg text-[hsl(var(--custom-600))] dark:text-[hsl(var(--custom-300))] shadow-sm group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-sm">
            {title}
          </h4>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
}

const SENHA_DOCUMENTACAO = "zeelux2026";

export default function Documentacao() {
  const [activeSection, setActiveSection] = useState("visao-geral");
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === SENHA_DOCUMENTACAO) {
      setAutenticado(true);
      setErroSenha(false);
    } else {
      setErroSenha(true);
    }
  };

  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        // Pega a seção com maior proporção de visibilidade
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [autenticado]);

  const scrollToSection = (id: string) => {
    isScrollingRef.current = true;
    setActiveSection(id);
    setSearchQuery("");
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    // Reabilita o observer após a animação terminar (~800ms)
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  /* ─── Lógica de Busca ─── */
  const normalizeText = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const searchResults = searchIndex.filter((entry) => {
    if (!searchQuery.trim()) return false;
    const q = normalizeText(searchQuery.trim());
    const text = normalizeText(
      `${entry.label} ${entry.description} ${entry.keywords}`,
    );
    return text.includes(q);
  });

  if (!autenticado) {
    return (
      <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--custom-100))] via-[hsl(var(--custom-50))] to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[hsl(var(--custom-200))]/40 dark:bg-[hsl(var(--custom-800))]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[hsl(var(--custom-300))]/30 dark:bg-[hsl(var(--custom-700))]/10 blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-md">
          {/* Card */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-[hsl(var(--custom-200))]/60 dark:border-white/10 overflow-hidden">
            {/* Top gradient strip */}
            <div className="h-1 bg-gradient-to-r from-[hsl(var(--custom-400))] via-[hsl(var(--custom-500))] to-[hsl(var(--custom-700))]" />

            <div className="p-8 space-y-7">
              {/* Header */}
              <div className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[hsl(var(--custom-100))] to-[hsl(var(--custom-200))] dark:from-[hsl(var(--custom-800))]/60 dark:to-[hsl(var(--custom-900))]/60 rounded-2xl flex items-center justify-center shadow-md border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40">
                  <Lock className="w-7 h-7 text-[hsl(var(--custom-600))] dark:text-[hsl(var(--custom-400))]" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Documentação Técnica
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
                    Acesso restrito — ERP Zeelux
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="senha"
                    className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                  >
                    Senha de acesso
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
                    className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${
                      erroSenha
                        ? "border-red-400 focus:border-red-500 bg-red-50/50 dark:bg-red-950/20"
                        : "border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/60 focus:border-[hsl(var(--custom-500))] dark:focus:border-[hsl(var(--custom-400))] bg-white dark:bg-gray-800/60"
                    } text-gray-900 dark:text-white placeholder-gray-400`}
                  />
                  {erroSenha && (
                    <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      Senha incorreta. Tente novamente.
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[hsl(var(--custom-600))] to-[hsl(var(--custom-700))] hover:from-[hsl(var(--custom-700))] hover:to-[hsl(var(--custom-800))] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  Acessar Documentação
                </button>
              </form>

              {/* Footer */}
              <div className="text-center border-t border-[hsl(var(--custom-100))] dark:border-white/10 pt-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-sm text-[hsl(var(--custom-600))] dark:text-[hsl(var(--custom-400))] hover:text-[hsl(var(--custom-700))] dark:hover:text-[hsl(var(--custom-300))] transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  Voltar ao sistema
                </Link>
              </div>
            </div>
          </div>

          {/* Subtle watermark */}
          <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-5">
            ERP Zeelux · Documentação Interna
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--custom-50))] dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-[hsl(var(--custom-200))] dark:border-white/[0.07] shadow-sm">
        {/* Top color accent */}
        <div className="h-0.5 bg-gradient-to-r from-[hsl(var(--custom-400))] via-[hsl(var(--custom-500))] to-[hsl(var(--custom-700))]" />
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 bg-gradient-to-br from-[hsl(var(--custom-100))] to-[hsl(var(--custom-200))] dark:from-[hsl(var(--custom-800))]/60 dark:to-[hsl(var(--custom-900))]/60 rounded-xl border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 shrink-0">
                <BookOpen className="w-5 h-5 text-[hsl(var(--custom-600))] dark:text-[hsl(var(--custom-400))]" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  Documentação Técnica
                  <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/60 text-[hsl(var(--custom-600))] dark:text-[hsl(var(--custom-300))] border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40">
                    ERP Zeelux
                  </span>
                </h1>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 hidden sm:block">
                  Arquitetura · Páginas · Componentes · Integrações · Deploy
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {/* Busca rápida mobile */}
              <div className="relative lg:hidden">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar..."
                  className="pl-8 pr-4 py-2 text-sm rounded-lg border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/60 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[hsl(var(--custom-500))] w-40"
                />
              </div>
              <Link
                to="/"
                className="flex items-center gap-1.5 text-sm text-[hsl(var(--custom-600))] dark:text-[hsl(var(--custom-400))] hover:text-[hsl(var(--custom-700))] dark:hover:text-[hsl(var(--custom-300))] transition-colors font-medium"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Voltar ao sistema</span>
              </Link>
            </div>
          </div>
          {/* Resultados de busca mobile */}
          {searchQuery.trim() && (
            <div className="mt-3 lg:hidden border-t border-[hsl(var(--custom-100))] dark:border-white/10 pt-3">
              {searchResults.length === 0 ? (
                <p className="text-sm text-gray-500">
                  Nenhum resultado para "{searchQuery}"
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => scrollToSection(result.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-900))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] hover:bg-[hsl(var(--custom-200))] dark:hover:bg-[hsl(var(--custom-900))]/60 transition-colors border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40"
                    >
                      {sections.find((s) => s.id === result.id)?.icon}
                      {result.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        {/* ─── Sidebar de navegação ─── */}
        <nav className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-[4.5rem] space-y-1 max-h-[calc(100vh-5.5rem)] overflow-y-auto overflow-x-visible pr-1 pl-0.5 pb-6">
            {/* Card container */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[hsl(var(--custom-200))]/70 dark:border-white/[0.06] shadow-sm overflow-hidden">
              {/* Search area */}
              <div className="p-3 border-b border-[hsl(var(--custom-100))] dark:border-white/[0.06]">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar na documentação..."
                    className="w-full pl-8 pr-7 py-2 text-xs rounded-lg border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/60 bg-[hsl(var(--custom-50))] dark:bg-gray-800/60 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[hsl(var(--custom-400))] dark:focus:border-[hsl(var(--custom-500))] transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-[hsl(var(--custom-100))] dark:hover:bg-[hsl(var(--custom-800))]/60 transition-colors text-sm leading-none"
                      aria-label="Limpar busca"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Nav content */}
              <div className="p-2">
                {searchQuery.trim() ? (
                  <div className="space-y-0.5">
                    {searchResults.length === 0 ? (
                      <div className="px-3 py-6 text-center space-y-2">
                        <Search className="w-7 h-7 text-gray-300 dark:text-gray-600 mx-auto" />
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Nenhum resultado para
                        </p>
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          "{searchQuery}"
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className="text-[10px] font-bold uppercase text-gray-400 mb-2 px-2 tracking-wider">
                          {searchResults.length} resultado
                          {searchResults.length !== 1 ? "s" : ""}
                        </p>
                        {searchResults.map((result) => (
                          <button
                            key={result.id}
                            onClick={() => scrollToSection(result.id)}
                            className="w-full flex items-start gap-2 px-3 py-2.5 rounded-lg text-xs transition-colors hover:bg-[hsl(var(--custom-50))] dark:hover:bg-[hsl(var(--custom-900))]/30 text-left group"
                          >
                            <div className="mt-0.5 text-[hsl(var(--custom-500))] dark:text-[hsl(var(--custom-400))] shrink-0">
                              {sections.find((s) => s.id === result.id)?.icon}
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-gray-800 dark:text-gray-200 truncate">
                                {result.label}
                              </p>
                              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                                {result.description}
                              </p>
                            </div>
                          </button>
                        ))}
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    <p className="text-[10px] font-bold uppercase text-gray-400 mb-2 px-2 tracking-wider">
                      {sections.length} seções
                    </p>
                    {sections.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all group relative ${
                          activeSection === s.id
                            ? "bg-gradient-to-r from-[hsl(var(--custom-100))] to-[hsl(var(--custom-50))] dark:from-[hsl(var(--custom-800))]/50 dark:to-transparent text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] font-semibold shadow-sm border border-[hsl(var(--custom-200))]/70 dark:border-[hsl(var(--custom-700))]/30"
                            : "text-gray-500 dark:text-gray-400 hover:bg-[hsl(var(--custom-50))] dark:hover:bg-white/[0.04] hover:text-gray-700 dark:hover:text-gray-300"
                        }`}
                      >
                        {/* Active indicator */}
                        {activeSection === s.id && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[hsl(var(--custom-500))] rounded-r-full" />
                        )}
                        <span
                          className={`shrink-0 transition-colors ${activeSection === s.id ? "text-[hsl(var(--custom-600))] dark:text-[hsl(var(--custom-400))]" : "text-gray-400 dark:text-gray-500 group-hover:text-[hsl(var(--custom-500))] dark:group-hover:text-[hsl(var(--custom-400))]"}`}
                        >
                          {s.icon}
                        </span>
                        <span className="flex-1 text-left truncate">
                          {s.label}
                        </span>
                        {s.badge && (
                          <Badge
                            variant="secondary"
                            className="text-[9px] px-1.5 py-0 shrink-0"
                          >
                            {s.badge}
                          </Badge>
                        )}
                      </button>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* ─── Conteúdo Principal ─── */}
        <style>{`
          .doc-content code:not(pre code) {
            background: hsl(var(--custom-100));
            padding: 0.1rem 0.375rem;
            border-radius: 0.3rem;
            font-size: 0.72rem;
            font-family: ui-monospace, 'Cascadia Code', monospace;
            color: hsl(var(--custom-700));
            border: 1px solid hsl(var(--custom-200));
          }
          .dark .doc-content code:not(pre code) {
            background: hsl(var(--custom-800) / 0.4);
            color: hsl(var(--custom-300));
            border-color: hsl(var(--custom-700) / 0.5);
          }
          .doc-content p {
            line-height: 1.7;
          }
        `}</style>
        <main className="flex-1 min-w-0 space-y-5 doc-content">
          {/* ═══════════════════════════════════════════════ */}
          {/* VISÃO GERAL */}
          {/* ═══════════════════════════════════════════════ */}
          <section
            id="visao-geral"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
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
                title="7 Edge Functions"
                icon={<Zap className="w-4 h-4" />}
              >
                <p>
                  Conta com 7 automações na nuvem (Edge Functions): 3 recebem
                  avisos automáticos da Yampi (pedido pago, PIX aprovado e
                  carrinho abandonado) e 4 são chamadas pelo próprio sistema
                  para calcular frete (Melhor Envio), gerar etiquetas, processar
                  envio e verificar saldo disponível.
                </p>
              </InfoCard>
            </div>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Como os dados fluem no sistema
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              O fluxo típico de um pedido no ERP Zeelux passa pelas seguintes
              etapas em ordem:
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 text-sm flex-wrap">
              {[
                { emoji: "🛒", label: "Cliente compra" },
                { emoji: "📥", label: "Webhook Yampi" },
                { emoji: "🏗️", label: "Produção" },
                { emoji: "📦", label: "Logística" },
                { emoji: "🚚", label: "Enviado" },
                { emoji: "💰", label: "Contabilidade / NF-e" },
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="flex items-center gap-2 bg-gradient-to-br from-[hsl(var(--custom-50))] to-white dark:from-[hsl(var(--custom-900))]/60 dark:to-gray-900 border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/50 rounded-xl px-3 py-2 font-medium text-gray-700 dark:text-gray-300 shadow-sm text-xs">
                    <span className="text-base leading-none">{step.emoji}</span>
                    {step.label}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-[hsl(var(--custom-400))] text-sm font-bold">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Módulos do Sistema — O que cada parte faz
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
          <section
            id="arquitetura"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
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
                <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-400 pl-1">
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
                <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-400 pl-1">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
          <section
            id="autenticacao"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              🔒 Autenticação & Permissões
            </h2>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
                <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                  usuarios_permissoes
                </code>{" "}
                e carregadas via view{" "}
                <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
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
                <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
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
              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-400 pl-1">
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
          <section
            id="layout"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              🧩 Layout & Navegação
            </h2>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
              <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                getModuleFromPath()
              </code>{" "}
              detecta em qual módulo o usuário está (comercial, logística,
              produção etc.) com base no endereço da página atual, para que o
              menu possa destacar o item ativo corretamente.
            </p>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Sidebars
            </h3>
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
          <section
            id="dashboard"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              📊 Dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Página principal de resumo do sistema (Dashboard.tsx).{" "}
              <strong>Requer permissão 50</strong> para ser acessada. É a
              primeira tela que o usuário vê ao entrar no sistema e mostra um
              resumo completo das vendas e envios no período selecionado.
            </p>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Seletor de Período
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Calendário duplo que permite escolher um intervalo de datas para
              filtrar todos os dados do Dashboard. Possui atalhos rápidos: Hoje,
              Últimos 7 dias, Últimos 30 dias, Últimos 90 dias, Este Mês, Mês
              Passado, Este Ano. Quando o usuário muda o período, o sistema
              cancela automaticamente qualquer busca anterior em andamento
              (AbortController) e inicia uma nova busca com o período correto —
              evitando que resultados antigos aparecem misturados com os novos.
            </p>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Métricas (4 cards)
            </h3>
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Gráficos (Abas)
            </h3>
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
          <section
            id="comercial"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              🛒 Comercial
            </h2>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
          <section
            id="pedido"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
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
          <section
            id="contabilidade"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              💰 Contabilidade
            </h2>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Contabilidade.tsx
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tela de visualização de pedidos já enviados para fins de controle
              financeiro e fiscal. Acessível apenas para usuários com{" "}
              <strong>permissão 22</strong>. Exibe uma tabela com busca e as
              seguintes colunas: ID do pedido, nome do cliente, plataforma de
              venda, responsável (com foto), pré-visualização dos produtos,
              valor total e data. Clicar em um pedido abre a página de detalhe
              contabil (PedidoContabilidade).
            </p>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
          <section
            id="producao"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              🏭 Produção
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Página: Producao.tsx. Exibe o quadro Kanban de produção com
              atualização em tempo real (Realtime) e uma aba de visualização
              agregada de todos os itens que precisam ser produzidos.
            </p>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Etapas de Produção
            </h3>
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
          <section
            id="logistica"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))] flex items-center gap-2">
              <Truck className="w-6 h-6 text-[hsl(var(--custom-500))]" />
              Logística
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Módulo responsável por todo o fluxo de despacho de pedidos — da
              bipação dos itens até a geração da etiqueta e confirmação do
              envio. Composto por <strong>Logistica.tsx</strong> (versão atual)
              e, para histórico, <strong>Logistica_old.tsx</strong> (versão
              anterior, mantida em <code>old_codigos/</code>).
            </p>

            {/* ── LOGISTICA.TSX ATUAL ── */}
            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Logistica.tsx — Versão Atual
            </h3>

            <CollapsibleSection
              title="Constantes de UUID (IDs Fixos do Sistema)"
              defaultOpen={false}
            >
              <DocTable
                headers={["Constante", "UUID", "Significado"]}
                rows={[
                  [
                    "MERCADO_LIVRE_PLATAFORMA_ID",
                    "3e5a2b44-245a-4be9-a0b1-ef67d83fd8ec",
                    "ID da plataforma Mercado Livre",
                  ],
                  [
                    "SHOPEE_PLATAFORMA_ID",
                    "c22b2def-47fc-4fbb-aab1-660c951734c7",
                    "ID da plataforma Shopee",
                  ],
                  [
                    "ENVIADO_STATUS_ID",
                    "fa6b38ba-1d67-4bc3-821e-ab089d641a25",
                    "ID do status 'Enviado'",
                  ],
                  [
                    "LOGISTICA_STATUS_ID",
                    "3473cae9-47c8-4b85-96af-b41fe0e15fa9",
                    "ID do status 'Em Logística'",
                  ],
                  [
                    "ITEM_PRIORITARIO_ML_ID",
                    "ab8a89a1-aa95-4a98-99c2-eaa3de670462",
                    "ID do item que tem prioridade de envio no ML",
                  ],
                  [
                    "TARGET_ETIQUETA_ID (inline)",
                    "466958dd-e525-4e8d-95f1-067124a5ea7f",
                    "ID da etiqueta de envio padrão (filtro de pedidos aptos)",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="Estados React (useState) da Página"
              defaultOpen={false}
            >
              <DocTable
                headers={["Estado", "Tipo", "Finalidade"]}
                rows={[
                  [
                    "barcode",
                    "string",
                    "Valor digitado/bipado no input de código de barras",
                  ],
                  [
                    "foundPedido",
                    "any | null",
                    "Pedido encontrado após bipagem — exibido no card central",
                  ],
                  [
                    "foundItemIds",
                    "string[]",
                    "IDs dos itens já confirmados no pedido atual",
                  ],
                  [
                    "itemInputs",
                    "Record<string, string>",
                    "Valores digitados em cada campo de bipe por item",
                  ],
                  [
                    "itemStatus",
                    "Record<string, 'idle'|'success'|'error'>",
                    "Estado visual de cada item (verde/vermelho/padrão)",
                  ],
                  [
                    "gruposAgrupados",
                    "Record<string, {nome_completo, quantidade_total}>",
                    "Itens agrupados por produto/variação para exibição",
                  ],
                  [
                    "logItems",
                    "LogItem[]",
                    "Lista de itens pendentes de envio (painel lateral)",
                  ],
                  [
                    "plataformasCards",
                    "any[]",
                    "Cards de plataforma com contagem de pedidos prontos",
                  ],
                  [
                    "openPlatformId",
                    "string | null",
                    "ID da plataforma cujo card está expandido",
                  ],
                  [
                    "platformOrderItems",
                    "Record<string, any[]>",
                    "Pedidos expandidos dentro de cada card de plataforma",
                  ],
                  [
                    "filterPlataformaId",
                    "string",
                    "Filtro de plataforma aplicado — recarrega lista ao mudar",
                  ],
                  [
                    "filterProdutos",
                    "ProdutoFiltro[]",
                    "Filtros de produto/variação ativos na busca",
                  ],
                  [
                    "tempFilter*",
                    "—",
                    "Versões temporárias dos filtros (antes de aplicar)",
                  ],
                  [
                    "modoListaPorPlataforma",
                    "boolean",
                    "true quando navegando pela fila de pedidos de uma plataforma",
                  ],
                  [
                    "pedidosFiltrados",
                    "any[]",
                    "Lista ordenada de pedidos da plataforma selecionada",
                  ],
                  [
                    "pedidoAtualIndex",
                    "number",
                    "Índice do pedido sendo processado na lista filtrada",
                  ],
                  [
                    "saldoMelhorEnvio",
                    "number | null",
                    "Saldo em R$ na conta do Melhor Envio",
                  ],
                  [
                    "etiquetaModalOpen / etiquetaUrl",
                    "boolean / string",
                    "Controla modal de PDF de etiqueta padrão",
                  ],
                  [
                    "etiquetaMLModalOpen / etiquetaMLPdfUrl",
                    "boolean / string",
                    "Controla modal de PDF de etiqueta Mercado Livre",
                  ],
                  [
                    "pedidoIdModalOpen / pedidoIdInput",
                    "boolean / string",
                    "Modal de envio manual por ID de pedido",
                  ],
                  [
                    "pedidoJaEnviadoModalOpen / pedidoJaEnviado",
                    "boolean / any",
                    "Modal de alerta quando pedido já foi enviado",
                  ],
                  [
                    "confirmEnvioModal",
                    "ConfirmEnvioData | null",
                    "Modal de confirmação após abrir link de etiqueta",
                  ],
                  [
                    "produtoPedidosModal",
                    "objeto",
                    "Modal que lista pedidos de um produto ao clicar no card",
                  ],
                  [
                    "copiedPedidoId",
                    "string | null",
                    "ID copiado para clipboard (feedback visual de 2s)",
                  ],
                  [
                    "userId",
                    "string | null",
                    "ID do usuário logado, usado em registrarHistoricoMovimentacao",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="Fluxo de Bipação — Passo a Passo"
              defaultOpen={true}
            >
              <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Foco automático no input</strong> — a página mantém
                  foco no campo de código de barras (<code>barcodeRef</code>)
                  continuamente, permitindo que o leitor dispare sem clique
                  manual.
                </li>
                <li>
                  <strong>Escanear / Enter</strong> — ao pressionar Enter, o
                  sistema chama a função de busca de pedido pelo código bipado.
                  A busca pesquisa nos <code>itens_pedido</code> pelo campo{" "}
                  <code>codigo_barras</code>.
                </li>
                <li>
                  <strong>
                    Algoritmo de priorização (<code>sortPedidos</code>)
                  </strong>{" "}
                  — quando múltiplos pedidos contêm o produto bipado, o sistema
                  escolhe o pedido mais prioritário pela seguinte ordem:
                  <ol className="list-decimal list-inside ml-4 mt-1 space-y-1">
                    <li>
                      ML com item prioritário (
                      <code>ITEM_PRIORITARIO_ML_ID</code>) → primeiro
                    </li>
                    <li>
                      ML com <code>shipping_id</code> preenchido → segundo
                    </li>
                    <li>
                      Pedido urgente (<code>urgente = true</code>) → terceiro
                    </li>
                    <li>
                      Pedido mais antigo (<code>criado_em ASC</code>) → quarto
                    </li>
                    <li>
                      Tiebreaker: UUID do pedido (estável entre re-renders)
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Card do pedido</strong> — exibe responsável,
                  plataforma (logo), código externo e todos os itens com imagem,
                  nome e quantidade. O campo de bipação de cada item aparece.
                </li>
                <li>
                  <strong>Confirmação por item</strong> — o operador bipa cada
                  item individualmente. Quando o código bate: item fica{" "}
                  <span className="text-green-600 font-semibold">verde</span> e
                  é adicionado a <code>foundItemIds</code>. Código errado: item
                  fica
                  <span className="text-red-600 font-semibold">
                    {" "}
                    vermelho
                  </span>{" "}
                  com feedback de erro.
                </li>
                <li>
                  <strong>Todos confirmados</strong> — quando{" "}
                  <code>foundItemIds.length === itens_totais</code>, os botões
                  de etiqueta são ativados: "IMPRIMIR ETIQUETA" (Melhor Envio)
                  ou "Etiqueta Mercado Livre" (para pedidos da plataforma ML).
                </li>
                <li>
                  <strong>Verificação de saldo</strong> — antes de gerar, o
                  sistema verifica se
                  <code>saldoMelhorEnvio ≥ 50</code>. Se não, exibe aviso.
                </li>
                <li>
                  <strong>Geração da etiqueta</strong> — para ML: chama Edge
                  Function
                  <code>gerar-etiqueta-ml</code>. Para demais: chama
                  <code>adic-carrinho-melhorenvio</code> +{" "}
                  <code>processar_etiqueta_em_envio_de_pedido</code>. O PDF é
                  exibido em modal.
                </li>
                <li>
                  <strong>Modal de confirmação de envio</strong> — após abrir o
                  link da etiqueta, aparece <code>ConfirmEnvioData</code>{" "}
                  pedindo que o operador confirme o despacho. Ao confirmar:
                  status → <code>ENVIADO_STATUS_ID</code>, registra histórico
                  via
                  <code>registrarHistoricoMovimentacao()</code> e avança para o
                  próximo pedido.
                </li>
              </ol>
            </CollapsibleSection>

            <CollapsibleSection
              title="Modo Lista por Plataforma (modoListaPorPlataforma)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Quando o operador seleciona um filtro de plataforma, o sistema
                entra em
                <strong> modo fila</strong>: carrega todos os pedidos em
                logística daquela plataforma, ordena com{" "}
                <code>sortPedidos</code> e navega por eles sequencialmente.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Botões ChevronLeft / ChevronRight para navegar na fila</li>
                <li>Indicador "X de Y pedidos" no topo</li>
                <li>
                  Ao concluir um pedido (
                  <code>avancarParaProximoPedidoAposConclusao</code>): remove o
                  concluído da lista e carrega o primeiro restante
                </li>
                <li>
                  Se a fila zerar, volta ao estado inicial de bipagem livre
                </li>
                <li>
                  Filtros de produto/variação aplicados na busca da fila (via
                  join em <code>itens_pedido</code>)
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection
              title="Painel de Itens Pendentes (logItems)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Quando não há nenhum pedido em processamento, o lado esquerdo
                exibe os cards de itens que ainda precisam ser enviados,
                agrupados por produto/variação com contagem total.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  Filtra pedidos com{" "}
                  <code>status_id = LOGISTICA_STATUS_ID</code> e{" "}
                  <code>etiqueta_envio_id = TARGET_ETIQUETA_ID</code>
                </li>
                <li>
                  Agrega itens por chave <code>produto_id + variacao_id</code>{" "}
                  (Map de acumulação)
                </li>
                <li>
                  Busca nomes e imagens dos produtos/variações em paralelo (
                  <code>Promise.all</code>)
                </li>
                <li>
                  Clicar em um card de item abre{" "}
                  <code>produtoPedidosModal</code> — lista todos os pedidos que
                  contêm aquele produto
                </li>
                <li>
                  Recarregado automaticamente quando{" "}
                  <code>filterPlataformaId</code> ou <code>filterProdutos</code>{" "}
                  mudam (<code>useEffect</code>)
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection
              title="Cards de Plataforma (plataformasCards)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Cards colapsáveis que mostram quantos pedidos prontos existem
                por plataforma. Expandir um card (<code>openPlatformId</code>)
                lista os pedidos com paginação de
                <code> PLATFORM_PAGE_SIZE = 4</code> por página.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  Clique no card → carrega{" "}
                  <code>platformOrderItems[plataformaId]</code>
                </li>
                <li>
                  Paginação controlada por{" "}
                  <code>platformPage[plataformaId]</code>
                </li>
                <li>
                  Botão "Enviar" em cada pedido inicia o fluxo de bipagem para
                  aquele pedido específico (<code>targetPedidoIdRef</code>)
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection
              title="Filtros (Plataforma + Produto/Variação)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                O painel de filtros (<code>showFilters</code>) possui dois
                filtros independentes:
              </p>
              <DocTable
                headers={["Filtro", "Como funciona"]}
                rows={[
                  [
                    "Plataforma",
                    "Select carregado com todas as plataformas do Supabase. Ao selecionar, ativa modoListaPorPlataforma e recarrega pedidos.",
                  ],
                  [
                    "Produto / Variação",
                    "Input de busca com autocomplete (mínimo 2 caracteres). Se produto tem variações, abre modal de seleção de variação. Múltiplos filtros podem ser adicionados (chips removíveis). Filtro aplicado tanto em logItems quanto na fila de pedidos.",
                  ],
                ]}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Os filtros têm versão temporária (<code>tempFilter*</code>) que
                só vira filtro efetivo ao clicar em "Aplicar". Isso evita
                re-renders desnecessários durante a digitação.
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="Modal: Pedido Já Enviado"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Se durante a bipação o sistema detectar que o pedido encontrado
                já tem
                <code> status_id = ENVIADO_STATUS_ID</code>, abre o modal{" "}
                <code>pedidoJaEnviadoModalOpen</code>
                exibindo os dados do pedido e avisando o operador que ele já foi
                despachado. Útil para evitar duplo-envio.
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="Modal: Enviar por ID de Pedido"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Botão alternativo que abre <code>pedidoIdModalOpen</code>. O
                operador digita um ID externo ou interno e o sistema busca e
                carrega o pedido diretamente, pulando a etapa de bipação do
                código de barras do produto. Útil quando o produto não tem
                código de barras ou o leitor está indisponível.
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="Saldo Melhor Envio" defaultOpen={false}>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                A função <code>fetchSaldoMelhorEnvio()</code> chama a Edge
                Function
                <code> buscar_saldo_melhor_envio</code> via POST com o{" "}
                <code>access_token</code>
                da sessão Supabase. O saldo retornado (<code>data.balance</code>
                ) é exibido no header da página. Se o saldo for inferior a R$50,
                o botão de geração de etiqueta exibe aviso antes de prosseguir.
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="Atribuição Automática de Remetente"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                O sistema define automaticamente qual remetente (endereço de
                saída) usar dependendo da plataforma do pedido, evitando seleção
                manual:
              </p>
              <DocTable
                headers={["Condição", "Remetente UUID"]}
                rows={[
                  [
                    "Plataformas especiais (ML, Shopee e uma terceira — UUIDs internos)",
                    "3fc6839c-e959-4dc1-a983-f61d557e50ec",
                  ],
                  [
                    "Todas as demais plataformas",
                    "128a7de7-d649-43e1-8ba3-2b54c3496b14",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="FULL_PEDIDO_SELECT — Query Completa do Pedido"
              defaultOpen={false}
            >
              <CodeBlock>{`// Select string usado ao carregar pedidos completos para bipagem
const FULL_PEDIDO_SELECT = \`
  id, id_externo, plataforma_id, shipping_id, urgente, status_id,
  criado_em, remetente_id, link_etiqueta, etiquetas_uploads, retirada,
  responsavel:usuarios(id, nome, img_url),
  plataformas(id, nome, img_url),
  itens_pedido(
    id, produto_id, variacao_id, quantidade,
    preco_unitario, codigo_barras, pintado,
    produto:produtos(id, nome, sku, img_url),
    variacao:variacoes_produto(id, nome, sku, img_url)
  )
\`;`}</CodeBlock>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                O campo <code>retirada</code> foi adicionado na migração{" "}
                <code>20260417000001</code>. Quando <code>retirada = true</code>
                , o pedido é retirada presencial — não gera etiqueta de envio.
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="Registrar Histórico após Envio"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Após confirmar o envio no modal de confirmação, a página chama:
              </p>
              <CodeBlock>{`await registrarHistoricoMovimentacao(
  pedidoId,
  \`Pedido enviado — etiqueta gerada via \${plataformaNome}\`,
  userId   // buscado via supabase.auth.getUser() no useEffect inicial
);`}</CodeBlock>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Isso garante rastreabilidade completa de quem despachou cada
                pedido e quando.
              </p>
            </CollapsibleSection>

            {/* ── ENVIO POR ETIQUETA ── */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-6">
              EnvioPorEtiqueta.tsx — Envio com Etiquetas Manuais
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Página para pedidos que já possuem etiquetas em PDF (enviadas
              externamente pelo vendedor), não geradas pelo Melhor Envio. Usa
              fluxo de 3 etapas obrigatórias.
            </p>

            <CollapsibleSection title="Fluxo de 3 Etapas" defaultOpen={false}>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Filtro automático</strong> — exibe apenas pedidos com{" "}
                  <code>etiquetas_uploads</code>
                  não vazio e <code>status_id ≠ ENVIADO</code>.
                </li>
                <li>
                  <strong>1ª Etapa — Bipação</strong> — confirmação dos códigos
                  de barras de cada item.
                </li>
                <li>
                  <strong>2ª Etapa — Visualizar etiquetas</strong> — só liberada
                  após todos os itens bipados. Cada etiqueta PDF deve ser
                  aberta/visualizada antes de continuar.
                </li>
                <li>
                  <strong>3ª Etapa — Confirmar envio</strong> — botão liberado
                  somente após todas as etiquetas visualizadas. Registra
                  responsável, data/hora e muda status para ENVIADO.
                </li>
              </ol>
            </CollapsibleSection>

            {/* ── LOGISTICA_OLD ── */}
            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              <Package2 className="w-4 h-4 text-amber-500" />
              Logistica_old.tsx — Versão Anterior (Preservada)
            </h3>
            <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-700/50 rounded-xl p-4">
              <p className="text-sm text-amber-800 dark:text-amber-200 font-medium mb-1">
                ⚠️ Arquivo preservado intencionalmente em{" "}
                <code className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded text-xs font-mono">
                  old_codigos/Logistica_old.tsx
                </code>
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
                Esta versão contém funcionalidades mais complexas que foram
                removidas da versão atual para simplificação do fluxo de
                trabalho. <strong>Não deve ser deletada</strong> — pode ser
                reativada caso o negócio precise das funcionalidades de gestão
                de pacotes e controle de itens embalados individualmente.
              </p>
            </div>

            <CollapsibleSection
              title="Diferenças Principais: Old vs. Atual"
              defaultOpen={true}
            >
              <DocTable
                headers={[
                  "Funcionalidade",
                  "Logistica_old.tsx",
                  "Logistica.tsx (atual)",
                ]}
                rows={[
                  [
                    "Abas principais",
                    "3 abas: 'itens-produzir' | 'pacotes' | 'enviar' (logisticaMainTab)",
                    "Sem abas — fluxo único de bipagem",
                  ],
                  [
                    "Campo embalado",
                    "itens_pedido têm campo embalado (boolean) — rastreado por item",
                    "Campo embalado não está no FULL_PEDIDO_SELECT atual",
                  ],
                  [
                    "Contagem de bipagem",
                    "foundItemScans: Record<string, number> — conta quantas vezes cada item foi bipado",
                    "foundItemIds: string[] — apenas marca item como confirmado",
                  ],
                  [
                    "Pacotes",
                    "Sistema completo de 'pacotes': comuns vs incomuns, disponível/parcial/indisponível",
                    "Sem gestão de pacotes",
                  ],
                  [
                    "Modal entrada no pacote",
                    "entradaPacoteModal — dar entrada quando o pacote de produtos chega",
                    "Não existe",
                  ],
                  [
                    "Pedidos enviados por plataforma",
                    "openEnviadosId + enviadosContagem + pedidosEnviadosCache — painel de enviados por card",
                    "Não existe",
                  ],
                  [
                    "Atrasados",
                    "fetchAtrasados() — busca pedidos com data_logistica_urgente vencida",
                    "Não existe",
                  ],
                  [
                    "Pacotes liberados",
                    "pacotesLiberados + modal — lista pacotes disponíveis para envio",
                    "Não existe",
                  ],
                  [
                    "Baixa de categoria",
                    "baixaCategoriaModal — registrar que uma quantidade de itens foi produzida/separada",
                    "Não existe",
                  ],
                  [
                    "Itens produzidos",
                    "produzidosPorGrupo + itemProduzidoFlash — controle visual de itens produzidos",
                    "Não existe",
                  ],
                  [
                    "Aba sub-pacotes",
                    "pacotesSubTab: 'comuns' | 'incomuns' e pacotesDisponivelTab: 'disponivel'|'parcial'|'indisponivel'",
                    "Não existe",
                  ],
                  [
                    "sortPedidosEnvio()",
                    "Versão especial que prioriza pedidos com pacote_disponivel = true antes da ordenação padrão",
                    "Apenas sortPedidos() padrão",
                  ],
                  [
                    "openSections",
                    "Estado para abrir/fechar seções 'produtos', 'comuns', 'incomuns' independentemente",
                    "Não existe",
                  ],
                  [
                    "pacote_disponivel no SELECT",
                    "Incluído no FULL_PEDIDO_SELECT + filtro .eq('pacote_disponivel', true)",
                    "Não incluído no FULL_PEDIDO_SELECT atual",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="Fluxo de Abas do Old (logisticaMainTab)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                A versão antiga tinha 3 abas no topo da página:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>itens-produzir</strong> — Lista os itens que ainda
                  precisam ser separados/produzidos. O operador registrava a
                  baixa via <code>baixaCategoriaModal</code>, informando
                  quantidade produzida. O feedback era o flash{" "}
                  <code>itemProduzidoFlash</code>.
                </li>
                <li>
                  <strong>pacotes</strong> — Gestão dos pacotes de envio.
                  Sub-abas por tipo:
                  <em> comuns</em> (produtos padrão) vs <em>incomuns</em>{" "}
                  (produtos especiais/oversized). E sub-abas de disponibilidade:{" "}
                  <em>disponivel</em> / <em>parcial</em> / <em>indisponivel</em>
                  baseado em se o pacote está completo. Modal{" "}
                  <code>entradaPacoteModal</code> para dar entrada quando o
                  pacote físico chegava da produção.
                </li>
                <li>
                  <strong>enviar</strong> — Fluxo de bipagem + envio, similar ao
                  atual, mas com
                  <code> sortPedidosEnvio()</code> que priorizava pedidos com{" "}
                  <code>pacote_disponivel = true</code>.
                </li>
              </ol>
            </CollapsibleSection>

            <CollapsibleSection
              title="Campo embalado (itens_pedido)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Na versão antiga, cada <code>item_pedido</code> tinha um campo
                booleano
                <code> embalado</code>. O sistema rastreava separadamente:
              </p>
              <CodeBlock>{`// Old: quantidade_embalada vs quantidade_total por item
const quantidadeEmbalada = item.embalado ? quantidade : 0;

// No painel de itens:
// Exibia "X embalados de Y total" por produto
// Cor diferente para itens parcialmente embalados`}</CodeBlock>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Na versão atual esse campo não é consultado — o controle foi
                simplificado para apenas "confirmado via bipagem" (boolean por
                pedido).
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="Como reativar o Logistica_old.tsx"
              defaultOpen={false}
            >
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  Copiar <code>old_codigos/Logistica_old.tsx</code> para{" "}
                  <code>src/pages/Logistica.tsx</code>
                </li>
                <li>
                  Verificar se os campos <code>embalado</code> e{" "}
                  <code>pacote_disponivel</code> ainda existem no banco
                  (migrações <code>20260311000001</code> adicionou{" "}
                  <code>pacote_disponivel</code>)
                </li>
                <li>
                  Confirmar que a tabela <code>pacotes</code> existe (migração{" "}
                  <code>20260317000001</code>)
                </li>
                <li>
                  Testar o fluxo de abas e pacotes em ambiente de
                  desenvolvimento antes de publicar
                </li>
              </ol>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* ESTOQUE */}
          {/* ═══════════════════════════════════════════════ */}
          <section
            id="estoque"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              📦 Estoque
            </h2>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              ListaEmbalagens.tsx — Gestão de Embalagens
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Página de cadastro e gestão das embalagens usadas nos envios.
              Requer permissões 19 (criar), 20 (editar) e 21 (deletar). Os
              campos de cada embalagem são: Nome, Altura, Largura, Comprimento e
              Peso — dados essenciais para o cálculo de frete.
            </p>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              SkuPlataformas.tsx
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Página reservada para futura funcionalidade de gestão de SKU por
              plataforma de venda. <strong>Ainda não implementada</strong> —
              exibe apenas uma tela vazia no momento.
            </p>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* LEADS */}
          {/* ═══════════════════════════════════════════════ */}
          <section
            id="leads"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              👥 Leads
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Página de gestão de leads (Leads.tsx).{" "}
              <strong>Requer permissão 23</strong>. Um lead é um cliente
              potencial que demonstrou interesse (por PIX pendente ou carrinho
              abandonado) mas ainda não finalizou a compra. O objetivo desta
              tela é converter esses leads em pedidos reais.
            </p>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Abas de Filtro
            </h3>
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
              Ações por Lead
            </h3>
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
          <section
            id="configuracoes"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
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
          <section
            id="notificacoes"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              🔔 Notificações
            </h2>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
          <section
            id="hooks"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              🪝 Hooks Customizados
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Hooks são funções reutilizáveis do React que encapsulam lógica
              complexa e a disponibilizam para qualquer componente ou página com
              uma única linha de código. No ERP Zeelux existem 4 hooks próprios:
            </p>

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

            <CollapsibleSection title="useAuth — Detalhes de Implementação">
              <p className="text-sm mb-2">
                Implementado como um <strong>Context Provider</strong> — envolve
                todo o sistema e disponibiliza os dados do usuário logado para
                qualquer componente filho com uma única chamada:{" "}
                <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                  const {"{"} user, hasPermission, signOut {"}"} = useAuth()
                </code>
                .
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Inicialização</strong> — ao montar, verifica a sessão
                  ativa no Supabase Auth. Se houver sessão válida, busca o
                  perfil completo do usuário na view{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    usuarios_completos
                  </code>
                </li>
                <li>
                  <strong>Escuta de mudanças</strong> — monitora eventos de
                  autenticação (login, logout, expiração de token) via{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    onAuthStateChange
                  </code>{" "}
                  e atualiza o estado automaticamente
                </li>
                <li>
                  <strong>hasPermission(id)</strong> — verifica se o array{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    permissions
                  </code>{" "}
                  contém o ID solicitado. Uso:{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    {"if (hasPermission(50)) { // mostrar dashboard }"}
                  </code>
                </li>
                <li>
                  <strong>signOut()</strong> — faz logout e trata o caso de
                  sessão já expirada (
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    session_not_found
                  </code>
                  ) sem lançar erro
                </li>
                <li>
                  <strong>deleteUser(userId)</strong> — tenta excluir o usuário
                  por múltiplos métodos da API do Supabase para garantir remoção
                  completa tanto do Auth quanto do banco
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="useEmpresaColors — Detalhes de Implementação">
              <p className="text-sm mb-2">
                Responsável por aplicar a identidade visual da empresa em todo o
                sistema dinamicamente.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Busca do banco</strong> — ao montar, consulta o campo{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    cores_hsl
                  </code>{" "}
                  da tabela{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    empresas
                  </code>{" "}
                  para o{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    empresa_id
                  </code>{" "}
                  do usuário logado
                </li>
                <li>
                  <strong>Aplicação CSS</strong> — define variáveis CSS no
                  elemento{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    document.documentElement
                  </code>
                  , tornando-as disponíveis globalmente: --custom-50,
                  --custom-100, ..., --custom-950, --gradient-primary
                </li>
                <li>
                  <strong>Modo escuro</strong> — utiliza um{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    MutationObserver
                  </code>{" "}
                  para detectar quando a classe{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    dark
                  </code>{" "}
                  é adicionada/removida do{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    &lt;html&gt;
                  </code>{" "}
                  e reaplicar as cores corretas para cada modo
                </li>
                <li>
                  <strong>Fallback</strong> — se a empresa não tiver cores
                  configuradas, usa uma paleta padrão (azul) para que o sistema
                  não fique sem estilo
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="useIsMobile — Detalhes de Implementação">
              <p className="text-sm mb-2">
                Hook simples que monitora o tamanho da janela do navegador em
                tempo real.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Ponto de corte</strong> — a tela é considerada
                  "mobile" quando sua largura é menor que <strong>768px</strong>{" "}
                  (breakpoint{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    md
                  </code>{" "}
                  do Tailwind)
                </li>
                <li>
                  <strong>Media Query</strong> — usa{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    window.matchMedia("(max-width: 767px)")
                  </code>{" "}
                  para monitorar mudanças de tamanho sem precisar escutar o
                  evento{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    resize
                  </code>{" "}
                  diretamente
                </li>
                <li>
                  <strong>Uso típico</strong> — exibir componentes diferentes
                  para mobile e desktop:
                  <CodeBlock>{`const isMobile = useIsMobile();
return isMobile ? <MobileMenu /> : <DesktopSidebar />;`}</CodeBlock>
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="useToast — Detalhes de Implementação">
              <p className="text-sm mb-2">
                Sistema centralizado de mensagens temporárias (toasts) que
                aparecem no canto da tela. Baseado em estado global — qualquer
                componente pode disparar um toast sem precisar de props.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Limite</strong> — exibe no máximo{" "}
                  <strong>1 toast</strong> por vez (TOAST_LIMIT = 1). Se um novo
                  for disparado antes do anterior fechar, o anterior é
                  substituído
                </li>
                <li>
                  <strong>Ciclo de vida</strong> — cada toast passa pelos
                  estados: adicionado → visível → removido. A remoção acontece
                  automaticamente após o tempo definido ou ao fechar manualmente
                </li>
                <li>
                  <strong>Uso</strong>:
                  <CodeBlock>{`const { toast } = useToast();
toast({
  title: "Pedido salvo!",
  description: "O pedido #123 foi atualizado.",
  variant: "default", // ou "destructive" para erros
});`}</CodeBlock>
                </li>
                <li>
                  <strong>Integração com Sonner</strong> — o{" "}
                  <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                    Toaster
                  </code>{" "}
                  do shadcn/ui é montado globalmente no App.tsx para renderizar
                  os toasts na tela
                </li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* SUPABASE */}
          {/* ═══════════════════════════════════════════════ */}
          <section
            id="supabase"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              🗄️ Supabase & Banco de Dados
            </h2>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
                  "Catálogo de produtos cadastrados",
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
                  "Encontra na fila de logística o pedido correto para aquele código de barras. Ordena por: urgente primeiro → mais antigo → menos itens → maior quantidade do mesmo produto",
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
          <section
            id="edge-functions"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              ⚡ Edge Functions (Deno)
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Edge Functions são pequenos programas que rodam na nuvem (no
              servidor do Supabase) em resposta a eventos externos ou chamadas
              do sistema. São escritas em Deno (runtime moderno de
              TypeScript/JavaScript) e executadas automaticamente sem
              necessidade de servidor próprio. O ERP Zeelux possui 7 Edge
              Functions divididas em dois grupos:
              <strong> 3 que recebem eventos da Yampi</strong> (webhooks) e{" "}
              <strong>4 chamadas pelo próprio frontend</strong> (integrações com
              Melhor Envio e Mercado Livre).
            </p>

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

            <CollapsibleSection title="buscar_saldo_melhor_envio — Verificação de Saldo">
              <p className="text-sm">
                Consulta o saldo disponível na conta do Melhor Envio da empresa.
                É chamada antes de qualquer geração de etiqueta para verificar
                se há crédito suficiente (mínimo exigido: R$50). Usada em três
                locais:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                <li>
                  <strong>Logística</strong> — verificada automaticamente ao
                  iniciar a bipação de cada pedido
                </li>
                <li>
                  <strong>Comercial</strong> — verificada antes do "Envio
                  Rápido" em lote para garantir que há saldo para todos os
                  pedidos selecionados
                </li>
                <li>
                  <strong>Pedido</strong> — verificada ao clicar em "ENVIAR O
                  MAIS BARATO"
                </li>
              </ul>
              <CodeBlock>{`// Request
POST /functions/v1/buscar_saldo_melhor_envio
{ "empresa_id": "uuid-da-empresa" }

// Response
{ "saldo": 127.50 }  // ou erro se a conta não estiver configurada`}</CodeBlock>
            </CollapsibleSection>

            <CollapsibleSection title="adic-carrinho-melhorenvio + processar_etiqueta_em_envio_de_pedido — Fluxo de Geração de Etiqueta">
              <p className="text-sm">
                Estas duas funções trabalham juntas para gerar uma etiqueta
                completa no Melhor Envio. São chamadas em sequência:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm mt-2">
                <li>
                  <strong>adic-carrinho-melhorenvio</strong> — recebe o ID da
                  opção de frete escolhida na cotação e adiciona ao "carrinho"
                  do Melhor Envio (passo obrigatório pela API deles antes de
                  gerar a etiqueta). Retorna o ID do pedido criado no Melhor
                  Envio
                </li>
                <li>
                  <strong>processar_etiqueta_em_envio_de_pedido</strong> —
                  recebe o ID do pedido criado no passo anterior, finaliza o
                  pagamento da etiqueta e retorna a URL do PDF. Também atualiza
                  o pedido no banco com o link da etiqueta e muda o status para
                  ENVIADO automaticamente
                </li>
              </ol>
              <CodeBlock>{`// Fluxo completo:
1. POST adic-carrinho-melhorenvio
   { "service_id": 1, "remetente": {...}, "destinatario": {...}, "volumes": [...] }
   → { "pedido_id": 123456 }

2. POST processar_etiqueta_em_envio_de_pedido
   { "pedido_id_melhor_envio": 123456, "pedido_id": "uuid-do-pedido" }
   → { "url_etiqueta": "https://melhorenvio.com.br/..." }`}</CodeBlock>
            </CollapsibleSection>

            <CollapsibleSection title="processar-etiqueta-melhorenvio — Download do PDF da Etiqueta">
              <p className="text-sm">
                Função complementar usada especificamente na tela de{" "}
                <strong>Pedido</strong> para obter o arquivo PDF de uma etiqueta
                já gerada. Diferente da função anterior, esta não gera uma nova
                etiqueta — ela busca e processa o PDF de uma etiqueta existente
                no Melhor Envio, convertendo-o de Base64 para um arquivo binário
                que pode ser aberto diretamente no navegador para impressão.
              </p>
            </CollapsibleSection>

            <CollapsibleSection title="gerar-etiqueta-ml — Etiqueta do Mercado Livre">
              <p className="text-sm">
                Gera a etiqueta de envio diretamente pelo sistema do Mercado
                Livre (não pelo Melhor Envio). Usada exclusivamente quando o
                pedido veio da plataforma Mercado Livre e possui um código de
                envio do ML (campo <code>shipping_id</code>). Retorna o PDF da
                etiqueta no formato do Mercado Livre para impressão. Disponível
                nos botões "Etiqueta ML" na Logística e no Pedido.
              </p>
              <CodeBlock>{`// Request
POST /functions/v1/gerar-etiqueta-ml
{ "shipping_id": "123456789", "empresa_id": "uuid-da-empresa" }

// Response: PDF binário da etiqueta do Mercado Livre`}</CodeBlock>
            </CollapsibleSection>
          </section>

          {/* ═══════════════════════════════════════════════ */}
          {/* WEBHOOKS */}
          {/* ═══════════════════════════════════════════════ */}
          <section
            id="webhooks"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
          <section
            id="temas"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              🎨 Tema & Cores Dinâmicas
            </h2>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
          <section
            id="tipos"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
              📝 Tipos & Interfaces
            </h2>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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

            <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-[hsl(var(--custom-400))] before:rounded-full">
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
          <section
            id="paginas-publicas"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]">
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

          {/* ─── Dashboard Comercial ─── */}
          <section
            id="dashboard-comercial"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))] flex items-center gap-2">
              <BarChart2 className="w-6 h-6 text-[hsl(var(--custom-500))]" />
              Dashboard Comercial
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Painel de controle exclusivo para a equipe comercial, acessível em{" "}
              <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                /dashboard-comercial
              </code>
              . Utiliza{" "}
              <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                ComercialSidebar
              </code>{" "}
              como navegação lateral e exibe métricas avançadas de vendas,
              leads, conversão e upsell — todas calculadas via RPCs no Supabase.
            </p>

            <CollapsibleSection
              title="Tipos de Dados (TypeScript)"
              defaultOpen={false}
            >
              <DocTable
                headers={["Tipo", "Campos Principais", "Descrição"]}
                rows={[
                  [
                    "PixMetricsRow",
                    "total_periodo, total_hoje, taxa_conversao_periodo, valor_total_periodo, ticket_medio_periodo",
                    "Métricas de leads de PIX por tipo de lead",
                  ],
                  [
                    "TypeBotMetricsRow",
                    "tipo_de_lead_nome, id_type, total_hoje, total_30_dias, taxa_conversao_periodo",
                    "Métricas de funil do TypeBot por categoria",
                  ],
                  [
                    "PixDailyRow",
                    "dia, total_entradas, total_vendidos, valor_total",
                    "Entradas e conversões diárias de PIX",
                  ],
                  [
                    "PixConvertedByResponsavelRow",
                    "responsavel_nome, total_convertidos, valor_total_convertido, ticket_medio_convertido",
                    "Conversões de PIX por vendedora",
                  ],
                  [
                    "PixRecuperacaoYampiRow",
                    "total_leads, total_recuperados, taxa_recuperacao_pct, valor_total_recuperado",
                    "Taxa de recuperação de carrinho Yampi via PIX",
                  ],
                  [
                    "YampiUpsellMetricsRow",
                    "pedidos_com_inclusao_itens, taxa_inclusao_itens_pct, aumento_ticket_medio_pct, faturamento_total_yampi",
                    "Upsell no checkout Yampi — comparativo de tickets",
                  ],
                  [
                    "YampiUpsellIncrementoRow",
                    "pedidos_com_incremento, taxa_incremento_pct, faturamento_com_upsell, pedidos_sem_alteracao",
                    "Incremento de pedidos por upsell/edição manual",
                  ],
                  [
                    "EntradaValoresUpsellMetricsRow",
                    "total_upsells, faturamento_acrescido, ticket_medio_antes, ticket_medio_depois",
                    "Métricas de acréscimo de valor por upsell via entrada_valores",
                  ],
                  [
                    "TopProdutosUpsellRow",
                    "produto_nome, total_inclusoes, quantidade_total, valor_total",
                    "Top produtos adicionados via upsell",
                  ],
                  [
                    "ConversaoLeadsPorResponsavelRow",
                    "responsavel_nome, total_leads, taxa_conversao_pct, valor_total_convertido",
                    "Conversão de leads por vendedora",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Gráficos (Recharts)" defaultOpen={false}>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                O dashboard utiliza os seguintes componentes do{" "}
                <strong>Recharts</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>AreaChart + Area</strong> — evolução temporal de
                  entradas/vendas de PIX
                </li>
                <li>
                  <strong>LineChart</strong> — linhas comparativas entre dois
                  períodos
                </li>
                <li>
                  <strong>BarChart + Bar</strong> — comparativos de conversão
                  por responsável
                </li>
                <li>
                  <strong>PieChart + Pie + Cell</strong> — distribuição de leads
                  por tipo
                </li>
                <li>
                  <strong>CartesianGrid, XAxis, YAxis, Tooltip, Legend</strong>{" "}
                  — elementos padrão
                </li>
                <li>
                  <strong>ResponsiveContainer</strong> — todos os gráficos usam
                  100% de largura
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection
              title="Navegação por Período"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                O dashboard tem navegação entre períodos usando{" "}
                <strong>date-fns</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <code>startOfMonth</code> + <code>subMonths</code> — navegar
                  para meses anteriores
                </li>
                <li>
                  <code>format(date, "MMMM yyyy", {"{ locale: ptBR }"})</code> —
                  título do período exibido
                </li>
                <li>
                  <code>isWithinInterval</code> / <code>isSameDay</code> —
                  filtros de intervalo em gráficos diários
                </li>
                <li>
                  Botões de ChevronLeft/ChevronRight para avançar e recuar
                </li>
                <li>
                  Popover com calendário personalizado para seleção de data
                  customizada
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection
              title="RPCs Supabase Utilizadas"
              defaultOpen={false}
            >
              <DocTable
                headers={["RPC", "Retorna", "Arquivo de Migração"]}
                rows={[
                  [
                    "comercial_pix_leads_metrics",
                    "PixMetricsRow[]",
                    "20260307000001",
                  ],
                  [
                    "comercial_typebot_leads_metrics",
                    "TypeBotMetricsRow[]",
                    "20260313000005",
                  ],
                  ["comercial_pix_por_dia", "PixDailyRow[]", "20260307000001"],
                  [
                    "comercial_carrinho_convertidos_por_responsavel",
                    "PixConvertedByResponsavelRow[]",
                    "20260307000003",
                  ],
                  [
                    "comercial_get_recuperacao_pix_yampi",
                    "PixRecuperacaoYampiRow",
                    "20260324000001",
                  ],
                  [
                    "comercial_yampi_upsell_metrics",
                    "YampiUpsellMetricsRow",
                    "20260307000002",
                  ],
                  [
                    "comercial_yampi_upsell_incremento",
                    "YampiUpsellIncrementoRow",
                    "20260312000002",
                  ],
                  [
                    "comercial_entrada_valores_upsell_metrics",
                    "EntradaValoresUpsellMetricsRow",
                    "20260313000002",
                  ],
                  [
                    "comercial_top_produtos_upsell",
                    "TopProdutosUpsellRow[]",
                    "20260316000001",
                  ],
                  [
                    "comercial_conversao_leads_por_responsavel",
                    "ConversaoLeadsPorResponsavelRow[]",
                    "20260307000003",
                  ],
                  [
                    "comercial_get_metricas_pix_convertidos",
                    "objeto com resumo de conversão",
                    "20260323000005",
                  ],
                ]}
              />
            </CollapsibleSection>
          </section>

          {/* ─── Histórico de Movimentações ─── */}
          <section
            id="historico"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))] flex items-center gap-2">
              <History className="w-6 h-6 text-[hsl(var(--custom-500))]" />
              Histórico de Movimentações
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Sistema de auditoria que registra todas as alterações feitas em
              pedidos. O módulo é composto pela biblioteca{" "}
              <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                src/lib/historicoMovimentacoes.ts
              </code>{" "}
              e pela página{" "}
              <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                src/pages/HistoricoMovimentacoes.tsx
              </code>
              .
            </p>

            <CollapsibleSection
              title="Interface HistoricoMovimentacao"
              defaultOpen={true}
            >
              <CodeBlock>{`interface HistoricoMovimentacao {
  id: number;
  created_at: string;
  alteracao: string;        // Descrição da alteração (ex: "Status alterado para Enviado")
  user_id: string | null;
  pedido_id: string | null;
  usuario?: {               // Join com tabela de usuários
    nome: string;
    email: string;
    img_url?: string;
  };
  pedido?: {                // Join com tabela de pedidos
    id_externo: string;     // ID visível ao usuário (ex: "Y-1234")
  };
}`}</CodeBlock>
            </CollapsibleSection>

            <CollapsibleSection
              title="registrarHistoricoMovimentacao()"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Insere um registro na tabela{" "}
                <code>historico_movimentacoes</code>. Se o <code>userId</code>
                não for passado, busca o usuário logado via{" "}
                <code>supabase.auth.getUser()</code>.
              </p>
              <CodeBlock>{`// Uso básico (userId inferido automaticamente)
await registrarHistoricoMovimentacao(
  pedidoId,
  "Status alterado para Enviado"
);

// Uso com userId explícito
await registrarHistoricoMovimentacao(
  pedidoId,
  "Endereço corrigido pelo suporte",
  "uuid-do-usuario"
);

// Retorna { success: true } ou { success: false, error }`}</CodeBlock>
            </CollapsibleSection>

            <CollapsibleSection
              title="buscarHistoricoMovimentacoes()"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Consulta o histórico com filtros opcionais e join com
                usuário/pedido.
              </p>
              <CodeBlock>{`const { data, error } = await buscarHistoricoMovimentacoes({
  pedidoId: "uuid-do-pedido",   // Filtrar por pedido
  userId: "uuid-do-usuario",    // Filtrar por usuário
  dataInicio: "2024-01-01",     // ISO 8601
  dataFim: "2024-12-31",        // ISO 8601
  limit: 50,                    // Paginação
  offset: 0,
});`}</CodeBlock>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Retorna{" "}
                <code>{"{ data: HistoricoMovimentacao[], error }"}</code>. Os
                campos <code>usuario</code> e <code>pedido</code> são populados
                via select aninhado do Supabase.
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="Página HistoricoMovimentacoes.tsx"
              defaultOpen={false}
            >
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  Carrega os 100 registros mais recentes ao montar o componente
                </li>
                <li>
                  Busca client-side por: texto da alteração, nome do usuário,
                  e-mail, ID externo do pedido
                </li>
                <li>
                  Exibe Avatar com foto do usuário (fallback para iniciais)
                </li>
                <li>
                  Data formatada com <code>date-fns ptBR</code>
                </li>
                <li>
                  Botão "Atualizar" com ícone <code>RefreshCw</code> recarrega
                  os dados
                </li>
                <li>Skeleton loading durante o carregamento inicial</li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ─── Web Push (PWA) ─── */}
          <section
            id="push-notifications"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))] flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-green-500" />
              Web Push — PWA
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              O sistema suporta <strong>Web Push Notifications</strong> via a
              API nativa do browser. A stack envolve Service Worker (
              <code>public/sw.js</code>), o hook{" "}
              <code>usePushNotifications</code>, a tabela{" "}
              <code>push_subscriptions</code> e a Edge Function{" "}
              <code>send-push-notification</code>.
            </p>

            <CollapsibleSection
              title="Fluxo Completo de Subscrição"
              defaultOpen={true}
            >
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  Usuário clica em "Ativar notificações" → chama{" "}
                  <code>subscribe()</code>
                </li>
                <li>
                  Hook verifica suporte a <code>serviceWorker</code> +{" "}
                  <code>PushManager</code> no browser
                </li>
                <li>
                  Verifica se <code>VITE_VAPID_PUBLIC_KEY</code> está definida
                </li>
                <li>
                  Busca <code>userId</code> via{" "}
                  <code>supabase.auth.getSession()</code>
                </li>
                <li>
                  Solicita permissão ao browser:{" "}
                  <code>Notification.requestPermission()</code>
                </li>
                <li>
                  Registra o Service Worker (<code>/sw.js</code>) via{" "}
                  <code>navigator.serviceWorker.register</code>
                </li>
                <li>
                  Cria a subscription via{" "}
                  <code>registration.pushManager.subscribe()</code> com a VAPID
                  key
                </li>
                <li>
                  Salva <code>endpoint</code>, <code>p256dh</code> e{" "}
                  <code>auth</code> na tabela <code>push_subscriptions</code>{" "}
                  (upsert por <code>user_id</code>)
                </li>
              </ol>
            </CollapsibleSection>

            <CollapsibleSection
              title="PushStatus — Estados do Hook"
              defaultOpen={false}
            >
              <DocTable
                headers={["Estado", "Significado"]}
                rows={[
                  ["idle", "Estado inicial — nenhuma ação tomada"],
                  ["requesting", "Aguardando permissão do browser"],
                  ["subscribed", "Usuário inscrito com sucesso"],
                  ["denied", "Usuário negou a permissão"],
                  ["unsupported", "Browser não suporta Web Push"],
                  [
                    "error",
                    "Erro inesperado (VAPID ausente, usuário não autenticado, etc.)",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="Service Worker (public/sw.js)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                O SW é minimalista e lida apenas com push e clique em
                notificações:
              </p>
              <CodeBlock>{`// Eventos tratados pelo Service Worker
install  → skipWaiting()            // Ativa imediatamente
activate → clients.claim()          // Assume controle de todas as abas

push     → showNotification(title, {
  body, icon, badge, tag,
  renotify: true,
  requireInteraction: true,         // Notif persiste até o usuário interagir
  vibrate: [200, 100, 200],
  actions: [{ action: "open", title: "Abrir" }],
  data: { url }                     // URL para abrir ao clicar
})

notificationclick → fecha a notif; navega/abre a URL`}</CodeBlock>
            </CollapsibleSection>

            <CollapsibleSection
              title="Tabela push_subscriptions"
              defaultOpen={false}
            >
              <DocTable
                headers={["Coluna", "Tipo", "Descrição"]}
                rows={[
                  [
                    "user_id",
                    "uuid (FK)",
                    "Usuário dono da subscription (unique — upsert)",
                  ],
                  [
                    "endpoint",
                    "text",
                    "URL única da subscription no servidor push",
                  ],
                  ["p256dh", "text", "Chave pública P-256 para criptografia"],
                  ["auth", "text", "Segredo de autenticação da subscription"],
                ]}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                A migração{" "}
                <code>20260304000001_create_push_subscriptions.sql</code> cria a
                tabela. A migração <code>20260304000002_push_trigger.sql</code>{" "}
                cria trigger para notificar ao inserir pedidos.
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="Variável de Ambiente VAPID"
              defaultOpen={false}
            >
              <CodeBlock>{`# .env.local
VITE_VAPID_PUBLIC_KEY=BMxxxxxx...  # Chave pública VAPID (base64 URL-safe)

# Gerar par de chaves VAPID:
npx web-push generate-vapid-keys`}</CodeBlock>
            </CollapsibleSection>
          </section>

          {/* ─── Tipos de Lead ─── */}
          <section
            id="tipos-lead"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))] flex items-center gap-2">
              <Tags className="w-6 h-6 text-orange-500" />
              Tipos de Lead
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Página de gerenciamento das categorias de lead usadas no módulo
              Comercial. Acessível em{" "}
              <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                /tipos-de-lead
              </code>
              , usa o <code>ComercialSidebar</code>. Os tipos são armazenados na
              tabela <code>tipo_de_lead</code>.
            </p>

            <CollapsibleSection title="Tipo TipoLead" defaultOpen={false}>
              <CodeBlock>{`type TipoLead = {
  id: number;
  nome: string;             // Nome exibido na UI e nos filtros do Dashboard Comercial
  img_url: string | null;   // Foto/ícone da categoria (salva no Supabase Storage)
  id_type: number | null;   // ID do TypeBot associado (null = lead manual)
};`}</CodeBlock>
            </CollapsibleSection>

            <CollapsibleSection
              title="Funcionalidades da Página"
              defaultOpen={false}
            >
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Criar tipo</strong> — formulário com nome, imagem
                  (upload para Storage) e toggle TypeBot
                </li>
                <li>
                  <strong>Toggle TypeBot</strong> — quando ativado, habilita
                  campo <code>id_type</code> para mapear o funil do bot
                </li>
                <li>
                  <strong>Upload de imagem</strong> — via{" "}
                  <code>{"<input type='file'>"}</code> com preview, enviada ao
                  Supabase Storage
                </li>
                <li>
                  <strong>Listar tipos</strong> — query na tabela{" "}
                  <code>tipo_de_lead</code> ordenada por <code>id</code>
                </li>
                <li>
                  <strong>Deletar tipo</strong> — com confirmação visual (badge
                  de loading por item)
                </li>
                <li>
                  Funções RPC usadas: <code>create_tipo_lead</code>,{" "}
                  <code>delete_tipo_lead</code> (migrations 20260313000003/004)
                </li>
              </ul>
            </CollapsibleSection>
          </section>

          {/* ─── Componentes Reutilizáveis ─── */}
          <section
            id="componentes"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))] flex items-center gap-2">
              <Component className="w-6 h-6 text-[hsl(var(--custom-500))]" />
              Componentes Reutilizáveis
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Todos os componentes customizados estão em{" "}
              <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                src/components/
              </code>
              . Abaixo, um mapa de cada subpasta e seus componentes.
            </p>

            <CollapsibleSection
              title="Layout (src/components/layout/)"
              defaultOpen={true}
            >
              <DocTable
                headers={["Componente", "Função"]}
                rows={[
                  [
                    "AppLayout.tsx",
                    "Shell principal — Header + sidebar + área de conteúdo + PageTransition",
                  ],
                  [
                    "AppHeader.tsx",
                    "Barra superior — logo, busca global (SearchPanel), notificações, menu de usuário",
                  ],
                  [
                    "AppNavigation.tsx",
                    "Sidebar principal — itens de navegação, badge de notificações, collapse em mobile",
                  ],
                  [
                    "ComercialSidebar.tsx",
                    "Sidebar do módulo Comercial — links específicos do módulo",
                  ],
                  ["LogisticaSidebar.tsx", "Sidebar do módulo Logística"],
                  ["EstoqueSidebar.tsx", "Sidebar do módulo Estoque"],
                  [
                    "SearchPanel.tsx",
                    "Painel de busca global com atalho de teclado — busca pedidos, páginas, produtos",
                  ],
                  [
                    "PageTransition.tsx",
                    "Wrapper de animação de transição entre páginas (framer-motion ou CSS)",
                  ],
                  [
                    "ProtectedRoute.tsx",
                    "HOC que redireciona para /auth se usuário não estiver autenticado",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="Orders (src/components/orders/)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Componentes do quadro Kanban e cards de pedido:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>KanbanBoard</strong> — quadro de colunas drag-and-drop
                  de status de pedidos
                </li>
                <li>
                  <strong>KanbanCard</strong> — card individual de pedido no
                  Kanban (usado na página Design.tsx para protótipo)
                </li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection
              title="Shipping (src/components/shipping/)"
              defaultOpen={false}
            >
              <DocTable
                headers={["Componente", "Função"]}
                rows={[
                  [
                    "CotacaoFreteModal.tsx",
                    "Modal de cotação de frete via Melhor Envio — exibe opções com preço e prazo",
                  ],
                  [
                    "EmbalagensManager.tsx",
                    "Gerenciador de embalagens cadastradas — listar, criar, editar, excluir",
                  ],
                  [
                    "EmballagemModal.tsx",
                    "Modal de criação/edição de embalagem (nome, dimensões, peso)",
                  ],
                  [
                    "RemetentesManager.tsx",
                    "Gerenciador de endereços de remetente para envios",
                  ],
                  [
                    "RemetenteModal.tsx",
                    "Modal de criação/edição de remetente",
                  ],
                  [
                    "types.ts",
                    "Tipos TypeScript compartilhados do módulo de envio",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="Modals (src/components/modals/)"
              defaultOpen={false}
            >
              <DocTable
                headers={["Componente", "Função"]}
                rows={[
                  [
                    "ClientEditModal.tsx",
                    "Modal de edição de dados do cliente (nome, telefone, endereço)",
                  ],
                  [
                    "EditSelectModal.tsx",
                    "Modal genérico de edição de campo via <select> — usado para status, plataforma, etc.",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="Dashboard (src/components/dashboard/)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Gráficos e cards de KPI usados nas páginas de Dashboard
                principal. Incluem componentes de métricas de pedidos, vendas
                por plataforma, top produtos e comparativos de período — todos
                usando Recharts.
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="Notifications (src/components/notifications/)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Componentes de exibição e centro de notificações em tempo real,
                conectados ao <code>NotificacoesContext</code> via Supabase
                Realtime.
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="UI (src/components/ui/)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Todos os primitivos de UI são gerados pelo{" "}
                <strong>shadcn/ui</strong>. Principais componentes disponíveis:
              </p>
              <div className="grid grid-cols-2 gap-1 text-sm text-gray-700 dark:text-gray-300">
                {[
                  "Button",
                  "Input",
                  "Label",
                  "Card",
                  "Badge",
                  "Avatar",
                  "Dialog",
                  "Sheet",
                  "Popover",
                  "Tooltip",
                  "Select",
                  "Switch",
                  "Checkbox",
                  "Table",
                  "Skeleton",
                  "Separator",
                  "ScrollArea",
                  "Tabs",
                  "Progress",
                ].map((c) => (
                  <code
                    key={c}
                    className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs"
                  >
                    {c}
                  </code>
                ))}
              </div>
            </CollapsibleSection>
          </section>

          {/* ─── Rotas do Sistema ─── */}
          <section
            id="rotas"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))] flex items-center gap-2">
              <Route className="w-6 h-6 text-teal-500" />
              Rotas do Sistema
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Todas as rotas são declaradas em{" "}
              <code className="bg-[hsl(var(--custom-100))] dark:bg-[hsl(var(--custom-800))]/50 px-1.5 py-0.5 rounded border border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40 text-[hsl(var(--custom-700))] dark:text-[hsl(var(--custom-300))] text-xs font-mono">
                src/App.tsx
              </code>{" "}
              usando React Router DOM v6. Rotas protegidas são encapsuladas pelo
              componente <code>ProtectedRoute</code>.
            </p>

            <CollapsibleSection
              title="Rotas Protegidas (requerem login)"
              defaultOpen={true}
            >
              <DocTable
                headers={["Rota", "Componente / Página", "Descrição"]}
                rows={[
                  [
                    "/",
                    "Index.tsx",
                    "Página inicial — redireciona para /dashboard",
                  ],
                  [
                    "/dashboard",
                    "Dashboard.tsx",
                    "Dashboard principal de pedidos e métricas",
                  ],
                  [
                    "/dashboard-comercial",
                    "DashboardComercial.tsx",
                    "Dashboard do módulo Comercial",
                  ],
                  [
                    "/pedido/:id",
                    "Pedido.tsx",
                    "Detalhe de um pedido específico",
                  ],
                  [
                    "/logistica",
                    "Logistica.tsx",
                    "Módulo de logística e envio de pedidos",
                  ],
                  ["/estoque", "Estoque.tsx", "Gestão de estoque de produtos"],
                  [
                    "/producao",
                    "Producao.tsx",
                    "Fila de produção por faixa de prazo",
                  ],
                  ["/comercial", "Comercial.tsx", "Gestão de leads comerciais"],
                  [
                    "/contabilidade",
                    "Contabilidade.tsx",
                    "Relatórios financeiros e contabilidade",
                  ],
                  [
                    "/pedido-contabilidade/:id",
                    "PedidoContabilidade.tsx",
                    "Detalhe de pedido na visão contábil",
                  ],
                  [
                    "/pedidos-enviados",
                    "PedidosEnviados.tsx",
                    "Lista de pedidos já enviados",
                  ],
                  [
                    "/pedidos-cancelados",
                    "PedidosCancelados.tsx",
                    "Lista de pedidos cancelados",
                  ],
                  [
                    "/pedidos-retornados",
                    "PedidosRetornados.tsx",
                    "Lista de pedidos com retorno/devolução",
                  ],
                  ["/leads", "Leads.tsx", "Central de leads"],
                  [
                    "/tipos-de-lead",
                    "TiposDeLead.tsx",
                    "Gerenciamento de categorias de lead",
                  ],
                  [
                    "/sku-plataformas",
                    "SkuPlataformas.tsx",
                    "Mapeamento de SKUs entre plataformas",
                  ],
                  [
                    "/envio-por-etiqueta",
                    "EnvioPorEtiqueta.tsx",
                    "Envio de pedidos por etiqueta avulsa",
                  ],
                  [
                    "/lista-embalagens",
                    "ListaEmbalagens.tsx",
                    "Cadastro de embalagens",
                  ],
                  [
                    "/configuracoes",
                    "Configuracoes.tsx",
                    "Configurações do sistema e da empresa",
                  ],
                  [
                    "/historico-movimentacoes",
                    "HistoricoMovimentacoes.tsx",
                    "Histórico de auditoria de pedidos",
                  ],
                  [
                    "/novo-pedido",
                    "NovoPedido.tsx",
                    "Criação de pedido manual",
                  ],
                  [
                    "/design",
                    "Design.tsx",
                    "Sandbox do KanbanBoard (uso interno)",
                  ],
                  [
                    "/documentacao",
                    "Documentacao.tsx",
                    "Esta página de documentação (senha protegida)",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="Rotas Públicas (sem login)"
              defaultOpen={false}
            >
              <DocTable
                headers={["Rota", "Componente / Página", "Descrição"]}
                rows={[
                  ["/auth", "Auth.tsx", "Tela de login e cadastro"],
                  [
                    "/reset-password",
                    "ResetPassword.tsx",
                    "Redefinição de senha via link de e-mail",
                  ],
                  [
                    "/informacoes-entrega/:token",
                    "InformacoesEntrega.tsx",
                    "Formulário de dados do cliente (link único sem login)",
                  ],
                  ["/termos-servico", "TermosServico.tsx", "Termos de serviço"],
                  [
                    "/politica-privacidade",
                    "TermoPrivacidade.tsx",
                    "Política de privacidade (LGPD)",
                  ],
                  ["*", "NotFound.tsx", "Página 404 para rotas inexistentes"],
                ]}
              />
            </CollapsibleSection>
          </section>

          {/* ─── Deploy & Configuração ─── */}
          <section
            id="deploy"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-[hsl(var(--custom-100))] dark:border-white/[0.05] scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-4 border-b-2 border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))] flex items-center gap-2">
              <ServerCog className="w-6 h-6 text-gray-500" />
              Deploy & Configuração
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              O frontend é hospedado na <strong>Vercel</strong>. O backend é o
              <strong> Supabase</strong> (banco, auth, storage, edge functions).
            </p>

            <CollapsibleSection
              title="vercel.json — Configuração de Roteamento"
              defaultOpen={true}
            >
              <CodeBlock>{`{
  "rewrites": [
    // Garante que sw.js é servido diretamente (necessário para PWA)
    { "source": "/sw.js", "destination": "/sw.js" },
    // SPA fallback — todas as outras rotas retornam index.html
    { "source": "/(.*)", "destination": "/" }
  ]
}`}</CodeBlock>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Sem esse rewrite, a navegação direta para{" "}
                <code>/dashboard</code> retornaria 404 na Vercel.
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="Variáveis de Ambiente"
              defaultOpen={false}
            >
              <DocTable
                headers={["Variável", "Obrigatória", "Descrição"]}
                rows={[
                  [
                    "VITE_SUPABASE_URL",
                    "Sim",
                    "URL do projeto Supabase (ex: https://xxx.supabase.co)",
                  ],
                  [
                    "VITE_SUPABASE_ANON_KEY",
                    "Sim",
                    "Chave pública anon do Supabase (JWT)",
                  ],
                  [
                    "VITE_VAPID_PUBLIC_KEY",
                    "Sim (Push)",
                    "Chave pública VAPID para Web Push (base64 URL-safe)",
                  ],
                ]}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Em desenvolvimento, criar <code>.env.local</code> na raiz do
                projeto. Na Vercel, configurar em Settings → Environment
                Variables.
              </p>
            </CollapsibleSection>

            <CollapsibleSection
              title="Comandos de Desenvolvimento"
              defaultOpen={false}
            >
              <CodeBlock>{`# Instalar dependências
bun install

# Rodar em desenvolvimento (Vite HMR)
bun run dev

# Build de produção
bun run build

# Preview do build local
bun run preview

# Lint
bun run lint`}</CodeBlock>
            </CollapsibleSection>

            <CollapsibleSection
              title="Migrações do Banco (supabase/migrations/)"
              defaultOpen={false}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                As migrações são aplicadas via <code>supabase db push</code> ou
                automaticamente pelo Supabase CI/CD. Principais marcos:
              </p>
              <DocTable
                headers={["Migração", "O que criou/alterou"]}
                rows={[
                  [
                    "20250223000001",
                    "Tabela historico_movimentacoes (auditoria de pedidos)",
                  ],
                  [
                    "20250928000001",
                    "Tabelas de envio/shipping (embalagens, remetentes, etiquetas)",
                  ],
                  [
                    "20250930000100/200",
                    "Colunas embalagem_id e nome_variacao em produtos",
                  ],
                  [
                    "20251211000001/002",
                    "Tabela status_upsell + coluna em itens_pedido",
                  ],
                  ["20251226000001", "Tabela formas_pagamentos"],
                  [
                    "20260226000001",
                    "RPC producao_get_itens (fila de produção)",
                  ],
                  [
                    "20260304000001/002/003",
                    "Tabela push_subscriptions + trigger de notificação push",
                  ],
                  [
                    "20260305000001-004",
                    "Updates na RPC de produção (urgentes, Comercial)",
                  ],
                  [
                    "20260307000001-003",
                    "RPCs de métricas PIX para DashboardComercial",
                  ],
                  ["20260307000002", "RPC comercial_yampi_upsell_metrics"],
                  ["20260310000001-003", "Fixes urgentes + métricas WhatsApp"],
                  ["20260311000001/002", "Coluna pacote_disponivel em pedidos"],
                  [
                    "20260312000001-003",
                    "RPCs de custo comercial, upsell incremental e status up-sell",
                  ],
                  [
                    "20260313000001-005",
                    "Valor antigo em entrada_valores + RPCs de upsell + tipos de lead",
                  ],
                  [
                    "20260316000001-004",
                    "Top produtos upsell + fixes de faturamento",
                  ],
                  ["20260317000001", "Tabela pacotes"],
                  [
                    "20260323000001-005",
                    "Seção comparativo leads + fixes de frete/PIX + métricas PIX convertidos",
                  ],
                  ["20260324000001", "RPC comercial_get_recuperacao_pix_yampi"],
                  [
                    "20260417000001/002",
                    "Coluna retirada em pedidos + trigger para logística",
                  ],
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection
              title="Supabase Edge Functions — Deploy"
              defaultOpen={false}
            >
              <CodeBlock>{`# Deploy de uma função
supabase functions deploy nome-da-funcao

# Deploy de todas as funções
supabase functions deploy

# Variáveis de ambiente nas Edge Functions (Deno)
# Configurar em: Supabase Dashboard → Edge Functions → Secrets
# Ou via CLI:
supabase secrets set MINHA_VAR=valor`}</CodeBlock>
            </CollapsibleSection>
          </section>

          {/* ─── Footer ─── */}
          <footer className="mt-8 pt-6 border-t border-[hsl(var(--custom-200))] dark:border-[hsl(var(--custom-700))]/40">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[hsl(var(--custom-100))] dark:border-white/[0.05] p-6 text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-[hsl(var(--custom-500))] dark:text-[hsl(var(--custom-400))]">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  ERP Zeelux — Documentação Técnica
                </span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Última atualização:{" "}
                {new Date().toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  to="/termos-servico"
                  className="text-xs text-[hsl(var(--custom-600))] dark:text-[hsl(var(--custom-400))] hover:text-[hsl(var(--custom-700))] dark:hover:text-[hsl(var(--custom-300))] transition-colors"
                >
                  Termos de Serviço
                </Link>
                <span className="text-gray-300 dark:text-gray-600">·</span>
                <Link
                  to="/politica-privacidade"
                  className="text-xs text-[hsl(var(--custom-600))] dark:text-[hsl(var(--custom-400))] hover:text-[hsl(var(--custom-700))] dark:hover:text-[hsl(var(--custom-300))] transition-colors"
                >
                  Política de Privacidade
                </Link>
                <span className="text-gray-300 dark:text-gray-600">·</span>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-xs text-[hsl(var(--custom-600))] dark:text-[hsl(var(--custom-400))] hover:text-[hsl(var(--custom-700))] dark:hover:text-[hsl(var(--custom-300))] transition-colors"
                >
                  ↑ Voltar ao topo
                </button>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
