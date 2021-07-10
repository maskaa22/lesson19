export default function Album ({item})
{
    return(
        <div>

            <p><i>{item.id}</i></p>
            <p>{item.title}</p>
        </div>
    );
}