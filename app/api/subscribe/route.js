import supabase from "../../../utils/supabase";

export async function POST(req) {
  const { email } = await req.json();

  const { error } = await supabase
    .from("subscribers")
    .insert([{ email }]);

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ success: true });
}