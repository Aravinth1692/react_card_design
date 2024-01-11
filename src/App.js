
import './App.css';
import {Button} from '@material-ui/core'; 
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Card";

import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import jsonData from "./cardData.json";
function App() {
  const items = jsonData["items"];
  let iconStyle={color:'black',fontSize:"15" ,marginTop:3,marginRight:3}
  let blockstyle ={ color: '#C6C6C6',fontSize:"15" ,marginTop:3,marginRight:3}
  let enableButton={background:'cornflowerblue',color:'white',borderRadius:25,width:240,height:42,fontSize:10,fontFamily:"Poppins",cursor:"Block"}
  let diabaleButton ={background:'blue',color:'white',borderRadius:25,width:240,height:42,fontSize:10,fontFamily:"Poppins"}
  let listSTyle={ fontSize: 15 ,display:'flex',justifyContent:'start',alignItems:'start',fontWeight:400,color:'black',marginBottom :15 ,fontFamily: 'Poppins'}
  let enablestyle = {fontSize: 15 ,display:'flex',justifyContent:'start',alignItems:'start',fontWeight:400,color:'black',fontFamily: 'Poppins'}
  let disbaleStlye={fontSize: 15 ,display:'flex',justifyContent:'start',alignItems:'start',fontWeight:400,color:'#C6C6C6',fontFamily: 'Poppins'}
  return (
   
    <div style={{ width: 1008 ,padding:30,background:'cornflowerblue' ,display:'flex',marginLeft:168,marginTop:60}}>
      {items.map((item) => (
      <Card style={{ width: 950,height:428,padding:30,border:'none',boxShadow:'none' ,marginRight:20, marginLeft:15,borderRadius:14}}>
      <CardContent style={{border:'none',boxShadow:'none'}}>
        <div style={{ fontSize: 14 ,display:'flex',justifyContent:'center',alignItems:'center',fontWeight:500,color:'#a0a0a0',marginBottom :10,fontFamily: 'Poppins'}} color="text.secondary" gutterBottom>
        {item.name}
        </div>
        <div variant="h5" style={{ borderBottom: '1px solid #D3D3D3' ,fontSize:25,display:'flex',justifyContent:'center',alignItems:'center',fontWeight:500 ,marginBottom :20,fontFamily: 'Poppins'}}  component="div">
        {item.title}
        </div>
        <div >
        <div  style={listSTyle}>
        {(item.is_ticked === "true") && (
           <CheckIcon  style={iconStyle} />
        )}
         {(item.is_ticked === "false") && (
           <ClearIcon  style={blockstyle} />
        )}
         <div style={item.is_ticked === "false" ? disbaleStlye:enablestyle} > {item.value}</div>
        </div>

        <div  style={listSTyle}>
        {(item.is_ticked2 === "true") && (
           <CheckIcon  style={iconStyle} />
        )}
         {(item.is_ticked2 === "false") && (
           <ClearIcon  style={blockstyle} />
        )}
        <div style={item.is_ticked2 === "false" ? disbaleStlye:enablestyle} > {item.value2}</div>
        </div>

        <div  style={listSTyle}>
        {(item.is_ticked3 === "true") && (
           <CheckIcon  style={iconStyle} />
        )}
         {(item.is_ticked3 === "false") && (
           <ClearIcon  style={blockstyle} />
        )}
          <div style={item.is_ticked3 ==="false" ? disbaleStlye:enablestyle} > {item.value3}</div>
        </div>

        <div  style={listSTyle}>
        {(item.is_ticked4 === "true") && (
           <CheckIcon  style={iconStyle} />
        )}
         {(item.is_ticked4 === "false") && (
           <ClearIcon  style={blockstyle} />
        )}
           <div style={item.is_ticked4 === "false" ? disbaleStlye:enablestyle} > {item.value4}</div>
        </div>

        <div  style={listSTyle}>
        {(item.is_ticked5 === "true") && (
           <CheckIcon  style={iconStyle} />
        )}
         {(item.is_ticked5 === "false") && (
           <ClearIcon  style={blockstyle} />
        )}
           <div style={item.is_ticked5 === "false" ? disbaleStlye:enablestyle} > {item.value5}</div>
        </div>

        <div  style={listSTyle}>
        {(item.is_ticked6 === "true") && (
           <CheckIcon  style={iconStyle} />
        )}
         {(item.is_ticked6 === "false") && (
           <ClearIcon  style={blockstyle} />
        )}
          <div style={item.is_ticked6 === "false" ? disbaleStlye:enablestyle} > {item.value6}</div>
        </div>

        <div  style={listSTyle}>
        {(item.is_ticked7 === "true") && (
           <CheckIcon  style={iconStyle} />
        )}
         {(item.is_ticked7 === "false") && (
           <ClearIcon  style={blockstyle} />
        )}
        <div style={item.is_ticked7 === "false" ? disbaleStlye:enablestyle} >{item.value7}</div>
        </div>

        <div  style={listSTyle}>
        {(item.is_ticked8 === "true") && (
           <CheckIcon  style={iconStyle} />
        )}
         {(item.is_ticked8 === "false") && (
           <ClearIcon  style={blockstyle} />
        )}
          <div style={item.is_ticked8 === "false" ? disbaleStlye:enablestyle} > {item.value8}</div>
        </div>
        <div >
          <div >
          <Button style={item.buttonEnable === "false" ? enableButton:diabaleButton}> BUTTON</Button>
          </div>
   
     </div>
        </div>
      </CardContent>
    </Card>
 ))}
    </div>
  );
  
}
export default App;
