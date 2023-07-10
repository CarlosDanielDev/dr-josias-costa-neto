import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import { ThemeProvider } from 'styled-components'
import { light } from './styles/themes'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={light}>
        <PageContextProvider pageContext={pageContext}>
          <Layout>
            {children}
          </Layout>
        </PageContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}



