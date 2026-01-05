import React from 'react'

const BlogCard = ({ thumb }) => {
    return (
        <div className="item"
            style={{
                padding: '10px',
                textAlign: 'center'
            }}
        >
            <img 
                src={thumb} 
                alt="image" 
                style={{
                    maxWidth: '75%',
                    height: '180px',
                    objectFit: 'contain',
                    borderRadius: '8px'
                }}
            />
        </div>
    )
}

export default BlogCard