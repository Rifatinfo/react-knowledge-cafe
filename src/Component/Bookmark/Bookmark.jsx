import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const {title} = bookmark;
    return (
        <div className='bg-white shadow-md rounded-lg overflow-hidden p-4 m-4'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object
}

export default Bookmark;
