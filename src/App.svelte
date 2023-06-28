<script lang="ts">
  import RenderPng from './lib/RenderPng.svelte'
  import ErrorIcon from './lib/assets/dialog-error.png'
  import InfoIcon from './lib/assets/dialog-info.png'
  import QuestionIcon from './lib/assets/dialog-question.png'
  import WarningIcon from './lib/assets/dialog-warning.png'

  let width: number = 500
  let row: number = 1
  $: height = 310 + (row - 1) * 40
  let title: string = 'Title'
  let text: string = 'Text'
  let button: number = 0
  let icon: number = 0
</script>

<main class="p-4 max-w-2xl mx-auto">
  <div class="mb-4">
    <div class="mb-4">
      Width (幅)
      <div class="flex items-center gap-2">
        <input
          type="range"
          step="100"
          min="100"
          max="1000"
          bind:value={width}
          class="grow range range-accent"
        />
        <input type="number" bind:value={width} class="w-20 input input-bordered text-right" />
      </div>
    </div>
    <div class="mb-4">
      Height (高さ)
      <div class="flex items-center gap-2">
        <input
          type="range"
          step="1"
          min="1"
          max="5"
          bind:value={row}
          class="grow range range-accent"
        />
        <input type="number" bind:value={row} class="w-20 input input-bordered text-right" />
      </div>
    </div>
    <div class="mb-4">
      Title (タイトル)
      <input
        placeholder="Title"
        bind:value={title}
        class="input input-bordered border-current w-full"
      />
    </div>
    <div class="mb-4">
      Text (中身)
      <textarea
        placeholder="Text"
        bind:value={text}
        class="textarea textarea-bordered border-current w-full"
      />
    </div>
    <div class="mb-4">
      Button (ボタンの配置)
      <div class="flex flex-wrap gap-2">
        <label class="label">
          <input
            type="radio"
            name="button"
            bind:group={button}
            value={0}
            class="radio radio-accent"
          />
          <span class="label-text ml-2">OK</span>
        </label>
        <label class="label">
          <input
            type="radio"
            name="button"
            bind:group={button}
            value={1}
            class="radio radio-accent"
          />
          <span class="label-text ml-2">OK, キャンセル</span>
        </label>
        <label class="label">
          <input
            type="radio"
            name="button"
            bind:group={button}
            value={2}
            class="radio radio-accent"
          />
          <span class="label-text ml-2">中止, 再試行, 無視</span>
        </label>
        <label class="label">
          <input
            type="radio"
            name="button"
            bind:group={button}
            value={3}
            class="radio radio-accent"
          />
          <span class="label-text ml-2">はい, いいえ, キャンセル</span>
        </label>
        <label class="label">
          <input
            type="radio"
            name="button"
            bind:group={button}
            value={4}
            class="radio radio-accent"
          />
          <span class="label-text ml-2">はい, いいえ</span>
        </label>
        <label class="label">
          <input
            type="radio"
            name="button"
            bind:group={button}
            value={5}
            class="radio radio-accent"
          />
          <span class="label-text ml-2">再試行, キャンセル</span>
        </label>
      </div>
    </div>
    <div class="mb-4">
      Icon (アイコン)
      <div class="flex flex-wrap gap-2">
        <label class="label">
          <input type="radio" name="icon" bind:group={icon} value={0} class="radio radio-accent" />
          <span class="label-text ml-2">なし</span>
        </label>
        <label class="label">
          <input type="radio" name="icon" bind:group={icon} value={1} class="radio radio-accent" />
          <span class="label-text ml-2"><img src={ErrorIcon} alt="error" class="h-6" /></span>
        </label>
        <label class="label">
          <input type="radio" name="icon" bind:group={icon} value={2} class="radio radio-accent" />
          <span class="label-text ml-2"><img src={InfoIcon} alt="info" class="h-6" /></span>
        </label>
        <label class="label">
          <input type="radio" name="icon" bind:group={icon} value={3} class="radio radio-accent" />
          <span class="label-text ml-2"><img src={QuestionIcon} alt="question" class="h-6" /></span>
        </label>
        <label class="label">
          <input type="radio" name="icon" bind:group={icon} value={4} class="radio radio-accent" />
          <span class="label-text ml-2"><img src={WarningIcon} alt="warning" class="h-6" /></span>
        </label>
      </div>
    </div>
  </div>
  <RenderPng {width} {height} {text} {title} {button} {icon} />
</main>
