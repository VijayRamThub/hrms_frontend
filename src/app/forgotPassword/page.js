import { ForgotPasswordForm } from "./forgetpasswordForm"

export default function LoginPage() {
  return (
    <div className="dark:bg-black bg-neutral-300 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
            <ForgotPasswordForm/>
      </div>
    </div>
  )
}
