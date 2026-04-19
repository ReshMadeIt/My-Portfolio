import { Resend } from "resend";
import supabase from "../../../utils/supabase";

const resend = new Resend("re_VUvV8MQS_8i73nKCfbS18mFoYGTSNxzgE");

export async function POST() {
  // 1. Get all subscribers
  const { data: users, error } = await supabase
    .from("subscribers")
    .select("email");

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  // 2. Send emails
  const emails = users.map((u) => u.email);

  try {
    await resend.emails.send({
      from: "Reshley <onboarding@resend.dev>",
      to: emails,
      subject: "New Update 🚀",
      html: `
        <h2>Hey 👋</h2>
        <p>I just pushed a new update to my app.</p>
        <p>Check it out on my portfolio.</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}