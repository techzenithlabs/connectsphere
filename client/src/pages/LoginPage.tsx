import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});
type FormValues = z.infer<typeof schema>;

export default function LoginPage() {


  const {
    register,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });


  return (
    <div style={{
      maxWidth: 420, margin: "8rem auto", padding: 24,
      border: "1px solid #e5e7eb", borderRadius: 12, background: "#fff"
    }}>
      <h2 style={{ marginTop: 0 }}>Sign in</h2>
    

      <form  noValidate style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "grid", gap: 6 }}>
          <label htmlFor="email" style={{ fontWeight: 600 }}>Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register("email")}
            style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #cbd5e1" }}
          />
          {errors.email && <div style={{ color: "crimson", fontSize: 12 }}>{errors.email.message}</div>}
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label htmlFor="password" style={{ fontWeight: 600 }}>Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
            style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #cbd5e1" }}
          />
          {errors.password && <div style={{ color: "crimson", fontSize: 12 }}>{errors.password.message}</div>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: 12, fontWeight: 600, borderRadius: 8, border: "none",
            background: "#4f46e5", color: "#fff", cursor: "pointer", opacity: isSubmitting ? 0.7 : 1
          }}
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
