import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://holkkzyfpeitzosoavdg.supabase.co";

const supabaseAnonKey = "sb_publishable_3ch81FdwB5JCkCA7ZJXx6Q_5alocnjP";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);