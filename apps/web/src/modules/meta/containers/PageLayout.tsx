import Head from "next/head"
import { Header } from "ui-venn"

export interface PageLayoutProps {
  title?: string
  children: React.ReactNode
}
export function PageLayout(props: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{props.title ?? "venn"}</title>
      </Head>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 px-2">{props.children}</main>
      </div>
    </>
  )
}
