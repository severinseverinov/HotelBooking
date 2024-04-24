import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zyvxnmfrgesnkimkplps.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5dnhubWZyZ2VzbmtpbWtwbHBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NDM4MTcsImV4cCI6MjAyOTUxOTgxN30.HB5NxQB8dALmvq7x3RCoEq-2cfT1GVwKNCFUCZaVSGA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
