import satori from 'satori'
import { html } from 'satori-html'
import ErrorIcon from './assets/dialog-error.png'
import InfoIcon from './assets/dialog-info.png'
import QuestionIcon from './assets/dialog-question.png'
import WarningIcon from './assets/dialog-warning.png'

const buttons = [
  ['OK'],
  ['OK', '<span style="transform: scaleX(.8);">キャンセル</span>'],
  ['<span style="transform: scaleX(.8);">中止</span>(A)', '<span style="transform: scaleX(.8);">再試行</span>(R)', '<span style="transform: scaleX(.8);">無視</span>(I)'],
  ['<span style="transform: scaleX(.8);">はい</span>(Y)', '<span style="transform: scaleX(.8);">いいえ</span>(N)', '<span style="transform: scaleX(.8);">キャンセル</span>'],
  ['<span style="transform: scaleX(.8);">はい</span>(Y)', '<span style="transform: scaleX(.8);">いいえ</span>(N)'],
  ['<span style="transform: scaleX(.8);">再試行</span>(R)', '<span style="transform: scaleX(.8);">キャンセル</span>'],
]

export const genSvg = async (width: number, height: number, title: string, text: string, button: number, icon: number) => await satori(
  html(`
    <div tw="flex flex-col h-full bg-white border border-blue-500">
      <div tw="flex text-xl p-3">
        <div class="grow flex pl-1">
          ${title}
        </div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlV2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiPjxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiIGQ9Ik02IDE4TDE4IDZNNiA2bDEyIDEyIiAvPjwvc3ZnPgo=" tw="w-8 h-8 block" />
      </div>
      <div tw="grow flex text-xl px-8">
        <div tw="flex items-center">
          ${icon ? '<img src="' + [ErrorIcon, InfoIcon, QuestionIcon, WarningIcon][icon - 1] + '" tw="h-14 mr-4" />' : ''}
        </div>
        <div tw="grow flex flex-wrap text-xl py-16">
          ${text.replace(/\n/g, '<div tw="w-full flex" />')}
        </div>
      </div>
      <div tw="flex justify-end bg-[#f1f1f1] text-xl p-6">
        <div tw="flex border border-black w-32 ml-3">
          <div tw="flex justify-center border-2 border-t-[#e6e6e6] border-r-[#898989] border-b-[#898989] border-l-[#e6e6e6] w-full">
            ${buttons[button][0]}
          </div>
        </div>
        ${buttons[button].slice(1).map(btn => '\
        <div tw="flex border w-32 ml-3">\
          <div tw="flex justify-center border-2 border-t-[#e6e6e6] border-r-[#898989] border-b-[#898989] border-l-[#e6e6e6] w-full">\
            ' + btn + '\
          </div>\
        </div>'
        ).join('')}
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
