import React from 'react'

import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'

import dayjs from 'dayjs'

import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';
import { Footer } from 'widgets/footer'

import 'dayjs/locale/ru'
import { Layout } from './layout'

import '@mantine/core/styles.css';

dayjs.locale('ru')

// const cache = createEmotionCache({
//   key: 'mantine',
//   prepend: false
// })

export const dashboardLayout = (
  <MantineProvider
    withGlobalStyles
    withCSSVariables
    // emotionCache={cache}
    theme={{
      primaryShade: 5,
      defaultRadius: 'md',
    }}
  >
    <ModalsProvider 
      // modals={{image: ImageModal}}
    >
      <Layout
        headerSlot={<Header/>}
        footerSlot={<Footer/>}
        sidebarslot={<Sidebar/>}
      />
      <Notifications position='top-right'/>
    </ModalsProvider>
  </MantineProvider>
)