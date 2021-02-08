fetchFact();

document.getElementById('btnFetch').addEventListener('click', function(){
    fetchFact();
});
function fetchFact () {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(function(response){
            return(response.json())
        })
        .then(function(data){
            console.log(typeof data.value);
            document.getElementById('factBox').innerHTML = data.value;
        });
};