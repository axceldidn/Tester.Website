// ===== KONFIGURASI AIS.NET: satu-satunya file yang perlu Anda isi =====
// Isi 3 tulisan GANTI di bawah, lalu simpan file ini di folder yang SAMA dengan index.html.
// index.html tidak berisi isian apa pun, jadi memperbarui index.html tidak akan menimpa file ini.
//
// Ambil dari Supabase > Project Settings > API:
//   SUPABASE_URL      -> "Project URL"          (contoh: https://abcd1234.supabase.co)
//   SUPABASE_ANON_KEY -> "anon public" key      (diawali eyJ...)
// VAPID_PUBLIC_KEY    -> kunci PUBLIK dari buat-kunci-vapid.html
//
// Anon key dan kunci publik VAPID boleh terlihat publik. Yang menjaga data adalah RLS.
// JANGAN pernah menaruh service_role key atau kunci PRIVAT VAPID di sini.
window.AIS_CONFIG = {
  SUPABASE_URL: "https://hgklwpaaklcttgazktre.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhna2x3cGFha2xjdHRnYXprdHJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2OTg0NjUsImV4cCI6MjEwNzI3NDQ2NX0.Ao8sUIh1-YTdahkjECmX847aO-cydfJDJMjrp2p4zH0",
  VAPID_PUBLIC_KEY: "BPj8g8dc5MQm-BB6rOnNq-O2EYbf8IrWkTpBB3rO8ueRg33oexP4-NwEYbPVKb2EkxKPBrPxetWa2PGEJrXgKPc"
};
