import { Skeleton } from "@/shared/ui";

export function UserCardSkeleton() {
  return (
    <div className='flex animate-pulse items-center space-x-2 text-sm'>
      <Skeleton className='size-10 rounded-full' />

      <div className='space-y-1 leading-none'>
        <Skeleton className='h-3 w-28 rounded-md' /> {/* Nombre */}
        <Skeleton className='h-2.5 w-20 rounded-md' /> {/* Email */}
      </div>
    </div>
  );
}
