import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (payload) => {
        console.log(payload);
    };

    return (
        <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <main className="bg-gray-100 h-screen flex justify-center items-center">
                <div className="bg-white p-8 rounded-xl shadow-md w-96">
                    <div className="text-center mb-5">
                        <h2 className="text-2xl font-semibold">Reset Password</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <Label htmlFor="password">New Password</Label>
                            <div className="relative">
                                <Input type={showPassword ? "text" : "password"} id="password" name="password" className="rounded" placeholder="Enter password" {...register("password", { required: true })} />
                                <span className="absolute right-2 top-1/2 -translate-y-1/2">
                                    {showPassword ?
                                        (<FaEyeSlash onClick={() => setShowPassword(!showPassword)} size="1em" title="Sembunyikan Password" />)
                                        :
                                        (<FaEye onClick={() => setShowPassword(!showPassword)} size="1em" title="Lihat Password" />)
                                    }
                                </span>
                            </div>
                            {errors.password && <span className="text-red-500 text-sm">Required!</span>}
                        </div>

                        <div className="mb-4">
                            <Label htmlFor="password">Confirm New Password</Label>
                            <div className="relative">
                                <Input type={showPassword ? "text" : "password"} id="password" name="password" className="rounded" placeholder="Enter password" {...register("password", { required: true })} />
                                <span className="absolute right-2 top-1/2 -translate-y-1/2">
                                    {showPassword ?
                                        (<FaEyeSlash onClick={() => setShowPassword(!showPassword)} size="1em" title="Sembunyikan Password" />)
                                        :
                                        (<FaEye onClick={() => setShowPassword(!showPassword)} size="1em" title="Lihat Password" />)
                                    }
                                </span>
                            </div>
                            {errors.password && <span className="text-red-500 text-sm">Required!</span>}
                        </div>
                        <div className="mb-4">
                            <Button type="submit" variant="default" className="w-full">Reset</Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default ResetPassword;
