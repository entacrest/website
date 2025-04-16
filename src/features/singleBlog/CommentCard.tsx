import { Comment } from "@/types/global";
import Image from "next/image";

type CommentCardProps = {
  comment: Comment;
};

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="w-full p-4 ">
      {/* Main Comment */}
      <div className="flex items-start gap-3">
        <Image
          src="/images/avatar.svg"
          alt={comment.user.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex flex-col">
            <span className="font-semibold">{comment.user.name}</span>
            <span>{comment.createdAt}</span>
          </div>
          <p className="mt-1">{comment.comment}</p>
          <div className="flex gap-4 mt-2 text-sm text-gray-500">
            <span>{comment.likes} Likes</span>
            <button className="text-blue-600 font-medium hover:underline">
              Reply
            </button>
          </div>
        </div>
      </div>

      {/* Replies */}
      {comment.replies?.length > 0 && (
        <div className="mt-4 pl-10 space-y-4">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="flex items-start gap-3">
              <Image
                src="/images/avatar.svg"
                alt={reply.user.name}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex flex-col">
                  <span className="font-semibold">{reply.user.name}</span>
                </div>
                <p className="mt-1">{reply.comment}</p>
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                  <span>{reply.likes} Likes</span>
                  <button className="text-blue-600 font-medium hover:underline">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentCard;
