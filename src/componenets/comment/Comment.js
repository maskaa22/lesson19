export default function Comment ({item})
{
    return(
        <div>
            <p>{item.id}</p>
            <p><i>{item.name}</i></p>
            <p>{item.body}</p>
        </div>
    );
}