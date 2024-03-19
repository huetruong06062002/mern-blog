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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor vitae velit sit amet lobortis. Morbi at lorem ultrices, semper mi sit amet, hendrerit nisl. Nam malesuada risus a tempor ultricies. Sed sed augue porttitor, tincidunt velit non, tristique neque. Morbi suscipit, tortor a tempor ullamcorper, tortor lacus aliquam neque, nec ultrices arcu libero eu sapien. Cras a aliquam mi, in maximus quam. Proin consectetur pharetra nisl sed semper. Sed hendrerit sapien nec augue vestibulum elementum eu ac augue. Cras tincidunt ultrices gravida.

Donec id sapien ut lacus tincidunt cursus id ac leo. Etiam urna mi, luctus id mauris a, vestibulum facilisis arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed faucibus turpis elementum, sodales nisl ac, sagittis mi. Ut maximus sapien in tempus maximus. Sed vehicula quis velit vel tempor. Curabitur et condimentum velit, at rutrum erat. In hac habitasse platea dictumst. Maecenas sit amet pharetra sapien, nec pulvinar purus.

Suspendisse bibendum dolor a tincidunt porta. Morbi vulputate lectus quam, non faucibus sapien tempor ac. Nullam sit amet iaculis justo. Ut at pharetra purus, sodales pharetra est. Duis lacus justo, porttitor vel porta eu, tincidunt in neque. Cras et blandit nibh, at gravida quam. Nam id eros eget sem imperdiet semper sit amet in ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam purus urna, luctus id nulla in, congue pretium metus.

Nulla in ornare tortor, in interdum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tincidunt diam non justo condimentum, eget suscipit nunc egestas. Vestibulum ante eros, aliquam a arcu finibus, tempus tristique tortor. Curabitur eget condimentum eros, at cursus tortor. Aliquam erat nunc, placerat ut nunc sit amet, hendrerit tristique ipsum. Vestibulum tristique sapien nec rhoncus maximus. Ut tempor, massa faucibus tincidunt feugiat, massa nunc varius neque, et facilisis felis nisl sed justo. In sit amet dui vitae metus feugiat malesuada. Donec at porta erat. Pellentesque quis mi vitae diam pharetra maximus sit amet consequat odio. Praesent accumsan egestas lorem. Vestibulum lobortis quam eu arcu rutrum, id lobortis enim sagittis.

Quisque semper sem sapien, a semper elit porta eu. Fusce ullamcorper massa nec lectus facilisis pretium. Duis felis erat, eleifend ut tellus sed, dignissim feugiat justo. Quisque non risus convallis, lobortis neque vitae, sodales orci. Proin eget lorem a orci malesuada dictum. Suspendisse potenti. Cras vel erat tincidunt, condimentum mauris nec, scelerisque velit. Morbi posuere congue lectus, vitae fermentum massa volutpat vel.
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
