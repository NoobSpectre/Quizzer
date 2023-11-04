import { ArrowUpRightFromCircle, User2 } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui';

type ProfileHeaderProps = {
  id: string;
  name: string;
  image: string;
  onclick: () => void;
};

export const ProfileHeader = ({
  id,
  name,
  image,
  onclick,
}: ProfileHeaderProps) => {
  return (
    <div className="flex flex-row w-full items-center py-2">
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback>
          <User2 />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col text-start ml-2 w-full">
        <h3 className="relative w-fit font-semibold bg-gradient-to-r from-gradient-red to-gradient-blue bg-clip-text text-transparent">
          {name}
          <Link href={`/${id}`} onClick={onclick}>
            <ArrowUpRightFromCircle
              strokeWidth={2.5}
              color="#000"
              className="absolute h-2.5 w-2.5 -right-3.5 top-2 opacity-70 hover:opacity-100 cursor-pointer"
            />
          </Link>
        </h3>
        <p className="text-xs">
          <span className="font-semibold">id: </span>
          {id}
        </p>
      </div>
    </div>
  );
};
