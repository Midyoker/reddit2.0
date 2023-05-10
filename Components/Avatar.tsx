import React from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

type Props = {
  seed?: string;
  large?: boolean;
};

function Avatar({ seed, large }: Props) {
  const { data: session } = useSession();

  return (
    <div className={`relative overflow-hidden rounded-full border-gray-300 bg-white ${large && 'h-20 w-20' }`}>
      <Image
        src={`https://avatars.dicebear.com/api/open-peeps/${session?.user?.name || 'placeholder'}.svg`}
        alt='avatar'
        width={60}
        height={50}
      />
    </div>
  );
}

export default Avatar;
