<script lang="ts">
    import { Button }  from '$lib';
    import { goto } from '$app/navigation';
  
    let firstName: string, lastName: string;
  
    const handleSubmit = (e: Event) => {
     	e.preventDefault();
      	if (firstName.trim()) {
       		goto('/success');
      	}
    };
</script>
 
<div class="w-auto h-auto bg-white rounded-sm">
	<form on:submit={handleSubmit} class="flex flex-col p-4 items-center space-y-2">
		<h1 class="text-gray-900 text-2xl font-bold mb-8">Welcome</h1>
		<div>
			<label for="firstName">
				First Name
			</label>
			<input id="firstName" type="text" bind:value={firstName} class="w-full rounded p-2 bg-gray-100" required/>
		</div>
		<div class="mb-8">
			<label for="lastName">
				Last Name
			</label>
			<input id="lastName" type="text" bind:value={lastName} class="w-full rounded p-2 bg-gray-100" required/>
		</div>
		<Button type="submit" label="Submit" />
	</form>
</div>
  