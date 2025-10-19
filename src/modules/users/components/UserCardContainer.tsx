import { useUserProfile } from "../hooks/useUserProfile";
import { UserCard } from "./UserCard";
import { UserCardSkeleton } from "./skeletons/UserSkeletons";

export function UserProfileContainer({ userId }: { userId: number }) {
  const { data, isLoading, error } = useUserProfile(userId);

  if (isLoading) return <UserCardSkeleton />;
  if (!data) return <div>Usuario no encontrado</div>;

  return <UserCard {...data} />;
}
