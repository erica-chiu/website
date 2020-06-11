import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import CalligraphyBlog from './blogs/CalligraphyBlog';

const blogList = [
    {
        id: "calligraphy",
        page: <CalligraphyBlog/>,
        name: "Chinese Calligraphy over IAP"
    },
];

const blogDict = blogList.reduce((dict, blog) => {
    dict[blog.id] = blog.page;
    return dict
}, {});

function getBlogHome() {
    return (
        <div className="blog-page">
            <div className="blog-header">
                Blogs
            </div>
            <div className="blogs">
                <ul>
                    {blogList.map((blog) => (
                        <li key={blog.id}>
                            <a href={"/#/blogs/"+blog.id}>{blog.name}</a>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}

const BlogPage = () => {
    let { id } = useParams();
    console.log(id);
    if (id === undefined) {
        return getBlogHome();
    } else if (id in blogDict) {
        return blogDict[id];
    }
    return <ErrorPage/>;
}

export default BlogPage;