const SUPABASE_URL = "https://plfgmhqtvcwgglvufgnh.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_sioXMUPywMqdQWpxoHNcPw_tD3W7HKF";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
