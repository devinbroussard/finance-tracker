import './Card.css'

//Used as a reusable "wrapper" component to make a block look card-like
//children: the html elements inside of the card
function Card({className, children}) {
    //Using the className prop to assign the div any css class
    const classes = 'card ' + className;

    return <div className={classes}>{children}</div>
}

export default Card;