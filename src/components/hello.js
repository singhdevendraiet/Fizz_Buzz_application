import React, { Component } from 'react';

class Number extends Component 
{
    
    render() 
    {

        if(this.props.value === 'FIZZ' || this.props.value === 'WIZZ') 
        {
        return (
                <div className="blue"> {this.props.value }</div>
               );
        }

        else if(this.props.value === 'BUZZ' || this.props.value === 'WUZZ') 
        {
       
            return (
                      <div className="green"> {this.props.value }</div>
                    );
        }
        else if(this.props.value === 'FIZZ BUZZ' || this.props.value === 'WIZZ WUZZ')
        {
       
            return (
                    <div>
                        <a className="blue"> {this.props.value['0'] } {this.props.value['1'] } {this.props.value['2'] }  {this.props.value['3'] } {this.props.value['4'] } </a>
                        <a className="green">{this.props.value['5'] } {this.props.value['6'] } {this.props.value['7'] }  {this.props.value['8'] } </a>
                    </div>
            
        
            );
        }
        else
        {
            return (
            
                <div>
                    <div>I am test2</div>
                    {this.props.value }
                </div> 
            );
        }


  
    }

}

export default Number;

