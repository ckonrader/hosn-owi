import { getDatabase, ref, set } from 'firebase/database';

import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const db = getDatabase();

  useEffect(() => {
    const rng = Math.floor(Math.random() * 1000000);
    set(ref(db, 'users/' + rng), {
      username: 'test',
      email: 'test@me.com',
      profile_picture : ''
    });
  }, []);

  return <>Hello World!</>;
};

export default Home;
