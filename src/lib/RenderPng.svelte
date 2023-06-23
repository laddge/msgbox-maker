<script lang="ts">
  import { genSvg } from './genSvg'
  import { Canvg } from 'canvg'

  let src: string = ''

  $: {
    if (typeof window !== 'undefined') {
      (async () => {
        const svg = await genSvg()
        const canvas = document.querySelector('canvas')
        canvas.width = 400
        canvas.height = 300
        const ctx = canvas.getContext('2d')
        const v = Canvg.fromString(ctx, svg)

        await v.render()
        src = canvas.toDataURL()
      })()
    }
  }
</script>

<canvas class="hidden" />
<img {src} alt="generated png" class="w-full" />
