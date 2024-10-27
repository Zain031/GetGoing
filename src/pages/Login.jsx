import React, { useState } from "react";
import image_1 from "../../src/assets/Beranda/gg.png";
import image_2 from "../../src/assets/Beranda/ff.png";
import image_3 from "../../src/assets/Servis Kami/b.JPG";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${image_3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="w-[764px] h-[652px] bg-white rounded-lg shadow-xl text-center px-[76px] py-5 ">
                <h2 className="text-4xl font-bold mb-3 text-left">Masuk</h2>
                <p className="text-gray-900 mb-6 text-left font-bold">
                    Silahkan masukkan email & password untuk masuk
                </p>

                <form onSubmit={handleLogin}>
                    <div className="mb-4 text-left">
                        <label className="block text-gray-400 text-sm font-light mb-2">
                            EMAIL
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="alamat@email.com"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    <div className="mb-4 text-left">
                        <label className="block text-gray-400 text-sm font-light mb-2">
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    <p className="text-left hover:underline hover:text-red-600 text-sm text-red-500 mb-6 cursor-pointer">
                        Lupa password?
                    </p>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-3xl font-semibold hover:bg-blue-500 transition-colors"
                    >
                        LOGIN
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-400">atau</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button className="w-full gap-48 p-5 mb-4 border font-bold text-sm py-3 border-red-500 text-red-500 rounded-3xl flex items-center justify-left transition-colors hover:bg-red-500 hover:text-white">
                    <span>
                        <img src={image_1} alt="" className="w-6" />
                    </span>
                    LOGIN WITH GOOGLE
                </button>

                <button className="w-full gap-48 p-5 mb-4 border font-bold text-sm py-3 border-blue-500 text-blue-500 rounded-3xl flex items-center justify-left transition-colors hover:bg-blue-500 hover:text-white">
                    <span>
                        <img src={image_2} alt="" className="w-6" />
                    </span>
                    LOGIN WITH FACEBOOK
                </button>

                <p className="text-sm text-gray-500 mt-6">
                    Belum punya akun?{" "}
                    <span className="text-red-500 cursor-pointer">
                        Silahkan registrasi
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
