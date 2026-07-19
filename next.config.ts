import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // ปิดใช้งานตอน dev เพื่อจะได้ไม่กวนใจเวลาแก้โค้ด
  register: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {

  turbopack: {},
  // ... ค่าคอนฟิกเดิมของคุณ (ถ้ามี)
};

export default withPWA(nextConfig);