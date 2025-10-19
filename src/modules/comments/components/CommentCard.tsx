import { Comment } from "@/modules/comments/types/comment.types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui";

export function CommentCard({ name, email, body }: Comment) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h4 className='text-sm capitalize'>{name}</h4>
          <span className='text-xs text-muted-foreground lowercase'>
            {email}
          </span>
        </CardTitle>
        <CardDescription className='text-xs text-pretty'>
          {body}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
