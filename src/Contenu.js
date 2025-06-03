const Contenu = () =>{
                                
    const newLocal = <br />
    return (
        <main>
            <form>
                <label>
                    Nom : <input type='text' placeholder='Ton nom react'/>
                </label>
                <br/>

                <label>
                    Reactmail : <input type='email' placeholder='your react mail...' />
                </label>
                <br/>

                <label>
                    Number :<input type='number' placeholder="enter your favourite react number" />
                </label>
                <br/>

                <label>
                    Room Number :<input type='number' placeholder="enter your react room number" />
                </label>
                <br/>

                <label>
                    Other Numbers :<input type='number' placeholder="enter your other react numbers..." />
                </label>
                <br/>
                
                <input type='submit' value ='submit'/>
            </form>
        </main>
    )
}

export default Contenu