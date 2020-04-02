import Home from './pages/Home'
import { Entry } from './pages/Entry/Entry'
import { Error } from './pages/404/404'

export const routes = [
  { isExact: true, component: Home, path: '/', label: 'Homepage' },
  { isExact: true, component: Entry, path: '/entry', label: 'Entry' },
  { isExact: true, component: Error, path: '/404', label: '' }
]
