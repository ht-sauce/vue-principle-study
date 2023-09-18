const pages = import.meta.glob('@/page/*/*.ts')

type PageItem = {
  path: string
  page: HTMLDivElement
}

// 生成页面
export function generatePage() {
  const newList: PageItem[] = []
  for (const key in pages) {
    const page = document.createElement('div')
    page.textContent = key
    page.className = 'page-item'

    const pageItem = {
      path: key,
      page,
    }

    page.onclick = () => {
      lookCode(pageItem)
    }

    newList.push(pageItem)
  }
  return newList
}

async function getCode(path: string) {
  return await import(/* @vite-ignore */ path + '?raw')
}
async function lookCode(pageItem: PageItem) {
  console.log(pageItem.path)
  const code = await getCode(pageItem.path)
  console.log(code.default)
}
