import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks , readingTime}) => {
    return (
        <div className="md:w-1/3  bg-gray-200 ml-4 mt-3 pt-4 rounded-lg">
            <div className='text-[#6047EC] text-center'>
                <h3 className='text-4xl font-bold '>Reading Time : {readingTime}</h3>
            </div>
            <h1 className="text-3xl text-center mt-4">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime : PropTypes.number

};

export default Bookmarks;
