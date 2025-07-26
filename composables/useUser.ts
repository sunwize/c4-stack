export function useUser() {
  const session = authClient.useSession();
  return computed(() => session.value.data?.user);
}
