import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
} from "@/shared/ui";

export function CommentCardSkeleton() {
  return (
    <Card className='animate-pulse'>
      <CardHeader className='space-y-3'>
        <CardTitle className='space-y-1'>
          <Skeleton className='h-3.5 w-24 rounded-md' />
          <Skeleton className='h-2.5 w-32 rounded-md' />
        </CardTitle>
        <CardDescription className='space-y-2'>
          <Skeleton className='h-3 w-full rounded-md' />
          <Skeleton className='h-3 w-5/6 rounded-md' />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
