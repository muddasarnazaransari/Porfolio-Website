let submit = document.getElementById("submit");

submit.addEventListener("click", async () => {
    let input = document.getElementById("input").value;

    if(input.trim() !== "")
    {
        output.style.display = "block";

        //Fetch API
        try
        {
            let response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + input);

            if(!response.ok) throw new Error("Word not found");
            //Storing data
            let data = await response.json();
            console.log(data);


            let meanings = [];
            let size = data[0].meanings[0].definitions.length;
            console.log(size);

            for(let i = 0; i < size; i++)
            {
                meanings.push((i+ 1) + ". " + data[0].meanings[0].definitions[i].definition);
            }

            document.getElementById("output").innerText = "Meanings : " + "\n" + meanings.join("\n");
        }
        catch(error)
        {
            document.getElementById("output").innerText = "Error : " + error.message;
        }
    }
    else
    {
        output.style.display = "none";
    }

    
});
