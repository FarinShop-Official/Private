// config.js
// ⚠️ Jangan upload file ini ke repo publik karena ada BOT_TOKEN

module.exports = {
  // Bisa isi langsung di sini, atau pakai ENV BOT_TOKEN di Pterodactyl.
  BOT_TOKEN: process.env.BOT_TOKEN || '8243434233:AAHB9dKgcw6NMrwSwBMi_rwYhqk8tQEx9sc',

  // Ganti dengan @username channel kamu
  CHANNELS: [
  '@farinnewera',
  '@pemersatubangsareall',
  '@testimadress'
],

  WITHDRAW_CHANNEL: '@pemersatubangsareall',   // 👈 channel log penarikan

  // Isi dengan Telegram ID admin (ANGKA, bukan @username)
  // Bisa lebih dari satu admin
  ADMIN_IDS: [
    7355538049, // ganti dengan ID kamu
    // 987654321, // admin lain kalau ada
  ],
};