import React, { useEffect } from 'react'
import { useState } from 'react'
import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'
import slider3 from './slider3.jpg'
import slider4 from './slider4.jpg'
import './Slidercss1.css'
import './sliderauto.js'

function Slider1() {

const[active , setActive] = useState('')

var counter = 1 ;
const ch = () => {
    var elements =  document.getElementsByClassName('manualbtn');
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'black';
    }
}    

useEffect(()=>{
   const interval = setInterval(function(){
        // document.getElementById('btn'+counter).checked = true
         ch()

        if (counter == 1) {
            let z =  document.getElementById('first')
            z.style.marginLeft = 0;
            
             let b = document.getElementById('btn1id')
             b.style.backgroundColor = "white";
             counter++;
             //TEST
         }
         else if (counter == 2) {
            
            let z =  document.getElementById('first')
            z.style.marginLeft = '-100vw';
            let b = document.getElementById('btn2id')
             b.style.backgroundColor = "white";
             counter++;
         }
         else if (counter == 3) {
           
            let z =  document.getElementById('first')
            z.style.marginLeft = '-200vw';
            let b = document.getElementById('btn3id')
            b.style.backgroundColor = "white";
            counter++;
         }
         else if(counter == 4) {
           
            let z =  document.getElementById('first')
            z.style.marginLeft = '-300vw';
            let b = document.getElementById('btn4id')
            b.style.backgroundColor = "white";
            counter++;
         }
         
        else if(counter>4){
            counter=1
        }
        },2000)
        
        return () => clearInterval(interval);    
})
  

    const checkk = () => {

       

    //    const b = document.getElementById('btn1id')
    //         b.style.backgroundColor = "red";

            var elements =  document.getElementsByClassName('manualbtn');
            for(var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = 'black';
            }

        if (btn1.checked) {
            let z =  document.getElementById('first')
            z.style.marginLeft = 0;
            
             let b = document.getElementById('btn1id')
             b.style.backgroundColor = "white";
         }
        if (btn2.checked) {
      
           let z =  document.getElementById('first')
           z.style.marginLeft = '-100vw';
           let b = document.getElementById('btn2id')
            b.style.backgroundColor = "white";
        }
        if (btn3.checked) {
           
            let z =  document.getElementById('first')
            z.style.marginLeft = '-200vw';
            let b = document.getElementById('btn3id')
            b.style.backgroundColor = "white";
         }
         if(btn4.checked) {
            console.log(btn2.value)
            let z =  document.getElementById('first')
            z.style.marginLeft = '-300vw';
            let b = document.getElementById('btn4id')
            b.style.backgroundColor = "white";
         }
       
    }




    return (
        <>
            <div className='slider md:pt-[115px] pt-[100px]'>
                <div className='slides'>
                    <div className='radiobtn'>
                        <form onChange={checkk}>
                            <input type='radio' name='radio-btn' id='btn1'></input>
                            <input type='radio' name='radio-btn' id='btn2'></input>
                            <input type='radio' name='radio-btn' id='btn3'></input>
                            <input type='radio' name='radio-btn' id='btn4'></input>
                         </form>
                    </div>
                    <div className='slide' id='first'>
                        <img src={slider1} alt='no img'></img>
                    </div>
                    <div className='slide'>
                        <img src={slider2} alt='no img'></img>
                    </div>
                    <div className='slide'>
                        <img src={slider3} alt='no img'></img>
                    </div>
                    <div className='slide'>
                        <img src={slider4} alt='no img'></img>
                    </div>
                    <div className='navigation-auto'>
                        <div className='autobtn-1'></div>
                        <div className='autobtn-2'></div>
                        <div className='autobtn-3'></div>
                        <div className='autobtn-4'></div>
                    </div>

                </div>
                <div className='manualnav'>
                    <label htmlFor='btn1' className='manualbtn' id='btn1id'></label>
                    <label htmlFor='btn2' className='manualbtn' id='btn2id'></label>
                    <label htmlFor='btn3' className='manualbtn' id='btn3id'></label>
                    <label htmlFor='btn4' className='manualbtn' id='btn4id'></label>
                </div>

            </div>

        </>
    )
}

export default Slider1