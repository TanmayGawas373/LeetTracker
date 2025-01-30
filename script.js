document.addEventListener("DOMContentLoaded",function(){
    const searchButton=document.getElementById("search-btn");
    const usernameInput=document.getElementById("user-input");
    const statsContainer=document.querySelector(".stats-container");
    const easyProgressCircle=document.querySelector(".easy-progress");
    const mediumProgressCircle=document.querySelector(".medium-progress");
    const hardProgressCircle=document.querySelector(".hard-progress");
    const easyLabel=document.getElementById("easy-label");
    const mediumLabel=document.getElementById("medium-label");
    const hardLabel=document.getElementById("hard-label");
    const cardStatsContainer=document.querySelector(".stats-card");

    function validateUsername(username){
        if(username.trim()===""){
            alert("Username should not be empty!");
            return false;
        }
        const regex = /^[a-zA-Z0-9_]+$/;
        const isMatching=regex.test(username);
        if(!isMatching){
            alert("Invalid username!");
        }
        return isMatching;
    }


    async function fetchUserDetails(username){
        const url = 'https://leetcode-stats-api.herokuapp.com/'+username;
        try{
            searchButton.textContent="Searching...";
            searchButton.disabled=true;
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('Unable to fetch user details!');
            }
            const parsedData = await response.json();
            console.log("logging data: ",parsedData);

            displayUserData(parsedData);
    }
        catch(error){
            statsContainer.innerHTML="<p>no data found</p>";
            console.log(error);
        }
        finally{
            searchButton.textContent="Search";
            searchButton.disabled=false;
        }
    }


    function updateProgress(solved,total,label,circle){
        const progressDegree = (solved / total) * 100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent=`${solved}`+"/"+`${total}`;
    }

    function displayUserData(parsedData){
        const easySolved=parsedData.easySolved;
        const mediumSolved=parsedData.mediumSolved;
        const hardSolved=parsedData.hardSolved;
        console.log(easySolved);

        const totalEasy=parsedData.totalEasy;
        const totalMedium=parsedData.totalMedium;
        const totalHard=parsedData.totalHard;

        updateProgress(easySolved,totalEasy,easyLabel,easyProgressCircle);
        updateProgress(mediumSolved,totalMedium,mediumLabel,mediumProgressCircle);
        updateProgress(hardSolved,totalHard,hardLabel,hardProgressCircle);
        

        const cardData=[
            {label:"Total",solved:easySolved+mediumSolved+hardSolved,total:totalEasy+totalMedium+totalHard},
            {label:"Easy",solved:easySolved,total:totalEasy},
            {label:"Medium",solved:mediumSolved,total:totalMedium},
            {label:"Hard",solved:hardSolved,total:totalHard}
        ]

        console.log(cardData);

        cardStatsContainer.innerHTML=cardData.map(data=>{
            return `
            <div class="card">
                <h3>${data.label}</h3>
                <p>${data.solved}</p>
                <p>${data.total}</p>
            </div>
            `}).join("");
    }


    searchButton.addEventListener('click',()=>{
        const username=usernameInput.value;
        console.log("logging username: ",username);
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    })
})
