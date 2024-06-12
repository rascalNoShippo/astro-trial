export async function GET() {
  return new Response(
    JSON.stringify({
      name: "Astro",
      headers: {
      },
    })
  );
}
