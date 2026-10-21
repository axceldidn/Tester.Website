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
  SUPABASE_URL: "https://GANTI-PROJECT.supabase.co",
  SUPABASE_ANON_KEY: "GANTI-ANON-KEY",
  VAPID_PUBLIC_KEY: "GANTI-VAPID-PUBLIC-KEY"
};
