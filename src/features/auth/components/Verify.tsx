"use client";

import Link from "next/link";
import useVerify from "../hooks/useVerify";
import { useQueryState } from "nuqs";
import { useEffect } from "react";

const Verify = () => {
  const [token] = useQueryState("token");
  const { verify, isPending, isSuccess, isError } = useVerify();

  useEffect(() => {
    if (token) {
      verify(token);
    }
  }, [token, verify]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border p-8 shadow-lg text-center">
        {isPending && (
          <div>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold">Memverifikasi Akun...</h2>
            <p className="text-gray-500">Mohon tunggu sebentar.</p>
          </div>
        )}

        {isSuccess && (
          <div>
            <div className="text-green-500 text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-800">
              Verifikasi Berhasil!
            </h2>
            <p className="text-gray-600 mt-2">
              Akun kamu sudah aktif. Sekarang kamu bisa login.
            </p>
            <Link
              href="/auth"
              className="mt-6 inline-block w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Login Sekarang
            </Link>
          </div>
        )}

        {isError && (
          <div>
            <div className="text-red-500 text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-bold text-gray-800">
              Verifikasi Gagal
            </h2>
            <p className="text-red-500 mt-2">{"message"}</p>
            <Link
              href="/auth/register"
              className="mt-6 inline-block w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50"
            >
              Kembali ke Registrasi
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
