import { Link } from "react-router-dom";
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async() => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, [])

  console.log(posts);
  return (
    <div>
      <div className="flex flex-col gap-6 px-3 p-28 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Phan Hue Truong is an adept chicken developer, proficient in a diverse
          array of programming languages including C++, JavaScript, TypeScript,
          PHP, and Java. His expertise spans across both web and mobile
          application development, showcasing a keen understanding of the
          intricacies involved in crafting efficient and scalable solutions.
          With a wealth of experience in the field, Truong brings forth a unique
          blend of technical prowess and creativity, consistently delivering
          high-quality projects tailored to meet the specific needs of clients.
          His commitment to excellence, coupled with a penchant for staying
          abreast of the latest advancements in technology, enables him to
          navigate the ever-evolving landscape of software development with
          ease. Whether it's optimizing algorithms, architecting robust systems,
          or crafting intuitive user interfaces, Truong's dedication to his
          craft shines through in every endeavor he undertakes. His passion for
          coding, coupled with his innate problem-solving abilities, makes him a
          valuable asset to any team fortunate enough to have him on board. In
          essence, Phan Hue Truong epitomizes the essence of a skilled chicken
          developer, adept at leveraging his expertise across multiple
          programming languages to bring innovative ideas to fruition in the
          digital realm.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold horver:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction/>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
