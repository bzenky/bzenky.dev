import book from '../assets/book.json'
import clock from '../assets/clock.json'
import eye from '../assets/eye.json'
import star from '../assets/star.json'

export const projects = [
  {
    name: "Pomo Pomodoro",
    description: "Enhance your productivity with this intuitive and appealing Pomodoro timer",
    url: "https://www.pomopomodoro.com",
    icon: clock
  },
  {
    name: "Todo List",
    description: "A powerful task management application that gives you complete control over your items.",
    url: "https://www.todolist.bzenky.dev",
    icon: book,
  },
  {
    name: "Yotei Theme",
    description: "A dark theme for some apps inspired by a purple/red sky at dawn.",
    url: "https://github.com/bzenky/yotei",
    icon: eye,
  },
  {
    name: "Pokedex",
    description: "A simple Pokédex with the first pokémon generation",
    url: "https://www.pokedex.bzenky.dev/",
    icon: star,
  }
]