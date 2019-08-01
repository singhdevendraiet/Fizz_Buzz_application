import React, { Component } from 'react';
import Number from '../components/Number';
import Input from './input';
import '../css/numStyle.css';


class NumContainer extends Component {
        state={
            counter:1,
            count:0

        }

    
        goToNext=()=>{
          
            this.setState({
                counter: this.state.counter + 1,
                count:this.state.count + 20
                })
            
         }

        

         goToPrev=()=>{
             if(this.state.counter>1){
                this.setState({
                counter: this.state.counter - 1,
                count:this.state.count - 20
                })
            }
         }


        render() 
        {
            let d = new Date();
            let n = d.getDay();
            let arr=[];
            let number= this.props.EnteredNumber;
            console.log("number="+number);
            console.log("counter="+this.state.counter);
            
       if(number<=1000)
       {
                for(var j=1;j<=number; j++)

                {
                    if(j%3===0 && j%15!==0)          
                     (n===3?arr.push("WIZZ"):arr.push("FIZZ"))
            
                    else if(j%5===0 && j%15!==0)     
                    (n===3?arr.push("WUZZ"):arr.push("BUZZ"))

                    else if(j%3===0 && j%5===0)
                    (n===3?arr.push("WIZZ WUZZ"):arr.push("FIZZ BUZZ"))
                  
                    else
                    arr.push(j);
             
                }
             
                   
        }  
                else
                {
                alert("Enter Valid Number between from 1 to 1000")
                }    
            
           
            let loop=0;
            let elements=[];
            let count = this.state.count;
            console.log(" lopp starting count="+count);
        
            for(var i=count;i<arr.length;i++)
                {
                 
                  if(loop===20)
                        break;
                    else
                        elements.push(<Number value={arr[i]} />);
                   loop++;
                }
          
            return(
                <center>
                <div className="listmain"> 
                   <div className="header">
                      
                      <h2>Enter value between 1 to 1000</h2>
                  
                      {elements}
                    </div>
                      
                    <br></br>
                     
                      <button onClick={this.goToPrev}>prev</button> &nbsp;
                      <button onClick={this.goToNext}>next</button>
                    </div>
            
                </center>
            
            );
            
        
        }
    
    }

export default NumContainer;