import { createClient } from "@supabase/supabase-js";

const supabaseUrll = "https://trdmoiakkuffzrlaeucy.supabase.co"
const supabaseAnonKeyy = "sb_publishable_eEow_emjm6sOcZg8gY3JQw_Cnjv5beK"

const supabase = createClient(supabaseUrll, supabaseAnonKeyy);

export default supabase;
