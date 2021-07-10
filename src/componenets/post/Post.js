export default function Post ({item})
{
    return(
        <div>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
        </div>
    );
}