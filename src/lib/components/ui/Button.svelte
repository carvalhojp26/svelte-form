<script lang="ts">
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let label: string;
</script>
  
<button type={type} class="bg-gray-900 text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 transition">
    {label}
</button>
  