import { Card, CardFooter, CardHeader, Skeleton } from "@/shared/ui";

export function PostCardSkeleton() {
  return (
    <Card className='animate-pulse'>
      <CardHeader className='space-y-3'>
        <Skeleton className='h-4 w-3/4 rounded-md' />

        <div className='space-y-2'>
          <Skeleton className='h-3 w-full rounded-md' />
          <Skeleton className='h-3 w-5/6 rounded-md' />
        </div>

        <div className='flex justify-end'>
          <Skeleton className='size-8 rounded-full' />
        </div>
      </CardHeader>

      <CardFooter className='flex items-center gap-2'>
        <Skeleton className='size-6 rounded-full' />
        <div className='space-y-1'>
          <Skeleton className='h-3 w-24 rounded-md' />
          <Skeleton className='h-3 w-16 rounded-md' />
        </div>
      </CardFooter>
    </Card>
  );
}

export function PostListSkeleton() {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3'>
      {Array.from({ length: 3 }).map((_, index) => (
        <li key={index} className='contents'>
          <PostCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
