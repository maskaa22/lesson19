export default function Photo ({item})
{
    return(
        <div>
            <p>{item.id}</p>
            <p>{item.url}</p>
            <p>{item.title}</p>
        </div>
    );
}