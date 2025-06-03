<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<main class="min-h-screen bg-gray-900 text-gray-900">
  {@render children()}
</main>
