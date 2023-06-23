<script lang="ts">
  import { genSvg } from './lib/genSvg'

  let svg: string
  (async () => {
    svg = (await genSvg()).replace(/ width=".*?height=".*?"/, '')
  })()
</script>

<main class="p-4">
  {@html svg || ''}
</main>

<style>
  :global(svg) { @apply w-full; }
</style>
