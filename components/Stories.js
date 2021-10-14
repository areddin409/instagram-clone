import faker from 'faker';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Story from './Story';
import { PlusCircleIcon } from '@heroicons/react/solid';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className='flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm 
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black'
    >
      {session && (
        <div className='relative'>
          <Story img={session.user.image} username={session.user.username} />
          <PlusCircleIcon className='absolute h-6 w-6 top-8 right-0 text-blue-500 bg-white rounded-full cursor-pointer ' />
        </div>
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
