import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
} from "@/shared/ui";

export function BookCardSkeleton() {
  return (
    <Card className='animate-pulse'>
      <CardHeader className='space-y-3'>
        <CardTitle className='flex flex-col gap-y-1.5'>
          <Skeleton className='h-3.5 w-3/4 rounded-md' />

          <div className='flex flex-col gap-y-1'>
            <Skeleton className='h-2.5 w-32 rounded-md' />
            <Skeleton className='h-2.5 w-40 rounded-md' />
          </div>
        </CardTitle>

        <CardDescription className='space-y-1'>
          <Skeleton className='h-2.5 w-1/2 rounded-md' />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
