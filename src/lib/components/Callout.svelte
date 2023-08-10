<script lang="ts">
  type CalloutEmoji = '🤔' | '⚠'
  export let emoji: CalloutEmoji
</script>

<div class="callout">
  <div class="emoji-container">
    {emoji}
  </div>
  <div class="notes">
    <slot></slot>
  </div>
</div>