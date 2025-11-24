import { createClient } from "@supabase/supabase-js/src/index";
const URL = "https://cndbtgaifheduxginlre.supabase.co";
const KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGJ0Z2FpZmhlZHV4Z2lubHJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NDQwNDIsImV4cCI6MjA3OTIyMDA0Mn0.UmycaPz6oqIYQLqezaUNl-sEhi4IyB_KPmpyO2rnvFY";

const supabase = createClient(URL, KEY);
export default supabase;
