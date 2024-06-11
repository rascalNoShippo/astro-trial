export const GET = async () => {
  return new Response(
    JSON.stringify({
      name: "Astro",
      headers: {
        "content-type": "application/json"
      }
    })
  )
};

