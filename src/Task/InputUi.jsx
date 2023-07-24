import { useState } from "react";

const Input = ()=>{
    const [InputIn, setInputIn] = useState([]);
    const[gatherer, setGatherer] = useState({});
    const[options] = useState(['text','password','textarea','email','number']);
    function onWork(e) {
        e.preventDefault()
        let typ = e.target.type.value;
        let placeholdr = e.target.placeholder.value;
        let val = e.target.Value.value;
        let labl = e.target.Label.value;
        setInputIn((prev)=>[...prev,{
            type:typ,
            placeholder:placeholdr,
            DefaultVal:val,
            label:labl
        }]);
        setGatherer((prev)=>({...prev, [labl]:"",}));
        console.log(InputIn)
    } 
    function gaTher(e){
        e.preventDefault();
        let a = Object.keys(gatherer);
        setGatherer({});
        a.forEach(element => {
           //console.log(e.target[element].value) // replacement of e.target.name.value
           setGatherer((prev)=>({...prev,[element]:e.target[element].value}))
        });
        
    }
    console.log(gatherer)

    return(
        <>
        <div>
            <form onSubmit={(e)=>onWork(e)}>
            <select name="type" id="">
                {options.map((elem,key)=>(<option value={elem} key ={key} >{elem}</option>))}
            </select>
            <input type="text" placeholder="PlaceHolder" name="placeholder" />
            <input type="text" placeholder="Default Value" name="Value" />
            <input type="text" placeholder="Label" name="Label"/>
            <button type="submit">Add to Ui</button>
            </form>
        </div>
        
        <div>
            {console.log(gatherer)}
            <form onSubmit={(e)=>gaTher(e)}>
            {InputIn.map((elem,key)=>(
                <>
                <label key={key}>{elem.label}:
                <input type={elem.type} placeholder={elem.placeholder} name={elem.label} />
                </label>
                <br />
                </>
            ))}
            <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}
export default Input;