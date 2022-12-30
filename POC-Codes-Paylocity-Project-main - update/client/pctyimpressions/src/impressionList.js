
const ImpressionList = ({name, impressions}) =>  {

    return (
        <div> 
        <h2> This is the list for {name} </h2>
        {impressions && impressions.length && impressions.map(i => {
        return    <div>  {i.name} :{i.description} </div>;
        }
        
        )} 
        </div>
    )
}

export default ImpressionList;