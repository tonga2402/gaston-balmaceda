export async function POST(request: Request) {
  const { data } = await request.json();

  try {
    const res = await fetch("https://digitalmoney.digitalhouse.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = await res.json();

    return new Response(JSON.stringify(user));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}
