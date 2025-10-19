import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
} from "@/shared/ui";

export function PostCardSkeleton() {
  return (
    <Card className='animate-pulse'>
      <CardHeader className='space-y-3'>
        <CardTitle>
          <Skeleton className='h-3.5 w-3/4 rounded-md' />
        </CardTitle>
        <CardDescription className='space-y-2'>
          <Skeleton className='h-2.5 w-full rounded-md' />
          <Skeleton className='h-2.5 w-5/6 rounded-md' />
        </CardDescription>
        <CardAction className='flex justify-end'>
          <Skeleton className='size-8 rounded-md' />
        </CardAction>
      </CardHeader>
    </Card>
  );
}
