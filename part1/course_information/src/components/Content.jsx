import Part from "./Part";

const Content = (props)=>{
    
return (
    <div>
        {props.parts.map((part, index)=>(
            <Part part={part} key={index}/>
        ))}
    </div>
);
}
export default Content;