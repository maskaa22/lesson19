export default function User ({item})
{
    return(
        <div>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.website}</p>
            <hr/>
        </div>
    );
}