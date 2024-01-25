import book from '../assets/book.json'
import clock from '../assets/clock.json'
import eye from '../assets/eye.json'
import star from '../assets/star.json'

export const projects = [
  {
    name: "Pomo Pomodoro",
    description: "A Pomodoro with controls. Recreating this project with next 14",
    url: "https://www.pomopomodoro.com",
    icon: clock
  },
  {
    name: "Todo List",
    description: "A nice application to manage your tasks, with freedom to control your items",
    url: "https://www.todolist.bzenky.dev",
    icon: book,
  },
  {
    name: "Yotei - VS Code",
    description: "A dark theme inspired by a purple/red sky at dawn.",
    url: "https://marketplace.visualstudio.com/items?itemName:Zenky.yotei",
    icon: eye,
  },
  {
    name: "Yotei - Google Chrome",
    description: "A dark theme inspired by a purple/red sky at dawn.",
    url: "https://chromewebstore.google.com/detail/yotei/joafbehmencjimojljfchmmenokidfef",
    icon: eye,
  },
  {
    name: "Pokedex",
    description: "A simple Pokédex with the first pokémon generation",
    url: "https://www.pokedex.bzenky.dev/",
    icon: star,
  }
]