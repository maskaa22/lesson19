export default function Todo ({item})
{
    return(
        <div>

            <p>{item.title}</p>
            <p>{item.id}</p>
            <p>{item.completed}</p>
        </div>
    );
}