        const temp1=document.getElementById('temp');
        const loc=document.getElementById("loca");
        loc.childNodes[0].textContent = `enter again`;
        const tmm=document.getElementById("tempminmax");
        const icon=document.getElementById("weathercon");
        
        
        // if (arrData[0].weather.main=="") {
        //     console.log("Number is 1");
        //   } else if (arrData[0].weather.main==2) {
        //     console.log("Number is 2");
        //   } else if (arrData[0].weather.main==3) {
        //     console.log("Number is 3");
        //   } else if (arrData[0].weather.main==4) {
        //     console.log("Number is 4");
        //   } else if (arrData[0].weather.main==5) {
        //     console.log("Number is 5");
        //   } else if (arrData[0].weather.main==6) {
        //     console.log("Number is 6");
        //   } else if (arrData[0].weather.main==7) {
        //     console.log("Number is 7");
        //   } else if (arrData[0].weather.main==8) {
        //     console.log("Number is 8");
        //   } else if (arrData[0].weather.main==9) {
        //     console.log("Number is 9");
        //   } else {
        //     console.log("Number is not between 1 and 9");
        //   }
        
        const getinfo=async(event)=>{
            
            // event.preventDefault();
            
            if(cityval="")
            {
                temp1.innerHTML="enter location after refresh";

            }
            else{
                try{
                    let cityval = prompt("Please enter your city");
                    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=2e3b743b472a736e44569efc3a7fbc37`;
                    const response=await fetch(url);
                    const data=await response.json();
                    const arrData=[data];
                    temp1.innerHTML=`${arrData[0].main.temp}&#xb0 `;
                    loc.childNodes[0].textContent = `${arrData[0].name},${arrData[0].sys.country} `;
                    

                    tmm.innerHTML=`Min&nbsp${arrData[0].main.temp_min}&#xb0&nbsp| Max&nbsp${arrData[0].main.temp_max}&#xb0 `;
                    const tstatus=arrData[0].weather[0].main;
                    
                    
                    if(tstatus=="Clear")
                    {
                        icon.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68'  > </i> ";
                    }
                    else if(tstatus=="Rain")
                    {
                        icon.innerHTML="<i class='fa-solid fa-cloud-rain' style='color:#399cbd'  > </i> ";
                    }
                    else if(tstatus=="Clouds")
                    {
                        icon.innerHTML="<i class='fa-solid fa-cloud' style='color:#72bcd4'  > </i> ";
                    }
                    else if(tstatus=="Haze")
                    {
                        icon.innerHTML="<i class='fa-solid fa-sun-haze' style='color:#eccc68'  > </i> ";
                    }
                    
                    
                }
                catch{
                    temp1.innerhtml="write city name properly";
                }
                
            }
        }
        getinfo();
        
        
        
        
        let currdate=document.getElementById("date");
        let weathercon=document.getElementById("weathercon");

        const tempstatus="clouds";

        
        

            
        
        const getcurrentday=()=>{
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            let currentDay=new Date();
            let day=weekday[currentDay.getDay()];
            return day;
        }

        // getcurrentday();
        const getcurrentTime=()=>{
            const getmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            var currentTime=new Date();
            var month=getmonth[currentTime.getMonth()];
            var date=currentTime.getDate();
            let hours=currentTime.getHours();
            let mins=currentTime.getMinutes();
            let perios="AM";
            if(hours>11)
            {
                perios="PM";
                if(hours>12) hours -=12;
            }
            if(mins<10)
            {
                mins="0"+mins;
            }

            
            // console.log(month+'/'+day);
            return `${month} ${date} | ${hours}:${mins}${perios}`

        }
        console.log(getcurrentday()+ " | " + getcurrentTime());
        currdate.innerHTML=getcurrentday()+ " | " + getcurrentTime();



        
        