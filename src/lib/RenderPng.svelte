<script lang="ts">
  export let width: number,
    height: number,
    title: string,
    text: string,
    button: number,
    icon: number

  import { genSvg } from './genSvg'
  import { Canvg } from 'canvg'

  let src: string = ''

  $: {
    if (typeof window !== 'undefined') {
      (async () => {
        const svg = await genSvg(width, height, title, text, button, icon)
        const canvas = document.querySelector('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        const v = Canvg.fromString(ctx, svg)

        await v.render()
        src = canvas.toDataURL()
      })()
    }
  }
</script>

<canvas class="hidden" />
{#if src}
  <img {src} alt="generated png" class="w-full" />
{/if}
