import Link from "next/link"
import Head from "next/head"
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
export default function First(){
    return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>

    <section className={utilStyles.headingMd}>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
      </p>
    </section>
    <h2>If you want to return , please click <Link href="/"> this </Link></h2>
  </Layout>
    );
}
