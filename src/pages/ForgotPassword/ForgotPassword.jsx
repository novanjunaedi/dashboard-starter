import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (payload) => {
        console.log(payload);
    };

    return (
        <>
            <Helmet>
                <title>Forgot Password?</title>
            </Helmet>
            <main className="bg-gray-100 h-screen flex justify-center items-center">
                <div className="bg-white p-8 rounded-xl shadow-md w-96">
                    <div className="text-center mb-5">
                        <h2 className="text-2xl font-semibold">Forgot Password?</h2>
                    </div>
                    <p className="text-sm mb-5">Enter your registered email and we will send you a link to reset your password</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" className="rounded" placeholder="Enter email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500 text-sm">Required!</span>}
                        </div>
                        <div className="mb-4">
                            <Button type="submit" variant="default" className="w-full">Send Reset Instruction</Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default ForgotPassword;
