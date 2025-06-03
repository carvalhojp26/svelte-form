<script lang="ts">
  import { Button } from "$lib";
</script>

<div class="flex items-center justify-center min-h-screen">
  <div class="w-auto h-auto bg-white rounded-sm">
    <form class="flex flex-col p-4 items-center space-y-2" method="POST">
      <h1 class="text-gray-900 text-2xl font-bold mb-8">Welcome</h1>
      <div>
        <label for="firstName"> First Name </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          class="w-full rounded p-2 bg-gray-100"
          required
        />
      </div>
      <div class="mb-8">
        <label for="lastName"> Last Name </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          class="w-full rounded p-2 bg-gray-100"
          required
        />
      </div>
      <Button type="submit" label="Submit" />
    </form>
  </div>
</div>
