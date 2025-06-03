<script lang="ts">
  let {
    type = "button",
    label,
  }: { type?: "button" | "submit" | "reset"; label: string } = $props();
</script>

<button
  {type}
  class="bg-gray-900 text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 transition"
>
  {label}
</button>
