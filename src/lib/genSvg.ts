import satori from 'satori'
import { html } from 'satori-html'

export const genSvg = async (width: number, height: number, text: string) => await satori(
  html(`
    <div tw="flex h-full bg-white justify-center items-center text-xl">
      <div tw="flex flex-wrap justify-center text-xl">
        ${text.replace(/\n/g, '<div tw="w-full flex" />')}
      </div>
    </div>
  `),
  {
    width,
    height,
    fonts: [
      {
        name: 'NotoSansJP',
        data: await fetch('/fonts/NotoSansJP-Regular.otf').then(res => res.arrayBuffer()),
        weight: 400,
        style: 'normal',
      },
    ],
  },
)
