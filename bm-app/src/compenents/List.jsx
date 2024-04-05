import PropTypes from 'prop-types'

const List = (props) => {
    // const languages = ['C', 'Python', 'Javascript', 'Php', 'Typescript', 'Kotlin'];
    const itemList = props.items;
    const category = props.category;

    // Sorting Array
    //languages.sort();
    // framworks.sort((a, b) => a.name.localeCompare(b.name)) // Sort by object by alphabetical order
    // framworks.sort((a, b) => b.name.localeCompare(a.name)) // Sort by object by reverse alphabetical order
    // framworks.sort((a, b) => b.id - a.id); // Sort Numeric
    // framworks.sort((a, b) => a.id - b.id); // Sort Numeric Reverse
    
    // Filtering:
     const filteredItems = itemList.filter(item => item.tech === "Frontend")
    // const listItems = languages.map(language => <li key={language}>{language}</li>)  //For every list item (do this) => <li>item</li> 
    // const objectItems = framworks.map(
    //     framwork => <li key={framwork.id}>
    //         {framwork.name + " : " + framwork.tech}
    //     </li>
    // )

    const objectItems = itemList.map(
        item => <li key={item.id}>
            {item.name + " : " + item.tech}
        </li>
    )
    if(objectItems.length > 0){
        return (
            <div>
                <h2 className="cateory-title">{category}</h2>
                <ul className="list-items">{objectItems}</ul>
                
            </div>
          )
    }
    
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, tech: PropTypes.string}))
}

List.defaultProps = {
    category: "category",
    items: [],
}
// {id: 0, name: 'React', tech: 'Frontend'},
export default List