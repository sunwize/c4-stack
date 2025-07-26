import { useMutation } from "@tanstack/vue-query";

export function useSigninWithGoogle() {
  return useMutation({
    mutationFn: async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });

      if (data.error) {
        throw new Error(`Failed to sign in with Google: ${data.error.message}`);
      }

      return data;
    },
  });
}
