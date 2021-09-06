import Item from '../components/Item';

function Home(){
    return(
        <div>
            <h1>Koduleht</h1>
            <p>
                Mothertrucker.
            </p>
            <div>
            <Item name="Item1" price="10" category="mobile"/>
            <Item name="Item2" price="20" category="laptop"/>
            </div>
        </div>
    )
}

export default Home;