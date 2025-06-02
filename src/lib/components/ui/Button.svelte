<script lang="ts">
    export let type: 'button' | 'submit' = 'button';
    export let label: string;
</script>
  
<button type={type} class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
    {label}
</button>
  