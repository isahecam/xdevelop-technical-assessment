import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
} from "@/shared/ui";

export function PostDetailsSkeleton() {
  return (
    <Card className='animate-pulse'>
      <CardContent className='flex items-center gap-2'>
        <Skeleton className='size-8 rounded-full' /> {/* Avatar */}
        <div className='space-y-1'>
          <Skeleton className='h-3 w-24 rounded-md' /> {/* Nombre */}
          <Skeleton className='h-2.5 w-16 rounded-md' /> {/* Email */}
        </div>
      </CardContent>

      <CardHeader className='space-y-3'>
        <CardTitle>
          <Skeleton className='h-4 w-3/4 rounded-md' /> {/* Título */}
        </CardTitle>

        <CardDescription className='space-y-2'>
          <Skeleton className='h-3 w-full rounded-md' />
          <Skeleton className='h-3 w-5/6 rounded-md' /> {/* Body */}
        </CardDescription>

        <CardAction className='flex justify-end'>
          <Skeleton className='size-8 rounded-md' />
        </CardAction>
      </CardHeader>
    </Card>
  );
}
