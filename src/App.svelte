<script>
    let bio = false;
    let dev = false;
    function choose(background){
        if(background=="bio"){
            bio = true;
            dev = !bio;
        }else if(background=="dev"){
            dev = true;
            bio = !dev;
        }
    }
</script>
<div id="container" class:dev={dev} class:bio={bio}>
    <p>Hello!</p>
    <p>
        My name is Adrian Barrera-Velasquez. I am a 
        <span class="choice" id="bio_choice" on:click={() => choose("bio")}> cellular engineer </span>
        and a
        <span class="choice" id="dev_choice" on:click={() => choose("dev")}> developer </span>
    </p>
</div>

<style>
    #container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;

        border: black solid 2px;
        border: black solid 2px;
        border-radius: 5px;
        padding: 4px;

        width: 640px;
        height: 480px;
        transition: background 1s;
    }

    #container.dev{
        background-color: gray;
    }
    #container.bio{
        background-color: green;
    }
    .choice{
        padding: 4px;
        font-weight: bold;
        font-size: 18pt;

        display: inline-block;
        transition: transform 0.2s;
    }

    .choice:hover{
        transform: scale(1.2);
    }
</style>
