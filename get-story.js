import {story} from "./story"

export const getStory = id => {
  const s = story().find(s => s.id === id)
  return s.description
}