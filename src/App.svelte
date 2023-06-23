<script lang="ts">
  import RenderPng from './lib/RenderPng.svelte'

  let text: string = 'Text'
  let width: number = 800
  let height: number = 400
</script>

<main class="p-4">
  <div class="mb-4">
    <div class="mb-4">
      Width (幅)
      <div class="flex items-center gap-2">
        <input type="range" step="100" min="200" max="1000" bind:value={width} class="grow range range-accent" />
        <input type="number" bind:value={width} class="w-20 input input-bordered text-right" />
      </div>
    </div>
    <div class="mb-4">
      Height (高さ)
      <div class="flex items-center gap-2">
        <input type="range" step="100" min="200" max="1000" bind:value={height} class="grow range range-accent" />
        <input type="number" bind:value={height} class="w-20 input input-bordered text-right" />
      </div>
    </div>
    <div class="mb-4">
      Text
      <textarea placeholder="Text" bind:value={text} class="textarea textarea-bordered border-current w-full" />
    </div>
  </div>
  <RenderPng {width} {height} {text} />
</main>
