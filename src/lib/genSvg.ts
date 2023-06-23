import satori from 'satori'
import { html } from 'satori-html'

export const genSvg = async () => await satori(
  html(`
    <div tw="h-full bg-white justify-center items-center text-xl">
      hello, こんにちは
    </div>
  `),
  {
    width: 400,
    height: 300,
    fonts: [
      {
        name: 'LINESeedJP',
        data: await fetch('/fonts/NotoSansJP-Regular.otf').then(res => res.arrayBuffer()),
        weight: 400,
        style: 'normal',
      },
    ],
  },
)
