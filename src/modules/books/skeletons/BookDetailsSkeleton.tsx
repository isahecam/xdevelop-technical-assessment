import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Skeleton,
} from "@/shared/ui";

export function BookDetailsSkeleton() {
  return (
    <div className='flex w-full animate-pulse justify-center p-6'>
      <Card className='w-full'>
        <CardHeader className='space-y-3'>
          <CardTitle className='mb-1'>
            <Skeleton className='h-4 w-3/4 rounded-md' />
          </CardTitle>

          <CardDescription className='mb-2 space-y-2'>
            <Skeleton className='h-3 w-full rounded-md' />
            <Skeleton className='h-3 w-5/6 rounded-md' />
            <Skeleton className='h-3 w-2/3 rounded-md' />
          </CardDescription>
        </CardHeader>

        <CardContent className='flex p-3'>
          <Skeleton className='h-[200px] w-[150px] rounded-md object-cover' />

          <div className='flex w-full flex-col gap-y-3 px-6 text-sm'>
            <div className='space-y-1'>
              <Skeleton className='h-3 w-40 rounded-md' />
              <Skeleton className='h-3 w-28 rounded-md' />
            </div>

            <div className='space-y-1'>
              <Skeleton className='h-3 w-24 rounded-md' />
              <Skeleton className='h-3 w-3/4 rounded-md' />
              <Skeleton className='h-3 w-5/6 rounded-md' />
            </div>

            <div className='space-y-2'>
              <Skeleton className='h-3 w-20 rounded-md' />{" "}
              <div className='flex flex-col gap-y-1'>
                <Skeleton className='h-3 w-32 rounded-md' />
                <Skeleton className='h-3 w-40 rounded-md' />
                <Skeleton className='h-3 w-36 rounded-md' />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
