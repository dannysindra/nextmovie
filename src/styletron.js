import { Client, Server } from 'styletron-engine-atomic'

const getHydrateClass = () =>
  document.getElementsByClassName('_styletron_hydrate_')

export const engine =
  typeof window === 'undefined'
    ? new Server()
    : new Client({
        hydrate: getHydrateClass(),
      })
