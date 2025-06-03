import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    console.log(`firstName: ${firstName}, lastName: ${lastName}`);
    throw redirect(301, "/success");
  },
};
