import Card from 'react-bootstrap/Form';
import Link from 'react-bootstrap/Form';




const TagButtons = (props) => {
    const { tags, tagSearch } = props
    
    return (
        <Card.Text>
            <div className="recipe-tags">
                {tags.map((tag, index) => (
                    <Link key={index} variant="success" className="tag-btn btn btn-outline-primary btn-sm" onClick={(e) => (tagSearch(tag))}>{tag}</Link>
                    
                ))}
            </div>
        </Card.Text>
    )
}
export default TagButtons;


