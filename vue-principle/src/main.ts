import './style/base.scss'
// import './reactive'
import { generatePage } from './router'

function createApp() {
  const routerList = generatePage()

  routerList.forEach((li) => {
    document.body.append(li.page)
  })
}
createApp()
