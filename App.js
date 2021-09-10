import React,{useState,useEffect} from "react";
function App()
{
  function changer(val)
{
  let decide = val.target.id;
  let rupe = parseInt(val.target.value);
  console.log(decide)
  if(decide=="pkr")
  {
    document.getElementById('us').value = rupe/160;
  }
  if(decide=="us")
  {
    document.getElementById('pkr').value = rupe*160;
  }
}

  let [counter,setCounter] = useState(25);

  useEffect(()=>{
    counter > 0 && setTimeout(()=> setCounter(counter-1),1000);},
    [counter]);

    let body = document.getElementById('body');
    if(counter == 20)
    {
      body.style.backgroundColor='black';
      body.style.color='white';
    }
    else if(counter==10)
    {
      body.style.backgroundColor='yellow';
      body.style.color='black';
    }
    else if(counter==5)
    {
      body.style.backgroundColor='white';
    }
    else
    {
  
    }
  return(
    <>
    <div>
      <h1>Timer</h1>
      <span id='counter'>
      {counter}
      </span>
    </div>
    <div>
      <h1>Currency changer</h1>
      <input onChange={(e)=>changer(e)} id='pkr' type='text' placeholder='Rupees in Pkr' /><br />
      <input  onChange={(e)=>changer(e)} id='us' type='text' placeholder='Rupees in US Dollar' />
    </div>
    </>
  )

}
export default App;