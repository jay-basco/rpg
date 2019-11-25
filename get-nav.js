import {story} from "./story"

export const getNav = id => {
  const s = story().find(s => s.id === id)
  console.log(s.nav)
  return `You can go ${s.nav.map(n => n.dir).join(" or ")}`
}