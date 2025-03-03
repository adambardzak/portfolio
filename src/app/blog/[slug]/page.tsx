"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Github, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { StyledSection } from "@/components/blog/StyledSection";
import { CodeBlock } from "@/components/blog/CodeBlock";
import { InfoBox } from "@/components/blog/InfoBox";
import { TextBlock } from "@/components/blog/TextBlock";
import { SubHeading } from "@/components/blog/SubHeading";
import { Highlight } from "@/components/blog/Highlight";

// Add proper typing for blog posts
type BlogPost = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: JSX.Element;
};

const blogPosts: Record<string, BlogPost> = {
  "nextjs-14-server-actions": {
    title: "Server Actions v Next.js 14",
    description:
      "Kompletní průvodce Server Actions - od základů až po pokročilé použití v produkčních aplikacích.",
    date: "2024-01-10",
    readTime: "15 min",
    category: "Development",
    image: "/blog/server-actions.png",
    content: (
      <>
        <StyledSection>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-6">
            Server Actions v Next.js 14
          </h2>
          <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Server Actions představují <Highlight>revoluční způsob</Highlight>{" "}
            práce se serverovým kódem přímo ve vašich komponentách. Přinášejí
            jednodušší a bezpečnější způsob manipulace s daty.
          </p>
        </StyledSection>

        {/* Key Features - simplified grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: "Progressive Enhancement",
              description:
                "Formuláře fungují i bez JavaScriptu, zajišťující lepší dostupnost",
            },
            {
              title: "Optimistic Updates",
              description:
                "Okamžitá odezva UI s automatickým rollback při chybě",
            },
            {
              title: "Type Safety",
              description:
                "Plná TypeScript podpora napříč client-server boundary",
            },
            {
              title: "Bundle Size",
              description: "Menší JS bundle díky odstranění API vrstvy",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white dark:bg-[#161616] rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-lg font-bold mb-2 text-text-light dark:text-text-dark">
                {feature.title}
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Implementace Server Actions
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Server Actions můžeme implementovat dvěma způsoby: jako samostatné
            funkce nebo přímo v komponentách. Každý přístup má své výhody.
          </p>

          <div className="space-y-12">
            <div>
              <SubHeading>Samostatné Server Action</SubHeading>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
                Samostatné Server Actions jsou ideální pro{" "}
                <Highlight>znovupoužitelnou business logiku</Highlight> a
                komplexnější operace:
              </p>
              <CodeBlock filename="app/actions.ts">
                {`'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const TodoSchema = z.object({
  title: z.string().min(1).max(100),
  completed: z.boolean().default(false),
})

export async function addTodo(formData: FormData) {
  const result = TodoSchema.safeParse({
    title: formData.get('title'),
    completed: formData.get('completed') === 'true',
  })

  if (!result.success) {
    return { error: 'Neplatná data' }
  }

  try {
    await prisma.todo.create({
      data: result.data,
    })
    
    revalidatePath('/todos')
    return { success: true }
  } catch (error) {
    return { error: 'Chyba při ukládání' }
  }
}`}
              </CodeBlock>
            </div>

            <div>
              <SubHeading>Server Action v komponentě</SubHeading>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
                Inline Server Actions jsou vhodné pro{" "}
                <Highlight>jednodušší operace</Highlight>
                specifické pro danou komponentu:
              </p>
              <CodeBlock filename="app/todos/page.tsx">
                {`export default function TodoList() {
    async function deleteTodo(id: string) {
      'use server'
      await prisma.todo.delete({ where: { id } })
      revalidatePath('/todos')
    }

    return (
      <form>
        {todos.map(todo => (
          <button
            key={todo.id}
            formAction={async () => {
              await deleteTodo(todo.id)
            }}
          >
            Smazat
          </button>
        ))}
      </form>
    )
  }`}
              </CodeBlock>
            </div>
          </div>
        </TextBlock>

        <TextBlock>
          <h2 className="font-monument text-3xl text-text-light dark:text-text-dark mb-8">
            Optimistické aktualizace
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8">
            Pro lepší UX můžeme implementovat optimistické aktualizace pomocí
            useOptimistic hooku. Tento přístup zajišťuje okamžitou odezvu UI s
            automatickým rollback při chybě.
          </p>

          <CodeBlock filename="app/todos/optimistic.tsx">
            {`'use client'

import { useOptimistic } from 'react'
import { addTodo } from './actions'

export function TodoForm() {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, newTodo]
  )

  async function action(formData: FormData) {
    const title = formData.get('title')
    
    // Optimistická aktualizace
    addOptimisticTodo({ 
      id: 'temp',
      title,
      completed: false 
    })
    
    // Skutečné uložení
    await addTodo(formData)
  }

  return (
    <>
      <form action={action}>
        <input name="title" />
        <button type="submit">Přidat</button>
      </form>

      <ul>
        {optimisticTodos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}`}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Error Handling
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Proper error handling je klíčový pro robustní aplikace. Server
            Actions nám umožňují elegantně zpracovávat chyby na obou stranách:
          </p>

          <CodeBlock filename="app/error-handling.tsx">
            {`'use client'

import { useFormState } from 'react-dom'

const initialState = { message: null, errors: {} }

function TodoForm() {
  const [state, formAction] = useFormState(addTodo, initialState)

  return (
    <form action={formAction}>
      <input name="title" />
      {state.errors?.title && (
        <div className="text-red-500">{state.errors.title}</div>
      )}
      <button type="submit">Přidat</button>
      {state.message && (
        <div className="text-green-500">{state.message}</div>
      )}
    </form>
  )
}`}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <InfoBox title="⚠️ Na co si dát pozor" color="amber">
            <ul className="mb-0 space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 flex-shrink-0" />
                <span>Vždy validujte vstupní data na serveru</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 flex-shrink-0" />
                <span>Implementujte proper error handling</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 flex-shrink-0" />
                <span>Používejte TypeScript pro type safety</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 flex-shrink-0" />
                <span>Nezapomeňte na rate limiting u kritických operací</span>
              </li>
            </ul>
          </InfoBox>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Závěr
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Server Actions představují významný krok vpřed v oblasti vývoje
              webových aplikací. Kombinují jednoduchost použití s výkonem a
              bezpečností. Díky integraci přímo do React komponent a podpoře pro
              optimistické aktualizace můžeme vytvářet rychlejší a uživatelsky
              příjemnější aplikace s méně kódem.
            </p>

            <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Pro další informace doporučuji prostudovat oficiální dokumentaci
              Next.js a experimentovat s různými use cases ve vašich projektech.
            </p>
          </div>
        </TextBlock>
      </>
    ),
  },
  "react-performance": {
    title: "Optimalizace výkonu React aplikací",
    description:
      "Praktické techniky pro zrychlení React aplikací - memo, useMemo, useCallback a další optimalizace.",
    date: "2024-01-05",
    readTime: "15 min",
    category: "Performance",
    image: "/blog/react.svg",
    content: (
      <>
        <StyledSection>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-6">
            Optimalizace výkonu React aplikací
          </h2>
          <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Výkon React aplikací je <Highlight>kritickým faktorem</Highlight>{" "}
            uživatelské zkušenosti. Podíváme se na praktické techniky, které vám
            pomohou vytvářet rychlejší aplikace.
          </p>
        </StyledSection>

        {/* Key Concepts Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: "Memoizace",
              description:
                "Prevence zbytečných překreslení komponent pomocí React.memo a hooks",
            },
            {
              title: "Code Splitting",
              description:
                "Rozdělení kódu na menší části pro rychlejší načítání",
            },
            {
              title: "Virtualizace",
              description: "Efektivní renderování velkých seznamů dat",
            },
            {
              title: "Bundle Optimization",
              description: "Minimalizace velikosti JavaScript bundle",
            },
          ].map((concept) => (
            <div
              key={concept.title}
              className="p-6 bg-white dark:bg-[#161616] rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-lg font-bold mb-2 text-text-light dark:text-text-dark">
                {concept.title}
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Memoizace komponent
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            <Highlight>React.memo</Highlight> je výkonný nástroj pro
            optimalizaci renderování komponent. Použijte ho pro komponenty,
            které se často překreslují se stejnými props.
          </p>

          <CodeBlock filename="components/ExpensiveComponent.tsx">
            {`const ExpensiveComponent = React.memo(({ data }) => {
  // Náročné výpočty nebo komplexní renderování
  const processedData = useMemo(() => {
    return data.map(item => complexCalculation(item))
  }, [data])

  return (
    <div>
      {processedData.map(item => (
        <ListItem key={item.id} {...item} />
      ))}
    </div>
  )
})`}
          </CodeBlock>

          <InfoBox title="💡 Kdy použít memo?" color="green">
            <ul className="mb-0 space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                <span>Pro komponenty v dlouhých seznamech</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                <span>Pro komponenty s náročnými výpočty</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                <span>Pro komponenty, které dostávají stejné props</span>
              </li>
            </ul>
          </InfoBox>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Optimalizace s useMemo a useCallback
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Hooks <Highlight>useMemo</Highlight> a{" "}
            <Highlight>useCallback</Highlight> pomáhají optimalizovat výkon
            cachováním hodnot a funkcí mezi rendery.
          </p>

          <CodeBlock filename="components/DataGrid.tsx">
            {`function DataGrid({ data, onSort }) {
  // Cachování náročného výpočtu
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => b.value - a.value)
  }, [data])

  // Stabilní reference na callback
  const handleSort = useCallback((column) => {
    onSort(column, sortedData)
  }, [onSort, sortedData])

  return (
    <div>
      {sortedData.map(item => (
        <Row key={item.id} data={item} onSort={handleSort} />
      ))}
    </div>
  )
}`}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Virtualizace seznamů
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Pro dlouhé seznamy použijte virtualizaci s react-window nebo
            react-virtualized:
          </p>

          <CodeBlock filename="components/DataGrid.tsx">
            {`import { FixedSizeList } from 'react-window'

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
)

const List = () => (
  <FixedSizeList
    height={400}
    width={600}
    itemCount={1000}
    itemSize={35}
  >
    {Row}
  </FixedSizeList>
)`}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Code Splitting
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Rozdělte váš kód na menší chunks pomocí React.lazy a Suspense:
          </p>

          <CodeBlock filename="components/HeavyComponent.tsx">
            {`const HeavyComponent = React.lazy(() => 
  import('./HeavyComponent')
)`}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Měření výkonu
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Používejte React DevTools Profiler pro měření výkonu vašich
            optimalizací:
          </p>
          <ul className="space-y-3 text-text-muted-light dark:text-text-muted-dark">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
              <span>Sledujte počet renderování</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
              <span>Měřte čas renderování</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
              <span>Identifikujte zbytečná překreslení</span>
            </li>
          </ul>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Závěr
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Optimalizace výkonu je kontinuální proces. Začněte měřením,
              identifikujte problematická místa a aplikujte vhodné optimalizace.
              Nezapomeňte, že předčasná optimalizace může vést ke složitějšímu
              kódu.
            </p>

            <ul className="space-y-3 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Sledujte počet renderování</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Měřte čas renderování</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Identifikujte zbytečná překreslení</span>
              </li>
            </ul>
          </div>
        </TextBlock>
      </>
    ),
  },

  "tailwind-best-practices": {
    title: "Tailwind CSS - Best Practices a Architektura",
    description:
      "Jak efektivně organizovat Tailwind CSS kód ve větších projektech a vyhnout se běžným chybám.",
    date: "2023-12-20",
    readTime: "10 min",
    category: "CSS",
    image: "/blog/tailwind.svg",
    content: (
      <>
        <StyledSection>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-6">
            Tailwind CSS - Best Practices a Architektura
          </h2>
          <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Tailwind CSS je <Highlight>mocný nástroj</Highlight> pro rychlý
            vývoj UI, ale ve větších projektech potřebujeme promyšlenou
            strukturu a organizaci.
          </p>
        </StyledSection>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: "Komponenty",
              description:
                "Vytváření znovupoužitelných abstrakcí pro časté UI prvky",
            },
            {
              title: "Pluginy",
              description: "Rozšíření funkcionalit pomocí vlastních pluginů",
            },
            {
              title: "Organizace",
              description: "Systematické uspořádání tříd a komponent",
            },
            {
              title: "Theming",
              description: "Flexibilní systém pro správu barev a stylů",
            },
          ].map((concept) => (
            <div
              key={concept.title}
              className="p-6 bg-white dark:bg-[#161616] rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-lg font-bold mb-2 text-text-light dark:text-text-dark">
                {concept.title}
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Komponenty a abstrakce
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Vytvářejte <Highlight>znovupoužitelné komponenty</Highlight> pro
            často používané prvky. Tím zajistíte konzistenci designu a snížíte
            duplicitu kódu.
          </p>

          <CodeBlock filename="components/Button.tsx">
            {`interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = ({ variant = 'primary', size = 'md', children }: ButtonProps) => {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  
  return (
    <button className={\`
      \${variants[variant]}
      \${sizes[size]}
      rounded-lg font-medium
      transition-colors duration-200
    \`}>
      {children}
    </button>
  )
}`}
          </CodeBlock>

          <InfoBox title="💡 Tip pro komponenty" color="green">
            <ul className="mb-0 space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                <span>Používejte TypeScript pro lepší typovou kontrolu</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                <span>Vytvářejte flexibilní API pomocí props</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                <span>Dokumentujte varianty a použití</span>
              </li>
            </ul>
          </InfoBox>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Vlastní plugin systém
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Tailwind pluginy umožňují vytvářet vlastní utility třídy a
            komponenty. Jsou ideální pro{" "}
            <Highlight>specifické potřeby projektu</Highlight>.
          </p>

          <CodeBlock filename="tailwind.config.js">
            {`const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... další odstíny
        }
      }
    }
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.xl'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.lg'),
          '&:hover': {
            boxShadow: theme('boxShadow.xl')
          }
        },
        '.input': {
          borderWidth: '1px',
          borderColor: theme('colors.gray.200'),
          borderRadius: theme('borderRadius.lg'),
          padding: \`\${theme('spacing.2')} \${theme('spacing.4')}\`,
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.blue.500'),
            boxShadow: \`0 0 0 2px \${theme('colors.blue.100')}\`
          }
        }
      })
    })
  ]
}`}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Organizace tříd
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Konzistentní <Highlight>organizace CSS tříd</Highlight> je klíčová
            pro čitelnost a udržitelnost kódu. Používejte logické pořadí a
            skupiny tříd.
          </p>

          <CodeBlock filename="components/Card.tsx">
            {`// ❌ Špatně - chaotické pořadí tříd
const Card = ({ children }) => (
  <div className="p-4 shadow-lg hover:shadow-xl text-gray-800 dark:text-gray-200 rounded-xl flex bg-white dark:bg-gray-800 items-center gap-4">
    {children}
  </div>
)

// ✅ Dobře - logicky uspořádané třídy
const Card = ({ children }) => (
  <div className={clsx(
    // Layout
    'flex items-center gap-4',
    // Spacing
    'p-4',
    // Visual
    'bg-white dark:bg-gray-800',
    'rounded-xl',
    'shadow-lg hover:shadow-xl',
    // Typography
    'text-gray-800 dark:text-gray-200'
  )}>
    {children}
  </div>
)`}
          </CodeBlock>

          <InfoBox title="🎯 Doporučené pořadí tříd" color="blue">
            <ul className="mb-0 space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Layout (flex, grid, position)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Spacing (margin, padding)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Sizing (width, height)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Visual (colors, borders, shadows)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Typography (text, font)</span>
              </li>
            </ul>
          </InfoBox>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Responsivní design
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Tailwind používá <Highlight>mobile-first přístup</Highlight>.
            Začněte mobilním designem a postupně přidávejte breakpointy pro
            větší obrazovky.
          </p>

          <CodeBlock filename="components/Layout.tsx">
            {`export const Layout = ({ children }) => (
  <div className={clsx(
    // Mobile - výchozí stav
    'grid gap-4 p-4',
    'grid-cols-1',
    
    // Tablet (md)
    'md:grid-cols-2 md:gap-6 md:p-6',
    
    // Desktop (lg)
    'lg:grid-cols-3 lg:gap-8 lg:p-8',
    
    // Extra large (xl)
    'xl:grid-cols-4'
  )}>
    {children}
  </div>
)`}
          </CodeBlock>

          <InfoBox title="💡 Responsivní best practices" color="green">
            <ul className="mb-0 space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                <span>Vždy začínejte mobilním designem</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                <span>Používejte standardní breakpointy konzistentně</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                <span>Testujte na různých zařízeních</span>
              </li>
            </ul>
          </InfoBox>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Dark Mode a Theming
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Implementujte{" "}
            <Highlight>robustní systém pro správu témat</Highlight> a dark mode.
            Využijte CSS proměnné pro flexibilní přizpůsobení barev.
          </p>

          <CodeBlock filename="tailwind.config.js">
            {`const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        // Použití CSS proměnných pro theming
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          // ...až po 900
        },
        // Sémantické barvy
        text: {
          light: 'var(--text-light)',
          dark: 'var(--text-dark)',
          muted: {
            light: 'var(--text-muted-light)',
            dark: 'var(--text-muted-dark)',
          }
        },
        // Systémové barvy
        background: {
          light: 'var(--background-light)',
          dark: 'var(--background-dark)',
        }
      }
    }
  }
}`}
          </CodeBlock>

          <CodeBlock filename="styles/themes.css">
            {`:root {
  /* Light theme */
  --primary-50: #f0f9ff;
  --primary-100: #e0f2fe;
  --text-light: #1a1a1a;
  --text-muted-light: #666666;
  --background-light: #ffffff;
}

.dark {
  /* Dark theme */
  --primary-50: #0f172a;
  --primary-100: #1e293b;
  --text-dark: #ffffff;
  --text-muted-dark: #a3a3a3;
  --background-dark: #121212;
}`}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Performance Optimalizace
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Tailwind CSS nabízí několik možností pro{" "}
            <Highlight>optimalizaci výkonu</Highlight>a velikosti výsledného
            CSS.
          </p>

          <CodeBlock filename="tailwind.config.js">
            {`module.exports = {
  // Purge nepoužitých stylů
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  
  // JIT mód pro rychlejší development
  mode: 'jit',
  
  // Vlastní media queries
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // Vlastní breakpointy
      'tall': { 'raw': '(min-height: 800px)' },
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    }
  }
}`}
          </CodeBlock>

          <InfoBox title="⚡ Performance tipy" color="amber">
            <ul className="mb-0 space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 flex-shrink-0" />
                <span>Používejte JIT mód pro rychlejší development</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 flex-shrink-0" />
                <span>Nastavte správně content pro purge CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 flex-shrink-0" />
                <span>Minimalizujte použití @apply v CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 flex-shrink-0" />
                <span>Využívejte lazy loading pro komponenty</span>
              </li>
            </ul>
          </InfoBox>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Závěr
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Správná organizace Tailwind CSS kódu je klíčová pro dlouhodobou
              udržitelnost projektu. Vytvořte si style guide, dodržujte konvence
              a pravidelně refaktorujte kód. Pamatujte na výkon a optimalizace,
              zvláště u větších projektů.
            </p>

            <ul className="space-y-3 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Vytvořte si systém komponent</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Dokumentujte konvence a best practices</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Pravidelně aktualizujte závislosti</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                <span>Sledujte novinky v ekosystému</span>
              </li>
            </ul>
          </div>
        </TextBlock>
      </>
    ),
  },

  "typescript-advanced": {
    title: "Pokročilé TypeScript patterns",
    description:
      "Utility types, generics, conditional types a další pokročilé koncepty v TypeScriptu.",
    date: "2023-12-15",
    readTime: "18 min",
    category: "TypeScript",
    image: "/blog/ts.svg",
    content: (
      <>
        <StyledSection>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-6">
            Pokročilé TypeScript patterns
          </h2>
          <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            TypeScript nabízí mnoho <Highlight>pokročilých funkcí</Highlight>{" "}
            pro vytváření typově bezpečných aplikací. Podíváme se na
            nejužitečnější patterns a jejich použití.
          </p>
        </StyledSection>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: "Generické typy",
              description:
                "Flexibilní a typově bezpečné funkce s generickými parametry",
            },
            {
              title: "Conditional Types",
              description: "Pokročilé typové podmínky a inference",
            },
            {
              title: "Utility Types",
              description: "Vestavěné pomocné typy pro běžné operace",
            },
            {
              title: "Type Guards",
              description: "Bezpečné runtime kontroly typů",
            },
          ].map((concept) => (
            <div
              key={concept.title}
              className="p-6 bg-white dark:bg-[#161616] rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-lg font-bold mb-2 text-text-light dark:text-text-dark">
                {concept.title}
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Generické typy
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Generiky jsou základem pro vytváření{" "}
            <Highlight>flexibilních a typově bezpečných</Highlight> funkcí.
          </p>

          <CodeBlock filename="examples/generics.ts">
            {`// Generic function
function getFirstItem<T>(arr: T[]): T | undefined {
  return arr[0]
}

// Generic constraint
interface HasLength {
  length: number
}

function longest<T extends HasLength>(a: T, b: T): T {
  return a.length >= b.length ? a : b
}`}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Conditional Types
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Conditional types umožňují vytvářet komplexní typové podmínky:
          </p>

          <CodeBlock filename="examples/conditional-types.ts">
            {`type IsString<T> = T extends string ? true : false

type NonNullable<T> = T extends null | undefined ? never : T

type ExtractPromise<T> = T extends Promise<infer U> ? U : T
        `}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Mapped Types
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Transformujte existující typy do nových struktur:
          </p>

          <CodeBlock filename="examples/mapped-types.ts">
            {`type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
        `}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Template Literal Types
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Vytvářejte komplexní string typy:
          </p>

          <CodeBlock filename="examples/template-literal-types.ts">
            {`type EventName = 'click' | 'focus' | 'blur'
type Handler = \`on\${Capitalize<EventName>}\`
// "onClick" | "onFocus" | "onBlur"

type Route = \`/api/\${string}\`
        `}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Utility Types v praxi
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Praktické použití utility types pro běžné scénáře:
          </p>

          <CodeBlock filename="examples/utility-types.ts">
            {`interface User {
  id: number
  name: string
  email: string
}

// Readonly user
type ImmutableUser = Readonly<User>

// Optional fields
type PartialUser = Partial<User>

// Pick specific fields
type UserCredentials = Pick<User, 'email' | 'id'>
        `}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Type Guards
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
            Vytvářejte bezpečné type guards pro runtime kontroly:
          </p>

          <CodeBlock filename="examples/type-guards.ts">
            {`function isUser(obj: any): obj is User {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'number' &&
    typeof obj.name === 'string' &&
    typeof obj.email === 'string'
  )
}`}
          </CodeBlock>
        </TextBlock>

        <TextBlock>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Závěr
          </h2>
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Pokročilé TypeScript patterns vám pomohou vytvářet robustnější a
            bezpečnější aplikace. Experimentujte s různými přístupy a najděte
            ty, které nejlépe vyhovují vašim potřebám.
          </p>
        </TextBlock>
      </>
    ),
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const router = useRouter();

  // Add error boundary
  if (!blogPosts[params.slug]) {
    router.replace("/blog");
    return null;
  }

  const post = blogPosts[params.slug];

  return (
    <>
      {/* Hero Section with Featured Image */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center bg-[#fafafa] dark:bg-[#121212] transition-colors duration-300 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_150%,rgba(59,130,246,0.08),transparent_70%)]" />
        </div>

        {/* Featured image with overlay */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafafa]/50 to-[#fafafa] dark:via-[#121212]/50 dark:to-[#121212]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-32">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            {/* Metadata row - better mobile layout */}
            <motion.div className="flex flex-wrap gap-3 md:gap-4">
              <span
                className="text-sm text-blue-500 dark:text-blue-400 font-medium
                bg-blue-500/5 dark:bg-blue-400/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full"
              >
                {post.category}
              </span>
              <div
                className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark
                bg-white/50 dark:bg-[#161616]/50 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("cs-CZ")}
              </div>
              <div
                className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark
                bg-white/50 dark:bg-[#161616]/50 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </motion.div>

            {/* Title - responsive font sizes */}
            <motion.h1 className="font-monument text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-light dark:text-text-dark">
              {post.title}
            </motion.h1>

            {/* Description - adjusted for mobile */}
            <motion.p className="text-lg sm:text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              {post.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Content with Table of Contents */}
      <section className="py-16 md:py-32 bg-light dark:bg-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-8 lg:gap-16">
            {/* Main content - add min-w-0 to prevent overflow */}
            <div className="min-w-0 prose prose-lg dark:prose-invert prose-pre:overflow-x-auto">
              {post.content}
            </div>

            {/* Table of contents sidebar */}
            <div className="hidden lg:block space-y-8">
              <div className="sticky top-24 space-y-8 bg-white dark:bg-[#161616] rounded-xl border border-gray-200 dark:border-gray-800 p-4 md:p-6">
                <h3 className="font-monument text-lg text-text-light dark:text-text-dark">
                  Obsah článku
                </h3>
                <nav className="space-y-2">
                  <a
                    href="#uvod"
                    className="block text-text-muted-light dark:text-text-muted-dark 
                    hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    Úvod
                  </a>
                  {/* Add more TOC items */}
                </nav>

                {/* Share buttons */}
                <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="font-monument text-lg text-text-light dark:text-text-dark mb-4">
                    Sdílet článek
                  </h3>
                  <div className="flex gap-4">
                    <button
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                      hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-colors"
                    >
                      <Github className="w-5 h-5 text-text-light dark:text-text-dark" />
                    </button>
                    <button
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                      hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-text-light dark:text-text-dark" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
